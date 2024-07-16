import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div>
            <div className='text-center mt-32' id='menu'>
                <h2 className=' font-bold text-[40px]'>Explore Our Menu</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, facilis?</p>
            </div>
            <div className='flex flex-row text-center mt-16 gap-8 maping_div md:pl-0 mb-12 w-[100%] px-3 md:justify-center'>
                {menu_list.map((items, i) => {
                    return (
                        <div key={i} onClick={()=>setCategory(prev=> prev === items.menu_name ? 'All' : items.menu_name)}>
                            <img src={items.menu_image} alt="" className={`${category === items.menu_name ? 'active_bar' : ''} w-2`} />
                            <p>{items.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
