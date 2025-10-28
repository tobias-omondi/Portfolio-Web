import React from 'react'
// import BrainScene from './BrainScene'

const Contact = () => {
  return (
    <div className='mt-20'>
      <div className='form-content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-row'>
            <label htmlFor='fullname'>Full Name:</label>
            <input id='fullname' type='text' name='fullname' placeholder='Your name*' />
          </div>

           <div className='form-row'>
            <label htmlFor='emailaddress'>Phone Number:</label>
            <input id='phonenumber' type='number' name='phonenumber' placeholder='Phone Number*' />
          </div>

          <div className='form-row'>
            <label htmlFor='emailaddress'>Email Address:</label>
            <input id='emailaddress' type='email' name='emailaddress' placeholder='you@email.com*' />
          </div>



          <div className='form-row'>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows={5} placeholder='How can help you...' />
          </div>

          <div className='form-actions'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
      {/* <div className='brain-scene-container'>
      <BrainScene />
      </div> */}
    </div>
  )
}

export default Contact
