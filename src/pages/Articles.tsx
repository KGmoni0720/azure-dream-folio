import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Advanced IoT-Driven Automated Irrigation System",
      excerpt: "Research publication on precision agriculture and sustainable water conservation using IoT technology, sensor networks, and automated control systems for modern farming practices.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop",
      date: "2024",
      readTime: "15 min read",
      url: "#",
    },
    {
      title: "Development of Low-Cost Harvesting Machinery",
      excerpt: "Research paper focused on developing affordable harvesting machinery solutions for small-scale chili and tomato farmers, improving efficiency and reducing labor costs.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop",
      date: "2025",
      readTime: "12 min read",
      url: "#",
    },
    {
      title: "Tech-Driven Agriculture: Bridging Innovation and Farming",
      excerpt: "Workshop insights from Regional Agriculture Transformation Training (RATT 2025), exploring how IoT, drones, and automation are revolutionizing agricultural operations.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=400&fit=crop",
      date: "2025",
      readTime: "10 min read",
      url: "#",
    },
    {
      title: "Smart Water Management in Modern Agriculture",
      excerpt: "Workshop insights on drip irrigation systems and smart water management techniques at RIT, focusing on water conservation and efficiency in agricultural practices.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=400&fit=crop",
      date: "2024",
      readTime: "8 min read",
      url: "#",
    },
    {
      title: "Build Your Own Generative AI Model",
      excerpt: "Workshop experience on building generative AI models, exploring practical applications of artificial intelligence in agricultural technology and automation systems.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      date: "2024",
      readTime: "7 min read",
      url: "#",
    },
    {
      title: "Precision Farming with Drone Technology",
      excerpt: "Insights from Kisan Drone Operator certification by NSDC, covering aerial surveying, crop monitoring, and precision agriculture techniques using UAV technology.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
      date: "2024",
      readTime: "9 min read",
      url: "#",
    },
  ];

  return (
    <PageTransition variant="slide">
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Publications & Articles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Research publications, workshops, and insights on agricultural technology and innovation
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden glass hover:glow transition-all duration-300 h-full flex flex-col">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                      asChild
                    >
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
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

export default Articles;
