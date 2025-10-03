import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

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

  return (
    <div className='w-full'>
      {/* Top-right button (always in same position) */}
      <div className="fixed top-8 right-8 z-50">
        {!toggleMenu ? (
          <button
            className='text-white font-extrabold lg:text-3xl text-3xl hover:bg-blue-900 hover:rounded-2xl cursor-pointer'
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt4 />
          </button>
        ) : (
          <button
            className="text-white text-4xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <MdClose />
          </button>
        )}
      </div>

      {/* Overlay Menu (only when open) */}
      {toggleMenu && (
        <div className='fixed inset-0 custom-gradient p-5 rounded shadow flex flex-row justify-evenly items-start z-40 w-full h-full'>
          {/* Left: Logo */}
          <div className='flex flex-col items-start flex-1'>
            <h1 className='text-7xl lg:text-9xl font-extrabold mb-10 text-white brand-name'>
              T<span className='custom-gradient2 font-medium'>/</span>O
            </h1>
          </div>
          {/* Right: Menu and Social Links */}
          <div className='flex flex-col items-center flex-1'>
            <ul>
              {navbarMenu.map((item) => (
                <li key={item.name} className='text-white text-center font-medium text-4xl py-5 px-4 hover:bg-blue-700 rounded mt-14 lg:mt-10 brand-name'>
                  <a href={item.link} onClick={() => setMenuOpen(false)}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div className='absolute bottom-6 left-4 sm:bottom-10 sm:left-10 flex flex-row flex-wrap text-lg sm:text-xl gap-4 sm:gap-8 font-extralight text-white'>
              {socialLinks.map(link => (
                <a  key={link.name} href={link.link}>{link.name} </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar