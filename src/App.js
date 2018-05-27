import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Table } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class App extends Component {
  render() {
    return (



      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootstrap Store</h1>
        </header>

        <Table borderless>
          <tbody>
            <tr>
              <td>
                <div>
                  <Card class="card">
                    <CardBody>
                      <CardTitle>Product #1</CardTitle>
                      <CardSubtitle>BrandName </CardSubtitle>
                        <CardText>Product #1 Description</CardText>
                          <Button>Purchase</Button>
                      </CardBody>
                  </Card>
                </div>

               </td>
              <td>
              <div>
              <Card>
                <CardBody>
                  <CardTitle>Product #1</CardTitle>
                  <CardSubtitle>BrandName </CardSubtitle>
                    <CardText>Product #1 Description</CardText>
                      <Button>Purchase</Button>
                  </CardBody>
              </Card>
            </div>


              </td>
              <td>
              <div>
              <Card>
                <CardBody>
                  <CardTitle>Product #1</CardTitle>
                  <CardSubtitle>BrandName </CardSubtitle>
                    <CardText>Product #1 Description</CardText>
                      <Button>Purchase</Button>
                  </CardBody>
              </Card>
            </div>


               </td>
            </tr>
            <tr>
             <td>
            <div>
             <Card>
               <CardBody>
                 <CardTitle>Product #1</CardTitle>
                 <CardSubtitle>BrandName </CardSubtitle>
                   <CardText>Product #1 Description</CardText>
                     <Button>Purchase</Button>
                 </CardBody>
             </Card>
           </div>


              </td>
             <td>
            <div>
             <Card>
               <CardBody>
                 <CardTitle>Product #1</CardTitle>
                 <CardSubtitle>BrandName </CardSubtitle>
                   <CardText>Product #1 Description</CardText>
                     <Button>Purchase</Button>
                 </CardBody>
             </Card>
           </div>



              </td>
             <td>
             <div>
             <Card>
               <CardBody>
                 <CardTitle>Product #1</CardTitle>
                 <CardSubtitle>BrandName </CardSubtitle>
                   <CardText>Product #1 Description</CardText>
                     <Button>Purchase</Button>
                 </CardBody>
             </Card>
           </div>



              </td>
            </tr>
            <tr>
              <td>
              <div>
              <Card>
                <CardBody>
                  <CardTitle>Product #1</CardTitle>
                  <CardSubtitle>BrandName </CardSubtitle>
                    <CardText>Product #1 Description</CardText>
                      <Button>Purchase</Button>
                  </CardBody>
              </Card>
            </div>



              </td>
              <td>
              <div>
              <Card>
                <CardBody>
                  <CardTitle>Product #1</CardTitle>
                  <CardSubtitle>BrandName </CardSubtitle>
                    <CardText>Product #1 Description</CardText>
                      <Button>Purchase</Button>
                  </CardBody>
              </Card>
            </div>



              </td>
              <td>
              <div>
              <Card>
                <CardBody>
                  <CardTitle>Product #1</CardTitle>
                  <CardSubtitle>BrandName </CardSubtitle>
                    <CardText>Product #1 Description</CardText>
                      <Button>Purchase</Button>
                  </CardBody>
              </Card>
            </div>



              </td>
            </tr>
            </tbody>
          </Table>


        <p className="App-intro">
           Built by <a href="https://johnallenhopper.now.sh/">John A. Hopper</a>
        </p>
      </div>
    );
  }
}

export default App;
