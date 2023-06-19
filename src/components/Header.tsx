import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    subsets:['latin'],
    weight:["400", "700"]
})

function Header() {
  return (
    <header className={`max-w-[102rem] mx-auto px-4 lg:px-0 py-6 lg:py-7 flex items-center justify-between ${raleway.className}`}>
      <Image className="w-24 lg:w-28 h-auto" width={120} height={100} src={logo} alt='logo'/>
      <nav className="text-white-color flex flex-row gap-4 lg:gap-12">
        {["Features", "Team", "Sign In"].map((item, key)=> (
            <a className='font-normal' key={key} href="#">{item}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
