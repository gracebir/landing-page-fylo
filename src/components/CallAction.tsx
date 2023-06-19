import React from 'react'

function CallAction() {
    return (
        <div className='flex flex-col gap-6 lg:gap-8 rounded-md shadow-lg -mt-4 text-center max-w-5xl px-4 lg:px-10 mx-4 lg:mx-auto bg-testimonials-bg py-6 lg:py-8'>
            <h1 className='text-2xl font-semibold lg:text-5xl lg:font-bold'>Get early access today</h1>
            <p className="text-base lg:text-xl text-gray-400">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.</p>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 lg:items-center '>
                <div className='w-full border border-white rounded-full lg:col-span-3 col-span-1'>
                    <input placeholder='example@fylo.com' className='rounded-full text-footer-bg text-lg outline-none px-6 lg:py-4 py-3 h-full w-full' type="text" />
                </div>
                <button className='px-5 bg-cyan-color font-semibold lg:py-4 py-3 col-span-1 rounded-full'>Get Started For Free</button>
            </div>
        </div>
    )
}

export default CallAction
