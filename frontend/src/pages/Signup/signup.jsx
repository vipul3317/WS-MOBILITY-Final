import React from 'react'

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                <div className="flex flex-col items-center justify-center p-8 text-green-800">
                    <span className="text-3xl font-semibold mb-4">Create Account</span>
                    <label className="font-semibold text-xl self-start">Name</label>
                    <input
                        placeholder="Enter your name"
                        type='name'
                        className="border border-green-800 w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                    <label className="font-semibold text-xl self-start mt-2">Email</label>
                    <input
                        placeholder="Enter your email"
                        type='email'
                        className="border border-black w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                    <label className="font-semibold text-xl self-start mt-2">Mobile Number</label>
                    <input
                        placeholder="Enter your mob. no."
                        type='number'
                        className="border border-black w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                    <label className="font-semibold text-xl self-start mt-2">Password</label>
                    <input
                        placeholder="Enter your password"
                        type='password'
                        className="border border-black w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                    <label className="font-semibold text-xl self-start mt-2">Confirm Password</label>
                    <input
                        placeholder="Confirm your password"
                        type='confirmpassword'
                        className="border border-black w-full pl-4 p-2 rounded-md text-base mt-2"
                    />
                    <button type='submit' className='w-full mt-4 text-white bg-green-800 p-2 rounded-lg text-lg'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup;