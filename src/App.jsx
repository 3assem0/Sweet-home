import React from 'react'
import Main from './Component/Main/Main'
import Navbar from './Component/NavBarr/Navbar'
import Footer from './Component/Foooter/Foooter'
import Ready from './Component/Ready/Ready'
import Property from './Component/Featured/Property'
import Section from './Component/Section/Section'
import Subscribe from './Component/Subscribe/Subscribe'
import About from './Component/AboutUs/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Property/>
      <Ready/>
      <About/> 
      <Section/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
