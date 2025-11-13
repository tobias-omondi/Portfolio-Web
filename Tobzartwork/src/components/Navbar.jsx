import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { TbMenu } from "react-icons/tb";
import { MdClose } from "react-icons/md";

const navbarMenu = [
  { name: "[HOME]", link: "home" },
  { name: "[ABOUT]", link: "about" },
  { name: "[PROJECT]", link: "project" },
  { name: "[CONTACT]", link: "contact" },
];

const socialLinks = [
  { name: "LINKEDIN", link: "https://www.linkedin.com/in/tobias-ogola-8b1945273/" },
  { name: "X", link: "#" },
  { name: "INSTAGRAM", link: "#" },
  { name: "DEV.TO", link: "https://dev.to/tobiasog" },
  { name: "BEHANCE", link: "#" },
];

const Navbar = () => {
  const [toggleMenu, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef(null);
  const socialLinksRef = useRef(null);
  const buttonref = useRef(null);
  const closebuttonref = useRef(null);

  // Overlay animation
  useEffect(() => {
    if (toggleMenu) {
      setShowOverlay(true);
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0, y: -100 },
          { opacity: 1, y: 0, duration: 1.3, delay: 0.3, ease: "power4.inOut" }
        );
      }
    } else if (showOverlay && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: -500,
        duration: 1.6,
        delay: 0.5,
        ease: "power1.inOut",
        onComplete: () => setShowOverlay(false),
      });
    }
  }, [toggleMenu, showOverlay]);

  // Social links animation
  useEffect(() => {
    if (showOverlay && socialLinksRef.current) {
      const links = socialLinksRef.current.querySelectorAll("a");
      gsap.fromTo(
        links,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 3.05, ease: "elastic.out(4,0.3)", stagger: 0.09 }
      );
    }
  }, [showOverlay]);

  // Open button animation
  useEffect(() => {
    if (buttonref.current) {
      gsap.fromTo(
        buttonref.current,
        { scale: 1.4, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.7, delay: 0.3, ease: "power2.inOut" }
      );
    }
  }, [toggleMenu]);

  // Close button animation
  useEffect(() => {
    if (closebuttonref.current) {
      gsap.fromTo(
        closebuttonref.current,
        { scale: 1.3, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.7, delay: 0.3, ease: "power3.inOut" }
      );
    }
  }, [toggleMenu]);

  // 🔥 Smooth scroll handler
  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close menu after click (mobile)
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-md">
        {/* Logo */}
        <p className="text-gray-700 font-extrabold text-3xl">TOBZ</p>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-30 text-gray-800 font-medium text-lg ">
          {navbarMenu.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleScroll(item.link)}
                className="hover:text-blue-500 transition-all duration-300 delay-150 cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          {!toggleMenu ? (
            <button
              ref={buttonref}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="text-black text-2xl"
            >
              <TbMenu size={30} />
            </button>
          ) : (
            <button
              ref={closebuttonref}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white text-2xl"
            >
              <MdClose size={30} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile overlay */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className="fixed inset-0 custom-gradient flex flex-col justify-center items-center z-40 w-full h-full"
        >
          <ul className="flex flex-col items-center gap-10">
            {navbarMenu.map((item) => (
              <li key={item.name} className="text-white text-4xl font-medium">
                <button onClick={() => handleScroll(item.link)}>{item.name}</button>
              </li>
            ))}
          </ul>

          <div
            ref={socialLinksRef}
            className="absolute bottom-6 flex gap-6 text-gray-300 text-lg"
          >
            {socialLinks.map((link) => (
              <a key={link.name} href={link.link} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
