
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css'

function NavBar() {
  return (
    <div className='navbar-style'>
      <Navbar bg="primary" variant="dark">
        <Container>
        </Container>
      </Navbar>
      <div className='name-logo'>
      <Container className='name-logo'>
        <h2 className='mid-nav'>AVILOR AUTO GROUP</h2>
        <h3 className='mid-nav'>77 WINDSOR PLACE <br/>CENTRAL ISLIP NY 11722 <br/>(555)555-5555</h3>
      </Container>
      </div>
      <Navbar bg="primary" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="#home" className='nav-links'>Home</Nav.Link>
            <Nav.Link href="#features" className='nav-links'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='nav-links'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='nav-links'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
