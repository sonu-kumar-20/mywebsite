import './Contact.css'
import React from 'react'
import myimage from "../../assets/myimage.png"

const About = () => {
  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={myimage} alt="My profile" />
      </div>

      <div className="rightcontact">
        <form action="https://formspree.io/f/meozljgd" method='POST'>
          <h1>Message me for any Website service</h1>

          <input name='username' type="text" placeholder='Enter your Name' required />
          <input type="email" name='email' placeholder='Enter Email' required />
          <input type="number" name='phone' placeholder='Enter Phone Number' required />
          
          <textarea name="message" id="textarea" placeholder='Type your message' required></textarea>

          <input type="submit" id='btn' value="Send" />
        </form>
      </div>

     
    </div>
  )
}

export default About
