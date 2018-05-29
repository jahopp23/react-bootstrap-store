import React, { Component } from 'react';
import logo from './logo.svg';
import ProductList from '../components/productList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'



class Product extends Component {

  componentDidMount(){
    this.props.fetchData(window.location.href + 'api/products')
  }


  render() {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">React Art Store <img src="..." className="App-logo" alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jahopp23/react-bootstrap-store">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Filter by Category
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Graphic Design
                    </DropdownItem>
                    <DropdownItem>
                      Photography
                      </DropdownItem>
                      <DropdownItem>
                        Painting
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            <div>
            <ProductList
                products={this.props.data}
                />
            </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    data: state.products.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(FetchProductItems(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
