import React from 'react'
import '../App.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <div className='navbar-components'>
      <div>
        <nav>
        <ul>
            <li><Link to = "questions" smooth = {true} duration={500}>Questions</Link></li>
        </ul>
        <ul className='contact-container'>
            <button>
            <li><Link to = "contact" smooth = {true} duration={500}>Contact</Link></li>
            </button>
        </ul>
        <ul className='contact-pricing'>
            <button>
            <li><Link to='pricing' smooth = {true} duration={500}>Pricing</Link></li>
            </button>
        </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Navbar
