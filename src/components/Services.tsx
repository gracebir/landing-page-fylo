import React from 'react'
import Service from './Service'
import { services } from '@/util/dummy'

function Services() {
  return (
    <div className='max-w-5xl mx-auto grid  grid-cols-1 lg:grid-cols-2 gap-16 px-4 lg:px-0 py-20 lg:gap-24'>
      {services.map(({ id, title, desc, img }, _) => (
        <Service key={id} title={title} desc={desc} img={img} />
      ))}
    </div>
  )
}

export default Services
