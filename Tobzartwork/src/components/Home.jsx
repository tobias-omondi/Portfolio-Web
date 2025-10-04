import React from 'react'
import Navbar from './Navbar'
import myImage from '/src/assets/portfolio.avif'
import Footer from './Footer'

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className='mt-10'>
          <h1 className='text-gray-700 text-4xl text-start px-3'>TOBZ <br/>STUDIO</h1>
          <p className='text-6xl lg:text-9xl font-bold text-center'>WE CREATE FEELINGS</p>
      </div>

      {/* footer section */}
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
