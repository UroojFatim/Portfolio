import React from 'react';
import Hero from '../Hero'; 
import About from '../About';
import Education from '../Education';

const Home = () => {
  return (
    <div>
      <Hero /> {/* Add the Hero section here */}
      <About/>
      <Education/>
    </div>
  );
};

export default Home;
