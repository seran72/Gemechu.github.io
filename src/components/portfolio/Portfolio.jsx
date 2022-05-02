import React from 'react'
import './portfolio.css'

/*
const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Blockchain Tech",
    github:"google.com",
    demo: 'https://dribbble.com/shots/16433958-Cryptowall-Cryptocurrency-Dashboard?utm_source=Clipboard_Shot&utm_campaign=aweka&utm_content=Cryptowall%20-%20Cryptocurrency%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=aweka&utm_content=Cryptowall%20-%20Cryptocurrency%20Dashboard&utm_medium=Social_Share'
  }
]
*/

const Portfolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portifolio_container'>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            
          </div>
          <h3>OnStarter Game </h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-secondary'target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            
          </div>
          <h3>Item Price Teller</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-secondary' target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            
          </div>
          <h3>Vehicle Classification AI </h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-secondary'target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            
          </div>
          <h3>Yelp Business Star Rating Prediction AI</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-secondary'target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            
          </div>
          <h3>React Website Application</h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-secondary'target='_blank' >Live Demo</a>
            </div>
        </article>
        <article className='portifolio_item'>
          <div className='portifolio_item-img'>
            
          </div>
            <h3> AI-based Network Intrusion Detection System </h3>
            <div className='portifolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/' className='btn btn-secondary' target='_blank' >Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio