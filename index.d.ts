// Type definitions for app-store-scraper
// Project: https://github.com/facundoolano/app-store-scraper

declare module 'app-store-scraper' {
  // ========== Common Types ==========

  export type PlatformType =
    | 'ios'
    | 'macos'
    | 'ipad'
    | 'macCatalyst'
    | 'iosUniversal'
    | 'macosGames'
    | 'macosSearch'
    | 'iosSearch'
    | 'android'
    | 'watch'
    | 'macPodcasts';

  export type Country = string; // ISO 3166-1 alpha-2 country code
  export type Language = string; // Language code (e.g., 'en-us')

  export interface RequestOptions {
    [key: string]: any;
  }

  // ========== Options Interfaces ==========

  export interface AppOptions {
    id?: string;
    appId?: string;
    country?: Country;
    lang?: Language;
    ratings?: boolean;
    requestOptions?: RequestOptions;
    throttle?: number;
  }

  export interface ListOptions {
    collection?: string;
    category?: number;
    num?: number;
    fullDetail?: boolean;
    country?: Country;
    lang?: Language;
    requestOptions?: RequestOptions;
    throttle?: number;
  }

  export interface SearchOptions {
    term: string;
    num?: number;
    page?: number;
    country?: Country;
    lang?: Language;
    platform?: PlatformType;
    idsOnly?: boolean;
    requestOptions?: RequestOptions;
    throttle?: number;
  }

  export interface DeveloperOptions {
    devId: string;
    country?: Country;
    lang?: Language;
    requestOptions?: RequestOptions;
    throttle?: number;
  }

  export interface PrivacyOptions {
    id: string;
    country?: Country;
    requestOptions?: RequestOptions;
  }

  export interface SuggestOptions {
    term: string;
    country?: Country;
    requestOptions?: RequestOptions;
  }

  export interface SimilarOptions {
    id?: string;
    appId?: string;
    country?: Country;
    lang?: Language;
    requestOptions?: RequestOptions;
    throttle?: number;
  }

  export interface ReviewsOptions {
    id?: string;
    appId?: string;
    sort?: string;
    page?: number;
    country?: Country;
    requestOptions?: RequestOptions;
  }

  export interface RatingsOptions {
    id: string;
    country?: Country;
    requestOptions?: RequestOptions;
  }

  export interface VersionHistoryOptions {
    id: string;
    country?: Country;
    requestOptions?: RequestOptions;
  }

  export interface MemoizeOptions {
    primitive?: boolean;
    normalizer?: (args: any[]) => string;
    maxAge?: number;
    max?: number;
  }

  // ========== Return Types ==========

  export interface App {
    id: string;
    appId: string;
    title: string;
    url: string;
    description: string;
    icon: string;
    genres: string[];
    genreIds: string[];
    primaryGenre: string;
    primaryGenreId: number;
    contentRating: string;
    languages: string[];
    size: string;
    requiredOsVersion: string;
    released: string;
    updated: string;
    releaseNotes: string;
    version: string;
    price: number;
    currency: string;
    free: boolean;
    developerId: string;
    developer: string;
    developerUrl: string;
    developerWebsite?: string;
    score: number;
    reviews: number;
    currentVersionScore: number;
    currentVersionReviews: number;
    screenshots: string[];
    ipadScreenshots: string[];
    appletvScreenshots: string[];
    supportedDevices: string[];
    ratings?: Ratings;
  }

  export interface ListApp {
    id: string;
    appId: string;
    title: string;
    icon: string;
    url: string;
    price: number;
    currency: string;
    free: boolean;
    description?: string;
    developer: string;
    developerUrl?: string;
    developerId?: string;
    genre: string;
    genreId: string;
    released: string;
  }

  export interface Review {
    id: string;
    userName: string;
    userUrl: string;
    version: string;
    score: number;
    title: string;
    text: string;
    url: string;
    updated: string;
  }

