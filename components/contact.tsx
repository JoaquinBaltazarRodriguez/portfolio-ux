"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
      {/* Rocket Animation */}
      <motion.div
        initial={{ scale: 0.5, y: 100, x: -100 }}
        whileInView={{ scale: 1, y: 0, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 bottom-[105px] h-96 opacity-100 pointer-events-none"
      >
        <Image
          src="/imagenes/rocket2.png"
          alt="Rocket"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t("contact_title")}</h2>
          <p className="text-gray-400">{t("contact_subtitle")}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 backdrop-blur-lg bg-black/30 p-8 rounded-2xl border border-gray-800"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              {t("full_name")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              {t("message")}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-[1.02]"
          >
            {t("send_message")}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

