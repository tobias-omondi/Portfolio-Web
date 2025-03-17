import React from 'react'
import './Services.css'
import Example from './Example'


const Vision = ({image, title}) => {
  return (
    <>
    <div className='vision-service-container'>
        <div  className='vision-service-container-image' >
        <img src={image} alt='robot eye'/>
         </div>
        <div className='vision-heading'>
            <div>
            <h2>{title}</h2>
            </div>
            <div>
                <h3>Building scalable and efficient software solutions to help your business grow and succeed.</h3>
            </div>
        </div>
    </div>
    <Example/>
    </>
  )
}

export default Vision
