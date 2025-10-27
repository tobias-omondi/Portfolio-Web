import React from 'react'
import { useEffect, useState } from 'react'

const Footer = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime (new Date());
    }, 1000)

    return () => clearInterval(timer);
  }, [])

  
  return (  
    <div className='space-y-5 mt-10 height-full'>
      <hr className="border-t border-gray-600 w-full" />
    <div className='p-10 flex flex-col-reverse md:flex-row justify-between items-center space-y-4'>
        <a href='mailto:' className='text-gray-500'>tobiasogola42@gmail.com</a>
        <div>
          <span className='text-gray-600'> {time.toLocaleTimeString()}</span>
        </div>
    </div>
  
      <div className='flex flex-col md:flex-row space-x-3 md:space-x-6 text-center  md:text-end md:justify-end items-center md:px-10 mt-5'>
        <a href='linkedin.com/in/tobias-ogola-5b4b2521b' className='text-gray-800'>LINKEDIN</a>
        <a href='linkedin.com/in/tobias-ogola-5b4b2521b' className='text-gray-800'>X</a>
        <a href='linkedin.com/in/tobias-ogola-5b4b2521b' className='text-gray-800'>INSTAGRAM</a>
        <a href='linkedin.com/in/tobias-ogola-5b4b2521b' className='text-gray-800'>BEHANCE</a>
        <a href='linkedin.com/in/tobias-ogola-5b4b2521b' className='text-gray-800'>DEV.TO</a>
    </div>
    <div className='mt-10'>
      <h5 className='text-gray-300 text-7xl md:text-[14rem] text-center font-black mb-0 pb-0'>TOBZ WORK</h5>
    </div>
    </div>
  )
}

export default Footer
