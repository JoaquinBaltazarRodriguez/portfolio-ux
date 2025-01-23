"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function About() {
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
      id="about"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/imagenes/image-3.png"
              alt="About Me"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed">{t("about_me_1")}</p>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-gray-300 leading-relaxed">{t("about_me_2")}</p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/imagenes/logotipo.png"
              alt="R Logo"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

