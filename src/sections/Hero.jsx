import React from 'react';
import { motion } from 'framer-motion';
import portrait from '../assets/mainpicture.png';


const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', overflow: 'hidden' }}>

      <style>{`
        .hero-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1400px;
          height: 100%;
          gap: 2rem;
          padding: 0 2rem;
        }
        .hero-left {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        .hero-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-image-wrapper {
          flex: 0 0 350px;
          position: relative;
          height: 500px;
        }
        .hero-title {
          font-size: clamp(4rem, 7vw, 9rem);
          font-weight: 800;
          line-height: 0.9;
          margin: 0;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        
        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            gap: 3rem;
            padding-top: 2rem;
          }
          .hero-left, .hero-right {
            align-items: center;
            text-align: center;
          }
          .hero-right p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-image-wrapper {
            width: 90%;
            max-width: 400px;
            height: auto;
            aspect-ratio: 4/5;
          }
        }
      `}</style>

      <div className="container hero-container">

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-left"
        >
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Hi , I'm </h3>
          <h1 className="hero-title">FULL STACK</h1>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%' }}
          >
            <img src={portrait} alt="Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
          </motion.div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-right"
        >
          <h1 className="hero-title">ENGINEER</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1.5rem', maxWidth: '350px', fontWeight: 400 }}>
            Transforming concepts into powerful web products.
          </p>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          display: 'flex',
          gap: '1.5rem',
          marginTop: '4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          zIndex: 3
        }}
      >
        <a href="/AMMAR_Farid.pdf" download className="btn btn-primary">Download CV</a>
        <a href="#projects" className="btn btn-outline">View Projects</a>
        <a href="#contact" className="btn btn-outline">Contact</a>
      </motion.div>

    </section>
  );
};

export default Hero;
