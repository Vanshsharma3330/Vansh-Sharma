import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import WorkExperience from './sections/WorkExperience'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        <LogoSection/>
        <FeatureCards/>
        {/* <WorkExperience/> */}
        <ExperienceSection/>
        <TechStack/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
