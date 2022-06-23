
const devBaseUrl = 'http://httpbin.org';
const proBaseUrl = 'http://production.org';

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl;

export const TIMEOUT = 5000;
