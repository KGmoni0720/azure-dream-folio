import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Globe3D from "@/components/Globe3D";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Kumaraguru_Resume.pdf";
    link.click();
  };

  return (
    <PageTransition variant="fade">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        {/* Gradient blur orbs */}
        <div className="gradient-blur w-96 h-96 bg-primary/30 top-20 left-20" />
        <div className="gradient-blur w-96 h-96 bg-accent/20 bottom-20 right-20" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-32 h-32 mb-4"
              >
                <img 
                  src={profileImage} 
                  alt="Kumaraguru R" 
                  className="w-full h-full rounded-full object-cover border-2 border-primary glow"
                />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-primary font-semibold"
              >
                Hi, I'm
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold neon-text"
              >
                Kumaraguru R
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Agricultural Engineering Student & IoT Innovator
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Building smart agricultural solutions with IoT and embedded systems to create a sustainable future for farming.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/projects">
                  <Button size="lg" className="glow group">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadResume}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* 3D Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <Globe3D />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
