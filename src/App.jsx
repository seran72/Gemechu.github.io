import React from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation.js'
import Project from './components/Project/Project.jsx'



const App = () => {
  return (
    <>
      <BackgroundAnimation/>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App