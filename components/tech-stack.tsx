"use client"

import { useState } from "react"

export default function TechStack() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = [
    {
      name: "Programming & Querying",
      icon: "💻",
      skills: ["Python", "SQL", "JavaScript", "TypeScript"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
    },
    {
      name: "Web & Backend",
      icon: "🌐",
      skills: ["React", "FastAPI", "HTML", "CSS", "Next.js", "Tailwind"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/50",
    },
    {
      name: "AI/ML & Data",
      icon: "🤖",
      skills: ["Generative AI", "RAG", "LangChain", "LangGraph", "LLM Applications", "Machine Learning"],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50",
    },
    {
      name: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Docker", "AWS", "PyCharm", "VS Code"],
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/50",
    },
    {
      name: "Concepts & Patterns",
      icon: "🏗️",
      skills: ["OOPS", "SDLC", "Data Structures", "Algorithms"],
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/50",
    },
  ]

  return (
    <section id="tech" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 animate-fade-in-up">
        <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-widest">SKILLS & EXPERTISE</p>
        <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
        <p className="text-foreground/60 mt-4">Comprehensive toolset for building intelligent solutions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${category.gradient} rounded-xl p-6 border-2 ${category.borderColor} hover:border-primary/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up overflow-hidden`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {/* Background animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-3 py-2 bg-primary/15 text-primary rounded-lg hover:bg-primary/40 transition-all duration-300 text-sm font-medium cursor-pointer transform ${hoveredSkill === skill ? "scale-110 shadow-lg shadow-primary/50" : "hover:scale-105"}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
