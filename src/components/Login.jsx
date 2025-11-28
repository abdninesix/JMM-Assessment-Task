import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import RightSection from './RightSection'

const Login = () => {
    return (
        <div className='h-screen flex p-4'>
            {/* Left section */}
            <section className='w-1/2 flex flex-col p-4 justify-between'>
                {/* Logo */}
                <header className='text-center'>
                    <img src='/logo2.svg' alt='logo' />
                </header>
                {/* Login form */}
                <form className='border'>
                    sometging
                </form>
                {/* Footer */}
                <footer className='flex justify-between text-sm text-gray-500 font-semibold'>
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