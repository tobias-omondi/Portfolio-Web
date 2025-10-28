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
import { SplitText } from 'gsap/SplitText';
import DesignWork from './DesignWork'
import Project from './Project'


const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger,  SplitText);
    gsap.fromTo(".hero",
      {  y: 0, scale: 1 },
        {
        y: 800,
        scale: 0.8,
        ease: "power3.inout",
        scrollTrigger:{
          trigger:".hero",
          start: "top top",
          end: "bottom+=500 top",
          scrub: 1.5,
          animated:true,
          // markers: true,
        }
      },
    )
    // text-animation
    let split = new SplitText(".title", { type: "chars, words, lines, character" });
       gsap.from(split.words, {
      y: 0,
      opacity: 0.9,
      duration: 3.5,
      y: () => gsap.utils.random(50, 100),
      stagger: {
        amount: 0.09,
        from: "random"
      },
    },[]);

     // text-animation
    let splity = new SplitText(".title-name", { type: "chars, words, lines", smartWrap: true, charsClass: 'chars', wordsClass: 'words++' });
       gsap.from(splity.chars, {
      y: 60,
      opacity: 1,
      stagger: {
        amount: 0.9,
        from: 'center',
        grid: 'auto'
      },
      scrollTrigger: {
        trigger: ".title-name",
        start: "top 50%",
        end: "top 20%",
        scrub: 1.2,
      }
    });
   
   
  }, [])

  return (
    <div >
      <Navbar />
      <div className='mt-10'>
          <div className='flex flex-col lg:flex-row-reverse justify-center items-center space-y-6 mt-10'>
            <div  className="w-full lg:w-4/5 hero ">
                <BrainScene />
            </div>

            <div className='flex flex-col space-y-3 w-full lg:text-end '>
            <h1 className='text-3xl md:text-5xl lg:text-6xl px-5 text-gray-800 font-black text-center md:text-start '>When Imagination Ends, We Begin</h1>
            <p className='text-2xl text-gray-700 md:text-start px-5 w-full text-center'>I don’t wait for ideas, I hunt them down and build them. Tobz Studio turns thoughts into visuals, motion, and experiences that hit different. I make designs that breathe, not just look good. I don’t imagine. I make imagination real.</p>
            </div>
          </div>


          <h1 className='title-name text-6xl lg:text-9xl font-black text-center text-blue-400 py-10'>WE CREATE FEELINGS</h1>
      </div>




       {/* About section */}
      <div >
        <About />
      </div>

    
      {/* Work section */}
      <div >
        <Work />
      </div>

            {/* myproject */}

      <div>
        <Project />
      </div>

      <div>
        <DesignWork />
      </div>

      {/* Contact section */}
      <div>
        <Contact />
      </div>
      
      {/* footer section */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home