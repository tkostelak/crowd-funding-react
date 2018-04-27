import React from 'react';
import photographer from '../../assets/images/photographer.jpg';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function NavBar(){

  return (
    <div className = 'navbarContent'>
    <Navbar>
<Navbar.Header>
  <Navbar.Brand>
    <a href="#home">React-Bootstrap</a>
  </Navbar.Brand>
</Navbar.Header>
<Nav>
  <NavItem eventKey={1} href="#">
    Link
  </NavItem>
  <NavItem eventKey={2} href="#">
    Link
  </NavItem>
  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    <MenuItem eventKey={3.1}>Action</MenuItem>
    <MenuItem eventKey={3.2}>Another action</MenuItem>
    <MenuItem eventKey={3.3}>Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.4}>Separated link</MenuItem>
  </NavDropdown>
</Nav>
</Navbar>;
      <style jsx>{`
        div.navbarContent{
        }
      `}
      </style>
    </div>
  );
}

export default NavBar;
