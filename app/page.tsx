import { LanguageProvider } from "@/context/language-context"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import ExpandableLine from "@/components/expandable-line"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <Skills />
        <ExpandableLine />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}

