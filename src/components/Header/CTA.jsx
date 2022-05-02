import React from 'react';
import CV from '../../img/cv.pdf'




 const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>
          <h1 className='button btnnn btn-1 '>Resume </h1>
        </a>
        <a href='#contact'>
          <h1 className='button btnnn btn-1'>Let's Talk</h1>
        </a>
    </div>
  )
}

export default CTA
