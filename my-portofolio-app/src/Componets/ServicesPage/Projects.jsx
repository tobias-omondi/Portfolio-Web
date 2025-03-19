import React from 'react'
import './Project.css'

const Projects = () => {
  return (
    <div className='project-container'>
        <div className='project-container'><h2>Showcasing Our Passion.<span> Crafted with Love.</span> </h2></div>
        <div className='project-links'>
            <div className='project-links-button'>
            <button type='button'>All</button>
            </div>
            <div className='project-links-button'>
            <button type='button'>Web</button>
            </div>
            <div className='project-links-button'>
            <button type='button'>Brand</button>
            </div>
            <div className='project-links-button'>
            <button type='button'>Technical writing</button>
            </div>
        </div>
    </div>
  )
}

export default Projects
