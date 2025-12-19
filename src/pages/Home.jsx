import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Who from '../components/MiddleSection/Who'
import Why from '../components/MiddleSection/Why'
import User from '../components/users/User'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Who />
        <Why />
        <Contact />
        <User/>
        <Footer />
    </div>
  )
}

export default Home