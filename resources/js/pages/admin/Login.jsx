import React from 'react'
export default function AdminLogin(){
    return <div className='max-w-screen-2xl mx-auto h-screen p-5 flex justify-center bg-gray-200'>
        <div className='mt-24 bg-white h-fit p-8 rounded flex flex-col'>
            <h1 className='text-center text-2xl'>Admin Login</h1>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Login</button>
            <a href="">Forgot Password</a>
        </div>
    </div>
}
