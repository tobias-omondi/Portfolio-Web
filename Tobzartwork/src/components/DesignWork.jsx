import React from 'react'

// lets import images
import designImage from "/src/assets/design.avif"
import designImage1 from "/src/assets/work.avif"
import designImage2 from "/src/assets/Today's poster.jpeg"


const DesignCards = [

  {id: 1, title: "The Design Chapter", description: "represents a new phase in your creative journey  where every project, layout, and pixel tells a part of your story. It’s not just a portfolio it’s a documentation of growth, mindset, and craft. Each section of the book/portfolio can literally be a chapter in your evolution as a designer.", color: "#60A5FA", image: designImage},

  {id: 2, title: "Interactive Learning Hub", description: "a digital space that blends design, storytelling, and motion to make learning experiences feel alive. It’s more than a portfolio; it’s a chapter in my creative evolution where code meets curiosity.”", color: "#FBBF24", image: designImage1},

  {id: 3, title: "Graphic Design", description: "place where I translate ideas into visuals that speak, move, and inspire. Each chapter captures a different side of design from typography to brand identity, motion, and storytelling.", color: "#34D399", image: designImage2},

  // {id: 4, title: "Design four", description: "Text work flow", color: "#A855F7"},
]

const DesignWork = () => {
  return (
    <div>
      <div>
        <p className='text-center text-6xl text-gray-50'>TASTE BY DESIGN</p>
        {DesignCards.map(item => (
          <div key={item.id} style={{backgroundColor: item.color}} className='h-[670px] mt-10 justify-between flex flex-col w-3/4 mx-auto rounded px-5 cursor-pointer'>
            <p className='text-gray-700 text-3xl text-center mt-5 font-extrabold'>{item.title}</p>
            <img src={item.image} alt='project'  className='w-full h-[500px] mx-auto items-center rounded shadow-xl object-cover mb-10 brightness-75'/>
            <h1 className='text-end px-3 text-gray-700'>{item.description}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignWork
