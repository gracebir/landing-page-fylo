import Image from 'next/image'
import React from 'react'
import { Tservice } from '../../type'

function Service({ img, title, desc }: Tservice) {
    return (
        <div className='flex flex-col gap-4 items-center'>
            <Image className="w-20 h-20 object-contain" src={img} alt={title} width={400} height={400} />
            <h2 className='font-bold text-base lg:text-lg'>{title}</h2>
            <span className='text-gray-400 text-center'>{desc}</span>
        </div>
    )
}

export default Service
