import React from 'react';
import { Nav, NavItem, Navbar, Button };
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = React.createClass(
  {
    render(){
      return(
        <Navbar inverse fixedTop>
        <Navbar.header>
        <Navbar.Brand>
        <Link to="/">My Web Shop</Link>
        </Navbar.Brand>
        <Navbar.toggle />
        </Navbar.header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer  eventKey={1} to="/company">
              <Button bsStyle="link">
                About
              </Button>
            </LinkContainer>

            <LinkContainer  eventKey={2} to="/products">
              <Button bsStyle="link">
                Products
              </Button>
            </LinkContainer>
          </Nav>

          <Nav pullRight>
            <LinkContainer to="/checkout">
              <Button bsStyle="link">
                Your cart: {this.props.cart.length} items
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
    }
  }
);

module.exports = Menu;