import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Irrigation System using RFID",
      description: "IoT-enabled water pump system using RFID technology for automated irrigation control. Features smart water management, usage tracking, and remote monitoring capabilities for efficient agricultural water distribution.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      tech: ["IoT", "RFID", "Embedded Systems", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "DAIRY FARM MANAGEMENT Web App",
      description: "Comprehensive web application for dairy farm management including inventory tracking, milk production monitoring, and farm operations management with data analytics capabilities.",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=600&fit=crop",
      tech: ["Front End Development", "Database", "Web App", "Management System"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Soil Sense Web Application",
      description: "Web-based platform for soil analysis and recommendations, helping farmers make informed decisions about crop selection and soil treatment with AI-driven insights.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      tech: ["Front End", "Data Analysis", "Web App", "AI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Smart Irrigation Assistant",
      description: "AI-powered irrigation assistant that provides intelligent recommendations for water management based on weather, soil conditions, and crop requirements for optimized farming.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
      tech: ["AI", "IoT", "Machine Learning", "Sensors"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "NDVI-based Rover",
      description: "Autonomous rover equipped with NDVI sensors for real-time crop health monitoring and analysis, providing data-driven insights for precision agriculture applications.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
      tech: ["Robotics", "NDVI Sensors", "Embedded Systems", "Data Analytics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Water Irrigation by Renewable Source",
      description: "Sustainable energy project implementing solar-powered irrigation system for zero-electricity-cost water pumping and distribution in agricultural fields.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      tech: ["Solar Energy", "IoT", "Renewable Energy", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Business Analysis and Process Management",
      description: "Comprehensive business analysis project for agricultural operations, identifying process improvements and implementing management systems for better operational efficiency.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
      tech: ["Business Analysis", "Process Management", "Data Analysis", "Strategy"],
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
