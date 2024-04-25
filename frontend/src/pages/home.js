import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero';
import Footer from '../components/footer';
import Testimonial from '../components/testimonial';
import Services from '../components/services';
import WelcomeSection from '../components/welcomesection';
import FindJob from '../components/findjob';

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<WelcomeSection/>}
      {<FindJob/>}
      {<Services/>}
      {<Testimonial/>}
      {<Footer/>}
    </>
  )
}

export default Home;
