import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal, Moon, Sun } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card border-b border-border/50" : ""}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 text-foreground group">
            <Terminal className="w-6 h-6 text-primary group-hover:animate-pulse-glow" />
            <span className="font-mono font-bold text-lg">
              <span className="text-primary">&lt;</span>AG<span className="text-primary">/&gt;</span>
            </span>
          </a>  

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (<a key={item.label} href={item.href} className="nav-link font-medium text-sm">{item.label}</a>))}
            <button onClick={toggleTheme} className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300" aria-label="Toggle theme">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#contact" className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">Hire Me</a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground hover:text-primary transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden glass-card rounded-xl mb-4 p-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (<a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">{item.label}</a>))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm text-center hover:bg-primary/90 transition-all">Hire Me</a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
