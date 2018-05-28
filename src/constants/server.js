const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://myapidomain.com'
  : 'http://localhost:3000';

export default PAYMENT_SERVER_URL
