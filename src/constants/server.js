const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://api.cosmicjs.com/v1/authenticate/'
  : 'http://localhost:3000';

export default PAYMENT_SERVER_URL
