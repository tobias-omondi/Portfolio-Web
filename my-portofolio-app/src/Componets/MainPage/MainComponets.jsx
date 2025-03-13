import React from 'react'
import Introduction from '../IntroductionPage/Introduction'
import profilepicture from '/src/assets/potofolio profile.jpeg'

const MainComponets = () => {
  return (
    <div>
      <Introduction image={profilepicture} alt = 'portofolio profile picture '
      title="Tobias .O. Omondi" titletwo="Software Developer"
      descrption="GROW YOUR WORK WITH BEAUTIFUL CRAFTED"
      />
    </div>
  )
}

export default MainComponets
