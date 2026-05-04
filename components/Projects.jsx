"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce platform with product filtering, cart management, and checkout system.",
      image: "/ecommerce-website-interface.png",
      tech: ["HTML", "Javascript", "CSS", "Responsive Design"],
      github: "https://github.com/uzairali432",
    },
    {
      id: 2,
      title: "Food Delivery App",
      description:
        "A MERN-based food delivery application with user authentication, order management, and a responsive interface.",
      image: "/task-management-dashboard.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/uzairali432",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application showing real-time weather data with interactive maps and forecasts.",
      image: "/weather-app-dashboard.png",
      tech: ["Next.js", "Weather API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/uzairali432",
    },
    {
      id: 4,
      title: "Hospital Management System",
      description:
        "A MERN-based hospital management system for patient records, appointments, and admin operations.",
      image: "/task-management-dashboard.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/uzairali432",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-black dark:text-white"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-black dark:text-white font-black">Projects</span>
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-white/2 dark:bg-background-secondary border border-foreground/10 dark:border-foreground/10 rounded-2xl overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-all"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 bg-foreground/5 dark:bg-foreground/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                <p className="text-foreground/70 dark:text-foreground/70 leading-relaxed text-sm">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10 rounded-full font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub Icon Only */}
                <div className="pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 p-2.5 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={22} />
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
