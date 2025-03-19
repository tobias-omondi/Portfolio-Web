import React from 'react'
import './Project.css'

// const ProjectData = {
//     all: {
//         image: allImage,
//         title: "All Projects",
//         description: "Showcasing all projects, including Web, Brand, and Technical Writing.",
//         items: [
//           { id: 1, title: "Brand Design", category: "brand" },
//           { id: 2, title: "Website Development", category: "web" },
//           { id: 3, title: "Technical Writing Guide", category: "technical" },
//         ],
//       },
// }

const Projects = () => {
    // const [activeCategory, setActiveCategory] = useState ("all")

    // function to handle button click
    // const handleclick = (category) => setActiveCategory(category);

      // Get filtered content based on active category
//   const { image, title, description, items } = contentData[activeCategory];

  return (
    <div className='project-container'>
        <div className='project-container'><h2>Showcasing Our Passion.<span> Crafted with Love.</span> </h2></div>
        <div className='project-links'>
            <div className='project-links-button'>
            <button type='button' onClick={() => handleclick ('All')}>All</button>
            </div>
            <div className='project-links-button'>
            <button type='button' onClick={() => handleclick ('web')}>Web</button>
            </div>
            <div className='project-links-button'>
            <button type='button' onClick={() => handleclick ('brand')}>Brand</button>
            </div>
            <div className='project-links-button'>
            <button type='button' onClick={() => handleclick ('technical')}>Technical writing</button>
            </div>
        </div>
        {/* Displaying projects */}
        <div>
            
        </div>
    </div>
  )
}

export default Projects;