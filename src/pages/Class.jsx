import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ClassHero from '../components/ClassHero/ClassHero'
import Features from '../components/Features/Features'
import Extra from '../components/Extra/Extra'
import Subject from '../components/Subject/Subject'

const Class = () => {
  return (
    <div>
        <Navbar />
        <ClassHero />
        <Features />
        <Subject />
        <Extra />
        <Footer />
    </div>
  )
}

export default Class