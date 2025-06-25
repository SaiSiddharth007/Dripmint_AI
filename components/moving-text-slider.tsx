"use client"

import { motion } from "framer-motion"

const slogans = [
  "Fashion Redefined!",
  "Find your perfect drip",
  "Trend Smarter. Flex Harder.",
  "Style that speaks volumes",
  "Elevate your wardrobe",
  "Designed for you, by AI",
  "The future of fashion is here",
  "Stand out from the crowd",
]

// Duplicate the slogans to create a seamless loop
const extendedSlogans = [...slogans, ...slogans]

export default function MovingTextSlider() {
  return (
    <section className="py-12 bg-black overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap"
        >
          {extendedSlogans.map((slogan, index) => (
            <div key={index} className="inline-flex items-center mx-8">
              <span className="text-4xl md:text-6xl font-bold font-space-grotesk text-white">{slogan}</span>
              <span className="mx-4 text-[#FF3532] text-4xl md:text-6xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
