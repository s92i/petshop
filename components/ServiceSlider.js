import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'

import Service1Icon from '../public/img/services/service-icon1.svg'
import Service2Icon from '../public/img/services/service-icon2.svg'
import Service3Icon from '../public/img/services/service-icon3.svg'

const services = [
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: 'Prescription and over-the-counter medication dispensing and advice, medical device sales, health-related product sales, vaccination services, medication review services, and health screening services.',
    btnText: 'Explore'
  },
  {
    image: Service2Icon,
    name: 'Breed-specific Haircuts',
    description: 'Professional dog grooming services tailored to specific dog breeds, including the "schnauzer cut," "poodle cut," and "Bichon Frise cut"',
    btnText: 'Explore'
  },
  {
    image: Service3Icon,
    name: 'Cloths',
    description: 'Pet clothing sales and fitting, including shirts, sweaters, coats, jackets and other items, available in a variety of styles and sizes for different types and breeds of pets. Additional activity-specific pet clothing, such as hiking or swimming gear.',
    btnText: 'Explore'
  }
]

const ServiceSlider = () => {
  return (
    <Swiper slidesPerView={1} spaceBetween={30} navigation={true} modules={[Navigation]} breakpoints={{ 768: { slidesPerView: 2 } }} className='serviceSlider min-h-[680px]'>
      {services.map((service, i) => {
        return (
          <>
            <SwiperSlide key={i} className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8'>
              <Image src={service.image} />
              <div className='text-[26px] font-medium mb-4'>{service.name}</div>
              <div className='text-[20px] mb-8'>{service.description}</div>
              <button className='btn btn-primary'>{service.btnText}</button>
            </SwiperSlide>
          </>
        )
      })}
    </Swiper>
  )
}

export default ServiceSlider
