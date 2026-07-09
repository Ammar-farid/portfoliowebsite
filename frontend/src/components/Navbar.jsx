import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light-mode');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light-mode');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = ['Home', 'About', 'Services', 'Projects'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.3s ease',
      }}
      className={isScrolled ? 'glass' : ''}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
          <span className="text-gradient">Ammar Farid</span>
        </a>

        <ul style={{ display: 'flex', gap: '2rem', display: 'none' }} className="nav-desktop">
          {navLinks.map((link) => (
            <motion.li key={link} whileHover={{ y: -2 }}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Placeholder for desktop nav CSS since inline media query doesn't work */}
        <style>{`
          @media (min-width: 768px) {
            .nav-desktop { display: flex !important; }
            .nav-mobile-btn { display: none !important; }
          }
        `}</style>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleTheme}
            style={{
              color: 'var(--text-primary)',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.3s ease'
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="nav-mobile-btn" style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>
            ☰
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
