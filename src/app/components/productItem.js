import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const Product = ({ completed, image, title, slug, author, brand, description, category, price, date }) => {
  return (
    <a href="{slug}">{slug}</a>
    <Card className="card">
      <CardImg top width="100%" src="{image}"alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>Posted by: {author} on {date}</CardSubtitle>
        <CardSubtitle>{brand}</CardSubtitle>
          <CardText>
            {description}
            {price}

          </CardText>


          <Checkout className="checkout-btn"
               name={'Chromatic Lip Graphic Design Print'}
               description={'11 x 17 graphic design print.'}
               brand={'Edel Anthony'}
               amount={150}/>


        </CardBody>
    </Card>

  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired

}

export default Product
