import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border py-12">
      {/* Gradient blur orb */}
      <div className="gradient-blur w-96 h-96 bg-primary/20 top-0 left-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-muted-foreground text-center"
          >
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <p className="mt-2">Built with React, Three.js, and Framer Motion</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
