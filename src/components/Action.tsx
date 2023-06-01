import React from 'react'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    subsets:['latin'],
    weight:["400", "700"]
})

function Action() {
  return (
    <div className={`${raleway.className} bg-action-bg-mob bg-no-repeat bg-cover bg-bottom lg:bg-center mt-10 w-full lg:bg-action-bg lg:h-[60vh] h-[30vh]`}>
      <div className='max-w-5xl mx-auto flex flex-col items-center gap-8 lg:gap-16 lg:px- px-4 lg:px-0'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-2xl lg:text-6xl font-bold text-center leading-[1.2]'>All your files in one secure location, accessible anywhere.</h1>
            <p className="lg:text-[2rem] leading-[1.2] text-base text-center">Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.</p>
        </div>
        <button className="bg-cyan-color px-10 lg:px-28 text-xl rounded-full py-2 font-bold lg:py-4">
            Get Started 
        </button>
      </div>
    </div>
  )
}

export default Action
