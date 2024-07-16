import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../../assets/assets';

export default function FoodItemsDetails() {
    const { food_list, url, cartItems, addToCart, removeFromCart, token } = useContext(StoreContext);

    const location = useLocation();
    const new_url = location.pathname.split('/')[2];
    const food_data = food_list.find((v) => v._id === new_url);

    if (!food_data) {
        return <div>Food item not found</div>;
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row md:mt-8 md:mb-16 w-full justify-evenly m-6'>
                <img src={`${url}/images/${food_data.image}`} alt={food_data.name} className='w-[500px] border rounded-md shadow-2xl' />
                <div className='flex flex-col gap-8 w-[40%]'>
                    <h1 className='font-extrabold text-[100px]'>{food_data.name}</h1>
                    <hr />
                    <h3>Details: {food_data.description}</h3>
                    <p className='flex justify-between'><span>Price:</span><span>{food_data.price}$</span></p>
                    <hr />
                    <div>
                        {
                            !cartItems[food_data._id] && token ? (
                                <img
                                    src={assets.add_icon_white}
                                    onClick={() => addToCart(food_data._id)}
                                    className="cursor-pointer border-[5px] border-[tomato] rounded-full shadow-2xl"
                                    alt="Add to cart"
                                />
                            ) : (
                                token && (
                                    <div className='flex flex-row border-[tomato] border-[2px] rounded-[30px] p-2 justify-between items-center'>
                                        <img
                                            src={assets.remove_icon_red}
                                            onClick={() => removeFromCart(food_data._id)}
                                            className="cursor-pointer w-12 border-[tomato] border-[2px] rounded-[50%]"
                                            alt="Decrease quantity"
                                        />
                                        <p className='font-bold text-xl text-[tomato]'>{cartItems[food_data._id]}</p>
                                        <img
                                            src={assets.add_icon_green}
                                            onClick={() => addToCart(food_data._id)}
                                            className="cursor-pointer w-12 border-[tomato] border-[2px] rounded-[50%]"
                                            alt="Increase quantity"
                                        />
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                
            </div>
        </div>
    );
}
