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
      
      gsap.set(splitText.chars, { opacity: 0, y: 200 });
      gsap.to(splitText.chars, {
        y: 0,
        opacity: 1,
        stagger: {
           grid: [7,15],
           from: 11,
           axis: "x",
           ease: "power2.in",
           amount: 1.2
        },
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 80%", 
          end: "top 40%",
          scrub: 1.5,
        },
      });

      return () => {
        // Revert SplitText instance to avoid duplicates
        splitText.revert();
      };
    }, aboutRef); // Scope the GSAP context to the ref

    // Cleanup function that reverts all animations
    return () => ctx.revert();

  }, []); // Empty dependency array for one-time run

  return (
    <div className='text-name mt-10' ref={aboutRef}>
      <h1 className='text-6xl text-center text-gray-50'>About</h1>
      <div>
        <p className='about-me text-2xl w-full md:text-4xl text-center mx-auto text-medium space-y-1.5 lg:space-y-4 font-medium'>
          <span className='text-3xl lg:text-6xl'> 👋 </span> Pleased to meet you, and thank you for visiting my website. I’m a <br/>
          <span className='font-bold'> Front-End Developer and UI/UX Designer</span> <br/>
          who loves creating amazing things that go beyond imagination.based in <br/>
          <span className='bg-white px-5 py-2 skew-y-6 shadow-2xl text-shadow-blue-500 '>Nairobi,Kenya</span>
        </p>
      </div>
    </div>
  );
};

export default About;
