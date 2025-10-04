import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PageTransition from "@/components/PageTransition";
import { Github, Code2, Award, TrendingUp } from "lucide-react";

const Profiles = () => {
  const profiles = [
    {
      platform: "GitHub",
      icon: Github,
      username: "@yourusername",
      stats: [
        { label: "Repositories", value: "150+" },
        { label: "Contributions", value: "2,500+" },
        { label: "Stars", value: "500+" },
        { label: "Followers", value: "1,200+" },
      ],
      url: "https://github.com",
      color: "from-gray-700 to-gray-900",
    },
    {
      platform: "LeetCode",
      icon: Code2,
      username: "@yourusername",
      stats: [
        { label: "Problems Solved", value: "450+" },
        { label: "Ranking", value: "Top 5%" },
        { label: "Contest Rating", value: "1850" },
        { label: "Badges", value: "25" },
      ],
      url: "https://leetcode.com",
      color: "from-orange-600 to-yellow-600",
    },
    {
      platform: "HackerRank",
      icon: Award,
      username: "@yourusername",
      stats: [
        { label: "Stars", value: "5 ⭐" },
        { label: "Badges", value: "30+" },
        { label: "Rank", value: "Gold" },
        { label: "Score", value: "2,500+" },
      ],
      url: "https://hackerrank.com",
      color: "from-green-600 to-emerald-600",
    },
    {
      platform: "Codeforces",
      icon: TrendingUp,
      username: "@yourusername",
      stats: [
        { label: "Rating", value: "1650" },
        { label: "Max Rating", value: "1750" },
        { label: "Problems", value: "300+" },
        { label: "Rank", value: "Expert" },
      ],
      url: "https://codeforces.com",
      color: "from-blue-600 to-indigo-600",
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
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6">Coding Profiles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My competitive programming and open-source contributions
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

          {/* GitHub Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-8 glass">
              <h3 className="text-2xl font-bold mb-6 text-center">GitHub Contributions</h3>
              <div className="bg-secondary/30 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
                <p className="text-muted-foreground text-center">
                  GitHub contribution graph visualization<br />
                  <span className="text-sm">(Can be integrated with GitHub API)</span>
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Profiles;
