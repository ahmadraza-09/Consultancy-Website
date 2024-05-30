import React from 'react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/testimonialcard.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const TestimonialCard = () => {
  const testimonials = [
    {
      name: 'Rohit Singh',
      rating: 4,
      address: 'Alkapuri, Vadodara',
      review: 'Efficient and helpful. They helped me navigate through various opportunities until I found the right fit.',
      image: 'images/profile.svg'
    },
    {
      name: 'Ananya Chatterjee',
      rating: 4,
      address: 'Salt Lake, Kolkata',
      review: 'Great consultancy with knowledgeable staff. They provided personalized advice and support.',
      image: 'images/profile.svg'
    },
    {
      name: 'Vishal Kumar',
      rating: 3.5,
      address: 'Rajouri Garden, New Delhi',
      review: 'Good service, but there were some delays in communication. Eventually, I found a good job with their help.',
      image: 'images/profile.svg'
    },
    {
      name: 'Tanya Joshi',
      rating: 5,
      address: 'Powai, Mumbai',
      review: 'Exceptional service! The team was very supportive and helped me get placed in a reputed company.',
      image: 'images/profile.svg'
    },
    {
      name: 'Suresh Reddy',
      rating: 4,
      address: 'Jubilee Hills, Hyderabad',
      review: 'Very professional and helpful. They provided valuable insights and job opportunities that matched my profile.',
      image: 'images/profile.svg'
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars).fill(<FontAwesomeIcon icon={fullStar} />)}
        {halfStars > 0 && <FontAwesomeIcon icon={halfStar} />}
        {Array(emptyStars).fill(<FontAwesomeIcon icon={emptyStar} />)}
      </>
    );
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={3}
        style={{ maxWidth: '850px', minWidth: '300px', padding: '40px 20px' }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className='swiperslide'
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} style={{ width: '250px' }}>
            <div className="testimonial-card">
              <div className="image-and-name">
                <img src={testimonial.image} alt="" />
                <div className="name-stars">
                  <h4>{testimonial.name}</h4>
                  <div className="stars">
                    {renderStars(testimonial.rating)}
                  </div>
                  <h6>{testimonial.address}</h6>
                </div>
              </div>
              <p>{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialCard;