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
        <Image alt='img' width={170} height={40} src={'/logo.svg'} />
        <div className=' lg:flex gap-[30px] items-center justify-between mx-auto'>
          <Link className="text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
          <Link className="text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
          <Link className="1text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
          <Link className="text-[14x] leading-[18px] text-normal" href='/'  >Link</Link>
        </div>
        <a className="text-[14x] leading-[18px] text-normal " href='tel:+998998881122'>+998998881122</a>
        <button className='inline-block py-[12px] px-[30px] rounded-[20px] bg-[#1C2B50] text-white'>Заказать звонок</button>
      </Container>
    </header>
  )
}
