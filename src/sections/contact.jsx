import Container from '@/components/container'
import React from 'react'
import {Input} from 'antd' 
export default function Contact() {
  return (
    <div     data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="100"
    data-aos-offset="0"  className='bg-[#DCEDFF] py-[150px]'> 
        <Container className="flex gap-[10px] justify-between ">
            <div data-aos="fade-right" data-aos-delay="200" className='w-full max-w-[656px]  '>
                  <h3 className='text-[36px] leading-[42px] font-semibold'>Сеть многопрофильных клиник MEDION в Ташкенте</h3>
                  <p className='text-[22px] leading-[32px]  mt-[23px]'>Medion — ведущая сеть клиник в Ташкенте, где забота о вашем
                      здоровье является приоритетом. <br />
                      Мы заслужили доверие тысяч пациентов благодаря высокому
уровню диагностики на современном оборудовании,
амбулаторному и стационарному лечению, а также проведению
сложных операций под руководством лучших специалистов, как
отечественных, так и зарубежных.
                  </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="200" className='bg-white w-full max-w-[360px] rounded-[10px] p-[34px]'>
                  <p className='text-[25px] leading-[32px] font-semibold'>Есть вопросы?</p>
                  <p className='text-[16px] w-full max-w-[250px] leading-[24px] pt-[12px] pb-[21px] '>
                  Напишите нам, мы расскажем об
                    услугах и скидках, запишем на
                    консультацию и процедуры.
                  </p>
                  <Input className='bg-[#F0F0F0] mb-[20px] rounded-0 border-none hover:bg-[#F0F0F0]  focus:bg-[#F0F0F0] px-[16px] py-[15px]' placeholder='Ваше имя*' />
                  <Input className='bg-[#F0F0F0] mb-[20px] rounded-0 border-none hover:bg-[#F0F0F0]  focus:bg-[#F0F0F0] px-[16px] py-[15px]' placeholder='99-999-9999' />
                  <Input className='bg-[#F0F0F0] mb-[20px] rounded-0 border-none hover:bg-[#F0F0F0]  focus:bg-[#F0F0F0] px-[16px] py-[15px]' placeholder='Задайте вопрос*' />
                  <button className='inline-block py-[12px] px-[30px] rounded-[10px] bg-[#1C2B50] text-white'>Заказать звонок</button>
                  <p className='text-[16px] w-full leading-[24px] pt-[12px] pb-[21px] '>
                  Нажимая на кнопку, вы соглашаетесь
c нашей политикой
конфиденциальности
                  </p>
              </div>
        </Container>
    </div>
  )
}
