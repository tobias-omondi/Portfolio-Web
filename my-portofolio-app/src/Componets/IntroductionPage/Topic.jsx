import React, { useState } from 'react'
import './Topic.css'
import { IoCloseCircleOutline } from "react-icons/io5";


const Topic = ({title}) => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () =>{
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <div>
     <div className='topic-conatiner'>
      <h3>{title}</h3>
      </div>
      <div className='topic-button'>
        <div className='topic-button-book'><button type='submit'>Book a Call</button></div>
        <div className='topic-button-share'><button type='submit' onClick={handleOpenForm}>Share Your Vision</button></div>
      </div>

      {showForm && (
        <div className='form-overlay'>
          <div className='form-container'>
            <button onClick={handleCloseForm} className='close-button'> <IoCloseCircleOutline size={25}/></button>
            <iframe src='https://forms.gle/GJiq7XpjFUNRMUPW7' title='Share your vision form' className='iframe-form'></iframe>
          </div>
        </div>
      )}
    </div>

  )
}

export default Topic
