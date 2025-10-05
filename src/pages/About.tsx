import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const experiences = [
    {
      icon: GraduationCap,
      title: "B.Tech Agricultural Engineering",
      organization: "Dhanalakshmi Srinivasan College of Engineering",
      period: "2022 - 2026",
      description: "CGPA: 8.5 - Specializing in IoT applications for agriculture, precision farming, and smart irrigation systems.",
    },
    {
      icon: Award,
      title: "Sell Your Ideas Winner",
      organization: "RIT Campus",
      period: "2025",
      description: "Winner in Sell Your Ideas entrepreneurship competition for innovative agricultural solution.",
    },
    {
      icon: Award,
      title: "Technical Quiz & India's Mega Techno-Cultural Fest",
      organization: "Various Competitions",
      period: "2024-2025",
      description: "Participated and achieved recognition in technical competitions and cultural festivals.",
    },
    {
      icon: Briefcase,
      title: "Internship - AADIR-Prinav Dairy and Agro Products",
      organization: "AADIR-Prinav",
      period: "2024",
      description: "Completed internship in dairy and agro products management and operations.",
    },
    {
      icon: Briefcase,
      title: "IoT Network Specialist Certificate",
      organization: "Reliance Foundation Skilling Academy",
      period: "2024",
      description: "Completed comprehensive certificate program in IoT network systems and implementation.",
    },
    {
      icon: Briefcase,
      title: "Kisan Drone Operator Certification",
      organization: "NSDC (Skill India Programme)",
      period: "2024",
      description: "Certified in agricultural drone operations for precision farming and crop monitoring.",
    },
    {
      icon: Briefcase,
      title: "Workshops & Training",
      organization: "Various Organizations",
      period: "2023 - 2025",
      description: "Tech-driven Agriculture (RATT 2025), Drip Irrigation & Smart Water Management (RIT), Build Your Own Generative AI Model.",
    },
    {
      icon: Briefcase,
      title: "FDP & Certifications",
      organization: "ICAR & HP LIFE",
      period: "2024",
      description: "ICAR International FDP, Cybersecurity, Social Media Marketing, Agile Project Management, and multiple online courses.",
    },
    {
      icon: GraduationCap,
      title: "Higher Secondary Certificate (HSC)",
      organization: "Mount Park Higher Secondary School",
      period: "2021 - 2022",
      description: "Scored 543/600 (90%) with strong foundation in science and mathematics.",
    },
    {
      icon: GraduationCap,
      title: "SSLC",
      organization: "Sri Ramakrishna Matriculation School",
      period: "2019 - 2020",
      description: "Scored 493/500 (98%) with excellent academic performance.",
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
              Agricultural Engineering student passionate about IoT and sustainable farming solutions
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
              <div className="relative w-32 h-32 mb-4">
                <img 
                  src={profileImage} 
                  alt="Kumaraguru R" 
                  className="w-full h-full rounded-full object-cover border-2 border-primary glow"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kumaraguru R</h3>
              <p className="text-muted-foreground">Agricultural Engineering Student</p>
              <p className="text-sm text-muted-foreground mt-2">Virudhachalam, Tamil Nadu</p>
            </Card>

            <Card className="p-8 glass col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Agricultural Engineering student at Dhanalakshmi Srinivasan College of Engineering. 
                My journey combines traditional agriculture with cutting-edge technology, 
                specializing in IoT-driven agricultural solutions and embedded systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in bridging innovation and farming to create a sustainable future. With expertise in smart 
                irrigation systems, renewable energy, and precision agriculture, I've developed solutions like RFID 
                Smart Water Pumps and published research on automated irrigation systems. I'm also a certified Kisan 
                Drone Operator and IoT Network Specialist, committed to revolutionizing agriculture through technology.
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
