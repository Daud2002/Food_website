import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useEffect } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Additem() {

  const url  = 'http://localhost:4000'
  const [image, setimage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Salad'
  })

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  useEffect(() => {
    console.log(data)
  }, [data])

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formDatas = new FormData();
    formDatas.append('name',data.name)
    formDatas.append('description',data.description)
    formDatas.append('price',Number(data.price))
    formDatas.append('category',data.category)
    formDatas.append('image',image)

    const response = await axios.post(`${url}/api/food/add`,formDatas);
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        price: '',
        category: 'Salad'
      })
      setimage(false)
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }
  return (
    <div className='absolute w-[74.7%] h-[89vh] flex justify-center'>
    <ToastContainer />

      <form onSubmit={onSubmitHandler}>


        {/* Upload Image */}


        <div className=' mt-8'>
          <p className='mb-4 font-bold text-2xl'>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[100px]' />
          </label>
          <input onChange={(e) => setimage(e.target.files[0])} type="file" id='image' hidden required />
        </div>


        {/* Product Name */}



        <div className='mt-6'>
          <p className='text-lg font-semibold'>Product Name</p>
          <input onChange={onChangeHandler} name='name' type="text" className='border border-black w-[100%] outline-none pl-2 p-1' placeholder='Type Here' value={data.name} />
        </div>


        {/* Product Decription */}


        <div className='mt-6'>
          <p className='text-lg font-semibold'>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" className='border border-black w-[100%] outline-none pl-2' placeholder='Enter your product Desciption' required></textarea>
        </div>


        {/* Category */}

        <div className='flex flex-row gap-4 mt-6 w-[100%] justify-evenly'>
          <div>
            <p className='text-lg font-semibold'>Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" className='border border-black rounded mt-4 py-2 px-1 outline-none'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>


          {/* Product Price */}


          <div >
            <p className='text-lg font-semibold'>Product Price</p>
            <input name='price' onChange={onChangeHandler} value={data.price} type="number" className='border border-black rounded pl-2 w-[50%] mt-4 py-2 px-1 outline-none' placeholder='20$' />
          </div>
        </div>
        <div className='flex justify-start'>
          <button className='border border-none rounded px-8 py-2 mt-6 text-white bg-[tomato] font-extrabold w-[90%]'>ADD</button>
        </div>
      </form>
    </div>
  )
}
