"use client"

export default function Experience() {
  const experiences = [
    {
      company: "CSIR4PI, NAL (National Aerospace Laboratories)",
      position: "Data Analyst Intern",
      period: "Feb 2025 – May 2025",
      description:
        "Processed 10+ years of CHIRPS high-resolution rainfall data using Python, xarray, and pandas. Engineered predictive rainfall models using Random Forest Regression, improving forecast accuracy by 12%. Built and deployed geospatial visualizations (heatmaps, trend plots, maps) for climate analysis research.",
      achievements: [
        "Processed 10+ years of rainfall data (2012–2023)",
        "Improved forecast accuracy by 12%",
        "Built geospatial visualizations for research",
      ],
      skills: ["Python", "xarray", "pandas", "Random Forest", "Data Analysis", "GIS"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 animate-fade-in-up">
        <p className="text-accent text-sm font-semibold mb-2 uppercase tracking-widest">PROFESSIONAL JOURNEY</p>
        <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-card to-card/50 rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                <p className="text-primary font-semibold text-lg">{exp.company}</p>
              </div>
              <p className="text-accent font-semibold whitespace-nowrap">{exp.period}</p>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>
            <div className="mb-6">
              <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-widest">Key Achievements</h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-foreground/70 text-sm">
                    <span className="text-accent">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/15 text-primary rounded-full text-sm font-medium hover:bg-primary/25 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
