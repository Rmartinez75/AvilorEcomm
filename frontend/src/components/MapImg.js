
import React from 'react'
import { NavLink } from 'react-bootstrap'
import '../css/map.css'


function MapImg() {
  return (
    <div>
      <NavLink to='https://www.google.com/maps/place/77+Windsor+Pl,+Central+Islip,+NY+11722/@40.7917114,-73.1793571,17z/data=!4m6!3m5!1s0x89e836d4891b8a5f:0x985b84b1681f23bf!8m2!3d40.7916871!4d-73.1794429!16s%2Fg%2F11bw3xsrqr'><img className='map-desk' src='map.png' alt='Picture of Map' /></NavLink>
      <NavLink to='https://www.google.com/maps/place/77+Windsor+Pl,+Central+Islip,+NY+11722/@40.7917114,-73.1793571,17z/data=!4m6!3m5!1s0x89e836d4891b8a5f:0x985b84b1681f23bf!8m2!3d40.7916871!4d-73.1794429!16s%2Fg%2F11bw3xsrqr'><img className='map-mobile' src='mapMobile.png' alt='Picture of Map' /></NavLink>
    </div>
  )
}

export default MapImg
