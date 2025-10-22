import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import designImage from '/src/assets/_.avif';
import designImage1 from '/src/assets/ball-63527_1280.avif';

// work
import projectOne from "/src/assets/work.avif"
import projectTwo from "/src/assets/work2.avif"

import { FaLinkSlash } from "react-icons/fa6";

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

const projectImage = [
  {id: 1, projectImage: projectOne, link: "https://schoolapplication-one.vercel.app/"},
  {id: 2, projectImage: projectTwo, link: "https://lapa-weld.vercel.app/"}
]

const Work = () => {
  const containerRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const panelsRef = useRef([]);

  useGSAP(() => {
    const panels = panelsRef.current;

    // Horizontal scroll animation
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: horizontalSectionRef.current,
        pin: true,
        scrub: 1,

        end: () =>
          "+=" +
          (horizontalSectionRef.current.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    // Title animation
    gsap.fromTo(
      '.title-work',
      { opacity: 0.3, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: horizontalSectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  // Number of total panels including last one
  const totalPanels = workPortfolio.length + 1;

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <div className='bg-transparent' aria-hidden="true" />

      <div
        ref={horizontalSectionRef}
        // Width large enough for all panels
        className={`relative flex flex-row flex-nowrap items-center overflow-hidden w-[${totalPanels * 100}vw] h-screen`}
        style={{ width: `${totalPanels * 100}vw` }}
      >
        {workPortfolio.map((portfolioItem, index) => (
          <div
            key={portfolioItem.id}
            ref={(el) => (panelsRef.current[index] = el)}
            className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 flex-shrink-0 title-work"
          >
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-8">
              <p className="text-2xl md:text-4xl text-center text-gray-900 font-black mb-4 px-4 py-2 ">
                {portfolioItem.title}
              </p>

              <div className="w-full max-w-[500px] aspect-[4/3] overflow-hidden shadow-xl">
                <img
                  src={portfolioItem.image}
                  alt={portfolioItem.title}
                  className="w-full h-full object-contain md:object-cover brightness-90 "
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-8 flex flex-col items-center md:items-start justify-center">
              <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 title-work">
                {portfolioItem.topictitle}
              </p>
              <h1 className="text-gray-950 text-base md:text-lg max-w-md leading-relaxed title-work">
                {portfolioItem.description}
              </h1>
            </div>
          </div>
        ))}

        {/* Last Panel */}
        <div
          ref={(el) => (panelsRef.current[workPortfolio.length] = el)}
          className="horizontal-panel w-screen h-full flex items-center justify-center"
        >
          <div className=' w-screen h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 flex-shrink-0 title-work'>
            <div className='flex flex-col md:flex-row gap-10 '>
              {projectImage.map((item) => (
                <div key={item.id}>
                  <img src={item.projectImage} className='w-full h-full  shadow-2xl brightness-90' />
                  <a key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="text-gray-900 hover:text-gray-500 text-xl transition-transform duration-300 hover:scale-110 text-end"> visit site</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;