import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Senior Full-Stack Developer",
      organization: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
    },
    {
      icon: Briefcase,
      title: "Frontend Developer",
      organization: "Digital Agency",
      period: "2020 - 2022",
      description: "Created responsive, animated websites for various clients using modern frontend frameworks.",
    },
    {
      icon: GraduationCap,
      title: "Computer Science Degree",
      organization: "University Name",
      period: "2016 - 2020",
      description: "Graduated with honors, specializing in software engineering and web technologies.",
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      organization: "National Tech Competition",
      period: "2021",
      description: "First place for developing an innovative AI-powered web application.",
    },
  ];

  return (
    <PageTransition variant="slide">
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a love for creating beautiful, functional web experiences
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <Card className="p-8 glass col-span-1 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-cyber mb-4 glow" />
              <h3 className="text-xl font-semibold mb-2">Your Name</h3>
              <p className="text-muted-foreground">Full-Stack Developer</p>
            </Card>

            <Card className="p-8 glass col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                My journey started with a curiosity about how websites work, and it has evolved into a career 
                creating immersive digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Node.js, and modern web technologies. I love combining cutting-edge 
                tech with stunning design to create applications that users love. When I'm not coding, 
                you'll find me exploring new frameworks, contributing to open source, or sharing knowledge 
                through articles and tutorials.
              </p>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Experience & Education
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="ml-20 p-6 glass hover:glow transition-all duration-300">
                      <div className="absolute left-4 -ml-4 p-3 rounded-full bg-card border-2 border-primary glow">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <span className="text-sm text-primary">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-2">{exp.organization}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
