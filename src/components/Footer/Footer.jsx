import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container '>

      {/*left SIde */}

      <div className='flexColStart f-left'>
      <img src='./logo2.png' alt="" width={120} />

      <span className ="secondaryText">
      Our Vision is to make Elevating India's Soft Power Globally <br/>
      Pioneering Influence on the Geopolitical Stage...
      </span>
      </div>

      <div className=' flex ColStart f-right'>
      <span className='primaryText'>Information </span>
      <span className='secondaryText'> </span>


      <div className='flexCenter f-menu'>
     
      <span>Home</span>
      <span>StartUps</span>
      <span>Our Policy </span>
      <span>Contacts </span>

      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Footer
