"use client"

import { useLanguage } from "@/context/language-context"
import { motion } from "framer-motion"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 backdrop-blur-lg bg-black/30 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.a
            href="https://www.behance.net/your-profile" // Reemplaza con tu perfil
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            {t("view_behance")}
          </motion.a>

          <p className="text-sm text-gray-500">
            © {currentYear} Joaquin Rodriguez. {t("rights_reserved")}.
          </p>
        </div>
      </div>
    </footer>
  )
}

