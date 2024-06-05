import React from 'react'
import logo from '../images/logoo.png'
import './Mac.css'
import { useState } from "react";

const Header = () => {
  const [open, setopen] = useState(false)
  const checkopen = ()=>{
    setopen(true)
  }
  const checkclose = ()=>{
    setopen(false)
  }
  return (
    <div className='header'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='hamburger'>
        <i class="fa-solid fa-bars" onClick={checkopen}></i>
        </div>
        {open&&<div className='hide'>
          <div className='hide-1'>
          <div>
          <a href="">Why McAnderson?</a>
          <a href="">Learning Paths</a>
          <a href="">Key Feature</a>
          <a href="">FAQ</a>
          </div>
          <div>
          <i class="fa-solid fa-xmark" onClick={checkclose}></i>
          </div>  
          </div>
        </div>
        }
        <div className='show'>
          <div>
          <a href="">Why McAnderson?</a>
          <a href="">Learning Paths</a>
          <a href="">Key Feature</a>
          <a href="">FAQ</a>
          </div>
        </div>
        <div className='show'>
          <p>Coming Soon <i class="fa-solid fa-spinner"></i></p>
        </div>
    </div>
  )
}

export default Header