import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import designImage from '/src/assets/_.avif';
import designImage1 from '/src/assets/ball-63527_1280.avif';

gsap.registerPlugin(ScrollTrigger);

const workPortfolio = [
  {
    id: 1,
    title: "Design Work",
    image: designImage,
    topictitle: "DISCOVER THE FEELING",
    description:
      "My work blends front-end development, UI/UX, and motion to create experiences that don’t just look good, but move people. Scroll down and discover the feeling for yourself.",
  },
  {
    id: 2,
    title: "Front-End Work",
    image: designImage1,
    topictitle: "A TASTE OF MOTION",
    description:
      "A glimpse into how I use motion to transform ideas into living, breathing experiences.",
  },
];

const Work = () => {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const panelsRef = useRef([]);

  useGSAP(() => {
    const panels = panelsRef.current;
    const horizontalContainer = horizontalSectionRef.current;

    const totalWidth = panels.reduce((acc, panel) => acc + panel.offsetWidth, 0);
    const endValue = totalWidth - window.innerWidth;

    // Horizontal scroll animation
    gsap.to(panels, {
      x: -endValue,
      ease: "none", // Use "none" for better mobile performance and predictability
      scrollTrigger: {
        trigger: horizontalContainer,
        pin: true,
        scrub: 1,
        // The end value needs to be calculated based on the content's total width
        end: () => `+=${endValue}`,
        invalidateOnRefresh: true, // Recalculate positions on window resize
      },
    });

    // Title animation
    gsap.fromTo(
      '.title-work',
      { opacity: 0.5 },
      {
        opacity: 1,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: horizontalContainer,
          start: 'top center',
          end: 'center center',
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <div className='bg-blue-300' aria-hidden="true" />

      <div
        ref={horizontalSectionRef}
        className="relative flex flex-row flex-nowrap items-center overflow-hidden h-screen"
      >
        {workPortfolio.map((portfolioItem, index) => (
          <div
            key={portfolioItem.id}
            ref={(el) => (panelsRef.current[index] = el)}
            className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 flex-shrink-0 title-work"
          >
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-8">
              <h1 className="text-2xl md:text-4xl text-center text-gray-900 font-black mb-4 px-4 py-2 ">
                {portfolioItem.title}
              </h1>

              <div className="w-full max-w-[500px] aspect-[4/3] overflow-hidden shadow-xl">
                <img
                  src={portfolioItem.image}
                  alt={portfolioItem.title}
                  className="w-full h-full object-contain md:object-cover brightness-90 "
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-8 flex flex-col items-center md:items-start justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 title-work">
                {portfolioItem.topictitle}
              </h1>
              <p className="text-gray-950 text-base md:text-lg max-w-md leading-relaxed title-work">
                {portfolioItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
