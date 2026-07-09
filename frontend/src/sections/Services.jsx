import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaBrain, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Design',
      details: {
        label: 'Languages & Frameworks',
        items: [
          'HTML5 & Modern CSS3 Styling',
          'Semantic JavaScript (ES6+)',
          'React.js Component Architecture',
          'TailwindCSS Utility Ecosystem',
          'Bootstrap Grid System'
        ]
      }
    },
    {
      icon: <FaServer />,
      title: 'Web Development',
      details: {
        label: 'Tech Stack',
        items: [
          'Node.js & Express.js Runtimes',
          'RESTful API Development',
          'MongoDB & MySQL Database Systems',
          'Auth Services',
        ]
      }
    },
    {
      icon: <FaBrain />,
      title: 'AI / ML',
      details: {
        label: 'Python Ecosystem',
        items: [
          'Python Scripting & Automation',
          'NumPy & Pandas Analytics',
          'Scikit-Learn & ML Models',
          'Web Scraping & Crawling',
          'Data Visualizations'
        ]
      }
    },
    {
      icon: <FaTools />,
      title: 'Tools & Utilities',
      details: {
        label: 'Developer Utilities',
        items: [
          'Git & GitHub Version Control',
          'Postman API Testing Suites',
          'VS Code Configuration',
          'Google Colab',
          'Command Line Interfaces'
        ]
      }
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="text-gradient">Services</span></h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'var(--bg-tertiary)',
                  padding: '2.5rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  minHeight: '420px'
                }}
                onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(127, 90, 240, 0.15)'}
                onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'}
              >
                <div>
                  <div style={{
                    fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '1.2rem',
                    background: 'rgba(127, 90, 240, 0.1)', width: '70px', height: '70px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0', fontWeight: 700 }}>{service.title}</h3>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem', fontWeight: 600 }}>
                    {service.details.label}
                  </h4>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.details.items.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', flexShrink: 0 }}></span>
                        <h4 style={{ fontSize: '0.88rem', color: 'var(--text-primary)', fontWeight: 500, margin: 0 }}>
                          {item}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
