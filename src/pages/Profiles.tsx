import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { Github, Code2, Award, TrendingUp } from "lucide-react";

const Profiles = () => {
  const profiles = [
    {
      platform: "Skill India",
      icon: Award,
      username: "Kisan Drone Operator",
      stats: [
        { label: "Category", value: "Agriculture" },
        { label: "Level", value: "Certified" },
        { label: "Year", value: "2024" },
        { label: "Status", value: "Active" },
      ],
      url: "#",
      color: "from-orange-600 to-red-600",
    },
    {
      platform: "Reliance Foundation",
      icon: Code2,
      username: "IoT Network Specialist",
      stats: [
        { label: "Program", value: "Certificate" },
        { label: "Domain", value: "IoT" },
        { label: "Year", value: "2024" },
        { label: "Status", value: "Completed" },
      ],
      url: "#",
      color: "from-blue-600 to-cyan-600",
    },
    {
      platform: "Hewlett Packard (HP)",
      icon: TrendingUp,
      username: "Business & Marketing",
      stats: [
        { label: "Courses", value: "5+" },
        { label: "Topics", value: "Marketing" },
        { label: "Completed", value: "2024" },
        { label: "Skills", value: "Business" },
      ],
      url: "#",
      color: "from-blue-500 to-indigo-600",
    },
    {
      platform: "ICAR",
      icon: Award,
      username: "Faculty Development",
      stats: [
        { label: "Program", value: "International" },
        { label: "Level", value: "Advanced" },
        { label: "Year", value: "2024" },
        { label: "Status", value: "Completed" },
      ],
      url: "#",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <PageTransition variant="fade">
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Certifications & Learning</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and courses completed across various domains
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="block"
              >
                <Card className="p-8 glass hover:glow transition-all duration-300 h-full">
                  {/* Platform Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${profile.color} glow`}>
                      <profile.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{profile.platform}</h3>
                      <p className="text-muted-foreground">{profile.username}</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {profile.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + statIndex * 0.05 
                        }}
                        className="p-4 rounded-lg bg-secondary/50 border border-border"
                      >
                        <p className="text-2xl font-bold text-primary mb-1">
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* View Profile Link */}
                  <div className="mt-6 text-center">
                    <span className="text-primary hover:underline">
                      View Profile →
                    </span>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* Additional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-8 glass">
              <h3 className="text-2xl font-bold mb-6 text-center">Additional Certifications</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "Plant Breeding", org: "Skill India", year: "2024" },
                  { name: "Cyber Security Awareness", org: "Online Course", year: "2024" },
                  { name: "Agile Project Management", org: "HP", year: "2024" },
                  { name: "Social Media Marketing", org: "HP", year: "2024" },
                  { name: "Selling Online", org: "HP", year: "2024" },
                  { name: "Resume Writing", org: "Online Course", year: "2024" },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-lg bg-secondary/30 border border-border"
                  >
                    <p className="font-bold text-primary mb-1">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.org}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profiles;
