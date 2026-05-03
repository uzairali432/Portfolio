"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillsData = [
    { name: "React", proficiency: 95 },
    { name: "Next.js", proficiency: 90 },
    { name: "JavaScript", proficiency: 95 },
    { name: "TypeScript", proficiency: 85 },
    { name: "CSS", proficiency: 90 },
    { name: "Tailwind", proficiency: 95 },
  ]

  const skillCategories = [
    {
      category: "Frontend",
      icon: "⚛️",
      skills: [
        { name: "HTML5", icon: "📄" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "📘" },
      ],
    },
    {
      category: "Styling",
      icon: "✨",
      skills: [
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Material UI", icon: "🧩" },
        { name: "Framer Motion", icon: "🎬" },
        { name: "GSAP", icon: "🎭" },
        { name: "Responsive", icon: "📱" },
      ],
    },
    {
      category: "Tools & Services",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Google Analytics", icon: "📊" },
        { name: "Firebase", icon: "🔥" },
        { name: "Figma", icon: "🎨" },
        { name: "Vercel", icon: "⚡" },
      ],
    },
    {
      category: "Other",
      icon: "🚀",
      skills: [
        { name: "REST APIs", icon: "📡" },
        { name: "GraphQL", icon: "⬛" },
        { name: "Performance", icon: "⚙️" },
        { name: "SEO", icon: "🔍" },
        { name: "PWA", icon: "📦" },
        { name: "Accessibility", icon: "♿" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-balance text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Technical <span className="text-black font-black">Skills</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Bar Chart */}
          <motion.div
            className="bg-white/2 border border-foreground/10 rounded-xl p-6"
            whileHover={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-black">Proficiency Levels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
                  labelStyle={{ color: "#ffffff" }}
                />
                <Bar dataKey="proficiency" fill="#000000" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            className="bg-white/2 border border-foreground/10 rounded-xl p-6"
            whileHover={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-black">Skills Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="rgba(0,0,0,0.2)" />
                <PolarAngleAxis dataKey="name" stroke="rgba(255,255,255,0.6)" fontSize={12} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="rgba(0,0,0,0.2)" />
                <Radar name="Proficiency" dataKey="proficiency" stroke="#000000" fill="#000000" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              className="bg-white/2 border border-foreground/10 rounded-xl p-6 hover:border-black/30 hover:bg-white/4 transition-all"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-black">{category.category}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-foreground/70 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
