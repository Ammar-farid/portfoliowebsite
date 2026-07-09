import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import portrait from '../assets/mainpicture.png';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully ✅');
        reset();
      } else {
        alert('Failed to send message ❌');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's <span className="text-gradient">Work Together</span></h2>
          
          <div style={{ 
            display: 'flex', flexWrap: 'wrap', gap: '4rem', 
            background: 'var(--bg-tertiary)', padding: '3rem', 
            borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)'
          }}>
            
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={portrait} alt="Contact me" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Ready to start your next project?</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Fill out the form and I'll get back to you within 24 hours.</p>
            </div>

            <div style={{ flex: '2 1 400px' }}>
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    {...register('name', { required: 'Name is required' })}
                    style={{ 
                      width: '100%', padding: '1rem 1.5rem', borderRadius: '10px', 
                      background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-primary)', fontSize: '1rem', outline: 'none',
                      transition: 'border 0.3s ease'
                    }}
                  />
                  {errors.name && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block' }}>{errors.name.message}</span>}
                </div>

                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    style={{ 
                      width: '100%', padding: '1rem 1.5rem', borderRadius: '10px', 
                      background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-primary)', fontSize: '1rem', outline: 'none'
                    }}
                  />
                  {errors.email && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block' }}>{errors.email.message}</span>}
                </div>

                <div>
                  <select 
                    defaultValue=""
                    {...register('service', { required: 'Please select a service' })}
                    style={{ 
                      width: '100%', padding: '1rem 1.5rem', borderRadius: '10px', 
                      background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', appearance: 'none'
                    }}
                  >
                    <option value="" disabled>Service Needed</option>
                    <option value="web_design">Web Design</option>
                    <option value="web_dev">Web Development</option>
                    <option value="ai_ml">AI/ML</option>
                  </select>
                  {errors.service && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block' }}>{errors.service.message}</span>}
                </div>

                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    style={{ 
                      width: '100%', padding: '1rem 1.5rem', borderRadius: '10px', 
                      background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', resize: 'vertical'
                    }}
                  ></textarea>
                  {errors.message && <span style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '0.5rem', display: 'block' }}>{errors.message.message}</span>}
                </div>

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
