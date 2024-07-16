import React, { useContext } from 'react'
import { StoreContext } from '../../Components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className=' m-32'>
      <div className='grid grid-cols-6 font-bold text-[tomato]'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      <div className=' mt-5'>
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='grid grid-cols-6'>
                  <img src={url+'/images/'+item.image} alt="" className=' w-16 border rounded' />
                  <p className='flex items-center'>{item.name}</p>
                  <p className='flex items-center'>${item.price}</p>
                  <p className='flex items-center'>{cartItems[item._id]}</p>
                  <p className='flex items-center'>{item.price * cartItems[item._id]}</p>
                  <p className=' flex items-center cursor-pointer' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <br />
                <hr />

              </div>
            )
          }

        })}
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <h1 className=' font-extrabold mt-8'>Cart Totals</h1>
          <div className='flex flex-row mb-2 mt-8 justify-between'>
            <h2>Subtotals</h2>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='flex flex-row my-2 justify-between'>
            <h2>Delivery Fee</h2>
            <p className='font-bold'>{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className='flex flex-row justify-between my-2'>
            <h2 className=' font-bold'>Totals</h2>
            <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button className=' border rounded bg-[tomato] text-white font-semibold py-2 px-8 mt-5' onClick={() => navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className='flex items-center'>
          <div className='flex flex-col'>
            <p className=' m-6'>If you have a promo code, Enter it here</p>
            <div>
              <input type="text" placeholder='promo code' className=' outline-none bg-slate-100 py-1 px-1' />
              <button className=' border border-none rounded px-10 py-1 bg-slate-600 text-white font-bold'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
