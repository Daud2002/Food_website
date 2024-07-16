import React from 'react'
import { assets } from '../../assets/assets'

export default function Footer() {
    return (
        <div className='bg-[#323232]' id='contact'>
            <div className='footer_content flex flex-col justify-around text-[white] p-6 md:flex-row'>
                <div className="left_content md:w-[25%]">
                    <img src={assets.logo} />
                    <p className=' my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, obcaecati!</p>
                    <div className="social flex flex-row gap-8">
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />
                    </div>
                </div>
                <div className="center_content mt-4">
                    <h2 className=' font-extrabold text-[tomato] text-[20px]'>Company</h2>
                    <ol className='md:mt-4 ml-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ol>
                </div>
                <div className="right_content mt-4">
                    <h2 className=' font-extrabold text-[tomato] text-[20px] '>Get in Touch</h2>
                    <ul className='md:mt-8'>
                        <li>+923097119974</li>
                        <li>Daudmir3@gmail.com</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='text-center py-2 text-[white] font-bold'>Copyright &copy; 2024 policies: All Rights Reserved</p>
        </div>
    )
}
