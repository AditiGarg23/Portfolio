import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, X, TwitterIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { icon: Mail, label: "Email", value: "aditigarg575@gmail.com", href: "mailto:aditigarg575@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/AditiGarg23" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aditi023/" },
  { icon: TwitterIcon, label: "Twitter", href: "https://x.com/_aditigarg_" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_14t63s7",     // EmailJS service ID
      "template_ohkzbpd",    // EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "xsHpceRmMqgauzlrw"       // EmailJS public key
    );

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message.",
    });
  }

  setIsSubmitting(false);
};

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="font-mono text-primary text-sm block mb-2">{"// Get In Touch"}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="terminal-card h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground font-mono">contact.json</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p className="text-muted-foreground mb-4">{"{"}</p>
                {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                  <div key={label} className="pl-4 mb-3">
                    <span className="text-terminal-green">"{label.toLowerCase()}"</span>
                    <span className="text-muted-foreground">: </span>
                    {href ? (<a href={href} className="text-yellow-400 hover:text-primary transition-colors">"{value}"</a>) : (<span className="text-yellow-400">"{value}"</span>)}
                    {index < contactInfo.length - 1 && <span className="text-muted-foreground">,</span>}
                  </div>
                ))}
                <p className="text-muted-foreground mt-4">{"}"}</p>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-4">Connect with me:</p>
                  <div className="flex items-center gap-4">
                    {socialLinks.map(({ icon: Icon, label, href }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300" aria-label={label}>
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
