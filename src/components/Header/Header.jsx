<<<<<<< HEAD
import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h1>Welcome to <span><h2>Grab n' Go</h2></span></h1>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                {/* <button>View Menu</button>  */}
            </div>
        </div>
    )
}

export default Header
=======
import React ,{useState, useEffect} from 'react'

import "./Header.css"
import { assets } from "../../assets/assets";



const Header = () => {

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const url = assets.header_img; 
    setImageUrl(url);
  }, []); 

  return (
    <div className="header" style={{ background: `url(${imageUrl}) no-repeat` }}>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a device manu featuring a delectable array of dishes crafted with finest ingrediants and culinary experties.Our mission is satisfy your craving and elevate your dining experience ,one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
