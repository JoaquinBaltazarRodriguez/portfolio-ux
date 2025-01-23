"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Github } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const projects = [
  {
    title: "JukeBox",
    descKey: "jukebox_desc",
    image: "/placeholder.svg?height=200&width=200",
    demo: "#",
    github: "#",
  },
  {
    title: "Turny",
    descKey: "turny_desc",
    image: "/placeholder.svg?height=200&width=200",
    demo: "#",
    github: "#",
  },
  {
    title: "GymFit",
    descKey: "gymfit_desc",
    image: "/placeholder.svg?height=200&width=200",
    demo: "#",
    github: "#",
  },
  {
    title: "FokusPage",
    descKey: "fokuspage_desc",
    image: "/placeholder.svg?height=200&width=200",
    demo: "#",
    github: "#",
  },
  {
    title: "Sistema de registro escolar",
    descKey: "school_desc",
    image: "/placeholder.svg?height=200&width=200",
    demo: "#",
    github: "#",
  },
  {
    title: "AluraPlay",
    descKey: "aluraplay_desc",
    image: "/placeholder.svg?height=200&width=200",
    demo: "#",
    github: "#",
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      id="projects"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={containerVariants} className="text-3xl font-bold text-white mb-12">
          {t("project")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                hidden: { opacity: 0, y: 50 },
              }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700"
            >
              <div className="p-6 flex gap-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{t(project.descKey)}</p>
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      className="px-4 py-2 bg-yellow-400 text-black rounded text-sm font-medium hover:bg-yellow-300 transition-colors"
                    >
                      {t("view_demo")}
                    </a>
                    <a href={project.github} className="p-2 bg-gray-700/50 rounded hover:bg-gray-700 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

