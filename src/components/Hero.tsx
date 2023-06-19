import React from 'react'
import banner from "../assets/illustration-intro.png"
import Image from 'next/image'

function Hero() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className='w-full'>
        <Image className="w-full h-full object-contain" width={800} height={800} src={banner} alt="" />
      </div>
    </div>
  )
}

export default Hero
