import React from 'react'
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import RightSection from './RightSection'

const Login = () => {
    return (
        <div className='h-screen flex p-4'>
            {/* Left section */}
            <section className='w-1/2 flex flex-col p-4 justify-between'>
                {/* Logo */}
                <a href='/' className='text-center'>
                    <img src='/logo2.svg' alt='logo' />
                </a>
                {/* Login form */}
                <form className='flex flex-col items-center'>
                    <div className='w-1/2 flex flex-col gap-4 text-gray-600'>

                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold text-black'>Log In</h1>
                            <p>Login to get back to your Hysabat account.</p>
                        </div>

                        <div>
                            <label htmlFor='username' className='text-sm font-bold'>Username<span className='text-red-600 ml-1'>*</span></label>
                            <div className='flex items-center gap-2 p-2 border-2 border-gray-300 focus-within:border-sky-500 rounded-md'>
                                <HiOutlineUser className='text-xl' />
                                <input type='text' placeholder='Enter username' id='username' className='w-full outline-none' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='password' className='text-sm font-bold'>Password<span className='text-red-600 ml-1'>*</span></label>
                            <div className='flex items-center gap-2 p-2 border-2 border-gray-300 focus-within:border-sky-500 rounded-md'>
                                <HiOutlineLockClosed className='text-xl' />
                                <input type='password' placeholder='Create a password' id='password' className='w-full outline-none' />
                            </div>
                        </div>

                        <button type='submit' className='bg-sky-500 hover:opacity-90 cursor-pointer text-white font-semibold py-2 rounded-lg'>Login</button>

                        <p className='text-center text-sm'>
                            Don't have an account? <a href='#' className='text-sky-500'>Sign up</a>
                        </p>
                    </div>
                </form>
                {/* Footer */}
                <footer className='flex justify-between text-sm text-gray-600 font-semibold'>
                    <p>&copy; Hysabat Solutions {new Date().getFullYear()}</p>
                    <p className='flex items-center gap-2'><HiOutlineMail className='text-xl' /> sales@hysabat.com</p>
                </footer>
            </section>

            {/* Right section */}
            <RightSection />
        </div>
    )
}

export default Login
