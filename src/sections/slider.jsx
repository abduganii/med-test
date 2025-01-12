'use client'
import { Autoplay , Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay'
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react'
import Image from 'next/image'

export default function Slider() {
  return (
    <Swiper
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-offset="0"
      navigation={true} 
      pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
    >
    <SwiperSlide >
        <Image className="w-full max-w-[1920px] mx-auto" alt='img' src='/Image.png' width={1920} height={700} />
          </SwiperSlide>
          <SwiperSlide>
        <Image className="w-full max-w-[1920px] mx-auto" alt='img' src='/Image.png' width={1920} height={700} />
          </SwiperSlide>
          <SwiperSlide>
        <Image className="w-full max-w-[1920px] mx-auto" alt='img' src='/Image.png' width={1920} height={700} />
    </SwiperSlide>
</Swiper>
  )
}
