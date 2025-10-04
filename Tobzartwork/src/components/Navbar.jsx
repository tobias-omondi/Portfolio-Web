import React, { useEffect, useState, useRef } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { gsap } from 'gsap'

const navbarMenu = [
  {name: 'HOME', link: '/'},
  {name: 'WORK', link: '/Work'},
  {name: 'ABOUT', link: '/About'},
  {name: 'CONTACT', link: '/Contact'}
]

const socialLinks = [
  {name: 'LINKEDIN', link: 'https://www.linkedin.com/in/tobias-ogola-8b1945273/'},
  {name: 'X', link: '#'},
  {name: 'INSTAGRAM', link: '#'},
  {name: 'DEV.TO', link: '#'},
  {name: 'BEHANCE', link: '#'}
]

const Navbar = () => {
  const [toggleMenu, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const socialLinksRef = useRef(null);
  const buttonref = useRef(null);
  const closebuttonref = useRef(null);

  useEffect(() => {
    if (toggleMenu) {
      setShowOverlay(true);
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1,
            y: 0,
            duration: 1.3,
            delay:0.3,
            ease: "power4.inOut" 
          }
        );
      }
    } else if (showOverlay && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: 500,
        duration: 1.6,
        delay:0.5,
        ease: "power4.inOut",
        onComplete: () => setShowOverlay(false)
      });
    }
  }, [toggleMenu, showOverlay]);


  // brand log t/o animatiom
    useEffect(() => {
    if (showOverlay && logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        {y: -200, scale: 1.2, opacity:0 },
        {y: 0, scale: 0.5, opacity:1, duration: 2.05, ease: "power4.inOut" }
      );
    }
  }, [showOverlay]);

  // social links animation
  useEffect(() => {
  if (showOverlay && socialLinksRef.current) {
    const links = socialLinksRef.current.querySelectorAll('a');
    gsap.fromTo(
      links,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3.05,
        ease: "elastic.out(1,0.3)",
        stagger: 0.09,
      }
    );
  }
}, [showOverlay]);

//open button animation
  useEffect(() => {
    if (showOverlay && buttonref.current) {
      gsap.fromTo(
        buttonref.current,
        {scale: 1.6, opacity: 0.7},
        {scale: 1, opacity: 1, duration:0.7, delay:0.3, ease:"power2.inOut"}
      )
    }
  }, [toggleMenu])

  // close button animation
  useEffect(() => {
    if (showOverlay && closebuttonref.current) {
      gsap.fromTo(
        closebuttonref.current,
        {scale: 1.3, opacity: 0.7},
        {scale: 1, opacity: 1, duration:0.7, delay:0.3, ease:"power2.inOut"}
      )
    }
  }, [toggleMenu])

  return (
    <div className='w-full'>
      {/* Top-right button (always in same position) */}
      <div className="fixed top-8 right-8 z-50">
        {!toggleMenu ? (
          <button
            ref = {buttonref}
            className='open-menu-button text-white font-extrabold text-xl hover:rounded-2xl cursor-pointer border-none bg-transparent'
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        ) : (
          <button
            ref={closebuttonref}
            className="text-white text-xl cursor-pointer font-extrabold border-none bg-transparent"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        )}
      </div>

      {/* Overlay Menu (only when showOverlay is true) */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className='fixed inset-0 custom-gradient p-5 rounded shadow flex flex-row justify-evenly items-start z-40 w-full h-full'
        >
          {/* Left: Logo */}
          <div className='flex flex-col items-start flex-1'>
            <h1
             ref = {logoRef}
             className='text-7xl lg:text-9xl font-extrabold mb-10 text-black brand-name'>
              T<span className='custom-gradient2 font-medium'>/</span>O
            </h1>
          </div>
          {/* Right: Menu and Social Links */}
          <div className='flex flex-col items-center flex-2'>
            <ul>
              {navbarMenu.map((item) => (
                <li key={item.name} className='text-black text-center font-medium text-4xl lg:text-6xl lg:py-4 px-4 rounded mt-16 lg:mt-10 brand-name'>
                  <a href={item.link} onClick={() => setMenuOpen(false)}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div
             ref={socialLinksRef}
             className='social-links absolute bottom-6 left-4 sm:bottom-10 sm:left-10 flex flex-row flex-wrap text-lg sm:text-xl gap-4 sm:gap-8 font-extralight text-black'>
              {socialLinks.map(link => (
                
                <a key={link.name} href={link.link}>{link.name} </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar