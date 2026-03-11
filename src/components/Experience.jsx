import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  { type: "education", title: "B.Tech - Computer Science Engineering", company: "Rajiv Gandhi Prodyogiki Vishwavidhyalaya", period: "2021 - 2025", description: "Graduated with 8.1 CGPA." },
  { type: "education", title: "Senior Secondary", company: "I.B.S. Global Academy", period: "2019 - 2021", description: "Completed with 84%" },
  { type: "eduction", title: "High School", company: "Christu Jyoti Convent Sr. Sec. School", period: "Upto 2019", description: "Completed with 86.4%" },
];

const certifications = [
  { name: "Web Design", issuer: "JobSense", year: "2022" },
  { name: "C++ & Data Structure", issuer: "JobSense", year: "2023" },
  { name: "Python Fundamentals", issuer: "CodeHub", year: "2024" },
  { name: "Python for Data Science and AI", issuer: "Coursera", year: "2024" },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="font-mono text-primary text-sm block mb-2">{"// Career Path"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and the milestones that shaped my career.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div key={`${exp.title}-${index}`} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative pl-12 md:pl-16">
                    <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 ring-4 ring-background" />
                    <div className="glass-card p-6 hover:border-primary/50 transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        {exp.type === "work" ? <Briefcase className="w-4 h-4 text-primary" /> : <GraduationCap className="w-4 h-4 text-primary" />}
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{exp.type === "work" ? "Experience" : "Education"}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3 font-mono">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="glass-card p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div key={cert.name} initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }} className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors duration-300">
                    <p className="font-semibold text-sm mb-1">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                  </motion.div>
                ))}
              </div>
              <a href="/Aditi_Garg_Resume.pdf" download="AditiGarg_Resume" className="block text-center w-full mt-6 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Download Resume
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
