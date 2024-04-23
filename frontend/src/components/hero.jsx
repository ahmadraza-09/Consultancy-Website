import React from 'react'
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../css/hero.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {
  return (
    <>
    <div className='hero'>
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // autoplay={{ delay: 2500, disableOnInteraction: false }} 
        spaceBetween={30}
        slidesPerView={1}
        style={{ maxWidth: '100%', minWidth: '300px' , padding: '0px 0px' }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: {
            navigation: false,
          },
          480: {
            navigation: false,
          },
          628: {
            navigation: false,
            
          }
        }}
      >
        <SwiperSlide>
          <div className='slider-card'>
            <div className="overlay">
              <h2>We Provide Consultant Over India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis est pariatur enim vel. Itaque rerum excepturi expedita? Inventore, corrupti. Natus omnis commodi nesciunt cum, vitae necessitatibus consectetur fugit dignissimos?
              </p>
              <button>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card2'>
            <div className="overlay">
              <h2>We Provide Consultant Over India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis est pariatur enim vel. Itaque rerum excepturi expedita? Inventore, corrupti. Natus omnis commodi nesciunt cum, vitae necessitatibus consectetur fugit dignissimos?
              </p>
              <button>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card3'>
            <div className="overlay">
              <h2>We Provide Consultant Over India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis est pariatur enim vel. Itaque rerum excepturi expedita? Inventore, corrupti. Natus omnis commodi nesciunt cum, vitae necessitatibus consectetur fugit dignissimos?
              </p>
              <button>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card4'>
            <div className="overlay">
              <h2>We Provide Consultant Over India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis est pariatur enim vel. Itaque rerum excepturi expedita? Inventore, corrupti. Natus omnis commodi nesciunt cum, vitae necessitatibus consectetur fugit dignissimos?
              </p>
              <button>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card5'>
            <div className="overlay">
              <h2>We Provide Consultant Over India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis est pariatur enim vel. Itaque rerum excepturi expedita? Inventore, corrupti. Natus omnis commodi nesciunt cum, vitae necessitatibus consectetur fugit dignissimos?
              </p>
              <button>Know More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider-card slider-card6'>
            <div className="overlay">
              <h2>We Provide Consultant Over India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure veritatis est pariatur enim vel. Itaque rerum excepturi expedita? Inventore, corrupti. Natus omnis commodi nesciunt cum, vitae necessitatibus consectetur fugit dignissimos?
              </p>
              <button>Know More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Hero
