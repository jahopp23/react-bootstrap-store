import React, { Component } from 'react';
import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Pulse from 'react-reveal/Pulse';
import { Button } from 'reactstrap';
import Checkout from './Checkout';
import PropTypes from 'prop-types';
import { Table }from 'reactstrap';


class Product extends React.Component {
  render() {
    return (

      <Table borderless>
      <tbody>
        <tr>
          <th><Pulse>
      <Card className="card">
        <CardImg top width="100%"  src="https://scontent-dfw5-2.cdninstagram.com/vp/9e8498df96757e7885cdd867be934246/5BA1ED4E/t51.2885-15/e35/32968469_254736341751541_1271481233544577024_n.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Product #1</CardTitle>
          <CardSubtitle>BrandName </CardSubtitle>
            <CardText>Product #1 Description</CardText>

            <Checkout className="checkout-btn"
                 name={'Chromatic Lip Graphic Design Print'}
                 description={'11 x 17 graphic design print.'}
                 brand={'Edel Anthony'}
               amount={150}/>


          </CardBody>
      </Card>
      </Pulse>
           </th>
            <th><Pulse>
      <Card className="card">
        <CardImg top width="100%"  src="https://scontent-dfw5-2.cdninstagram.com/vp/9e8498df96757e7885cdd867be934246/5BA1ED4E/t51.2885-15/e35/32968469_254736341751541_1271481233544577024_n.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Product #1</CardTitle>
          <CardSubtitle>BrandName </CardSubtitle>
            <CardText>Product #1 Description</CardText>

            <Checkout className="checkout-btn"
                 name={'Chromatic Lip Graphic Design Print'}
                 description={'11 x 17 graphic design print.'}
                 brand={'Edel Anthony'}
               amount={150}/>


          </CardBody>
      </Card>
      </Pulse></th>
             <th><Pulse>
      <Card className="card">
        <CardImg top width="100%"  src="https://scontent-dfw5-2.cdninstagram.com/vp/9e8498df96757e7885cdd867be934246/5BA1ED4E/t51.2885-15/e35/32968469_254736341751541_1271481233544577024_n.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Product #1</CardTitle>
          <CardSubtitle>BrandName </CardSubtitle>
            <CardText>Product #1 Description</CardText>

            <Checkout className="checkout-btn"
                 name={'Chromatic Lip Graphic Design Print'}
                 description={'11 x 17 graphic design print.'}
                 brand={'Edel Anthony'}
               amount={150}/>


          </CardBody>
      </Card>
      </Pulse></th>
         </tr>
         <tr>
          <th></th>
           <th></th>
            <th></th>
          </tr>
          <tr>
           <th>
             </th>
            <th></th>
             <th></th>
           </tr>
         </tbody>
        </Table>




















    );
  }
}



Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired

}


export default Product;
