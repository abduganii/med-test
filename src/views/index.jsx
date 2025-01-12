import Contact from '@/sections/contact'
import OurDerct from '@/sections/our-derct'
import Questions from '@/sections/questions'
import Service from '@/sections/service'
import Slider from '@/sections/slider'
import TextScroll from '@/sections/text-scroll'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <TextScroll />  
      <Contact />
      <Slider />
      <Service />
      <OurDerct />
      <Questions/>
    </>
  )
}
