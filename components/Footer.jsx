"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 dark:border-foreground/10 bg-background/80 dark:bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-black dark:text-white">UzairAli</h3>
            <p className="text-foreground/60 dark:text-foreground/60 text-sm">MERN Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2 text-sm text-foreground/60 dark:text-foreground/60">
              <motion.a href="#about" className="block hover:text-black dark:hover:text-white transition-colors" whileHover={{ x: 5 }}>
                About
              </motion.a>
              <motion.a href="#skills" className="block hover:text-black dark:hover:text-white transition-colors" whileHover={{ x: 5 }}>
                Skills
              </motion.a>
              <motion.a href="#projects" className="block hover:text-black dark:hover:text-white transition-colors" whileHover={{ x: 5 }}>
                Projects
              </motion.a>
              <motion.a href="#contact" className="block hover:text-black dark:hover:text-white transition-colors" whileHover={{ x: 5 }}>
                Contact
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">Get In Touch</h4>
            <a
              href="mailto:ghayasali2424@gmail.com"
              className="text-sm text-black dark:text-white hover:text-black/70 dark:hover:text-white/70 transition-colors font-semibold"
            >
              ghayasali2424@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-foreground/10 dark:border-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60 dark:text-foreground/60">
            <p>© {currentYear} Syed Uzair Ali. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
