import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import '../Navbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';


const Navbar = ({setCurrentState}) => {

    const [menu, setmenu] = useState("home");
    const navigate = useNavigate();
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);


    const Logout = () =>{
        localStorage.removeItem("token");
        setToken("")
        navigate("/")

    }

    return (
        <div>
            <nav className=' flex justify-evenly w-[100%] shadow-md'>
                <div>

                    <Link to='/'><img src={assets.logo} className='m-4 w-36 cursor-pointer' alt="logo" /></Link>
                </div>
                <div className='md:flex items-center hidden nav_div '>
                    <ul className='flex'>
                        <Link to='/' onClick={() => setmenu('home')} className={` m-4 font-bold cursor-pointer ${menu == 'home' ? 'active' : ''}`} >Home</Link>
                        <a href='#menu' onClick={() => setmenu('about')} className={` m-4 font-bold cursor-pointer ${menu == 'about' ? 'active' : ''}`}>Menu</a>
                        <a href='#app' onClick={() => setmenu('contact')} className={` m-4 font-bold cursor-pointer ${menu == 'contact' ? 'active' : ''}`}>Molie-App</a>
                        <a href='#contact' onClick={() => setmenu('mobile')} className={` m-4 font-bold cursor-pointer ${menu == 'mobile' ? 'active' : ''}`}>Contact Us</a>
                    </ul>
                </div>
                <div className='flex items-center mr-8'>
                   
                    {
                        token ? 
                    <div className=' p-2 relative'>
                        <div className={getTotalCartAmount() === 0 ? '': 'absolute min-w-2 min-h-2 bg-red-500 rounded-md -top-0.5 -right-px'}></div>
                        <Link to='/cart'><img src={assets.basket_icon} className=' cursor-pointer' alt="" /></Link>

                    </div>
                    :
                    ''
                    }
                    {!token ? <div className=' p-2 '><button className=' cursor-pointer border-none md:border underline md:border-[tomato] text-red-500 md:py-2 md:px-5 hover:-translate-y-0.5 font-extrabold text-[15px] md:rounded-2xl' onClick={()=>setCurrentState(true)}>Sign Up</button></div> : 
                    <div className='nav_drop_down'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='nav_drop_down_ul'>
                            <li><img src={assets.bag_icon} alt="" className=' w-5'/><span className=' hover:text-[tomato]'>Orders</span></li>
                            <hr />
                            <li onClick={Logout}><img src={assets.logout_icon} alt="" /><span className=' hover:text-[tomato]'>Logout</span></li>
                        </ul>
                    </div>
                }
                </div>
            </nav>
            <hr/>
        </div>
    )
}

export default Navbar
