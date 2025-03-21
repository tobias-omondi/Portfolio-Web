import React from 'react'
import './Services.css'
import Vision from './Vision'
import roboteye from '/src/assets/roboteye.jpg'
import Projects from './Projects'
import Question from '../QuestionPage/Question'

const Services = () => {
  return (
    <div>
    <div className='services-container-projects'>
    <section id="services">
    <Vision image={roboteye} alt = 'roboteye'
    title="YOUR VISION, OUR MISSION"/>
    </section>
    </div>
    <Projects/>
    <Question/>
    </div>
  )
}

export default Services
