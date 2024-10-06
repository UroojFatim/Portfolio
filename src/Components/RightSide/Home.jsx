import React from 'react';
import Hero from '../Hero'; 
import About from '../About';

const Home = () => {
  return (
    <div>
      <Hero /> {/* Add the Hero section here */}
      <About/>

      <section className="">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I'm a web developer with a passion for building user-friendly
          interfaces and creating efficient backend solutions. I love working
          with JavaScript, React, Node.js, and other web technologies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p>Here are some of the projects I've worked on...</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>If you'd like to get in touch, please email me at: example@example.com</p>
      </section>
    </div>
  );
};

export default Home;
