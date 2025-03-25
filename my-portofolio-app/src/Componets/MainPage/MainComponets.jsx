import React from 'react'
import Introduction from '../IntroductionPage/Introduction'
import profilepicture from '/src/assets/potofolio profile.jpeg'
import SliderTech from '../IntroductionPage/SliderTech'
import Topic from '../IntroductionPage/Topic'

const MainComponets = () => {
  return (
    <div>
      <Introduction image={profilepicture} alt = 'portofolio profile picture '
      title="Tobias .O. Omondi" titletwo="Software Developer"
      descrption="GROW YOUR WORK WITH BEAUTIFUL CRAFTED"
      />
      <SliderTech/>
      <Topic title="As a Software Developer, I specialize in crafting software solutions for Startups and SaaS products, while collaborating with teams to bring ideas to life."/>
    </div>
  )
}

export default MainComponets
