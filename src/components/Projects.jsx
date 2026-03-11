import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  { title: "Portfolio", description: "A personal portfolio website showcasing my projects, technical skills, and experience in web development and Python programming.", tech: ["HTML5, CSS3, JavaScript, React, Vite, Tailwind CSS, Framer Motion, Lucide React, EmailJS"], github: "https://github.com/AditiGarg23/Portfolio", live: "https://example.com", featured: true },
  { title: "Planet Explorer: Star Wars", description: "A Star Wars themed web application that allows users to explore planets from the Star Wars universe using data from a public API, featuring dynamic data fetching and an interactive user interface.", tech: ["HTML5, CSS3/Tailwind CSS, JavaScript, React, SWAPI API"], github: "https://github.com/AditiGarg23/Planet-Explorer-Star-Wars", live: "https://planet-explorer-star-wars.vercel.app/", featured: true },
  { title: "Galactic", description: "A space-themed web application that presents interactive and visually engaging content about the universe, featuring modern UI design, smooth navigation, and responsive layouts for an immersive user experience.", tech: ["HTML5, CSS3, JavaScript"], github: "https://github.com", live: "https://example.com", featured: true },
  { title: "SecureGate RBAC System", description: "A role-based access control (RBAC) system that manages user authentication and permissions, ensuring secure access to application resources based on assigned user roles.", tech: ["Python, FastAPI"], github: "https://github.com/AditiGarg23/The-SecureGate-RBAC-System" },
  { title: "WoodenStreet Clone", description: "An e-commerce furniture website clone that allows users to browse products, view detailed furniture listings, and explore modern UI layouts. It replicates the core features of the WoodenStreet platform with responsive design and smooth user experience.", tech: ["HTML, CSS"], github: "https://github.com/AditiGarg23/Wooden-Street-Clone", live: "https://wooden-street-clone.vercel.app/", featured: false },
  { title: "Currency Converter", description: "A desktop-based currency converter application built using Python that allows users to convert amounts between multiple international currencies. The application features a simple GUI, real-time conversion using predefined exchange rates, and a history system that stores previous conversions using file handling.", tech: ["Python, Tkinter, ttk Widgets, File Handling"], github: "https://github.com" },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="font-mono text-primary text-sm block mb-2">{"// Featured Work"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects I've Built</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of projects that showcase my skills in web development, python, backened, and problem-solving.</p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="project-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Featured Project</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (<span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground">{t}</span>))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300" aria-label="View on GitHub"><Github className="w-5 h-5" /></a>
                  {project.live && (<a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300" aria-label="View live site"><ExternalLink className="w-5 h-5" /></a>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h3 className="text-xl font-bold mb-6 text-center">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }} className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View on GitHub"><Github className="w-5 h-5" /></a>
                    {project.live && (<a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View live site"><ExternalLink className="w-5 h-5" /></a>)}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (<span key={t} className="text-xs font-mono text-muted-foreground">{t}</span>))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
