import React from 'react'
import './Services.css'


const Vision = ({image, title}) => {
  return (
    <div className='vision-service-container'>
        <div  className='vision-service-container-image' >
        <img src={image} alt='robot eye'/>
         </div>
        <div className='vision-heading'>
            <div>
            <h3>{title}</h3>
            </div>
        </div>
    </div>
  )
}

export default Vision
