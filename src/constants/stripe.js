const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'development'
  ? 'pk_test_ZjR89CTSXjbX8aSLB4iJz1qM'
  : 'sk_test_u1YwL5Xxcxbvh7gz1MIbI5tY';


export default STRIPE_PUBLISHABLE;
