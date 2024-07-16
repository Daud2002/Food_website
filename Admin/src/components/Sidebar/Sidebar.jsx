import React, { useState } from 'react'
import Welcome from '../../Welcome/Welcome'
import Additem from '../AddItem/Additem'
import Order from '../Order/Order'
import List from '../List/List'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

const Sidebar = () => {

    const url = 'http://localhost:4000'

    return (
        <div className='w-[100%] h-[89vh] flex'>
        <ToastContainer />
            <div className='w-[25%] border border-b-0  border-r-[#a9a9a9] h-[89vh] slidebarer'>
                <div className='flex flex-col gap-5 mt-20'>
                    <NavLink to='/add' className={`flex flex-row gap-5 border border-[#a9a9a9] p-2 border-r-0 ml-12 hover:cursor-pointer`}>
                        <img src={assets.add_icon} alt="Add Item" />
                        <p className='hidden md:block'>Add Item</p>
                    </NavLink>

                    <NavLink to='/list' className='flex flex-row gap-5 border border-[#a9a9a9] p-2 border-r-0 ml-12 hover:cursor-pointer'>
                        <img src={assets.order_icon} alt="List Item" />
                        <p className='hidden md:block'>List Item</p>
                    </NavLink>

                    <NavLink to='/order' className='flex flex-row gap-5 border border-[#a9a9a9] p-2 border-r-0 ml-12 hover:cursor-pointer'>
                        <img src={assets.order_icon} alt="Orders" />
                        <p className='hidden md:block'>Orders</p>
                    </NavLink>

                </div>
            </div>
            <div>
                <Routes>
                    <Route path='/add' element={<Additem url={url} />} />
                    <Route path='/list' element={<List url={url} />} />
                    <Route path='/order' element={<Order url={url} />} />
                    <Route path='/' element={<Welcome />} />
                </Routes>
            </div>
        </div>
    )
}

export default Sidebar;