  export interface Ratings {
    ratings: number;
    histogram: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
    };
  }

  export interface Suggestion {
    term: string;
  }

  export interface PrivacyDetails {
    [key: string]: any;
  }

  export interface VersionHistory {
    [key: string]: any;
  }

  // ========== Constants ==========

  export const collection: {
    TOP_MAC: string;
    TOP_FREE_MAC: string;
    TOP_GROSSING_MAC: string;
    TOP_PAID_MAC: string;
    NEW_IOS: string;
    NEW_FREE_IOS: string;
    NEW_PAID_IOS: string;
    TOP_FREE_IOS: string;
    TOP_FREE_IPAD: string;
    TOP_GROSSING_IOS: string;
    TOP_GROSSING_IPAD: string;
    TOP_PAID_IOS: string;
    TOP_PAID_IPAD: string;
  };

  export const category: {
    BOOKS: number;
    BUSINESS: number;
    CATALOGS: number;
    EDUCATION: number;
    ENTERTAINMENT: number;
    FINANCE: number;
    FOOD_AND_DRINK: number;
    GAMES: number;
    GAMES_ACTION: number;
    GAMES_ADVENTURE: number;
    GAMES_ARCADE: number;
    GAMES_BOARD: number;
    GAMES_CARD: number;
    GAMES_CASINO: number;
    GAMES_DICE: number;
    GAMES_EDUCATIONAL: number;
    GAMES_FAMILY: number;
    GAMES_MUSIC: number;
    GAMES_PUZZLE: number;
    GAMES_RACING: number;
    GAMES_ROLE_PLAYING: number;
    GAMES_SIMULATION: number;
    GAMES_SPORTS: number;
    GAMES_STRATEGY: number;
    GAMES_TRIVIA: number;
    GAMES_WORD: number;
    HEALTH_AND_FITNESS: number;
    LIFESTYLE: number;
    MAGAZINES_AND_NEWSPAPERS: number;
    MAGAZINES_ARTS: number;
    MAGAZINES_AUTOMOTIVE: number;
    MAGAZINES_WEDDINGS: number;
    MAGAZINES_BUSINESS: number;
    MAGAZINES_CHILDREN: number;
    MAGAZINES_COMPUTER: number;
    MAGAZINES_FOOD: number;
    MAGAZINES_CRAFTS: number;
    MAGAZINES_ELECTRONICS: number;
    MAGAZINES_ENTERTAINMENT: number;
    MAGAZINES_FASHION: number;
    MAGAZINES_HEALTH: number;
    MAGAZINES_HISTORY: number;
    MAGAZINES_HOME: number;
    MAGAZINES_LITERARY: number;
    MAGAZINES_MEN: number;
    MAGAZINES_MOVIES_AND_MUSIC: number;
    MAGAZINES_POLITICS: number;
    MAGAZINES_OUTDOORS: number;
    MAGAZINES_FAMILY: number;
    MAGAZINES_PETS: number;
    MAGAZINES_PROFESSIONAL: number;
    MAGAZINES_REGIONAL: number;
    MAGAZINES_SCIENCE: number;
    MAGAZINES_SPORTS: number;
    MAGAZINES_TEENS: number;
    MAGAZINES_TRAVEL: number;
    MAGAZINES_WOMEN: number;
    MEDICAL: number;
    MUSIC: number;
    NAVIGATION: number;
    NEWS: number;
    PHOTO_AND_VIDEO: number;
    PRODUCTIVITY: number;
    REFERENCE: number;
    SHOPPING: number;
    SOCIAL_NETWORKING: number;
    SPORTS: number;
    TRAVEL: number;
    UTILITIES: number;
    WEATHER: number;
  };

  export const device: {
    IPAD: string;
    MAC: string;
    ALL: string;
  };

  export const sort: {
    RECENT: string;
    HELPFUL: string;
  };

  // ========== Main Functions ==========

  export function app(options: AppOptions): Promise<App>;

  export function list(options?: ListOptions): Promise<App[] | ListApp[]>;

  export function search(options: SearchOptions): Promise<App[] | string[]>;

  export function developer(options: DeveloperOptions): Promise<App[]>;

  export function privacy(options: PrivacyOptions): Promise<PrivacyDetails>;

  export function suggest(options: SuggestOptions): Promise<Suggestion[]>;

  export function similar(options: SimilarOptions): Promise<App[]>;

  export function reviews(options: ReviewsOptions): Promise<Review[]>;

  export function ratings(options: RatingsOptions): Promise<Ratings>;

  export function versionHistory(options: VersionHistoryOptions): Promise<VersionHistory>;

  // ========== Memoized Functions ==========

  export interface MemoizedFunctions {
    app: typeof app;
    list: typeof list;
    search: typeof search;
    developer: typeof developer;
    privacy: typeof privacy;
    suggest: typeof suggest;
    similar: typeof similar;
    reviews: typeof reviews;
    ratings: typeof ratings;
    versionHistory: typeof versionHistory;
    collection: typeof collection;
    category: typeof category;
    device: typeof device;
    sort: typeof sort;
  }

  export function memoized(options?: MemoizeOptions): MemoizedFunctions;
}
