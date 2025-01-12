import Container from '@/components/container'
import React from 'react'
import NewsCard from './card'
import SwiperWithScrollIcons from './swiper'

export default function OurDerct() {
  return (
    <Container className='text-center mt-[91px]'>
        <h3 data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-offset="0"  className='mb-[45px] text-[42px] leading-[52px] font-bold'>Наши направление хирургии
</h3> 
        <p data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
        data-aos-offset="0"
    data-aos-delay='200'  className='text-[24px] w-full m-auto max-w-[552px] leading-[32px] pb-[90px] '>
        Если вам необходима помощь, напишите нам на info@medion.uz или заполните форму на сайте
      </p>
      <div data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >

      <SwiperWithScrollIcons  slidesPerView={3} >
        <NewsCard
          
        title={"Title"}
        videoLink={'https://youtu.be/jdxzBYz4aj8?si=khTodW7gUo4JsFp9'}
      />

    <NewsCard
            title={"Title"}
            videoLink={'https://youtu.be/jdxzBYz4aj8?si=khTodW7gUo4JsFp9'}
          />

    <NewsCard
            title={"Title"}
            videoLink={'https://youtu.be/jdxzBYz4aj8?si=khTodW7gUo4JsFp9'}
          />

    <NewsCard
            title={"Title"}
            videoLink={'https://youtu.be/jdxzBYz4aj8?si=khTodW7gUo4JsFp9'}
          />
 <NewsCard
            title={"Title"}
            videoLink={'https://youtu.be/jdxzBYz4aj8?si=khTodW7gUo4JsFp9'}
          />
      </SwiperWithScrollIcons>
      </div>
    </Container>
  )
}
