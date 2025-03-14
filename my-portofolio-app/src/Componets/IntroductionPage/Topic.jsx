import React from 'react'
import './Topic.css'

const Topic = ({title}) => {
  return (
    <div>
     <div className='topic-conatiner'>
      <h3>{title}</h3>
      </div>
      <div className='topic-button'>
        <div className='topic-button-book'><button type='submit'>Book a Call</button></div>
        <div className='topic-button-share'><button type='submit'>Share Your Vision</button></div>
      </div>
    </div>
  )
}

export default Topic
