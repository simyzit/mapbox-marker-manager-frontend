import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'
import Map from './components/map/Map'
import Login from './components/login/Login'
import NoPage from './components/404/NoPage'
import Registration from './components/registration/Registration'


import './App.css'

const location = {
  address: 'Center',
  lat: 0,
  lng: 0,
} 

function App() {
  return (
    <div className="App">
		<Router>
		  <Routes>
			<Route path="/" element={<Login />}>
			  <Route index element={<Login />} />
			  <Route path="login" element={<Login />} />
			  <Route path="registration" element={<Registration />} />
			  <Route path="*" element={<NoPage />} />
			</Route>
		  </Routes>
		</Router>
		{
		/*<IntroSection />
		<ContactSection />
		<DisclaimerSection />
		<Map location={location} zoomLevel={10} />
		<FooterSection />*/
		}
    </div>
  )
}

export default App
