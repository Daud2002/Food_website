import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

export default function LoginPopup({ setCurrentState }) {
    const { url,token,setToken } = useContext(StoreContext);
    const [status, setStatus] = useState('SignUp');
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const toggleStatus = () => {
        setStatus(status === 'SignUp' ? 'Login' : 'SignUp');
    };

    const onLogin = async (e) => {
        e.preventDefault();
        let new_url = url;
        if (status === 'Login') {
            new_url += '/api/user/login'
        }
        else{
            new_url += '/api/user/register'
        }
        const response = await axios.post(new_url,data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setCurrentState(false)
        }
        else{
            alert(response.data.message)
        }
    };

    useEffect(() => { console.log(data); }, [data]);

    return (
        <div className='bg-black bg-opacity-70 text-white fixed inset-0 flex items-center justify-center z-50'>
            <form onSubmit={onLogin} className='border border-black p-8 rounded-lg bg-white text-black w-11/12 sm:w-2/5 lg:w-1/4'>
                <div className='flex justify-end'>
                    <img src={assets.cross_icon} alt="Close" onClick={() => setCurrentState(false)} className='cursor-pointer w-5 h-5' />
                </div>
                <h1 className='text-center font-bold text-[tomato] text-2xl mb-6 underline'>
                    {status === 'SignUp' ? 'Sign Up' : 'Login'}
                </h1>
                <div className='flex flex-col gap-4'>
                    {status === 'SignUp' && (
                        <input
                            onChange={onChangeHandler}
                            name='name'
                            placeholder='Name'
                            type="text"
                            className='py-2 px-4 border rounded outline-none'
                            value={data.name}
                        />
                    )}
                    <input
                        onChange={onChangeHandler}
                        name='email'
                        placeholder='Email'
                        type="email"
                        className='py-2 px-4 border rounded outline-none'
                        value={data.email}
                    />
                    <input
                        onChange={onChangeHandler}
                        name='password'
                        placeholder='Password'
                        type="password"
                        className='py-2 px-4 border rounded outline-none'
                        value={data.password}
                    />
                </div>
                {status !== 'Login' ? <div className='flex items-center gap-2 mt-4'>
                    <input type='checkbox' required className='cursor-pointer' />
                    <p className='text-sm'>Agree to Terms & Conditions</p>
                </div> : ''}
                
                <button type='submit' className='w-full py-2 mt-6 rounded bg-[tomato] text-white font-bold'>
                    {status === 'Login' ? 'Login' : 'Sign Up'}
                </button>
                <div className='mt-4 text-center'>
                    <p className='text-sm'>
                        {status === 'SignUp' ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <span
                            className='text-[tomato] font-bold hover:underline cursor-pointer'
                            onClick={toggleStatus}
                        >
                            {status === 'Login' ? 'Sign Up' : 'Login'}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}
