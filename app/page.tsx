"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Education from "@/components/education"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
      </main>
      <Footer />
    </>
  )
}
