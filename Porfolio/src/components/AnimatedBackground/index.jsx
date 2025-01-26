import { useEffect, useState } from 'react';
import './styles.css';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Smooth cursor following
      const followX = (clientX / innerWidth) * 100;
      const followY = (clientY / innerHeight) * 100;
      
      const updatePosition = () => {
        setMousePosition(prev => ({
          x: prev.x + (followX - prev.x) * 0.1,
          y: prev.y + (followY - prev.y) * 0.1
        }));
        
        setCursorPosition({
          x: clientX,
          y: clientY
        });
        
        animationFrameId = requestAnimationFrame(updatePosition);
      };
      
      updatePosition();
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="animated-background">
      <div className="gradient-layers">
        {/* Main gradient following mouse */}
        <div 
          className="gradient-layer primary"
          style={{
            background: `radial-gradient(
              800px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(99, 102, 241, 0.15),
              transparent 40%
            )`
          }}
        />
        
        {/* Secondary gradients */}
        <div 
          className="gradient-layer secondary"
          style={{
            background: `radial-gradient(
              600px circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
              rgba(139, 92, 246, 0.1),
              transparent 40%
            )`
          }}
        />
        
        {/* Accent gradient */}
        <div 
          className="gradient-layer accent"
          style={{
            background: `radial-gradient(
              400px circle at ${mousePosition.y}% ${mousePosition.x}%,
              rgba(34, 211, 238, 0.1),
              transparent 40%
            )`
          }}
        />
      </div>
      
      {/* Cursor trail effect */}
      <div 
        className="cursor-trail"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      
      {/* Animated particles overlay */}
      <div className="particles-overlay">
        <div className="particles-grid" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 