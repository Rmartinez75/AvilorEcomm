
import Nav from 'react-bootstrap/Nav';
import '../css/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-start title'><h3 className='footer-text' >STOCK VEHICLES</h3></div>
      <Nav className="justify-content-center footer-start">
        <Nav.Item  className='cars'>
          <section className='car-title'>
            <p className='footer-text'  style={{textDecoration: 'underline'}}>TOYOTA</p>
            <Nav.Link className='footer-text'  href="/home">COROLLA</Nav.Link><br/>
            <Nav.Link className='footer-text'  href="/home">CAMRY</Nav.Link><br/>
            <Nav.Link className='footer-text'  href="/home">4RUNNER</Nav.Link><br/>
          </section>
        </Nav.Item>
        <Nav.Item className='cars'>
        <section className='car-title'>
            <p className='footer-text' style={{textDecoration: 'underline'}}>HONDA</p>
            <Nav.Link className='footer-text' href="/home">ACCORD</Nav.Link><br/>
            <Nav.Link className='footer-text' href="/home">CIVIC</Nav.Link><br/>
            <Nav.Link className='footer-text' href="/home">PILOT</Nav.Link><br/>
          </section>
        </Nav.Item>
        <Nav.Item className='cars'>
        <section className='car-title'>
            <p className='footer-text'  style={{textDecoration: 'underline'}}>NISSAN</p>
            <Nav.Link className='footer-text'  href="/home">SENTRA</Nav.Link><br/>
            <Nav.Link className='footer-text'  href="/home">ROGUE</Nav.Link><br/>
            <Nav.Link className='footer-text'  href="/home">PATHFINDER</Nav.Link><br/>
          </section>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-center footer-copyright">
        <p>&copy; Avilor Auto Group</p>
      </Nav>
    </div>
  );
}

export default Footer;