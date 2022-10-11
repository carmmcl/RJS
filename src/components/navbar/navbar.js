import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='container-NavBar'>
      <Container className='container-NavBar'>
      <Navbar.Brand as={Link} to={"/"}><img src='/assets/logo2.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navHover" as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link className="navHover" as={Link} to={"/productos/chocolate"}>chocolate</Nav.Link>
            <Nav.Link className="navHover" as={Link} to={"/productos/vainilla"}>Vainilla</Nav.Link>
            <Nav.Link className="navHover" as={Link} to={"/productos/fruta"}>Fruta</Nav.Link>
          </Nav>
          <CartWidget/> 
        </Navbar.Collapse>         
      </Container>
    </Navbar>
  );
}

export default NavBar;