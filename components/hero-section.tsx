"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#FFE3B2]">
              <Sparkles size={16} className="text-[#FF3532]" />
              <span className="text-sm font-medium">Redefining fashion with AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight mb-6">
              Your{" "}
              <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
                Perfect Fit
              </span>{" "}
              Designed by AI
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Dripmint AI creates hyper-personalized fashion based on your body, face, and style preferences. Design,
              customize, and get your perfect outfit made sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white px-8 py-6 text-lg">
                Try AI Stylist
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3532]/20 to-[#FFE3B2]/30 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="AI Fashion Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#FF3532]/10 to-[#FFE3B2]/10 p-3 rounded-xl">
                  <div className="w-12 h-12 bg-[#FF3532] rounded-full flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Generated</p>
                    <p className="text-xs text-gray-500">Perfect match for you</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
