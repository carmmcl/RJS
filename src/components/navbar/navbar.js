import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {CartWidget} from './CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="pink" variant="dark">
        <Container className='container-NavBar'>
          <Navbar.Brand href="#home">
            <img src='./assets/logo2.png'></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Recetas</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
        
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;