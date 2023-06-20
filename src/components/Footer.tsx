import React from 'react'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import phoneIcon from '../assets/icon-phone.svg'
import locationIcon from '../assets/icon-location.svg'
import mailIcon from '../assets/icon-email.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='container mx-auto flex flex-col gap-8 lg:gap-4 py-8 px-4'>
            <Image className="w-36 lg:w-56 lg:h-20 h-auto" width={120} height={100} src={logo} alt='logo' />
            <div className="grid lg:grid-cols-7 grid-cols-1 gap-8 lg:gap-10">
                <div className='flex items-start gap-4 lg:col-span-2 col-span-1'>
                    <Image width={25} height={25} src={locationIcon} alt="" />
                    <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='flex lg:justify-between lg:flex-row gap-6 flex-col items-start lg:col-span-5 col-span-1'>
                    <div className='flex gap-4'>
                        <Image src={phoneIcon} width={20} height={20} alt="" />
                        <span className='col-span-2'>+1-543-123-4567</span>
                    </div>
                    <div className='flex gap-4'>
                        <Image className='h-8 w-10' src={mailIcon} width={20} height={10} alt="" />
                        <span>example@fylo.com</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">About Us</a>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">Jobs</a>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">Press</a>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">Blog</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">Contact Us</a>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">Terms</a>
                        <a className='text-sm hover:font-bold lg:text-base' href="#">Privacy</a>
                    </div>
                    <div className='flex gap-4'>
                        <div className='border border-white hover:border-cyan-color cursor-pointer hover:bg-cyan-color duration-300 w-10 h-10 flex justify-center items-center rounded-full'>
                            <FaFacebookF />
                        </div>
                        <div className='border border-white hover:border-cyan-color cursor-pointer hover:bg-cyan-color duration-300 w-10 h-10 flex justify-center items-center rounded-full'>
                            <FaTwitter />
                        </div>
                        <div className='border border-white hover:border-cyan-color cursor-pointer hover:bg-cyan-color duration-300 w-10 h-10 flex justify-center items-center rounded-full'>
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
