import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RFID Smart Water Pump",
      description: "IoT-enabled water pump system using RFID technology for automated irrigation control. Features smart water management, usage tracking, and remote monitoring capabilities for efficient agricultural water distribution.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      tech: ["IoT", "RFID", "Embedded Systems", "Arduino"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Advanced IoT Irrigation System",
      description: "Published research project on automated irrigation system for precision agriculture. Implements sensor networks, real-time monitoring, and AI-driven water optimization for sustainable water conservation.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
      tech: ["IoT", "Sensors", "Data Analytics", "Cloud"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Renewable Energy Generation",
      description: "Sustainable energy project focusing on renewable power generation for agricultural applications. Integrates solar panels and wind energy systems for farm automation and irrigation pumps.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      tech: ["Solar Energy", "Green Tech", "Power Systems", "IoT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Hackathon Innovation Project",
      description: "Award-winning project from 'Sell Your Idea' competition at RIT. Secured 2nd prize with an innovative agricultural technology solution addressing modern farming challenges.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
      tech: ["Innovation", "AgriTech", "IoT", "Smart Farming"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Drip Irrigation System",
      description: "Smart water management system developed during workshop at Rathinam Group of Institution. Focuses on precision water delivery and conservation in modern agricultural practices.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop",
      tech: ["Drip System", "Water Management", "Automation", "Sensors"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Kisan Drone Operations",
      description: "Agricultural drone operation project for precision farming applications. Includes aerial surveying, crop monitoring, and pesticide spraying using certified drone technology.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      tech: ["Drone Tech", "Precision Farming", "Aerial Survey", "GIS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <PageTransition variant="zoom">
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden glass hover:glow transition-all duration-300 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
