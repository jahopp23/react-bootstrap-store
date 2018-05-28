const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'development'
  ? 'pk_test_CFWXPsT2qur0bPebp3UhLphk'
  : 'pk_live_MY_PUBLISHABLE_KEY';


export default STRIPE_PUBLISHABLE;
