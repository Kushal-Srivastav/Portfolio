'use client';
import React from 'react';
import { motion } from 'framer-motion';

const techStack = {
  "Frontend Development": [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" }
  ],
  "Backend & Database": [
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚂" },
    { name: "MySQL", icon: "💾" },
    { name: "MongoDB", icon: "🍃" }
  ],
  "Languages": [
    { name: "JavaScript", icon: "🟡" },
    { name: "C++", icon: "⚡" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" }
  ],
  "Tools & Others": [
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "🚀" }
  ]
};

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full h-full p-2">
      {Object.entries(techStack).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="bg-[#10132E]/50 backdrop-blur-sm rounded-xl p-3 border border-white/[0.1] hover:border-white/[0.2] transition-all"
        >
          <h3 className="text-sm font-medium text-white/80 mb-2">{category}</h3>
          <div className="grid grid-cols-2 gap-2">
            {skills.map(({ name, icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (categoryIndex * 4 + index) * 0.05 }}
                className="flex items-center gap-2 bg-[#161a31] px-2 py-1.5 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-[#1c2039] transition-colors"
              >
                <span className="text-base">{icon}</span>
                <span className="truncate">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 