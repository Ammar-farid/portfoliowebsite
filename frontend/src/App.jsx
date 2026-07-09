import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ background: 'var(--bg-color)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} Digital Designer. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
