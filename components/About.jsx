"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left - Animated GIF */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/5 border border-foreground/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Developer working with animations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-4xl sm:text-5xl font-bold text-balance" variants={itemVariants}>
              About <span className="text-black font-black">Me</span>
            </motion.h2>

            <motion.p className="text-foreground/70 text-lg leading-relaxed" variants={itemVariants}>
              I'm a passionate front-end developer with a love for building beautiful, functional web applications. With
              expertise in React and Next.js, I transform ideas into pixel-perfect digital experiences.
            </motion.p>

            <motion.p className="text-foreground/70 text-lg leading-relaxed" variants={itemVariants}>
              My journey in web development started with a curiosity about how things work on the internet. Since then,
              I've honed my skills in modern JavaScript frameworks, responsive design, and performance optimization.
            </motion.p>

            <motion.p className="text-foreground/70 text-lg leading-relaxed" variants={itemVariants}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </motion.p>

            <motion.div className="pt-4 flex gap-4" variants={itemVariants}>
              <motion.a
                href="mailto:ghayasali2424@gmail.com"
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;