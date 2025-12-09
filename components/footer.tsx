"use client"

import Link from "next/link"
import { Github, Linkedin, Heart, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 bg-gradient-to-b from-background to-card/30 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Akash Walikar</h3>
            <p className="text-foreground/70">
              Building intelligent systems with AI/ML. Passionate about creating scalable solutions that make an impact.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Tech Stack", href: "#tech" },
                { label: "Education", href: "#education" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span>{">"}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://github.com/Akash-walikar/Akash-Walikar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all hover:scale-110 group"
                title="GitHub"
              >
                <Github size={20} className="text-primary group-hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/akashwalikar998/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-all hover:scale-110 group"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-secondary group-hover:scale-125 transition-transform" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/70 flex items-center gap-2">
                <span>✉️</span>
                <span className="text-accent font-semibold">akash.walikar.2427@gmail.com</span>
              </p>
              <p className="text-foreground/70 flex items-center gap-2">
                <span>📞</span>
                <span className="text-accent font-semibold">8105732924</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            © {currentYear} Akash Walikar. Built with <Heart size={16} className="text-red-500" /> using Next.js &
            Tailwind
          </p>
          <p className="text-foreground/60 text-sm">
            <a href="#projects" className="hover:text-primary transition-colors flex items-center gap-1">
              Available for opportunities <ExternalLink size={14} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
