import React from 'react'
import Card from './Card'
import { userTestimonials } from '@/util/dummy'

const Testimonials = () => {
  return (
    <section className="container mx-auto bg-testimonial bg-no-repeat bg-left-top my-52 py-8 px-3">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
        {userTestimonials.map(({ img, id, fullname }) => (
          <Card key={id} img={img} fullname={fullname} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
