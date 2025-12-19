import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/footer/Footer'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactOption from '../components/ContactOption/ContactOption'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <ContactHero />
        <ContactOption />
        <ContactForm/>
        <Footer />
    </div>
  )
}

export default Contact