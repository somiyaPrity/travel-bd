import React from 'react';
import Packages from './Packages/Packages';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import CounterDiv from './CountUp/CounterDiv';

const Home = () => {
  return (
    <div id='home'>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Packages></Packages>
      <CounterDiv></CounterDiv>
      <Footer></Footer>
    </div>
  );
};

export default Home;
