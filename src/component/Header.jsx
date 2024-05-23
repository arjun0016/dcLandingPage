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
            <h3>SPECIAL OFFERS</h3>
            <h1> <span className='weight'>Save 75% On</span><br />
            Total Monthly Cost</h1>
            <p>Experience the pinnacle of cost-effective efficiency with our exclusive printer rental offer, which includes not only the printer but also toner, spare parts, consumables, and full maintenance services, all for the incredible price of 100 AED. Elevate your workplace dynamics with our printers' dependability and performance, guaranteeing that every document is generated with precision and clarity while staying within your budget.</p>
            <button>Learn more</button>
        </div>
    </div>

    
    </>
  )
}

export default Header
