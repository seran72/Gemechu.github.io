import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {BsLinkedin} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'




 const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ej6f0r', 'template_fmy3mnc', form.current, '9hNQ3xn6wTTBRrEGs')
      e.target.reset()
  };

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Sdiriba33@gmail.com</h5>
            <a href='mailto:Sdiriba33@gmail.com'>
                Send a message.
            </a>
          </article>
          
          <article className='contact_option'>
          <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Seran Gemechu</h5>
            <a href='https://www.linkedin.com/in/seran-g-361925126/' target='_blank'>
                Contact Me
            </a>
          </article>
          <article className='contact_option'>
          <FiSmartphone className='contact_option-icon'/>
            <h4>Mobile</h4>
            <h5>408-858-9537</h5>
            <a href='tel:408-858-9537' target='_blank'>
                Call
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required/>
          <input type='email' name='email' placeholder='Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

