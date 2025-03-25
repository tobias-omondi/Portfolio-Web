import React, { useState } from 'react';
import "./Contact.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import Footer from '../FooterPage/Footer';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
    <div className='contact-container'>
      <section id="contact">
        <div className='contact-heading'>
          <h2>YOUR IDEAS, BUILT WITH PURPOSE"</h2>
          <div className='contact-heading-h4'>
            <h4>Reach Out Today</h4>
          </div>
          <div className='contact-details'>
            <div className='topic-button-book'>
              <button type='submit' onClick={() => window.location.href = 'tel:+254 741041580'}>Call Today</button>
            </div>
            <div className='topic-button-share'>
              <button type='submit' onClick={handleOpenForm}>Share Your Vision</button>
            </div>
          </div>
        </div>

        {showForm && (
          <div className='form-overlay'>
            <div className='form-container'>
              <button onClick={handleCloseForm} className='close-button'>
                <IoCloseCircleOutline size={25} />
              </button>
              <iframe
                src='https://forms.gle/GJiq7XpjFUNRMUPW7'
                title='Share your vision form'
                className='iframe-form'
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
