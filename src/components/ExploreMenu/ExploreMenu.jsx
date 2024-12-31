<<<<<<< HEAD
import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
=======
import React from 'react'

import "./ExploreMenu.css"
import {menu_list} from '../../assets/assets.js'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu </h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div  className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
              <img src={item.menu_image} alt="" className={category===item.menu_name?"active":""} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}

      </div>
      
      
      
    </div>
  )
}

export default ExploreMenu
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
