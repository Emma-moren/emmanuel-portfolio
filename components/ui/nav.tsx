"use client"
import Link from "next/link"
import { Home, User, Code, Briefcase, MessageSquare } from 'lucide-react'
import {cn} from "./lib/utils"
import { useEffect, useState } from "react"

export function Nav() {

  const [activeSection, setActiveSection] = useState("header")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header", "about", "skills", "projects",  "hire"]
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { icon: <Home className="w-5 h-5" />, href: "#header", label: "Home", id: "header" },
    { icon: <User className="w-5 h-5" />, href: "#about", label: "About", id: "about" },
    { icon: <Code className="w-5 h-5" />, href: "#skills", label: "Skills", id: "skills" },
    { icon: <Briefcase className="w-5 h-5" />, href: "#projects", label: "Projects", id: "projects" },
    { icon: <MessageSquare className="w-5 h-5" />, href: "#hire", label: "Hire", id: "hire" },
  ]

  return (
    <div className="fixed left-0 bottom-5 w-full flex justify-center z-50 pb-12">
      <nav className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#de7a0b] shadow-lg border border-white/10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "hover:bg-white/5 hover:text-[#000]",
              "text-white/60",
              activeSection === link.id && "text-[#000] bg-white/5",
            )}
            aria-label={link.label}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {link.icon}
          </Link>
        ))}
      </nav>
    </div>
  )
}