import React from 'react'
import "../styles/header.css"
import pritner from "../assets/printer.png"
const Header = () => {
  return (
    <>

    <div className='gray-bg'>
        <div className='printer-img'>
            <img src={pritner} alt="" />
        </div>

        <div className='printer-content'>
            <h3>UNLIMITED DATA</h3>
            <h1> <span className='weight'>Digital Innovation and the </span><br />
            Future of Digital Marketing</h1>
            <p>Boost your digital marketing campaigns and increase your conversion rates</p>
            <button>Learn more</button>
        </div>
    </div>

    
    </>
  )
}

export default Header
