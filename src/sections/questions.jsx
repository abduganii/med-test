import Container from '@/components/container'
import React from 'react'

export default function Questions() {
  return (
    <Container className='text-center mt-[91px]'>
        <h3 data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
        data-aos-offset="0"
 className='mb-[45px] text-[42px] leading-[52px] font-bold'>Есть вопросы?</h3> 
        <p  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
        data-aos-offset="0"
    data-aos-delay='200'className='text-[24px] w-full m-auto max-w-[552px] leading-[32px] pb-[40px] '>
          Напишите нам, мы расскажем об услугах и
  скидках, запишем на консультацию и процедуры.
          </p>
          <button  className='inline-block py-[12px] px-[30px] rounded-[10px] bg-[#1C2B50] text-white mb-[40px]'>Заказать звонок</button>
    </Container>
  )
}
