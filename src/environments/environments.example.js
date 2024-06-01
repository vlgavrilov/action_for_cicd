export const BASEURL = process.env.REACT_APP_ENVIRONMENT === 'production'
  ? 'add here prod backend url'
  : 'add here dev backend url' ?? 'http://localhost:3001';
export const SOCKET_PORT = process.env.REACT_APP_ENVIRONMENT
  && process.env.REACT_APP_ENVIRONMENT === 'production'
  ? ''
  : '3001' ?? '3001';
export const COREAPPURL = process.env.REACT_APP_ENVIRONMENT
  && process.env.REACT_APP_ENVIRONMENT === 'production'
  ? '<prod host>'
  : 'localhost' ?? 'localhost';
export const APPURL = process.env.REACT_APP_ENVIRONMENT === 'production'
  ? 'add here prod backend url'
  : 'add here dev backend url' ?? 'http://localhost';
export const GOOGLE_CLIENT_ID = '<GOOGLE_CLIENT_ID>';
export const GOOGLE_API_KEY = '<GOOGLE_API_KEY>';
export const FACEBOOK_APP_ID = '<FACEBOOK_APP_ID>';
export const DROPBOX_API_KEY = '<DROPBOX_API_KEY>';
