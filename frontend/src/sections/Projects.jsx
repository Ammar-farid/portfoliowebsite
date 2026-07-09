import React from 'react';
import { motion } from 'framer-motion';

import imgWeatherApp from '../assets/weather_app_mockup.png';
import imgAiChatbot from '../assets/ai_chatbot_mockup.png';
import imgMusicRec from '../assets/music_recommendation_mockup.png';

const Projects = () => {
  const projects = [
    {
      title: 'WEATHER WEB APP',
      desc: 'A real-time weather dashboard that integrates external API endpoints to present local atmospheric conditions, temperature variations, and forecast stats through a responsive, modern glassmorphism interface.',
      image: imgWeatherApp,
      link: 'https://harmonious-taiyaki-3641dd.netlify.app/'
    },
    {
      title: 'AI CHATBOT',
      desc: 'A clean, conversational UI that features real-time messaging, context preservation, chat history, and seamless backend API data integration.',
      image: imgAiChatbot,
      link: 'https://ai-chatbot-fdbn.vercel.app/'
    },
    {
      title: 'MUSIC RECOMMENDATION SYSTEM',
      desc: 'A machine-learning platform that analyzes song metadata and user preferences to recommend personalized tracks and curator choices.',
      image: imgMusicRec,
      link: 'https://github.com/Ammar-farid/Music_recommendation_system/tree/main'
    }
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '3rem',
                background: 'var(--bg-tertiary)',
                padding: '2rem',
                borderRadius: '30px',
                border: '1px solid rgba(255,255,255,0.02)'
              }}
            >
              <div style={{ flex: '1 1 300px', overflow: 'hidden', borderRadius: '20px' }}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '16/10' }}
                />
              </div>

              <div style={{ flex: '1 1 300px', padding: '1rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
