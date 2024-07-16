import React, { useContext } from 'react'
import { StoreContext } from '../../Components/context/StoreContext'

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='m-8'>
      <div className='flex md:flex-row flex-col items-start gap-12 mt-24 justify-around'>
        <div className=' flex gap-4 flex-col'>
          <h1 className='font-bold text-[20px] my-5'>Delivery Information</h1>
          <div className='flex gap-2'>
            <input type="text" placeholder='First Name' className=' border rounded outline-none py-1 px-4' />
            <input type="text" placeholder='Last Name' className=' border rounded outline-none py-1 px-4' />
          </div>
          <div className='flex flex-col gap-4'>
            <input type="text" placeholder='Email Address' className=' border rounded outline-none py-1 px-4' />
            <input type="text" placeholder='Street' className=' border rounded outline-none py-1 px-4' />
          </div>
          <div className='flex gap-2'>
            <input type="text" placeholder='City' className=' border rounded outline-none py-1 px-4' />
            <input type="text" placeholder='State' className=' border rounded outline-none py-1 px-4' />
          </div>
          <div className='flex gap-2'>
            <input type="text" placeholder='Zip Code' className=' border rounded outline-none py-1 px-4' />
            <input type="text" placeholder='Country' className=' border rounded outline-none py-1 px-4' />
          </div>
          <div>
            <input type="text" placeholder='Phone' className=' border rounded outline-none py-1 px-4 w-[100%]' />
          </div>
        </div>
        <div className='w-[40%]'>
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
            <button className=' border rounded bg-[tomato] text-white font-semibold py-2 px-8 mt-5'>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
