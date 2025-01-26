import { motion } from 'framer-motion';
import './styles.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("");
  const fullText = "Welcome to my Portfolio";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Reduced movement effect for smoother experience
    const x = (clientX / innerWidth - 0.5) * 10;
    const y = (clientY / innerHeight - 0.5) * 10;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="hero" 
      id="home"
      onMouseMove={handleMouseMove}
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600"
      }}
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>
      <motion.div
        className="hero-content mouse-parallax"
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
        }}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="badge-icon">👋</span>
            <span className="badge-text">Welcome to my portfolio</span>
          </motion.div>
          
          <motion.h1
            className="gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I'm <span className="highlight neon-text">Faisal Tahseen</span>
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="roles-wrapper">
              <span>Full Stack Developer</span>
              <span>Django Expert</span>
              <span>Problem Solver</span>
              <span>Web Developer</span>
              <span>AI/ML Developer</span>
              <span>Data Scientist</span>
            </div>
          </motion.div>

          <motion.p
            className="hero-description glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Passionate Full Stack Developer specializing in Django and modern web technologies
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="primary-button neon-border hover-lift">
              View My Work
              <span className="button-icon">→</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1oYJLeU_Akcnlt9M6LHqL9vL19Si7qxaa/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="secondary-button glass hover-lift"
            >
              Download CV
              <span className="button-icon">↓</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img 
              src="/faisal.jpg" 
              alt="Faisal Tahseen" 
              className="profile-image"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 