import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { Code2, Database, Cloud, Palette, Zap, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "IoT & Embedded Systems",
      skills: [
        { name: "IoT Architecture", level: 90 },
        { name: "Embedded Systems", level: 90 },
        { name: "Sensor Integration", level: 85 },
        { name: "Arduino/Raspberry Pi", level: 82 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Programming & Development",
      skills: [
        { name: "Python Programming", level: 85 },
        { name: "Front End Development", level: 80 },
        { name: "AutoCAD", level: 85 },
        { name: "AI Image Generation", level: 75 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Business & Management",
      skills: [
        { name: "Tally Accounting", level: 85 },
        { name: "Microsoft Excel", level: 90 },
        { name: "Microsoft PowerPoint", level: 85 },
        { name: "Microsoft Access", level: 75 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Agricultural Technology",
      skills: [
        { name: "Smart Irrigation Systems", level: 92 },
        { name: "Precision Agriculture", level: 88 },
        { name: "Drone Operations", level: 85 },
        { name: "Renewable Energy Systems", level: 80 },
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Core Competencies",
      skills: [
        { name: "Effective Communication", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "Business Analysis", level: 85 },
        { name: "Research & Development", level: 87 },
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Security & Networking",
      skills: [
        { name: "Cybersecurity Basics", level: 82 },
        { name: "IoT Network Design", level: 90 },
        { name: "RFID Technology", level: 88 },
        { name: "Social Media Marketing", level: 78 },
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
