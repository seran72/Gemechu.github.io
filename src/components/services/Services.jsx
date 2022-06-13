import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>experience</h5>
      <h2>More In Depth</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Software Engineering</h3>
          </div>
          <ul className='service_list'>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Java</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Django</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Docker</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>PostgreSQL </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>HTML - CSS - JS</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Data Structures and Algorithms</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>IT and Info Sec</h3>
          </div>

          <ul className='service_list'>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>SD-WAN </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Kali Linux</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Wireshark </p>
            </li>
            
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Metasploit - Malware Evasion </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Intel NUC - firmware caching server </p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Networking TCP-IP-DNS-DHCP-VLAN</p> <br></br>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>DS - Machine Learning</h3>
          </div>

          <ul className='service_list'>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Keras</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Python</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Pandas</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Classification</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Google Colab</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Data Pre-processing </p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services