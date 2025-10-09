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


const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger,  SplitText);
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
    // text-animation
    let split = new SplitText(".title", { type: "chars, words, lines" });
       gsap.from(split.chars, {
      y: 40,
      opacity: 0.9,
      from: "random (100, 10)",
      stagger: {
        amount: 0.05,
        from: "random"
      },
      scrollTrigger: {
        trigger: ".title",
        start: "top 10%",
        end: "bottom +=600",
        scrub: 1.2,
      }
    });

     // text-animation
    let splity = new SplitText(".title-name", { type: "chars, words, lines", smartWrap: true, charsClass: 'chars', wordsClass: 'words++' });
       gsap.from(splity.chars, {
      y: 90,
      opacity: 1,
      stagger: {
        amount: 0.5,
        from: 'random'
      },
      scrollTrigger: {
        trigger: ".title-name",
        start: "top 50%",
        end: "bottom top",
        scrub: 1.2,
      }
    });
   
   
  }, [])

  return (
    <div >
      <Navbar />
      <div className='mt-5'>
          <div className='flex flex-col lg:flex-row-reverse justify-center items-center space-y-6 mt-7'>
            <div  className="w-full lg:w-3/4  hero ">
                <BrainScene />
            </div>

            <div className='flex flex-col space-y-2 w-full lg:text-end '>
            <p className='title text-3xl md:text-5xl lg:text-6xl px-5 text-gray-950 font-extrabold text-start text-shadow-2xs'>When Imagination Ends, We Begin</p>
            <h1 className='title text-xl text-black md:text-start px-5 w-full'>At Tobz Studio, imagination isn’t the finish line — it’s the starting point.
               When the creative spark fades for others, we ignite ours. We push ideas beyond the dream phase, turning imagination into visuals, motion, and experiences that feel alive.</h1>
            </div>
          </div>


          <p className='title-name text-6xl lg:text-8xl font-extrabold text-center text-gray-900'>WE CRE<span className='text-blue-500'>ATE </span> FEELINGS</p>
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