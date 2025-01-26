import { motion } from 'framer-motion';
import { ModelViewer } from '../3DModel';
import './styles.css';

const About = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'Three.js'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'MongoDB'] },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS'] }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <motion.div 
              className="about-text glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-content">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  I'm a passionate Full Stack Developer with expertise in Django and modern web technologies. 
                  My journey in software development has been driven by a desire to create impactful solutions.
                </motion.p>
                
                <motion.div 
                  className="skills-highlight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3>Key Skills:</h3>
                  <ul>
                    <li>Full Stack Development</li>
                    <li>Django & Python</li>
                    <li>React & Modern JavaScript</li>
                    <li>Database Design</li>
                    <li>REST API Development</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="experience-highlight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3>Experience:</h3>
                  <ul>
                    <li>Web Application Development</li>
                    <li>Database Management</li>
                    <li>System Architecture</li>
                    <li>Team Collaboration</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 