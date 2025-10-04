import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large-scale React applications with modern patterns and architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read",
      url: "https://medium.com",
    },
    {
      title: "Mastering Framer Motion Animations",
      excerpt: "A comprehensive guide to creating stunning animations in React using Framer Motion library.",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=400&fit=crop",
      date: "March 10, 2024",
      readTime: "10 min read",
      url: "https://dev.to",
    },
    {
      title: "Three.js for Web Developers",
      excerpt: "Getting started with 3D graphics on the web using Three.js and React Three Fiber.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=400&fit=crop",
      date: "March 5, 2024",
      readTime: "12 min read",
      url: "https://medium.com",
    },
    {
      title: "TypeScript Tips and Tricks",
      excerpt: "Advanced TypeScript techniques to write better, more maintainable code in your projects.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      date: "February 28, 2024",
      readTime: "7 min read",
      url: "https://dev.to",
    },
    {
      title: "Performance Optimization in React",
      excerpt: "Practical strategies to improve React application performance and reduce bundle size.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      date: "February 20, 2024",
      readTime: "9 min read",
      url: "https://medium.com",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Exploring CSS Grid, Flexbox, and custom properties to create responsive layouts.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
      date: "February 15, 2024",
      readTime: "6 min read",
      url: "https://dev.to",
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
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Featured Articles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development and technology
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
