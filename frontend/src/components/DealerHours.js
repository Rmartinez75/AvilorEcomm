
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../css/dealerHours.css'


function DealerHours() {
  return (
    <div className='dealer-page'>
      <Container>
        <Row className='title'><h3 className='dealer-hours'>DEALERSHIP HOURS</h3></Row>        
        <Row className='hours'><h6 className='days'>Monday 9:00AM - 6:00PM</h6></Row>
        <Row className='hours'><h6 className='days'>Tuesday 9:00AM - 6:00PM</h6></Row>
        <Row className='hours'><h6 className='days'>Wednesday 9:00AM - 6:00PM</h6></Row>
        <Row className='hours'><h6 className='days'>Thursday 9:00AM - 6:00PM</h6></Row>
        <Row className='hours'><h6 className='days'>Friday 9:00AM - 6:00PM</h6></Row>
        <Row className='hours'><h6 className='days'>Saturday 9:00AM - 6:00PM</h6></Row>
        <Row className='hours'><h6 className='days'>Sunday 9:00AM - 6:00PM</h6></Row>
        <br />
      </Container>
    </div>
  )
}

export default DealerHours
