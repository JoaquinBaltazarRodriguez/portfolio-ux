"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const { language, setLanguage, t } = useLanguage()

  const handleScroll = () => {
    const sections = ["home", "skills", "projects", "about", "contact"]
    const current = sections.find((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top >= 0 && rect.top <= 300
      }
      return false
    })
    if (current) setActiveSection(current)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src="/imagenes/logotipo.png"
              alt="R Logo"
              width={70}
              height={40}
              className=""
            />
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            {["Home", "Project", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`
                  px-3 py-2 text-sm font-medium rounded-md
                  transition-all duration-300 ease-in-out
                  relative overflow-hidden group
                  ${activeSection === item.toLowerCase() ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}
                `}
              >
                {t(item.toLowerCase())}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => setLanguage("es")}
                className={`w-8 h-8 rounded overflow-hidden transition-opacity ${language === "es" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
              >
                <Image
                  src="/imagenes/español.png"
                  alt="Español"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`w-8 h-8 rounded overflow-hidden transition-opacity ${language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
              >
                <Image
                  src="/imagenes/ingless.png"
                  alt="English"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

