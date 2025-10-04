import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by OpenAI with WebSocket support, message history, and multiple chat rooms.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      tech: ["React", "Socket.io", "OpenAI", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance with interactive charts, real-time data updates, and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media App",
      description: "Instagram-like social platform with image uploads, likes, comments, and user profiles. Built with modern stack.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management Tool",
      description: "Collaborative task management application with drag-and-drop, team collaboration, and project tracking features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tech: ["React", "PostgreSQL", "Node.js", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tech: ["React", "OpenWeather API", "Mapbox", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
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
