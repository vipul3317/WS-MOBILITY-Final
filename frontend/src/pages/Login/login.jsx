import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';

const Login = () => {
    // const {login}=useAuth();
    const {isAuthenticated, login} = useAuth();
    const navigate = useNavigate();

    const [number, setNumber]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        if(isAuthenticated){
            navigate('/dashboard');
        }
    },[isAuthenticated,navigate]);

    const handleLogin=async (e)=>{
        e.preventDefault();

        try{
            const res=await fetch(`${process.env.REACT_APP_API_URL}/auth/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({number,password}),
                credentials: 'include'
            });

            const data=await res.json();
            if(res.ok){
                
                login(data.userDetails);
                navigate('/dashboard');
            } else {
                alert(data.message || 'Login failed');
            }

        } catch(err){
            console.log(err);
            alert("An error occurred while logging in");
        }
    }

    return (
        <form onSubmit={handleLogin} className="flex flex-col items-center justify-center h-screen bg-gray-300">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex flex-col items-center justify-center p-8 pb-0 text-green-800">
                    <span className="text-3xl font-semibold mb-4">Welcome Back</span>
                    <label className="font-semibold text-xl self-start">Mobile Number</label>
                    <input
                        type='number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Enter your Mobile number"
                        className="border border-green-800 w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                    <label className="font-semibold text-xl self-start mt-3">Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="border border-black w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                </div>
                <div className='flex flex-col justify-between p-8 pt-2'>
                    <div className='flex justify-between'>
                        <label>
                            <input type='checkbox' className='rounded border-gray-500' />
                            <span className='text-sm ml-2'>Remember me</span>
                        </label>
                        <button type='button' className='text-sm text-blue-600 hover:text-blue-800'>
                            Forgot password?
                        </button>
                    </div>
                    <div className='mt-2 text-center flex flex-col'>
                        <button type='submit' className='w-full text-white bg-green-800 p-2 rounded-xl text-lg'>
                            Log In
                        </button>
                        <span className='mt-4'>Don't have an account?
                            <Link to={'/carhub/signup'}>
                                <button type='button' className='text-blue-600 hover:text-blue-800 pl-2'>
                                    Sign Up
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
