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

        <Card body inverse style={{ backgroundColor: 'blue', borderColor: '#333' }}>
        <CardTitle>Welcome to ReactBootstrapStore</CardTitle>
        <CardText>



         Currently under construction.
         Stay tuned for: Stripe API, CosmicJS API, and Blog Tutorial.



        </CardText>

      </Card>




        <Table borderless>
          <tbody>
            <tr>
              <td>
                <div>
                  <Card class="card">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                   <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
                   <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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



          <div className="footer">
           <p className="footer-text">
           Built by <a href="https://johnallenhopper.now.sh/">John A. Hopper</a> <code>under construction</code>
                 </p>
            <strong><a className="github" href="https://github.com/jahopp23/react-bootstrap-store">github</a></strong>
             </div>


      </div>
    );
  }
}

export default App;
