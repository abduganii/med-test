import React from 'react'
import Container from './container'
import Image from "next/image"
import { Link } from '@/i18n/routing'

export default function Header() {
  return (
    <header  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-offset="0" className='py-[38px]'>
      <Container className="flex gap-[30px] items-center justify-between">
        <Image alt='img' className='w-[100px] sm:w-[170px]' width={170} height={40} src={'/logo.svg'} />
        <div className='hidden lg:flex gap-[30px] items-center justify-between mx-auto'>
          <Link className="text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
          <Link className="text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
          <Link className="1text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
          <Link className="text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
        </div>
        <a className="text-[14x] hidden sm:inline-block leading-[18px] text-normal ml-auto" href='tel:+998998881122'>+998998881122</a>
        <button className='inline-block py-[6px] px-[15px]  sm:py-[12px] sm:px-[30px] rounded-[20px] bg-[#1C2B50] text-white'>Заказать звонок</button>
      </Container>
    </header>
  )
}
