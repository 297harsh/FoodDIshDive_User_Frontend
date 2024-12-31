<<<<<<< HEAD
import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
=======
import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext.jsx'
import FoodItem from '../FoodItem/FoodItem.jsx'

const FoodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
    <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index) =>{
              // To show either all or selected items
              if(category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>  
              }
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
