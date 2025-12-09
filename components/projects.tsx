"use client"

import { useState } from "react"
import { Code2, Zap } from "lucide-react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Agentic RAG with Serper API & Multi-Modal Processing",
      description:
        "Advanced AI-powered document intelligence system with multi-modal PDF processing, semantic search, and agentic retrieval workflows. Features real-time interaction with 50+ MB of indexed data.",
      technologies: [
        "FastAPI",
        "ReactJS",
        "Python",
        "Unstructured",
        "GeminiVision",
        "Ollama",
        "OpenSearch",
        "Serper API",
        "Docker",
      ],
      highlights: [
        "Multi-modal pipeline: text, images, tables extraction from PDFs",
        "Semantic chunking with embeddings via Ollama nomic-embed-text",
        "Agentic retrieval: query rewriting, parallel searches, response quality loop",
        "Real-time dark mode interface with file uploads",
      ],
      featured: true,
      icon: "🔍",
    },
    {
      title: "AutoPR – Autonomous Pull Request Generation & Code Repair",
      description:
        "MVP of an autonomous GitHub agent that analyzes codebases, detects failing tests, generates fixes using LLMs, and automatically opens validated Pull Requests.",
      technologies: [
        "Python",
        "GitHub API",
        "GitHub Actions",
        "LLMs (Groq/Qwen)",
        "Subprocess",
        "Pytest",
        "Git",
        "Docker",
      ],
      highlights: [
        "Self-correcting LLM pipeline with git-diff validation & syntax checking",
        "Modular workflow: Analyzer → Suggester → Validator → Publisher",
        "GitHub Actions integration for cloud-based automation",
        "Up to 80% reduction in manual debugging time",
      ],
      featured: true,
      icon: "🤖",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 animate-fade-in-up">
        <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-widest">SHOWCASE</p>
        <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        <p className="text-foreground/60 mt-4">Building intelligent systems that push boundaries</p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="group relative bg-gradient-to-r from-card via-card to-card/50 rounded-2xl border-2 border-primary/30 hover:border-primary/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 p-8 overflow-hidden animate-fade-in-up hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Shine effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 ${hoveredProject === index ? "translate-x-full" : "-translate-x-full"} transition-transform duration-700`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                  {project.title}
                </h3>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed text-lg">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors">
                    <Zap size={16} />
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-foreground/70 text-sm hover:text-foreground transition-colors"
                      >
                        <span className="text-accent flex-shrink-0 mt-1">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors">
                    <Code2 size={16} />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-xs font-semibold hover:bg-primary/40 hover:text-accent transition-all duration-300 hover:scale-105 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
