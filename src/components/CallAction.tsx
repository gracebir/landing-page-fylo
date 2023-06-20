import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validate = yup.object().shape({
    email: yup.string().email().required()
})

function CallAction() {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
        onSubmit: () => {
            console.log("submit")
        },
        initialValues: {
            email: ''
        },
        validationSchema: validate
    })
    return (
        <div className='flex flex-col gap-6 lg:gap-8 rounded-md shadow-lg -mt-4 text-center max-w-5xl px-4 lg:px-10 mx-4 lg:mx-auto bg-testimonials-bg py-6 lg:py-8'>
            <h1 className='text-2xl font-semibold lg:text-5xl lg:font-bold'>Get early access today</h1>
            <p className="text-base lg:text-xl text-gray-400">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.</p>
            <form onSubmit={handleSubmit} className='grid lg:grid-cols-4 grid-cols-1 gap-4 lg:items-start '>
                <div className='w-full lg:col-span-3 text-start flex flex-col gap-2 col-span-1'>
                    <input name='email' type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='example@fylo.com' className='rounded-full text-footer-bg text-lg outline-none px-6 lg:py-4 py-3 w-full' />
                    {touched.email && errors.email?.length! > 1 && (<span className='px-6 text-start font-bold text-sm text-error-color'>Please enter a valid email address</span>)}
                </div>
                <button className='px-5 bg-cyan-color hover:bg-blue-color duration-200 font-semibold lg:py-4 py-3 col-span-1 rounded-full'>Get Started For Free</button>
            </form>
        </div>
    )
}

export default CallAction
