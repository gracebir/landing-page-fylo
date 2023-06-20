import Image from 'next/image'
import React from 'react'
import { Ttestimonial } from '../../type'

function Card({ fullname, img }: Ttestimonial) {
  return (
    <div className="bg-testimonials-bg pt-8 pb-6 px-6 lg:px-10 rounded-md flex flex-col lg:gap-8 gap-6">
      <p className="lg:text-xl text-sm text-gray-300">
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
      </p>
      <div className='flex gap-4 items-center'>
        <Image className="rounded-full" src={img} width={45} height={45} alt={fullname} />
        <div>
          <h3 className='lg:text-lg text-sm font-bold'>{fullname}</h3>
          <span className='lg:text-base text-xs text-gray-400'>Founder & CEO, Huddle</span>
        </div>
      </div>
    </div>
  )
}

export default Card
