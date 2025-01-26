import { motion } from 'framer-motion';
import { useState } from 'react';
import './styles.css';

const FloatingAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#home', icon: '🏠', label: 'Home' },
    { href: '#about', icon: '👨‍💻', label: 'About' },
    { href: '#skills', icon: '🎯', label: 'Skills' },
    { href: '#projects', icon: '💼', label: 'Projects' },
    { href: '#contact', icon: '📧', label: 'Contact' }
  ];

  return (
    <div className="floating-action">
      <motion.div 
        className={`fab-menu ${isOpen ? 'open' : ''}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {links.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="fab-item glass"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="fab-icon">{link.icon}</span>
            <span className="fab-label">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
      <motion.button
        className="fab-button glass"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className={`fab-toggle ${isOpen ? 'open' : ''}`}>☰</span>
      </motion.button>
    </div>
  );
};

export default FloatingAction; 