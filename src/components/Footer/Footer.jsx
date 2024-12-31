<<<<<<< HEAD
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
            <h2>TEAM MEMBERS</h2>
            <ul><li>YASH PARMAR: UI/UX Designer, Frontend Developer</li>
                <li>MANAV AVAIYA: Backend Developer, Database Administrator</li>
                <li>RONAK THAKOR: Frontend Developer, Backend Developer</li>
                <li>TISHA PATEL: Project Manager, Database Administrator</li>
            </ul>
            
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9106437729</li>
                <li>contact@grabngo.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © GrabnGo.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
=======
import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer" >
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit unde sint cum repellendus! Non, illum? Nihil id quibusdam autem asperiores dicta optio architecto quam assumenda, consectetur distinctio suscipit fugiat!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.linkedin_icon} alt="linkedin" />
                <img src={assets.twitter_icon} alt="twitter" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+1234567890</li>
                <li>example@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copy-rights">Copyright 2024 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
