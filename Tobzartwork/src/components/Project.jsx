import React from 'react'
import myImage from "/src/assets/portfolio.avif"
import './Project.css'

const Project = () => {
  return (
    <div className='project-container'>
      <div className='project-section'>
        <img src={myImage} alt='myprofile' className='project-profile'/>
      </div>

      <div className='project-title'>
        <h2>Project Worked</h2>
        <div className='project-links'>
          <a href='https://schoolapplication-one.vercel.app/' className='project-link-item'>School Application</a>
          <a href='https://lapa-weld.vercel.app/' className='project-link-item'>Lapa</a>
        </div>
      </div>
    </div>
  )
}

export default Project
