import React, { useState } from 'react';
import './Project.css';
import { Link } from "react-router-dom";
import brandimage from '/src/assets/Aiml.jpeg';
import brandimageone from '/src/assets/computer-vision.png'
import webimage from '/src/assets/webone.jpeg';
import technicalimageone from '/src/assets/Technology.jpg'
import technicalimage from '/src/assets/webthree.jpeg';
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

const ProjectData = {
  all: {
    title: "All Content",
    items: [
      { id: 1, title: "Brand Article", category: "brand", image: brandimage },
      { id: 2, title: "Web developemt", category: "web", image: webimage , github: 'https://github.com/tobias-omondi/Fanaka_kids_talent_academy_react' },   // link: "https://fanaka-kids-talent-academy-react.vercel.app/"
      { id: 3, title: "Technical Writing Article 1", category: "technical", image: technicalimage },
    ],
  },
  brand: {
    title: "Brand Articles",
    items: [
      { id: 1, title: "Brand Article", category: "brand", image: brandimage },
      { id: 2, title: "Brand Article", category: "brand", image: brandimageone },
    ],
  },
  technical: {
    title: "Graphic Designs",
    items: [
      { id: 1, title: "Graphic design Project ", category: "technical", image: technicalimage },
      { id: 2, title: "Graphic design Project ", category: "technical", image: technicalimageone  },
    ],
  },
  web: {
    title: "Web Development Articles & Design",
    items: [
      { id: 1, title: "Fanaka website", category: "web", image: webimage  }, //link: "https://fanaka-kids-talent-academy-react.vercel.app/"
      { id: 2, title: "School website", category: "web", image: technicalimage},
    ],
  },
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to handle button click
  const handleClick = (category) => setActiveCategory(category);

  // Get filtered content based on active category
  const { title, items } = ProjectData[activeCategory];

  return (
    <div className="project-container">
      <div className="project-header">
        <h2>Showcasing Our Passion.<span> Crafted with Love.</span></h2>
      </div>
      
      {/* Button navigation */}
      <div className="project-links-button">
        <button className={activeCategory === "all" ? "active" : ""} onClick={() => handleClick("all")} > All </button>
        <button className={activeCategory === "web" ? "active" : ""} onClick={() => handleClick("web")}> Web </button>
        <button className={activeCategory === "brand" ? "active" : ""} onClick={() => handleClick("brand")} > Brand </button>
        <button className={activeCategory === "technical" ? "active" : ""} onClick={() => handleClick("technical")}> Graphic Design</button>
      </div>


      <div className="project-content">
        <h3>{title}</h3>
        <div className="project-items">
          {items.map((item) => (
            <div key={item.id} className="project-item">
              <img src={item.image} alt={item.title} className="project-item-image" />

              <div className='projects-title-links'>
              <h4>{item.title}</h4>

              {/* Conditionally render Link or external <a> */}
                {item.link ? (
                    item.link.startsWith("http") ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"> <CgWebsite size={30}/> </a>
                ) : (
              <Link to={item.link}>Read More</Link>
                )
                ) : (
              <p>No Link Available</p>
               )}
            </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default Projects;
