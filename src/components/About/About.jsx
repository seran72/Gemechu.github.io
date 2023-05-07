import React from 'react'
import './about.css'
import ME from '../../img/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know a little </h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
            <div className='about_me-img'>
            <img src={ME} alt='' />
            </div>
          </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>- IT</small> <br></br>
              <small>- Cyber Security</small><br></br>
              <small>- Machine Learning</small><br></br>
              <small>- Software Engineering</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>I like:</h5>
              <small>- Soccer</small> <br></br>
              <small>- Reading</small> <br></br>
              <small>- Programming</small><br></br>
              <small><a href='https://cyberwbo.blogspot.com/' target='blank'>- Writing Blogs</a> </small> <br></br>
              <small>- Golden Retrievers</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Career Status</h5>
              <small>- IoT Application Engineer @EW</small>
            </article>
          </div>

          <p>
          As a recent Computer Science graduate from California State University, Sacramento, 
          I am deeply passionate about computing and always seeking to enhance my technical skills. 
          My eagerness to learn and improve has fueled my fascination with technology, particularly 
          in the areas of DevOps, Software Engineering, Cyber Security, and Machine Learning. I find 
          these fields to be both exciting and challenging, and I am constantly seeking out new opportunities 
          to apply my knowledge and expertise.
          </p>
          
          <a href='#contact' className='btn btn-secondary'  > Let's Talk</a>
          
        </div>
      </div>
      <div className='screen'></div>
    </section>
  )
}

export default About