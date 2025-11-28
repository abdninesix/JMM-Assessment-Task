import { useState } from 'react'
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from 'react-icons/hi'
import RightSection from './RightSection'
import * as z from 'zod'

const schema = z.object({
    username: z.string().min(3, 'Username can only contain letters, numbers, and underscores.'),
    password: z.string().min(8, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'),
})

const Login = () => {

    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = schema.safeParse({
            username: e.target.username.value,
            password: e.target.password.value,
        });

        if (!result.success) {
            setError(result.error.issues.reduce((acc, curr) => ({ ...acc, [curr.path[0]]: curr.message, }), {}));
            return;
        }

        setError({});
    };


    return (
        <div className='h-screen flex p-4 overflow-hidden'>
            {/* Left section */}
            <section className='h-full w-full lg:w-1/2 flex flex-col p-4 justify-between'>
                {/* Logo */}
                <a href='/' className='text-'>
                    <img src='/logo2.svg' alt='logo' />
                </a>
                {/* Login form */}
                <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                    <div className='w-full md:max-w-md flex flex-col gap-4 text-gray-600'>

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
                            {error.username && <p className='text-red-600 text-sm'>{error.username}</p>}
                        </div>

                        <div>
                            <label htmlFor='password' className='text-sm font-bold'>Password<span className='text-red-600 ml-1'>*</span></label>
                            <div className='flex items-center gap-2 p-2 border-2 border-gray-300 focus-within:border-sky-500 rounded-md'>
                                <HiOutlineLockClosed className='text-xl' />
                                <input type='password' placeholder='Create a password' id='password' className='w-full outline-none' />
                            </div>
                            {error.password && <p className='text-red-600 text-sm'>{error.password}</p>}
                        </div>

                        <button type='submit' className='bg-sky-500 hover:opacity-90 cursor-pointer text-white font-semibold py-2 rounded-lg'>Login</button>

                        <p className='text-center text-sm'>
                            Don't have an account? <a href='/signup' className='text-sky-500'>Sign up</a>
                        </p>
                    </div>
                </form>
                {/* Footer */}
                <footer className='flex justify-between text-sm text-gray-600 font-semibold'>
                    <p>&copy; Hysabat Solutions {new Date().getFullYear()}</p>
                    <a href='mailto:sales@hysabat.com' className='flex gap-1'><HiOutlineMail className='text-xl' /> sales@hysabat.com</a>
                </footer>
            </section>

            {/* Right section */}
            <RightSection />
        </div>
    )
}

export default Login


