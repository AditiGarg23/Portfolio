import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 75 },
      { name: "CSS3", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "React.js", level: 65 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python / Flask", level: 55 },
      { name: "MySQL", level: 65 },
      { name: "SQLAlchemy", level: 65 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / Github", level: 75 },
      { name: "VS Code", level: 85 },
      { name: "Google Colab", level: 75 },
    ],
  },
];

const techStack = [
  "HTML5", "CSS3", "React", "JavaScript", "Bootstrap","Tailwind CSS", "C", "Python", "SQLite","MySQL", "FastAPI", 
  "Flask", "Git", "GitHub", "Figma"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm block mb-2">{"// My Skills"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in modern web technologies and continuously expand my skill set to deliver cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
              className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
