import React from 'react'
import AboutUs from '../Aboutus/AboutUs'
import MissionComponent from '../MissionComponent/MissionComponent'
import PaymentService from '../ServicesComponent/PaymentService'
import OurTeamComponent from '../Our Team/OurTeamComponent'
import JoinUsComponent from '../JoinUsComponent/JoinUsComponent'

const Home = () => {
  return (
    <div>
      <AboutUs/>
      <MissionComponent/>
      <PaymentService/>
      <OurTeamComponent/>
      <JoinUsComponent/>
          </div>
  )
}

export default Home
