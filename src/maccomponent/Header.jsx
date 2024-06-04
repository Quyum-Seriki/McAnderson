import React from 'react'
import logo from '../images/logoo.png'
import './Mac.css'

const Header = () => {
  return (
    <div className='header'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='hide'>
          <a href="">Why McAnderson?</a>
          <a href="">Learning Paths</a>
          <a href="">Key Feature</a>
          <a href="">FAQ</a>
        </div>
        <div className='show'>
          <a href="">Why McAnderson?</a>
          <a href="">Learning Paths</a>
          <a href="">Key Feature</a>
          <a href="">FAQ</a>
        </div>
        <div className='show'>
          <p>Coming Soon <i class="fa-solid fa-spinner"></i></p>
        </div>
    </div>
  )
}

export default Header