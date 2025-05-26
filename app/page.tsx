import About from '@/sections/about'
import Blogs from '@/sections/blogs'
import Contact from '@/sections/contact'
import FAQ from '@/sections/faq'
import Footer from '@/sections/footer'
import Hero from '@/sections/hero'
// import Navbar from '@/sections/navbar'
import Services from '@/sections/services'
import Testimonials from '@/sections/testimonials'
import React from 'react'

const Lander = () => {
  return (
    <div className='min-h-screen w-full'>
      {/* <Navbar/> */}
      <Hero />
      <About />
      <Services />
      <Testimonials/>
      <FAQ />
      <Blogs />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Lander