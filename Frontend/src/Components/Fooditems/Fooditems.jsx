import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom'

const Fooditems = ({ id, name, image, price, description }) => {

    const { cartItems, addToCart, removeFromCart, token, setToken } = useContext(StoreContext);


    return (
        <div className="mb-16  shadow-lg m-4">
            <div className="w-full relative">

                {
                    !cartItems[id] && token
                        ?
                        <img src={assets.add_icon_white} onClick={() => addToCart(id)} className='absolute bottom-4 right-4 cursor-pointer' />
                        :
                        <>
                            {token ? <div className='absolute flex flex-row-reverse bottom-4 right-4 gap-3 bg-white border rounded-3xl p-1'> <img src={assets.add_icon_green} onClick={() => addToCart(id)} className=' cursor-pointer' />
                                <p> {cartItems[id]} </p>
                                <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} className=' cursor-pointer' /></div> : ''}
                        </>
                }
                <img src={image} alt={name} className="w-full rounded-md" />
            </div>
            <div className="mt-4">
                <div className=' flex items-center justify-between'>
                    <Link to={`/food/${id}`}><span className="font-extrabold underline hover:text-[tomato] cursor-pointer text-2xl pl-4">
                        {name}
                    </span></Link>
                    <span className='pr-4'>

                        <img src={assets.rating_starts} alt="Ratings" className="w-14" />
                    </span>
                </div>

            </div>
            <div className=" px-4 text-sm mt-2">
                {description}
            </div>
            <div className="mt-4 pl-4 pb-6 text-[tomato] font-bold text-[24px]">
                {price} <span className=' text-[10px]'>Rs</span>
            </div>
        </div>
    )
}

export default Fooditems
