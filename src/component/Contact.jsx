import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className='contact'>

        <div className='contact_form'>
            <div>
                <h1>Contact Us</h1>
                <p>Need to get in touch with us ? Either fill out the form with your inquiry or find the email you'd like to</p>
            </div>

            
        <div className='contact-inp'>
        <form action="">

                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" />
                <label htmlFor="">Eamil</label>
                <input type="email" name="Email" id="" />
                <label htmlFor="">Message</label>
                <input type="text" name="message" id="" />

        </form>
        </div>

        </div>

    </div>
  )
}

export default Contact
