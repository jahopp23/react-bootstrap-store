import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
  console.log(data);
};

const errorPayment = data => {
  alert('Payment Error');
  console.log(data);
};

const onToken = (name, brand, description, amount, category, channel, author, slug) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      name,
      brand,
      amount: fromDollarToCent(amount),
      description,
      category,
      author,
      source: token.id,
      currency: CURRENCY,

    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, brand, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    brand = {brand}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, brand)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;
