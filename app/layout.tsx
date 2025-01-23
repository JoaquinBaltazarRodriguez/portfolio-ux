import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joaquin Rodriguez - UX/UI Designer & Developer",
  description: "Portfolio of Joaquin Rodriguez, UX/UI Designer and Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white min-h-screen relative`}>
        {/* Fondo animado */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center animate-bg"
          style={{
            backgroundImage: "url('/imagenes/fondopantalla3.png')",
          }}
        ></div>
        {children}
      </body>
    </html>
  )
}

