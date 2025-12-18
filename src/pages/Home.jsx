import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Who from '../components/homemiddlesection/who'
import Why from '../components/homemiddlesection/Why'
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