import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaWhatsapp, FaLinkedin, FaDribbble } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: 'Matric',
      institution: 'District Public School, Okara',
      year: '2017 - 2019'
    },
    {
      degree: 'College',
      institution: 'District Public School and College, Okara',
      year: '2019 - 2021'
    },
    {
      degree: 'Bachelors in Computer Science(In Progress)',
      institution: 'University of Management and Technology, Lahore',
      year: '2023 - 2027'
    }
  ];

  const skills = [
    { name: 'Web Design', level: 70, desc: 'Architecting hyper-responsive, high-converting digital interfaces and cutting-edge user experiences.' },
    { name: 'Web Development', level: 70, desc: 'Engineering mission-critical server architectures, secure backends, and high-performance database pipelines.' },
    { name: 'AI / ML', level: 70, desc: 'Designing predictive machine learning models, neural networks, and scalable automated data mining systems.' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Ammar-farid' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/923024955525' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ammar-farid0302' },
    { icon: <FaDribbble />, url: '#' }
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
            I'm a passionate digital creator with a unique blend of design sensibilities and technical prowess.
            My journey bridges the gap between aesthetics and functionality, ensuring every project not only looks stunning but performs flawlessly.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                flex: '1 1 350px',
                display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left',
                background: 'var(--bg-tertiary)', padding: '2.5rem', borderRadius: '20px',
                border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>My <span className="text-gradient">Skills</span></h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontWeight: 600 }}>
                      <span style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{skill.name}</span>
                      <span style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }}>{skill.level}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.6rem' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}
                      />
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{skill.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                flex: '1 1 350px',
                display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left',
                background: 'var(--bg-tertiary)', padding: '2.5rem', borderRadius: '20px',
                border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>My <span className="text-gradient">Education</span></h3>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {education.map((edu, index) => (
                  <div key={index} style={{ display: 'flex', gap: '1.5rem', position: 'relative', marginBottom: index !== education.length - 1 ? '1.5rem' : '0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--accent-primary)', marginTop: '6px', zIndex: 2 }}></div>
                      {index !== education.length - 1 && (
                        <div style={{ width: '2px', position: 'absolute', top: '22px', bottom: '-24px', left: '7px', background: 'var(--border-color)', zIndex: 1 }}></div>
                      )}
                    </div>
                    <div style={{ paddingBottom: '1rem' }}>
                      <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{edu.degree}</h4>
                      <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{edu.year}</p>
                      <p style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', flexWrap: 'wrap' }}>
            <p>Call: <a href="tel:+923024955525" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>+923024955525</a></p>
            <p>Email: <a href="mailto:ammarfard03@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>ammarfard03@gmail.com</a></p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target={link.url !== '#' ? "_blank" : "_self"}
                rel={link.url !== '#' ? "noopener noreferrer" : ""}
                whileHover={{ scale: 1.2, color: 'var(--accent-primary)' }}
                style={{
                  color: 'var(--text-secondary)', fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline"
          >
            My Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
