import React from 'react'
import "./Hero.css";

import{HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div>
      <section className ="hero-wrapper">
       
      <div className="padding innerWidth flexCenter
      
      hero-container ">
    {/*Left Side */}
      <div className=" flexColStart hero-left">
      
      <div className = "hero-title">
      <div className="orange-circle"/>
      <motion.h1
      initial ={{y:"2rem",opacity:0}}
      animate = {{y:0,opacity:1}}
      transition ={{
        duration:2,
        type : "spring"
      }}
      >
      Discover <br/> more suitable <br/> Forum 
      </motion.h1>
      </div>
       <div className  ="flexColStart  hero-des">
       <span className="secondaryText">Find a variety of StartUps that suit you very easilty</span>
       <span className = "secondaryText">Forget all difficulties in finding a way of invesment for you </span>
       </div>
        <div className ="flexCenter search-bar">
          <HiLocationMarker color="var(--blue)" size={25}/>
          <input type = "text" />
          <button className = "button">Search</button>
        </div>
         
        <div className="flexCenter stats">
        <div className ="flexColCenter stat">
         
        <span><CountUp start={84000} end={840000} duration= {5}/>
        <span>+</span></span>
        <span className = "secondaryText">Total Invesment</span>
        </div>

        <div className ="flexColCenter stat">
         
        <span><CountUp start={1} end={40} duration= {5}/>
        <span>+</span></span>
        <span className = "secondaryText">Sharks</span>
        </div>


        <div className ="flexColCenter stat">
         
        <span><CountUp start={1} end={300} duration= {4}/>
        <span>+</span></span>
        <span className = "secondaryText">Registered Startups</span>
        </div>
        </div>




      </div>
  {/*right side */}
      <div className =" flexCenter hero-right">
               <motion.div 
               initial = {{x:"7rem",opacity:0}}
               animate = {{x:0,opacity:1}}
               transition={{
                duration:2,
                type:"spring"
               }}
               className ="image-container">
               <img src ="./hero-image.png" alt="" />
               </motion.div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Hero

