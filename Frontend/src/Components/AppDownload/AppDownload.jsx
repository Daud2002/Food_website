import React from 'react'
import { assets } from '../../assets/assets'

export default function AppDownload() {
    return (
        <div className='flex flex-col items-center text-center m-20' id='app'>
            <div>
                <h1 className=' font-semibold text-[25px] md:text-[30px] max-[500px]:text-[20px]'>For Better Experience Download<br /> <span className=' text-[tomato] font-bold hover:cursor-pointer'>Tomato</span> App</h1>
            </div>
            <div className=' flex flex-col mt-16 md:flex-row md:gap-x-8'>
                <img src={assets.play_store} alt="" className='transform hover:scale-105 transition duration-500 cursor-pointer w-40'/>
                <img src={assets.app_store} alt="" className='transform hover:scale-105 transition duration-500 cursor-pointer w-40'/>
            </div>
        </div>
    )
}
