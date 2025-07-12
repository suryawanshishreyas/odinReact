// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      <div className='container' style={{fontFamily:"DM Sans", 
        backgroundColor:"rgb(255,255,255)", color:"rgb(0,0,0)",
        lineHeight:1.2, fontSize:'1rem', width:'100%', height:'100%'}}>
        <div className='header'>
          <div className='navbar'>
            <a href="#" className='logo'>Shreyas</a>
            <div className='navbar-contnents'>
              <a className='nav-comp' >Explore </a>
              <a  className='nav-comp'>Dashboard</a>
              <a className='nav-comp'>Academics</a>
              <a className='nav-comp'>Experience</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
