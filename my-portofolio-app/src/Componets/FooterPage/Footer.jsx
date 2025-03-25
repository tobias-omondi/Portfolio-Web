import React from 'react'
import './Footer.css'
import profilephoto from "/src/assets/potofolio profile.jpeg"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-container-items'>

            <div className='profile-details'>
                <img src={profilephoto} alt='profile-image' className='footer-profile-logo'/>
                <div>
                    <h2>Tobias .O. Omondi</h2>
                </div>
                <div>
                    <h4>Software Developer</h4>
                </div>
            </div>

            <div>
                <h2>About me</h2>
                <p>"I have 4 years of experience working with React, Django, Flask, SEO, and SaaS. I build web apps, improve website rankings, and create easy-to-use designs. I've helped businesses in different industries grow with better technology."</p>
            </div>

            <div>
                <h2>My Vision</h2>
                <p>"My vision is to become a leading tech expert in web development and SaaS, shaping the future of digital solutions. I want to use technology to solve real-world problems, make online experiences better, and help businesses succeed in a fast-changing digital world."</p>
            </div>

            <div>
                <h2>My Mission</h2>
                <p>"My mission is to build powerful and user-friendly digital solutions using React, Django, Flask, and SEO. I aim to help businesses grow by creating fast, secure, and scalable applications that improve user experience and efficiency."</p>
            </div>
            
        </div>
        <div className='footer-divider'></div>
    </div>
  )
}

export default Footer
