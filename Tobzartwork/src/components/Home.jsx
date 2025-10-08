import React, { useEffect } from 'react'
import Navbar from './Navbar'
import myImage from '/src/assets/portfolio.avif'
import Footer from './Footer'
import Contact from './Contact'
import Work from './Work'
import About from './About'
import BrainScene from './BrainScene'

// import gsap from 'gsap

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'
import { useFetcher } from 'react-router-dom'


const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".hero",
      {  y: 0, },
        {
        y: 700,
        ease: "power3.inout",
        scrollTrigger:{
          trigger:".hero",
          start: "top top",
          end: "bottom+=700 top",
          scrub: 1.5,
          animated:true,
          // markers: true,
        }
      },
    )
    gsap.fromTo(".brand-name",
       { y: 0,
      scale:1,
      opacity: 1,
    },{
      scale: 0.6,
      skewY: 1.7,
      opacity:0.4,
       y: -20,
      ease: "power3.inOut",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      scrollTrigger: {
        trigger: ".brand-name",
        start: "top top",
        end: "bottom top",
        scrub:1.2,
      }
    }
    )
   
  }, [])

  return (
    <div >
      <Navbar />
      <div className='mt-5'>
          <h1 className='title fixed text-gray-100 font-extrabold text-4xl text-start px-3 brand-name leading-tight'>TOBZ <br/>STUDIO</h1>


          <div className='flex flex-col lg:flex-row-reverse justify-center items-center space-y-6 py-14'>

            <div  className="w-full lg:w-3/4 hero ">
                <BrainScene />
            </div>

            <div className='flex flex-col space-y-5 px-3 w-full lg:text-end lg:w-3/4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl px-5 text-gray-400 font-medium text-start'>When Imagination Ends, We Begin</h1>
            <p className='text-xl text-gray-300 md:text-start px-5'>At Tobz Studio, imagination isn’t the finish line — it’s the starting point.
               When the creative spark fades for others, we ignite ours. We push ideas beyond the dream phase, turning imagination into visuals, motion, and experiences that feel alive.</p>
            </div>

            {/* <div>
              <h1>Every idea starts as a flicker — a thought, a dream, a vision.Most stop there. But not us. We chase that flicker until it turns into fire.</h1>
            </div> */}
          </div>


          <p className='text-6xl lg:text-9xl font-bold text-center text-gray-50 mt-5'>WE CREATE FEELINGS</p>
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