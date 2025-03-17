import React from 'react'
import './Services.css'
import Vision from './Vision'
import roboteye from '/src/assets/roboteye.jpg'

const Services = () => {
  return (
    <div className='services-container-projects'>
    <section id="services">
    <Vision image={roboteye} alt = 'roboteye'
    title="YOUR VISION, OUR MISSION"/>
    <h1>Talk about services and links to my project including articles</h1>
    </section>
    </div>
  )
}

export default Services
