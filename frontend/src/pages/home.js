import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero';
import Footer from '../components/footer';
import Testimonial from '../components/testimonial';
import Services from '../components/services';

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<Services/>}
      {<Testimonial/>}
      {<Footer/>}
    </>
  )
}

export default Home;
