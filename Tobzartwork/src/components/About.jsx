import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Register plugins once
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Guard against running on server and if ref is not yet set
    if (!aboutRef.current) return;

    // Use gsap.context() for automatic cleanup
    const ctx = gsap.context(() => {
      const splitText = new SplitText(".about-me", {
        type: "chars, words, lines",
        smartWrap: true,
        charsClass: 'chars',
        wordsClass: 'words++'
      });
      
      gsap.set(splitText.chars, { opacity: 0, y: 1000 });
      gsap.to(splitText.chars, {
        y: 0,
        opacity: 1,
        stagger: {
           grid: [7,15],
           from: 11,
           axis: "x",
           ease: "power2.in",
           amount: 1.6
        },
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 80%", 
          end: "top 40%",
          scrub: 1.5,
        },
      })
        gsap.fromTo(".country",
      {  y: 0,
        skewY: 20,
       },
        {
        y: 800,
        skewY: 20,
        ease: "power3.inout",
        scrollTrigger:{
          trigger:".hero",
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1.5,
          animated:true,
          // markers: true,
        }
      },
    );

      return () => {
        // Revert SplitText instance to avoid duplicates
        splitText.revert();
      };
    }, aboutRef); // Scope the GSAP context to the ref

    // Cleanup function that reverts all animations
    return () => ctx.revert();

  }, []); // Empty dependency array for one-time run

  return (
    <div className='text-name mt-20' ref={aboutRef}>
      <div>
        <p className='text-white about-me text-2xl w-full md:text-4xl text-center mx-auto text-medium space-y-1.5 lg:space-y-4 font-medium'>
          <span className='text-3xl lg:text-6xl'> 👋 </span> Pleased to meet you, and thank you for visiting my website. I’m a 
          <span className='font-bold text-blue-400'> Front-End Developer and UI/UX Designer</span> 
          who loves creating amazing things that go beyond imagination.based in <br/>
          <span className='country bg-white/20 px-5 py-2 skew-y-6 shadow-2xl rounded-xl text-black backdrop-blur-3xl'>Nairobi,<span className='text-red-500'>K</span>e <span className='text-green-600'>n </span> y <span className='text-white bg-black rounded-3xl'>a</span></span>
        </p>
      </div>
    </div>
  );
};

export default About;
