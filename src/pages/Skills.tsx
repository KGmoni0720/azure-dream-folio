import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { Code2, Database, Cloud, Palette, Zap, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "Python / FastAPI", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS / Azure", level: 80 },
        { name: "Docker", level: 85 },
        { name: "CI/CD", level: 82 },
        { name: "Kubernetes", level: 75 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", level: 88 },
        { name: "Adobe XD", level: 85 },
        { name: "Animation", level: 90 },
        { name: "Responsive Design", level: 95 },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Tools & Frameworks",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Three.js", level: 80 },
        { name: "GraphQL", level: 82 },
        { name: "Jest / Testing", level: 85 },
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Other Skills",
      skills: [
        { name: "REST APIs", level: 92 },
        { name: "WebSockets", level: 85 },
        { name: "Performance Optimization", level: 88 },
        { name: "SEO", level: 82 },
      ],
      color: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <PageTransition variant="scale">
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6 glass hover:glow transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
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

export default Skills;
