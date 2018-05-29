import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    return (
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">React Art Store <img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
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
    );
  }
}

export default Header;
