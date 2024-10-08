// Home.js
import React from 'react';
import Hero from '../../Hero'; 
import About from '../../About';
import Education from '../../Education';
import Skills from '../../Skills';

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero /> {/* Add the Hero section here */}
      <About/>
      <Education/>
      <Skills/>
    </div>
  );
};

export default Home;
