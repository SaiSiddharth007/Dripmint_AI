"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
            Dripmint
            <span className="text-black">AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-700 hover:text-[#FF3532] transition-colors">
            Features
          </Link>
          <Link href="#about-me" className="text-gray-700 hover:text-[#FF3532] transition-colors">
            About Me
          </Link>
          <Link href="#ai-styler" className="text-gray-700 hover:text-[#FF3532] transition-colors">
            AI Styler
          </Link>
          <Link href="#customization" className="text-gray-700 hover:text-[#FF3532] transition-colors">
            Customization
          </Link>
          <Link href="#illustrations" className="text-gray-700 hover:text-[#FF3532] transition-colors">
            Themes
          </Link>
          <Link href="#social" className="text-gray-700 hover:text-[#FF3532] transition-colors">
            Social
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" className="border-[#FF3532] text-[#FF3532]">
            Log in
          </Button>
          <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white">Sign up</Button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button className="text-gray-700 dark:text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-gray-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#about-me"
                className="text-gray-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="#ai-styler"
                className="text-gray-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Styler
              </Link>
              <Link
                href="#customization"
                className="text-gray-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customization
              </Link>
              <Link
                href="#illustrations"
                className="text-gray-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Themes
              </Link>
              <Link
                href="#social"
                className="text-gray-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Social
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" className="border-[#FF3532] text-[#FF3532] w-full">
                  Log in
                </Button>
                <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white w-full">Sign up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
