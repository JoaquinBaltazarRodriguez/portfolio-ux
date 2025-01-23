"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useLanguage } from "@/context/language-context"

const skills = [
  { name: "Photoshop", icon: "/imagenes/photoshoop.png" },
  { name: "Illustrator", icon: "/imagenes/illustrator.png" },
  { name: "Figma", icon: "/imagenes/figma(2).png" },
  { name: "HTML", icon: "/imagenes/html.png" },
  { name: "CSS", icon: "/imagenes/css.png" },
  { name: "JavaScript", icon: "/imagenes/javascript.png" },
]

export default function Skills() {
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
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={containerVariants} className="text-3xl font-bold text-center mb-12">
          {t("my_skills")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
                hidden: { opacity: 0, y: 50 },
              }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-gray-800/50
                         backdrop-blur-sm hover:bg-gray-800 transition-colors duration-300"
            >
              <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-16 h-16 object-contain" />
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

