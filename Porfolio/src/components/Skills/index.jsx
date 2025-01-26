import { motion } from 'framer-motion';
import './styles.css';

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Django", level: 95, icon: "🐍" },
      { name: "Python", level: 90, icon: "📊" },
      { name: "PostgreSQL", level: 85, icon: "🗄️" },
      { name: "REST APIs", level: 90, icon: "🔌" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85, icon: "⚛️" },
      { name: "JavaScript", level: 88, icon: "💻" },
      { name: "HTML/CSS", level: 90, icon: "🎨" },
      { name: "Bootstrap", level: 85, icon: "🎯" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 88, icon: "🔄" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "CI/CD", level: 80, icon: "⚡" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>

          <div className="skills-grid">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="skill-category glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    >
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar-container">
                        <motion.div
                          className="skill-bar"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 