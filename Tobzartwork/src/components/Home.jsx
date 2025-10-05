import React from 'react'
import Navbar from './Navbar'
import myImage from '/src/assets/portfolio.avif'
import Footer from './Footer'
import Contact from './Contact'
import Work from './Work'
import About from './About'

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className='mt-10'>
          <h1 className='text-gray-700 text-4xl text-start px-3'>TOBZ <br/>STUDIO</h1>
          <p className='text-6xl lg:text-9xl font-bold text-center'>WE CREATE FEELINGS</p>
      </div>

       {/* About section */}
      <div className='mt-10'>
        <About />
      </div>

      {/* Work section */}
      <div className='mt-10'>
        <Work />
      </div>

      {/* Contact section */}
      <div className='mt-10'>
        <Contact />
      </div>
      {/* footer section */}
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
