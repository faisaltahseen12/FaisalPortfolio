import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import './styles.css';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="project-card glass"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
    >
      <div className="project-content" style={{ transform: "translateZ(20px)" }}>
        <div className="project-image" style={{width: "500px", height:"200px"}}>
          <img src={project.image} alt={project.title} />
          {isHovered && (
            <motion.div
              className="project-overlay glass"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'WiseBuy E-Commerce',
      description: 'Full-stack e-commerce platform with advanced features including real-time inventory management, secure payment processing, and personalized user recommendations.',
      image: './home1.png',
      technologies: ['Django', 'HTML', 'SQLite', 'JQuery', 'CSS'],
      demo: 'https://wisebuy.com',
      github: ''
    },
    {
      id: 2,
      title: 'Attendance Management System',
      description: 'Advanced attendance tracking system using facial recognition with OpenCV. Features real-time detection, automated attendance marking, and detailed reporting.',
      image: './img.png',
      technologies: ['Python', 'OpenCV', 'Django', 'SQLite'],
      demo: 'https://attendance-system.com',
      github: 'https://github.com/yourusername/attendance-system'
    },
    {
      id: 3,
      title: 'React CV Builder',
      description: 'Interactive CV builder with real-time preview, multiple templates, and PDF export functionality. Built with modern React and styled-components.Online Preview and Download',
      image: './img3.png',
      technologies: ['React', 'Redux', 'Styled-Components', 'PDF.js'],
      demo: 'https://react-cv-builder.com',
      github: 'https://github.com/yourusername/react-cv-builder'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 