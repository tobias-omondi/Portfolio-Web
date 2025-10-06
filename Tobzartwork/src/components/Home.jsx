import React from 'react'
import Navbar from './Navbar'
import myImage from '/src/assets/portfolio.avif'
import Footer from './Footer'
import Contact from './Contact'
import Work from './Work'
import About from './About'
import BrainScene from './BrainScene'

const Home = () => {
  return (
    <div >
      <Navbar />
      <div className='mt-10'>
          <h1 className='text-gray-700 text-4xl text-start px-3'>TOBZ <br/>STUDIO</h1>
          <div className='flex flex-row-reverse justify-center items-center space-x-2'>

            <div className='w-2/3'>
                <BrainScene />
            </div>

            <div className='flex flex-col space-y-5 px-5 text-end w-2/3'>
            <h1 className='text-4xl px-5 text-gray-400 font-medium'>When Imagination Ends, We Begin</h1>
            <p className='text-xl text-gray-600'>At Tobz Studio, imagination isn’t the finish line — it’s the starting point.
               When the creative spark fades for others, we ignite ours. We push ideas beyond the dream phase, turning imagination into visuals, motion, and experiences that feel alive.</p>
            </div>
          </div>
          <p className='text-6xl lg:text-9xl font-bold text-cente'>WE CREATE FEELINGS</p>
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