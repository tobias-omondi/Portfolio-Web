import React, { useRef } from 'react';

import designImage from '/src/assets/_.avif';


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
  
  return (
    <div  className="overflow-x-hidden">
      <div className='bg-blue-300' aria-hidden="true" />

      {/* This container will be used for your new animation logic */}
      <div
        className="relative flex flex-row flex-nowrap items-center h-screen"
      >
        {workPortfolio.map((portfolioItem) => (
          <div
            key={portfolioItem.id}
            className="w-screen h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 flex-shrink-0"
          >
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-[500px]  overflow-hidden shadow-xl">
                <img
                  src={portfolioItem.image}
                  alt={portfolioItem.title}
                  className="w-full h-full object-contain md:object-cover brightness-90 "
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-8 flex flex-col items-center md:items-start justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                {portfolioItem.topictitle}
              </h1>
              <p className="text-gray-950 text-base md:text-lg max-w-md leading-relaxed">
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
