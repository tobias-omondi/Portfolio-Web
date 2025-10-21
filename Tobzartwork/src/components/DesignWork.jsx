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
  {id: 1, title: "The Design Chapter", description: "represents a new phase in your creative journey  where every project, layout, and pixel tells a part of your story. It’s not just a portfolio it’s a documentation of growth, mindset, and craft. Each section of the book/portfolio can literally be a chapter in your evolution as a designer.", color: "#9ddaf5", image: designImage},
  {id: 2, title: "Interactive Learning Hub", description: "a digital space that blends design, storytelling, and motion to make learning experiences feel alive. It’s more than a portfolio; it’s a chapter in my creative evolution where code meets curiosity.", color: "#9ddaf5", image: designImage1},
  {id: 3, title: "Graphic Design", description: "place where I translate ideas into visuals that speak, move, and inspire. Each chapter captures a different side of design from typography to brand identity, motion, and storytelling.", color: "#9ddaf5", image: designImage2},
]

const DesignWork = () => {

  // 1. Create a ref for the main component wrapper
  const main = useRef();

  // Your existing animation for the text
  useGSAP (() => {
    gsap.fromTo (".design-text", 
      {scale: 0.5,
        opacity: 0.4,
        ease: "power3.inOut",
        skewX: 0,
      },
      {
        scale: 0.8,
        skewX: 10,
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
    // Get an array of all the card elements
    const cards = gsap.utils.toArray(".design-card");

    cards.forEach((card, index) => {
      gsap.fromTo(card, {
        y: 10,        
        opacity: 1,
        ease: "power2.inOut", 
       skewX: -2, },{
          opacity: 1,
          skewX: 0,
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: "bottom top", 
          scrub: 1, 
        },
      });
    });
  }, { scope: main }); // 2. Scope this animation as well


  return (
    <div ref={main}>
      <div>
        <p className='text-center text-6xl text-gray-200 font-black design-text mt-10'>TASTE BY DESIGN</p>
        
        <div className='cards-container relative min-h-[250vh] pt-[10vh]'>
        
        {DesignCards.map((item, index) => (
          <div 
            key={item.id} 
            style={{
              backgroundColor: item.color,
              top: `calc(10vh + ${index * 10}px)` // Stacks cards 10px apart
            }} 
            className='design-card sticky h-[450px] md:h-[630px] mt-10 justify-between flex flex-col md:w-2/3 mx-auto rounded md:px-5 cursor-pointer '
          >
            <p className='text-gray-700 text-3xl text-center mt-5 font-extrabold'>{item.title}</p>
            <img src={item.image} alt='project'  className=' h-[200px] w-full md:h-[450px] mx-auto items-center md:rounded shadow-xl object-cover mb-10 brightness-75'/>
            <h1 className='text-end px-3 text-gray-700'>{item.description}</h1>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default DesignWork