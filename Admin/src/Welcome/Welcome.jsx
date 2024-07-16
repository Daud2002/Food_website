import React from 'react'
import './Welcome.css'
const Welcome = () => {
  return (
    <div className=' bg-[tomato] absolute w-[74.7%] h-[89vh] flex justify-center items-center ml-1'>
      <div className='flex flex-col items-center'>
        <div>
          <h1 className='font-bold text-[50px] underline text-white shadow shadow-black '>
            Welcome to Admin Panel
          </h1>
        </div>
        <div>
          <p className='text-white mt-8'>Here you can Add item, View List & Check Order details</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
