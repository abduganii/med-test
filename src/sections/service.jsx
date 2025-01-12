'use client'
import Container from '@/components/container'
import { PlusIcons } from '@/components/icons'
import React, { useState } from 'react'

export default function Service() {
  const [open,setOpen] = useState(false)
  const [hover,setHover] = useState(false)
  return (
    <Container  className='text-center mt-[50px] md:mt-[91px]'>
        <h3  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-offset="0" className='mb-[25px] md:mb-[45px] text-[28px] leading-[36px] md:text-[42px] md:leading-[52px] font-bold'>Услуги</h3> 
        <p  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
        data-aos-offset="0"
    data-aos-delay='200'    className='md:text-[24px] md:leading-[32px] text-[18px] leading-[18px] w-full m-auto max-w-[552px]  pb-[90px] '>
                У нас вы найдете все услуги, необходимые для
        поддержания здоровья вашей семьи
          </p>
      {
        [1, 2, 3, 4]?.map((e) => (
          <div
          onMouseEnter={()=>setHover(e)} onMouseLeave={()=>setHover(false)}
            onClick={()=>setOpen((state)=>state == e? false :e)}
            data-aos="fade-right"
             data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className='w-full group max-w-[760px] m-auto py-[15px] md:py-[29px] border-b-1  border-t-1 border-[#eeeeee]'>
              <div className='w-full flex items-center cursor-pointer justify-between '>
                <p className='md:text-[24px] md:leading-[32px] text-[18px] leading-[18px] font-bold'>Поликлиника</p>
                <div  className={`group-hover:bg-black ease-in duration-300 bg-white p-2 rounded-full`}>
                <PlusIcons color={ hover == e ? "white":"black" } />
                </div>
              </div>
             <div className={`${open == e? 'h-[100px]':'h-0'} text-start overflow-hidden transition-all duration-500 ease-in-out`}>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>    
               </div>
              </div> 
        ))
         }
         
    </Container>
  )
}
