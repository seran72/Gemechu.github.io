import React from 'react'
import './header.css'
import CTA from "./CTA"
import  Headersocial  from './Headersocial'
import bgg from '../../img/bg.jpg'



const Header = () => {
  return (
    
    <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <a href='' className='sg'>Seran Gemechu</a>
          <h5 className="text-light" >Software Developer</h5>
          <CTA/>  
          <Headersocial/>
          <div className='me'>
          </div>
          <div className='header_scroll'></div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>  
    </header>
  )
}

export default Header 

