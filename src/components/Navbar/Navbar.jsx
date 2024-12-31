<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
=======
import React ,{useState} from "react"
import "./Navbar.css"
import { assets } from "../../assets/assets";
const NavBar = () =>{

    const [menu,setMenu] =useState("Home" )

    return(
        <div className="navbar">
            <img src={assets.logo} alt="Logo" className="logo"/>

            <ul className="navbar-menu">
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
                <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</li> 
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Logo" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket Logo" />
                    <div className="dot">h</div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    );
    
}

export default NavBar;
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
