import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Table } from 'reactstrap';
import Pulse from 'react-reveal/Pulse';
import { Button } from 'reactstrap';
import Checkout from './Checkout';


const Product = ({ products }) => (

 <Product
  <Card>
   <CardBody>
    <CardTitle>My Product Title</CardTitle>
    </CardBody>
    </Card>
/>
);

export default Product;
<Table borderless>
  <tbody>
    <tr>
      <td>
        <div>
         <Pulse>
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
        </div>

       </td>
      <td>
      <div>
      <Pulse>
      <Card>

          <CardImg top width="100%"  src="https://scontent-dfw5-2.cdninstagram.com/vp/f516fc11a8970e81f2cfe7829d343f00/5BA85519/t51.2885-15/e35/21148045_1466350423445641_6171281784265768960_n.jpg" alt="Card image cap" />
        <CardBody>

          <CardTitle>Product #1</CardTitle>
          <CardSubtitle>BrandName </CardSubtitle>
            <CardText>Product #1 Description</CardText>


                  <Checkout
                    name='{Rene Mejia Face Graphic Design}'
                    description='{11 x 17 graphic design print}'
                    />
          </CardBody>
      </Card>
      </Pulse>
    </div>


      </td>
      <td>
      <div>
      <Pulse>
      <Card>
           <CardImg top width="100%"  src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/4b5aa9effb511ffe0073e8672c91f339/f3565a44-1dd1-4664-ac9d-d772f8fa9dbd_rw_3840.jpg?h=31d93a4e7f2788af1673941f18d52855" alt="Card image cap" />
        <CardBody>
          <CardTitle>Product #1</CardTitle>
          <CardSubtitle>BrandName </CardSubtitle>
            <CardText>Product #1 Description</CardText>

              <Checkout
                name='{Rene Mejia Face Graphic Design}'
                description='{11 x 17 graphic design print}'
                />
          </CardBody>
      </Card>
      </Pulse>
    </div>


       </td>
    </tr>
    <tr>
     <td>



      </td>
     <td>




      </td>
     <td>




      </td>
    </tr>









    </tbody>
  </Table>