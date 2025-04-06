import Header from './components/Header';
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  return (
    <div className='bg-green-950'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
};

export default App;
