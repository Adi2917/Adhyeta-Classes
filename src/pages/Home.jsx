import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Who from '../components/HomeMiddleSection/Who.jsx'
import Why from '../components/HomeMiddleSection/Why.jsx'
import User from '../components/users/User'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Who />
        <Why />
        <User/>
        <Contact />
        <Footer />
    </div>
  )
}

export default Home