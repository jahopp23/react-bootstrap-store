import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Product from './Product';
import Checkout from './Checkout';

class ProductList extends React.Component {
  render () {
    return {
      <ul className="product-list">
        <Product />
      </ul>
  );
}




ProductList.propTypes  ={
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date),
      slug: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default ProductList;
