'use client'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { LeftIcons, RightIcons } from '@/components/icons';
import useWindowSize from '@/hooks/useWindowwWidth';

export default  function SwiperWithScrollIcons({className, children,slidesPerView,slidesPerViewRes}) {
    const [swipers, setSwiper] = useState()
    const t = useTranslations()
    const { width } = useWindowSize();
    return  (
    <>
    <div className='flex items-center gap-4 justify-between'>
                <span className='cursor-pointer' onClick={() => swipers.slidePrev()}><LeftIcons /></span>   
        <Swiper
            modules={[ Autoplay]}
            spaceBetween={8}
            slidesPerView={width > 900 ?  slidesPerView : width > 500 ? slidesPerView - 1:slidesPerViewRes|| 1 }
            
            className={`flex relative ${className && className}`}
            onSwiper={(e) => setSwiper(e)}
        >
            {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
            <span className='cursor-pointer' onClick={()=>swipers.slideNext()}><RightIcons/></span>   
    </div>
          
       
    </>
    );
};