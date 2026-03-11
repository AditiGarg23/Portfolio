import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code, label: "Fresher", description: "Building projects to learn" },
  { icon: Coffee, label: "Projects", description: "Learning Technologies" },
  { icon: Lightbulb, label: "Problem Solver", description: "Creative solutions" },
  { icon: Rocket, label: "Fast Learner", description: "Always growing" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Terminal Card */}
          <div className="order-2 lg:order-1">
            <div className="terminal-card glow-border">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground font-mono">about.jsx</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-primary">const</span> <span className="text-accent">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-terminal-green">name</span>: <span className="text-yellow-400">"Aditi Garg"</span>,
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-terminal-green">role</span>: <span className="text-yellow-400">"Web Developer, Python Developer"</span>,
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-terminal-green">location</span>: <span className="text-yellow-400">"Bengaluru, Karnataka"</span>,
                </p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-terminal-green">passions</span>: [
                </p>
                <p className="pl-8 text-yellow-400">"Clean Architecture",</p>
                <p className="pl-8 text-yellow-400">"Open Source",</p>
                <p className="pl-8 text-yellow-400">"User Experience"</p>
                <p className="pl-4 text-muted-foreground">],</p>
                <p className="pl-4 text-muted-foreground">
                  <span className="text-terminal-green">available</span>: <span className="text-primary">true</span>
                </p>
                <p className="text-muted-foreground">{"}"}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="font-mono text-primary text-lg block mb-2">{"// About Me"}</span>
                Crafting Digital Experiences
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 mt-4">
                I'm a passionate Computer Science Engineering graduate with a strong interest in software development and web technologies. I enjoy building responsive web applications and developing efficient solutions using Python. My technical skills include web development, Python programming, and problem-solving. I am passionate about learning new technologies, improving my development skills, and working on projects that create meaningful experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I thrive on solving complex problems and transforming ideas into elegant, efficient code. When I'm not coding, you'll find me contributing to learning projects or exploring new technologies.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, label, description }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-4 hover:border-primary/50 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <p className="font-semibold text-sm">{label}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
