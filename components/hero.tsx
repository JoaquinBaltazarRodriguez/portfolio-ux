"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import Typewriter from "typewriter-effect"
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Hero() {
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
      id="home"
      className="min-h-screen pt-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants}>
            <h2 className="text-xl text-yellow-400 mb-2">{t("hello")}</h2>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Joaquin Rodriguez</h1>
            <div className="text-xl sm:text-2xl text-gray-300 flex items-center gap-2">
              {t("and_im")}{" "}
              <span className="text-yellow-400">
                <Typewriter
                  options={{
                    strings: [t("ux_designer"), t("frontend_developer")],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div className="mt-8 flex gap-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                           hover:bg-yellow-400 transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-full
                       font-medium flex items-center gap-2 hover:bg-yellow-300
                       transition-colors duration-300"
            >
              {t("download_cv")}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div variants={containerVariants} className="relative">
            <Image
              src="/imagenes/fotoperfil.png"
              alt="Profile"
              width={500}
              height={600}
              className="rounded-2xl mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

