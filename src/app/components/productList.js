import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductComponent from '../components/productItem';
import moment from 'moment';

const ProductList = ({ products }) => (
  <ul className="productList">
    {products.map((item, index) => (
      <ProductComponent
        slug={item.slug}
        title={item.title}
        key={index}
        author{item.author}
        date={moment(item.created).format('MMM DD YYYY')}
        image={item.metadata.hero.url}
        price={item.price}
        brand={item.brand}
        category={item.category}
        description={item.description}
        />
    ))}
  </ul>
)

ProductList.propTypes  ={
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
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

export default ProductList
