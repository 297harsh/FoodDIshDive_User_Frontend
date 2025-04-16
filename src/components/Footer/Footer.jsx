import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Grab n' Go" is an innovative food pickup application designed to streamline the process of ordering and collecting meals from local restaurants. Our project aims to provide a seamless and efficient solution for both customers and restaurant owners, reducing wait times and enhancing the overall dining experience.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            {/* <h2>Devloper Details</h2> */}
                {/* <li>Harsh Patel</li>
                <li>harshpatel2973</li>
                <li></li>
                <li></li> */}
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 2902203218</li>
                <li>contact@grabngo.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright {`${new Date().getFullYear()}`} © Grabn' Go.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
