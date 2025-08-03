import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Popular from './components/Popular'
import Trending from './components/Trending'
import initAOS from './components/animation'
import AOS from 'aos';
import Subscription from './components/Subscription'
import Footer from './components/Footer'
function App() {
  useEffect(() => {
    initAOS();
    
    AOS.refresh();
  }, []);

  return (
    <>
     <Header />
     <Hero/>
     <AboutUs/>
     <Popular/>
     <Trending/>
     <Subscription/>
     <Footer/>
    </>
  )
}

export default App
