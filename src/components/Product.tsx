import React from 'react'
import illustration from '../assets/illustration-stay-productive.png'
import Image from 'next/image'

const Product = () => {
  return (
    <section className='container mx-auto px-4 lg:px-0 flex lg:flex-row flex-col lg:gap-10 gap-5 lg:items-center'>
      <div className='lg:w-1/2 w-full lg:h-[600px] h-[300px]'>
        <Image className='w-full h-full object-contain' src={illustration} width={400} height={400} alt="" />
      </div>
      <div className='flex flex-col lg:gap-6 gap-4 lg:items-start'>
        <h3 className="lg:text-5xl text-lg lg:font-semibold font-bold lg:leading-[1.3]">Stay productive,<br className="hidden lg:block" /> wherever you are</h3>
        <p className='lg:text-lg text-sm font-normal'>Never let location be an issue when accessing your files. Fylo has you<br /> covered for all of your file storage needs.</p>
        <p className='lg:text-lg text-sm font-normal'> Securely share files and folders with friends, family and colleagues for live <br /> collaboration. No email attachments required.</p>
        <a className='text-cyan-color lg:text-base text-sm hover:text-white pb-2 border-b-2 border-cyan-color hover:border-white duration-300' href="#">See how Fylo works</a>
      </div>
    </section>
  )
}

export default Product
