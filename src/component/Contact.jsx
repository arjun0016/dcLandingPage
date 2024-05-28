import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_form">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            Need to get in touch with us ? Either fill out the form with your
            inquiry or find the email you'd like to
          </p>
        </div>

        <div className="contact-inp">
          <form action="">
            <input type="text" name="name" id="" placeholder="Name" />
            <input type="email" name="Email" id="" placeholder="Email" />
            <input type="textArea" name="message" id="" placeholder="Message" />
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
