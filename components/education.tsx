"use client"

import { Award, BookOpen, Zap, GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 animate-fade-in-up">
        <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-widest">ACADEMIC BACKGROUND</p>
        <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Degree */}
        <div className="group relative bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-2xl p-8 border-2 border-primary/30 hover:border-accent/80 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in-up overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            {/* Graduation Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full">
              <GraduationCap size={18} className="text-accent" />
              <span className="text-accent font-bold text-sm">Graduated 2025</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
              <div className="flex gap-4 flex-1">
                <BookOpen
                  size={32}
                  className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    B.E. Artificial Intelligence and Data Science
                  </h3>
                  <p className="text-primary font-semibold text-lg mt-2">CMRIT College, Bangalore</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 md:whitespace-nowrap">
                <div className="px-4 py-2 bg-accent/20 rounded-lg">
                  <p className="text-accent font-bold text-lg">✓ Graduated</p>
                </div>
                <p className="text-foreground/70">
                  CGPA: <span className="text-accent font-bold text-lg">7.73 / 10</span>
                </p>
              </div>
            </div>

            <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
              Comprehensive coursework in artificial intelligence, machine learning, data science, software engineering,
              and database management. Built a strong foundation in algorithms, data structures, and modern development
              practices with hands-on experience in building intelligent systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group/card bg-card/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-all hover:bg-primary/5">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-accent" />
                  Relevant Coursework
                </h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li className="hover:text-primary transition-colors">• Machine Learning & AI</li>
                  <li className="hover:text-primary transition-colors">• Data Science & Analytics</li>
                  <li className="hover:text-primary transition-colors">• Database Management Systems</li>
                  <li className="hover:text-primary transition-colors">• Software Engineering</li>
                  <li className="hover:text-primary transition-colors">• Web Development</li>
                  <li className="hover:text-primary transition-colors">• Advanced Algorithms</li>
                </ul>
              </div>

              <div className="group/card bg-card/50 rounded-lg p-4 border border-border hover:border-primary/50 transition-all hover:bg-primary/5">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award size={18} className="text-primary" />
                  Certifications
                </h4>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li className="hover:text-primary transition-colors">
                    ✓ Machine Learning with NumPy, Pandas, Scikit-learn (Educative)
                  </li>
                  <li className="hover:text-primary transition-colors">✓ Generative AI Workshops</li>
                  <li className="hover:text-primary transition-colors">✓ Software Development Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
