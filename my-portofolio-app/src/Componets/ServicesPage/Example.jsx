import React from 'react'
import exampleoneimage from "/src/assets/exapleone.jpeg"
import exampleoneimage1 from "/src/assets/exmple2.jpg"
import exampleoneimage2 from "/src/assets/example3.jpg"
import './Services.css'

const Example = () => {
  return (
    <div className='example-container'>
      <div className='example-images-container'>
        <img src={exampleoneimage} alt='techimage'/>
        <div>
            <h1>Front-End-Dev</h1>
            <h4>Optimizing UI/UX with Modern Front-End Technologies</h4>
        </div>
      </div>
      <div className='example-images-container'>
        <img src={exampleoneimage1} alt='saas image'/>
        <div>
            <h1>SaaS</h1>
            <h4>Creating Cloud-Based Software for Modern Businesses</h4>
        </div>
      </div>
      <div className='example-images-container'>
        <img src={exampleoneimage2} alt='code'/>
        <div>
            <h1>Back-End-Dev</h1>
            <h4>Back-End Development: Ensuring Performance and Security</h4>
        </div>
      </div>
    </div>
  )
}

export default Example
