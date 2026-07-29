// Home.js
import React from 'react';
import Hero from '../../Hero';
import About from '../../About';
import Certifications from '../../Certifications';
import Skills from '../../Skills';
import Experience from '../../Experience';
import Services from '../../Services';
import Projects from '../../Projects';
import Contact from '../../Contact';
import Footer from '../../Footer';

const Home = () => {
  return (
    <div className="space-y-16 sm:space-y-20">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
