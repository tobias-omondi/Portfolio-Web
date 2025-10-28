import React, { useEffect } from "react";
import myImage from "/src/assets/portfolio.avif";
import "./Project.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Project = () => {
  useGSAP(() => {
    // Portfolio reveal
    gsap.fromTo(
      ".project-portfolio",
      { y: 50, skewY: 3 },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 1.5,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".project-portfolio",
          start: "top 85%",
          end: "top 50%",
          scrub: 1.2,
        },
      }
    );

    // Parallax image
    gsap.to(".project-profile", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".project-portfolio",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text stagger animation
    const text = document.querySelector(".project-about p");
    if (text) {
      const words = text.innerText.split(" ");
      text.innerHTML = words.map((word) => `<span class="word">${word}</span>`).join(" ");

      gsap.fromTo(
        ".project-about .word",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.19,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".project-about",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  return (
    <div className="project-container">
      <div className="project-section project-portfolio">
        <img src={myImage} alt="myprofile" className="project-profile" />
      </div>

      <div className="project-title">
        <h2>Projects Worked</h2>
        <div className="project-links">
          <a
            href="https://schoolapplication-one.vercel.app/"
            className="project-link-item  text-gray-500"
          >
            School Application
          </a>
          <a
            href="https://lapa-weld.vercel.app/"
            className="project-link-item  text-gray-500"
          >
            Lapa
          </a>

          <div className="project-about text-gray-950">
            <p>
              Artwork Design, Graphic Design, Front-end, Backend Development,
              Animations & ThreeD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
