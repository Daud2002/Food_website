import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import FoodItemsDetails from './Components/Fooditems/FoodItemsDetails'

const App = () => {

  const [currState,setCurrentState] = useState(false);
  return (
    <div>
    {currState ? <LoginPopup setCurrentState={setCurrentState}/> : <></>}
    
      <Navbar setCurrentState={setCurrentState}/>  
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/order' element = {<PlaceOrder />} />
        <Route path="/food/:id" element={<FoodItemsDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
