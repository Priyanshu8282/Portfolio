import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Tech, Works, Navbar,Whatsapp } from './components';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-1/4">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <Whatsapp />
      </div>
    </BrowserRouter>
  );
}

export default App;