import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero';
import Footer from '../components/footer';
import Testimonial from '../components/testimonial';

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<Testimonial/>}
      {<Footer/>}
    </>
  )
}

export default Home;
