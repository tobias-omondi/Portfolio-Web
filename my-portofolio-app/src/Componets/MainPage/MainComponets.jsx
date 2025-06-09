import React from 'react'
import Introduction from '../IntroductionPage/Introduction'
import profilepicture from '/src/assets/potofolio profile.jpeg'
import SliderTech from '../IntroductionPage/SliderTech'
import Topic from '../IntroductionPage/Topic'

const MainComponets = () => {
  return (
    <div>
      <Introduction image={profilepicture} alt = 'portofolio profile picture '
      title="Tobias .O. Ogola" titletwo="Software Developer & Graphic Designer"
      descrption="GROW YOUR WORK WITH BEAUTIFUL CRAFTED"
      />
      <SliderTech/>
      <Topic title="I’m a Software Developer who loves helping Startups and SaaS ideas come to life. I also enjoy graphic design to make things look great."/>
    </div>
  )
}

export default MainComponets
