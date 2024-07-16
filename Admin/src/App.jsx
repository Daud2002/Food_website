import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Additem from './components/AddItem/Additem';
import List from './components/List/List';
import Order from './components/Order/Order';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Sidebar />
      
    </div>
  )
}

export default App
