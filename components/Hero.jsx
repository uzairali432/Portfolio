"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-background">
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.giphy.com/media/jVzGMcngM0RbZNzn4B/giphy.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50 dark:from-black/50 dark:via-black/30 dark:to-black/50" />
      </div>

      {/* Minimalist background elements - shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-black/5 dark:bg-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-black/3 dark:bg-white/3 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-6" variants={itemVariants}>
          <span className="text-black/70 dark:text-white/70 font-semibold text-sm tracking-widest">WELCOME TO MY PORTFOLIO</span>
        </motion.div>

        <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <div className="mb-2 text-black dark:text-white">Hi, I'm</div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            <motion.span variants={nameVariants} className="text-black dark:text-white">
              Syed
            </motion.span>
            <motion.span variants={nameVariants} transition={{ delay: 0.3 }} className="text-black dark:text-white">
              Uzair
            </motion.span>
            <motion.span variants={nameVariants} transition={{ delay: 0.6 }} className="text-black dark:text-white font-black">
              Ali
            </motion.span>
          </div>
        </div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-black/80 dark:text-white/80"
          variants={itemVariants}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-black/60 dark:text-white/60 mb-8 max-w-2xl mx-auto text-balance leading-relaxed"
          variants={itemVariants}
        >
          I build full-stack web applications with modern technologies. Specializing in MongoDB, Express, React, and
          Node.js to create scalable, responsive, and dynamic digital experiences.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <motion.button
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-black/85 dark:hover:bg-white/85 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors bg-white dark:bg-background shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-black rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
