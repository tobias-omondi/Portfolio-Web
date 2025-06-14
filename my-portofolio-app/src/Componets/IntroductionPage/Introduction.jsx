import React from 'react'
import './Introduction.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Introduction = ({image, title, titletwo,titlethree, descrption}) => {
  return (
    <>
    <div className='introdtion-container'>
      <img src={image} alt='portofolio profile picture' />
      <div className='title-introdution'>
        <h2>{title}</h2>
        <h1>{titletwo}</h1>
        <h1>{titlethree}</h1>
        <div className='socialmedia-icons'>
          <a href='https://www.linkedin.com/in/tobias-ogola-8b1945273/' ><FaLinkedin size={25}/></a>
          <a href='https://x.com/TobiasOG_' ><FaXTwitter size={25}/></a>
          <a href='https://github.com/tobias-omondi' ><FaGithub size={25}/></a>
        </div>
      </div>
    </div>
    <div className='description-title'>
       <p>{descrption}</p>
      </div>
    </>
  )
}

export default Introduction
