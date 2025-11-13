import React, { useRef } from "react";
import designImage from "/src/assets/_.avif";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

// ✅ Register only actual GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const workPortfolio = [
  {
    id: 1,
    image: designImage,
    topictitle: "DISCOVER THE FEELING",
    description:
      "My work blends front-end development, UI/UX, and motion to create experiences that don’t just look good, but move people. Scroll down and discover the feeling for yourself.",
  },
];

const Work = () => {
  // ✅ The main container ref
  const workMainRef = useRef();

  // ✅ GSAP hook
  useGSAP(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".work-section");

      // ✅ Animate each section separately
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 200, opacity: 0,  rotation: -20, },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            rotation: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "center center",
              scrub: 1.3,
              once: true,
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });
    }, workMainRef);

    // ✅ Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden py-16">
      <div className="bg-blue-300" aria-hidden="true" />

      {/* ✅ Scope GSAP inside this ref */}
      <div
        ref={workMainRef}
        className="relative flex flex-row flex-nowrap items-center h-screen"
      >
        {workPortfolio.map((portfolioItem) => (
          <div
            key={portfolioItem.id}
            className="work-section w-screen h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 flex-shrink-0 gap-9"
          >
            {/* Image side */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-0">
              <div className="w-full max-w-[1000px] overflow-hidden shadow-xl">
                <img
                  src={portfolioItem.image}
                  alt={portfolioItem.title}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
            </div>

            {/* Text side */}
            <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-2 flex flex-col items-center md:items-start justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                {portfolioItem.topictitle}
              </h1>
              <p className="text-gray-600 text-xl max-w-md leading-relaxed">
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
