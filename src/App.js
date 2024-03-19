import React from 'react';
import About from './components/Abouts';
import Footer from './components/Footers';
import Hero from './components/Heros';
import Navbar from './components/Navbars';
import Services from './components/Services';
import Tours from './components/Tours';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
