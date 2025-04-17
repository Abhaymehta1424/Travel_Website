import React from 'react';
import '../../App.css';
import HeroSection from '../HSection.js';
import Footer from '../Footer';
import Cards from '../Cards.js';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
