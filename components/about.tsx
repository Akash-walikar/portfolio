"use client"

import { useState } from "react"

export default function About() {
  const [expandedFact, setExpandedFact] = useState<number | null>(null)

  const facts = [
    { label: "Location", value: "Bangalore, India", icon: "📍" },
    { label: "Focus", value: "AI/ML & Full-Stack", icon: "🎯" },
    { label: "Experience", value: "Internship + Projects", icon: "💼" },
    { label: "Status", value: "Graduated 2025", icon: "✓" },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 animate-fade-in-up">
        <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-widest">GET TO KNOW ME</p>
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="text-foreground/80 leading-relaxed text-lg">
            I'm a detail-oriented <strong className="text-primary">AI/ML Engineer</strong> and{" "}
            <strong className="text-primary">Full-Stack Developer</strong> with hands-on experience building intelligent
            systems through academic projects and professional internships. My passion lies in creating scalable,
            data-driven solutions that leverage cutting-edge AI technologies.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            I specialize in <strong className="text-primary">Retrieval-Augmented Generation (RAG)</strong>,{" "}
            <strong className="text-primary">Large Language Models</strong>,{" "}
            <strong className="text-primary">LangGraph</strong>, and{" "}
            <strong className="text-primary">autonomous agents</strong>. Recently, I've been exploring how to automate
            the development workflow through intelligent code analysis and generation.
          </p>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Beyond coding, I love collaborating with teams, solving complex problems, and staying updated with the
            latest advancements in AI and machine learning. I'm driven by the opportunity to build solutions that make a
            real impact on real-world challenges.
          </p>
        </div>

        <div
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-xl font-bold mb-6 text-primary">Quick Facts</h3>
          <div className="space-y-4">
            {facts.map((fact, index) => (
              <div
                key={index}
                onClick={() => setExpandedFact(expandedFact === index ? null : index)}
                className="group cursor-pointer p-3 bg-card/50 hover:bg-primary/10 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl group-hover:scale-125 transition-transform">{fact.icon}</span>
                  <div className="flex-1">
                    <p className="text-foreground text-sm font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                      {fact.label}
                    </p>
                    <p className="text-foreground/80 font-semibold group-hover:text-foreground transition-colors">
                      {fact.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
