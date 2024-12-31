<<<<<<< HEAD
import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home
=======
import React ,{useState} from 'react'


import "./Home.css"
import Header from "../../components/Header/Header.jsx"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx"
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'

const Home = () => {

  const [category,setCategory] =useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
>>>>>>> deb05dc44213ea261777655f69f22b2d359fbf69
