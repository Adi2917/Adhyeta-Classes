import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Facility from '../components/Facility/Facility'
import AdmissionHero from '../components/AdmissionHero/AdmissionHero'

const Admission = () => {
  return (
    <div>
        <Navbar />
        <AdmissionHero />
        <Facility />
        <Footer />
    </div>
  )
}

export default Admission