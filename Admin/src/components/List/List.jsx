import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function List({ url }) {
  const [list, setList] = useState([]);
  const fetchList = async () => {

    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data)

    if (response.data.success) {
      setList(response.data.data)
      toast.success(response.data.message)
    } else {
      toast.error('Error')
    }
  }
  const remove_food = async (foodid) => {
    const responses = await axios.post(`${url}/api/food/remove`,{ id: foodid });
    await fetchList();
    if (responses.data.success) {
      toast.success(responses.data.message)
    }
    else{
      toast.error('Error')
    }
  }
  useEffect(() => {
    fetchList();
  }, [])


  return (
    <div className='ml-8 my-4'>
      <div className='grid grid-cols-5 border border-solid border-neutral-700 gap-24 items-center py-4 mb-8'>
        <b className='py-1 ml-1'>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {
        list.map((item, i) => {
          return (
            <div className='grid grid-cols-5 border border-neutral-700 gap-24 items-center my-2'>
              <img src={`${url}/images/` + item.image} alt="" className='w-16 py-1 ml-1' />
              <p className='text-start'>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='flex justify-center'><span className='cursor-pointer' onClick={() => remove_food(item._id)}>x</span></p>

            </div>
          )
        })
      }

    </div>
  )

}