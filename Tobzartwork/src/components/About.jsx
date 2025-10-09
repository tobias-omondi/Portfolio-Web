import React, { useEffect } from 'react'

// import gsap
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { SplitText } from 'gsap/all'

const About = () => {

  useEffect (() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    gsap.from(".about",{
      y: 0
    })
  })
  return (
    <div className='text-name mt-10'>
      <h1 className='text-6xl text-center text-gray-50'>About</h1>  
      <div>
        <p className='title-name text-4xl w-4/5 text-center mx-auto text-medium'> <span className='text-6xl'> 👋 </span> Pleased to meet you, and thank you for visiting my website. I’m a <br/> <span className='font-bold'> Front-End Developer and UI/UX Designer</span>  <br/> who loves creating amazing things that go beyond imagination.based in <br/> <span className='bg-white px-5 py-2 skew-y-6 shadow-2xl '>Nairobi,Kenya</span> </p>
      </div>
    </div>
  )
}

export default About
