"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navbar
    home: "Home",
    project: "Projects",
    about: "About",
    contact: "Contact",

    // Hero
    hello: "Hello! It's Me",
    and_im: "And I'm a",
    ux_designer: "UX/UI Designer",
    frontend_developer: "Frontend Developer",
    download_cv: "Download CV",

    // Skills
    my_skills: "My Skills",

    // Projects
    view_demo: "View demo",
    jukebox_desc: "Application on a music streaming platform, with a vast catalog of songs",
    turny_desc:
      "Digital platform that allows you to manage and book appointments quickly and easily, optimizing the organization of appointments and services.",
    gymfit_desc: '"GymFit" page with functionality to search for available classes and book appointments',
    fokuspage_desc: "Oracle Project - Alura Latam. Platform with a rest counter with different design styles",
    school_desc: "University project. System that allows students to register and assign them their subjects",
    aluraplay_desc: "Oracle Project - Alura Latam. Video platform for Alura courses",

    // About
    about_me_1:
      "Hey, my name is Joaquin Rodriguez, I'm from Argentina / Posadas - Misiones. I'm a student of the programming and technological innovation career at the INCADE faculty, I was a student at the National Technological University (UTN) studying graphic design and I was trained as a front-end developer by Alura latam (Oracle)",
    about_me_2:
      "I am a UX/UI designer passionate about creating memorable digital experiences. I master tools such as Figma, Illustrator and Photoshop to transform ideas into intuitive and visually appealing interfaces. My experience in web development gives me a unique perspective to design efficient and user-centric solutions",

    // Contact
    contact_title: "Let's Connect",
    contact_subtitle: "Have a project in mind? Let's talk about it.",
    full_name: "Full Name",
    email: "Email",
    message: "Message",
    send_message: "Send Message",

    // Footer
    rights_reserved: "All rights reserved",
    view_behance: "View my Behance profile",
  },
  es: {
    // Navbar
    home: "Inicio",
    project: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",

    // Hero
    hello: "¡Hola! Soy",
    and_im: "Y soy",
    ux_designer: "Diseñador UX/UI",
    frontend_developer: "Desarrollador Frontend",
    download_cv: "Descargar CV",

    // Skills
    my_skills: "Mis Habilidades",

    // Projects
    view_demo: "Ver demo",
    jukebox_desc: "Aplicación de streaming de música con un amplio catálogo de canciones",
    turny_desc:
      "Plataforma digital que te permite gestionar y reservar citas de forma rápida y sencilla, optimizando la organización de citas y servicios.",
    gymfit_desc: 'Página "GymFit" con funcionalidad para buscar clases disponibles y reservar citas',
    fokuspage_desc:
      "Proyecto Oracle - Alura Latam. Plataforma con contador de descanso con diferentes estilos de diseño",
    school_desc: "Proyecto universitario. Sistema que permite a los estudiantes registrarse y asignarles sus materias",
    aluraplay_desc: "Proyecto Oracle - Alura Latam. Plataforma de video para cursos Alura",

    // About
    about_me_1:
      "Hola, mi nombre es Joaquín Rodríguez, soy de Argentina / Posadas - Misiones. Soy estudiante de la carrera de programación e innovación tecnológica en la facultad INCADE, fui estudiante de la Universidad Tecnológica Nacional (UTN) estudiando diseño gráfico y me formé como desarrollador front-end por Alura latam (Oracle)",
    about_me_2:
      "Soy un diseñador UX/UI apasionado por crear experiencias digitales memorables. Domino herramientas como Figma, Illustrator y Photoshop para transformar ideas en interfaces intuitivas y visualmente atractivas. Mi experiencia en desarrollo web me da una perspectiva única para diseñar soluciones eficientes y centradas en el usuario",

    // Contact
    contact_title: "Conectemos",
    contact_subtitle: "¿Tienes un proyecto en mente? Hablemos de ello.",
    full_name: "Nombre Completo",
    email: "Correo Electrónico",
    message: "Mensaje",
    send_message: "Enviar Mensaje",

    // Footer
    rights_reserved: "Todos los derechos reservados",
    view_behance: "Ver mi perfil de Behance",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

