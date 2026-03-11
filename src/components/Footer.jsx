import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 text-foreground group">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold">
              <span className="text-primary">&lt;</span>AG<span className="text-primary">/&gt;</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Aditi Garg. Built with <Heart className="w-4 h-4 text-red-500 inline" /> and React
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
