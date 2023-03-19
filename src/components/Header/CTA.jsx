import React from 'react';
import SG from '../../img/SeranGemechu.pdf'

 const CTA = () => {
  return (
    <div className='cta'>
        <a href={SG} download>
          <h1 className='button btnnn btn-1 '>Resume </h1>
        </a>
        <a href='#contact'>
         <h1> <a href="https://cyberwbo.blogspot.com/"   className='button btnnn btn-1' target="_blank">  Blog   </a> </h1> 
        </a>
    </div>
  )
}

export default CTA
