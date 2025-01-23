"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ExpandableLine() {
  const { scrollYProgress } = useScroll()
  const width = useTransform(
    scrollYProgress,
    [0.2, 0.3], // Adjust these values to control when the line expands
    ["0%", "100%"],
  )

  return (
    <div className="py-20 flex justify-center">
      <motion.div style={{ width }} className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </div>
  )
}

