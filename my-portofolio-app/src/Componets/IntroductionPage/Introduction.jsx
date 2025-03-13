import React from 'react'
import './Introduction.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Introduction = ({image, title, titletwo, descrption}) => {
  return (
    <>
    <div className='introdtion-container'>
      <img src={image} alt='portofolio profile picture' />
      <div className='title-introdution'>
        <h2>{title}</h2>
        <h1>{titletwo}</h1>
        <div className='socialmedia-icons'>
          <a href='#' ><FaLinkedin size={25}/></a>
          <a href='#' ><FaXTwitter size={25}/></a>
          <a href='#' ><FaInstagramSquare size={25}/></a>
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
