import Action from '@/components/Action'
import CallAction from '@/components/CallAction'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Action />
      <main className="w-full bg-main-bg min-h-screen">
        <Services />
        <Product />
        <Testimonials />
        <div className='email-bg pb-4'>
            <CallAction />
        </div>
      </main>
      <Footer/>
    </>
  )
}
