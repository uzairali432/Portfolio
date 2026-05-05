"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "→",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "→",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "→",
    },
    {
      name: "Email",
      url: "mailto:ghayasali2424@gmail.com",
      icon: "→",
    },
  ]

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/1 dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance text-black dark:text-white">
              Let's <span className="text-black dark:text-white font-black">Connect</span>
            </h2>
            <p className="text-foreground-secondary dark:text-foreground-secondary text-lg max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-foreground-secondary dark:text-foreground-secondary font-semibold mb-2 text-sm">Name</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/2 dark:bg-background-secondary border border-foreground/10 dark:border-foreground/10 rounded-lg text-foreground dark:text-foreground placeholder:text-text-placeholder dark:placeholder:text-text-placeholder focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-white/4 dark:focus:bg-white/5 transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-foreground-secondary dark:text-foreground-secondary font-semibold mb-2 text-sm">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/2 dark:bg-background-secondary border border-foreground/10 dark:border-foreground/10 rounded-lg text-foreground dark:text-foreground placeholder:text-text-placeholder dark:placeholder:text-text-placeholder focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-white/4 dark:focus:bg-white/5 transition-all"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <div>
                  <label className="block text-foreground-secondary dark:text-foreground-secondary font-semibold mb-2 text-sm">Message</label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/2 dark:bg-background-secondary border border-foreground/10 dark:border-foreground/10 rounded-lg text-foreground dark:text-foreground placeholder:text-text-placeholder dark:placeholder:text-text-placeholder focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-white/4 dark:focus:bg-white/5 transition-all resize-none"
                    placeholder="Your message..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links & Email */}
            <motion.div
              className="space-y-6 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants}>
                <p className="text-foreground/70 dark:text-foreground/70 mb-4 font-semibold">Connect with me on social media</p>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 bg-white/2 dark:bg-background-secondary border border-foreground/10 dark:border-foreground/10 rounded-lg text-foreground dark:text-foreground hover:border-black/20 dark:hover:border-white/20 hover:bg-white/4 dark:hover:bg-white/5 transition-all"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-center justify-between font-semibold">
                        <span>{link.name}</span>
                        <span className="text-black dark:text-white">{link.icon}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 border-t border-foreground/10 dark:border-foreground/10">
                <p className="text-foreground/70 dark:text-foreground/70 mb-2 font-semibold text-sm">Direct Email</p>
                <p className="text-black dark:text-white font-bold">ghayasali2424@gmail.com</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
