import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// work images
import designImage from '/src/assets/_.avif';
import designImage1 from '/src/assets/schoolproject.avif';

gsap.registerPlugin(ScrollTrigger);

const workPortfolio = [
  { id: 1, title: "Design Work", image: designImage, topictitle: "DISCOVER THE FEELING", description: "My work blends front-end development, UI/UX, and motion to create experiences that don’t just look good, but move people. Scroll down and discover the feeling for yourself." },
  { id: 2, title: "Front-End Work", image: designImage1, topictitle: "A TASTE OF MOTION", description: "A glimpse into how I use motion to transform ideas into living, breathing experiences." },
];

const Work = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const horizontalSectionRef = useRef(null); // Ref for the horizontal section

  useGSAP(() => {
    // A GSAP context automatically handles cleanup on component unmount
    gsap.context(() => {
      const panels = gsap.utils.toArray(".horizontal-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${wrapperRef.current.offsetWidth}`,
        },
      });
      
      gsap.fromTo(".title-work", {
        opacity: 0.3,
        scale: 0.7
      }, {
        opacity: 1,
        scale: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".title-work",
          start: "top 80%",
          end: "top 50%",
          scrub: 1.5,
        }
      });
    }, containerRef);
  }, []); 

  return (
    <div ref={containerRef} className='horizontal-scroll-container py-20 px-10 h-screen overflow-hidden'>
      <div ref={wrapperRef} className='horizontal-wrapper flex flex-row items-center justify-start gap-8 mx-auto h-screen overflow-hidden'>
        <div className='flex flex-col md:flex-row'>
        
        {workPortfolio.map((portfolioItem) => (
          <div 
            key={portfolioItem.id} 
            className='horizontal-panel flex flex-col md:flex-row overflow-hidden w-full h-full flex-shrink-0'
          >
            <div className='w-full md:w-1/2'> 
              <h2 className='text-4xl text-center text-gray-200 font-bold py-5 design-bg skew-x-[25deg] '>
                {portfolioItem.title}
              </h2>
              <img 
                src={portfolioItem.image} 
                alt={portfolioItem.title} 
                className='w-full object-cover mt-5 transform skew-y-[-3deg] brightness-75 shadow-xl rounded-2xl title-work' 
              />
            </div>

            <div className='w-full md:w-1/2 p-8 flex flex-col justify-center'>
              <p className='text-3xl text-gray-100 font-bold text-center title-work'>
                {portfolioItem.topictitle}
              </p>
              <h1 className='mt-4 text-gray-200 text-lg text-center title-work'>
                {portfolioItem.description}
              </h1>

            
            </div>
          </div>
        ))}

         <div className='horizontal-wrapper w-full bg-blue-700 p-20'>  
          {/* selected project */}
               <p className='text-white text-6xl'>PROJECT SELECTED</p> 
            </div>
        </div>
         
      </div>
    </div>
  );
}

export default Work;
