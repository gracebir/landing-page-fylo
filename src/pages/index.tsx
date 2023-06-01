import Image from 'next/image'
import { Inter } from 'next/font/google'
import log from '../assets/bg-quotes.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Image src={log} alt="" width={20} height={20} />
   </div>
  )
}
