'use strict';

const R = require('ramda');
const common = require('./common');
const BASE_URL = 'https://search.itunes.apple.com/WebObjects/MZStore.woa/wa/search?clientApplication=Software&media=software&term=';

// Platform codes for X-Apple-Store-Front header
const PLATFORM_CODES = {
  ios: 20,              // iOS (Primary Smartphone apps)
  macos: 21,            // macOS (Primary Mac apps)
  ipad: 23,             // iPad-optimized apps
  macCatalyst: 24,      // Mac Catalyst apps (iPad apps ported to macOS)
  iosUniversal: 25,     // iOS Apps – Universal / Games
  macosGames: 26,       // macOS games / entertainment
  macosSearch: 29,      // macOS – App Store Search (full behavior)
  iosSearch: 30,        // iOS – App Store Search (full behavior)
  android: 31,          // Android content (legacy iTunes Store device filter)
  watch: 35,            // watchOS apps
  macPodcasts: 38       // macOS Podcasts content
};

// TODO find out if there's a way to filter by device
// TODO refactor to allow memoization of the first request

function paginate (num, page) {
  num = num || 50;
  page = page - 1 || 0;
  const pageStart = num * page;
  const pageEnd = pageStart + num;
  return R.slice(pageStart, pageEnd);
}

function search (opts) {
  return new Promise(function (resolve, reject) {
    if (!opts.term) {
      throw Error('term is required');
    }
    const url = BASE_URL + encodeURIComponent(opts.term);
    const storeId = common.storeId(opts.country);
    const lang = opts.lang || 'en-us';
    
    // Get platform code, default to macosSearch (29) if not specified
    const platform = opts.platform || 'macosSearch';
    const platformCode = PLATFORM_CODES[platform];
    
    if (platformCode === undefined) {
      throw Error(`Invalid platform: ${platform}. Valid platforms are: ${Object.keys(PLATFORM_CODES).join(', ')}`);
    }

    common.request(
      url,
      {
        'X-Apple-Store-Front': `${storeId},${platformCode} t:native`,
        'Accept-Language': lang
      },
      opts.requestOptions
    )
      .then(JSON.parse)
      .then((response) => (response.bubbles[0] && response.bubbles[0].results) || [])
      .then(paginate(opts.num, opts.page))
      .then(R.pluck('id'))
      .then((ids) => {
        if (!opts.idsOnly) {
          return common.lookup(ids, 'id', opts.country, opts.lang, opts.requestOptions, opts.throttle);
        }
        return ids;
      })
      .then(resolve)
      .catch(reject);
  });
}

module.exports = search;
