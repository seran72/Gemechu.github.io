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
              <small><a href='https://dev.to/crisprg' target='_blank'>- Writing Blogs</a> </small> <br></br>
              <small>- Programming</small><br></br>
              <small>- Golden Retrievers</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
              <h5>Career Status</h5>
              <small>- IT Ops Intern @ TESLA</small>
            </article>
          </div>

          <p>
              4th year Computer Science at California State University,
              Sacramento. I'm fascinated by computing and always looking for
              ways to learn, improve and expand my technical skills.
              I'm excited by new opportunities and particularly interested in Software Engineering, Cyber Security, 
              and Machine Learning. 
          </p>
          
          <a href='#contact' className='btn btn-secondary'  > Let's Talk</a>
          
        </div>
      </div>
      <div className='screen'></div>
    </section>
  )
}

export default About