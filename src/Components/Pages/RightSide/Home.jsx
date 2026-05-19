// Home.js
import React from 'react';
import Hero from '../../Hero'; 
import About from '../../About';
// import Education from '../../Education';
import Certifications from '../../Certifications';
import Skills from '../../Skills';
import Experience from '../../Experience';
import Services from '../../Services';
import Projects from '../../Projects';
import Contact from '../../Contact';

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero /> {/* Add the Hero section here */}
      <About/>
      {/* <Education/> */}
      <Certifications/>
      <Skills/>
      <Experience/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
