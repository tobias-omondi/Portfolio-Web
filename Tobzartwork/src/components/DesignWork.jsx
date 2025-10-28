import React, { useEffect, useRef } from 'react'

// lets import images
import designImage from "/src/assets/design.avif"
import designImage1 from "/src/assets/schoolwork.avif"
import designImage2 from "/src/assets/Today's poster.jpeg"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);

const DesignCards = [
  {id: 1, title: "The Design Chapter", description: "represents a new phase in your creative journey  where every project, layout, and pixel tells a part of your story. It’s not just a portfolio it’s a documentation of growth, mindset, and craft. Each section of the book/portfolio can literally be a chapter in your evolution as a designer.", color: "#ebf7f7", image: designImage},
  {id: 2, title: "Interactive Learning Hub", description: "a digital space that blends design, storytelling, and motion to make learning experiences feel alive. It’s more than a portfolio; it’s a chapter in my creative evolution where code meets curiosity.", color: "#1fa1ed" , image: designImage1},
  {id: 3, title: "Graphic Design", description: "place where I translate ideas into visuals that speak, move, and inspire. Each chapter captures a different side of design from typography to brand identity, motion, and storytelling.", color: "#db4716", image: designImage2},
]

const DesignWork = () => {

  // Create a ref for the main component wrapper
  const main = useRef();

  // Your existing animation for the text
  useGSAP (() => {
    gsap.fromTo (".design-text", 
      {scale: 0.5,
        opacity: 0.4,
        ease: "power3.inOut",
      },
      {
        scale: 0.8,
        opacity: 1,
        duration: 0.07,
        scrollTrigger : {
          trigger: ".design-text",
          start: "bottom bottom",
          end: "top top",
          scrub: 1.5,
        }
      }
    ),{}
  }, { scope: main } 
  )

useGSAP(() => {
  gsap.to(".cards-wrapper-container", {
    backgroundColor: "#000000",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".cards-wrapper-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.3,
    },
  });
}, { scope: main });


  useGSAP(() => {
    // Get an array of all the card elements
    const cards = gsap.utils.toArray(".design-card");

    cards.forEach((card, index) => {
      gsap.fromTo(card, {
        y: 10,        
        opacity: 1,
        scale: 0.95,
        ease: "power1.inOut", 
       skewX: 0, },{
          opacity: 1,
          skewX: -3,
          scale: 0.8,
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: "bottom top", 
          scrub: 1, 
        },
      });
    });
  }, { scope: main });


  return (
    <div ref={main}>
      <div>
        <h1 className='text-center text-6xl text-gray-900 font-black'>TASTE BY DESIGN</h1>
        
        <div className='cards-container relative min-h-[250vh] pt-[10vh] cards-wrapper-container rounded-b-3xl'>
        
        {DesignCards.map((item, index) => (
          <div 
            key={item.id} 
            style={{
              backgroundColor: item.color,
              top: `calc(10vh + ${index * 10}px)`
            }} 
            className='design-card sticky h-[450px] md:h-[590px]  justify-between flex flex-col md:w-3/4 mx-auto rounded md:px-5 cursor-pointer space-y-6 '
          >
            <h1 className='text-gray-800 text-3xl text-center mt-5 font-extrabold'>{item.title}</h1>
            <img src={item.image} alt='project'  className=' h-[200px] w-full md:h-[400px] mx-auto items-center md:rounded object-cover mb-2 brightness-75 shadow shadow-blue-400'/>
            <p className='text-end px-3 text-gray-900 text'>{item.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default DesignWork