import React from 'react'
import whitelogo from '../images/whitelogo.png'
import './Mac.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-col1'>
        <img src={whitelogo} alt="" />
        <div>
        <a href='#'><i class="fa-brands fa-facebook"></i></a>
        <a href='#' ><i class="fa-brands fa-twitter"></i></a>
        <a href='#' ><i class="fa-brands fa-instagram"></i></a>    
        <a href='#' ><i class="fa-brands fa-linkedin"></i></a>     
        <a href='#' ><i class="fa-brands fa-youtube"></i></a>
        </div>
        </div>
        <div className='footer-col2'>
          <div>
            <p>© 2024 McAderson - All rights reserved</p>
            </div>
            <div>
            <p>Terms & Conditions</p>
            <p>Cookies</p>
            <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer