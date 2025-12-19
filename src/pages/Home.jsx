import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Who from '../components/MiddleSection/Who'
import Why from '../components/MiddleSection/Why'
import User from '../components/users/User'
import ContactForm from '../components/ContactForm/ContactForm'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Who />
        <Why />
        <ContactForm />
        <User/>
        <Footer />
    </div>
  )
}

export default Home