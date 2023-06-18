import Action from '@/components/Action'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Services from '@/components/Services'


export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <Action/>
   <main className="w-full bg-main-bg min-h-screen">
    <Services/>
    <Product/>
   </main>
   </>
  )
}
