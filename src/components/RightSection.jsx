import React from 'react'

const RightSection = () => {
    return (
        <section className='w-full lg:w-1/2 hidden lg:flex flex-col items-center p-24 justify-center bg-linear-to-br from-sky-400 to-blue-950 rounded-2xl'>
            {/* Image */}
                <img src='/content.png' alt='content' className='scale-110 animate-slide' />
            {/* Text */}
            <div className='space-y-4 text-center text-white'>
                <h2 className='text-3xl font-semibold'>Transforming the Future of Resource Planning</h2>
                <p className='text-xl'>Empowering businesses with smarter resource management and real-time insights. HYSABAT ERP helps you optimize every resource, minimize waste, and drive operational efficiency. Gain full visibility into projects, anticipate resource needs, and respond swiftly to market changes.</p>
            </div>
        </section>
    )
}

export default RightSection