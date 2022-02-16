import React from "react";
import "./header.css"
import { Component } from "react";


//import react-bootstrap
import { Navbar, Nav, NavDropdown, Container, button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class Header extends Component {
    render() {
        return (
        <Navbar className="color"  expand="lg">
  <Container className="Container">
    <Navbar.Brand  href="/">Fazenda Decisão</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="link" href="#">Parceiros</Nav.Link>
        <Nav.Link className="link" href="#">Logistica de produção </Nav.Link>
        <NavDropdown title="Produtos Prontos para venda" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Feijão</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Soja</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Algodão</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Diversos</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  className="link" href="#"><button type="button" className="btn btn-success me-auto">Success</button></Nav.Link>
        <Nav.Link  className="link" href="#"><button type="button" className="btn btn-success me-auto">Login</button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    }
}
  
export default Header;