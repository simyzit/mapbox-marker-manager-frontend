import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'
import Map from './components/map/Map'

import './App.css'

const location = {
  address: 'Center',
  lat: 0,
  lng: 0,
} 

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <DisclaimerSection />
	  <Map location={location} zoomLevel={10} />
      <FooterSection />
    </div>
  )
}

export default App
