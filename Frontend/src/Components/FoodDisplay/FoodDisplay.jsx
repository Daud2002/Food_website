import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Fooditems from '../Fooditems/Fooditems';


export default function FoodDisplay({ category }) {

    const { food_list,url } = useContext(StoreContext);


    return (
        <div>
            <h2 className='text-center font-extrabold text-[40px] my-8 '>Top Dishes Near You</h2>
            <div className='grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[520px]:grid-cols-1'>

                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {


                        return <Fooditems
                            key={index}
                            id={item._id}
                            name={item.name}
                            image={url+'/images/'+item.image}
                            price={item.price}
                            description={item.description}

                        />
                    }
                })}
            </div>
        </div>
    )
}
