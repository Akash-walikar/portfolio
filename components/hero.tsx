"use client"

import { Github, Linkedin, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <section className="pt-20 pb-20 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <p className="text-primary text-sm font-semibold">Available for opportunities</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Akash
            </span>
          </h1>

          <p className="text-foreground/70 text-lg mb-3 leading-relaxed font-semibold">
            <span className="text-primary">AI/ML Engineer</span> &{" "}
            <span className="text-secondary">Full-Stack Developer</span>
          </p>

          <p className="text-foreground/70 text-base mb-8 leading-relaxed max-w-lg">
            Passionate about building intelligent systems with RAG, LLMs, and autonomous agents. I specialize in
            creating scalable solutions that leverage AI to solve real-world problems. Currently exploring autonomous
            code repair and multi-modal document intelligence.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 font-semibold group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1xy6cQfcv6g23wMH23Z4xKaLDKwil98Dg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all rounded-lg font-semibold group hover:scale-105"
            >
              <FileText size={18} className="group-hover:rotate-12 transition-transform" />
              Download Resume
            </a>
            <div className="inline-flex items-center gap-2 px-7 py-3 border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all rounded-lg font-semibold cursor-default">
              <span className="text-accent">akash.walikar.2427@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <p className="text-foreground/70">
              <span className="text-accent font-bold">📍</span> Bangalore, India
            </p>
            <p className="text-foreground/70">
              <span className="text-accent font-bold">✓</span> B.E. AI & Data Science{" "}
              <span className="text-accent font-semibold">Graduated (2025)</span>
            </p>
            <p className="text-foreground/70">
              <span className="text-accent font-bold">💼</span> Open to AI/ML & Full-Stack opportunities
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center md:items-end animate-slide-in-left">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            {/* Multiple animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 rounded-3xl blur-3xl group-hover:blur-2xl group-hover:from-primary/60 group-hover:to-secondary/40 transition-all duration-500"></div>
            <div className="absolute inset-4 bg-gradient-to-tr from-secondary/30 to-accent/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main image container with border animation */}
            <div className="relative w-72 h-96 rounded-3xl overflow-hidden border-2 border-primary/50 group-hover:border-accent/80 transition-all duration-500 shadow-2xl group-hover:shadow-3xl group-hover:shadow-primary/30">
              <Image
                src="/profile.png"
                alt="Akash Walikar"
                width={288}
                height={384}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                priority
              />

              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shine effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-700 ${isImageHovered ? "translate-x-full" : "-translate-x-full"}`}
              ></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 right-4 bg-gradient-to-r from-accent to-secondary px-6 py-3 rounded-xl shadow-lg group-hover:shadow-xl group-hover:-bottom-6 transition-all duration-300">
              <p className="text-sm font-bold text-accent-foreground">AI/ML Developer</p>
            </div>
          </div>

          {/* Social links with enhanced styling */}
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://drive.google.com/file/d/1-lpUvi2BFAFp-5DWCICYS5RQ50oI7Vof/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-card border-2 border-border hover:border-accent hover:bg-accent/10 rounded-xl transition-all hover:scale-125 hover:shadow-lg hover:shadow-accent/30"
              title="Download Resume"
            >
              <FileText size={24} className="text-accent group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Akash-walikar/Akash-Walikar"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-card border-2 border-border hover:border-primary hover:bg-primary/10 rounded-xl transition-all hover:scale-125 hover:shadow-lg hover:shadow-primary/30"
              title="GitHub"
            >
              <Github size={24} className="text-primary group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/akashwalikar998/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-card border-2 border-border hover:border-secondary hover:bg-secondary/10 rounded-xl transition-all hover:scale-125 hover:shadow-lg hover:shadow-secondary/30"
              title="LinkedIn"
            >
              <Linkedin size={24} className="text-secondary group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
