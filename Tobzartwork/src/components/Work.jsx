import React from 'react'
import designImage from '/src/assets/_.avif' 

const workPortfolio = [
  {id: 1, title: "Design Work", image: designImage, topictitle: "DISCOVER THE FEELING", description: "My work blends front-end development, UI/UX, and motion to create experiences that don’t just look good, but move people. Scroll down and discover the feeling for yourself."},
]

const Work = () => {
  return (
    <div className='py-44 px-4'>
      <div className='flex flex-row items-center justify-center gap-8 mx-auto max-w-7xl'>
        
        {workPortfolio.map((portfolioItem) => (
          <div 
            key={portfolioItem.id} 
            className='flex flex-col md:flex-row rounded-lg overflow-hidden'>

            <div className='w-full md:w-1/2'> 
              <h2 className='text-3xl text-center text-gray-200 font-bold bg-blue-800 py-5 transform skew-x-[-20deg] design-bg'>
                {portfolioItem.title}
              </h2>
              <img 
                src={portfolioItem.image} 
                alt={portfolioItem.title} 
                className='w-full h-full object-cover mt-5' 
              />
            </div>

            <div className='w-full md:w-1/2 p-8 flex flex-col justify-center'>
              <p className='text-3xl text-gray-100 font-bold'>
                {portfolioItem.topictitle}
              </p>
              <h1 className='mt-4 text-gray-400 text-lg'>
                {portfolioItem.description}
              </h1>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Work