
import Nav from 'react-bootstrap/Nav';
import '../css/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-start title'><h3>STOCK VEHICLES</h3></div>
      <Nav className="justify-content-center footer-start">
        <Nav.Item  className='cars'>
          <section className='car-title'>
            <p style={{textDecoration: 'underline'}}>TOYOTA</p>
            <Nav.Link href="/home">COROLLA</Nav.Link><br/>
            <Nav.Link href="/home">CAMRY</Nav.Link><br/>
            <Nav.Link href="/home">4RUNNER</Nav.Link><br/>
          </section>
        </Nav.Item>
        <Nav.Item className='cars'>
        <section className='car-title'>
            <p style={{textDecoration: 'underline'}}>HONDA</p>
            <Nav.Link href="/home">ACCORD</Nav.Link><br/>
            <Nav.Link href="/home">CIVIC</Nav.Link><br/>
            <Nav.Link href="/home">PILOT</Nav.Link><br/>
          </section>
        </Nav.Item>
        <Nav.Item className='cars'>
        <section className='car-title'>
            <p style={{textDecoration: 'underline'}}>NISSAN</p>
            <Nav.Link href="/home">SENTRA</Nav.Link><br/>
            <Nav.Link href="/home">ROGUE</Nav.Link><br/>
            <Nav.Link href="/home">PATHFINDER</Nav.Link><br/>
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