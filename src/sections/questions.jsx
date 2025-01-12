import Container from '@/components/container'
import React from 'react'

export default function Questions() {
  return (
    <Container className='text-center  mt-[50px] md:mt-[91px]'>
        <h3 data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
        data-aos-offset="0"
 className='mb-[25px] md:mb-[45px] text-[28px] leading-[36px] md:text-[42px] md:leading-[52px] font-bold'>Есть вопросы?</h3> 
        <p  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
        data-aos-offset="0"
    data-aos-delay='200'className='md:text-[24px] md:leading-[32px] text-[18px] leading-[18px] w w-full m-auto max-w-[552px] pb-[20px] md:pb-[40px] '>
          Напишите нам, мы расскажем об услугах и
  скидках, запишем на консультацию и процедуры.
          </p>
          <button  className='inline-block py-[6px] px-[15px] md:py-[12px] md:px-[30px] rounded-[10px] bg-[#1C2B50] text-white mb-[20px] md:mb-[40px] '>Заказать звонок</button>
    </Container>
  )
}
