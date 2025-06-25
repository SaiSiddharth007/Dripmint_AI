"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function IllustrationsSection() {
  return (
    <section id="illustrations" className="py-20 dark-theme">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4 text-white">
            Stunning{" "}
            <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
              Design Themes
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Get inspired with our curated collection of design themes and styles to kickstart your fashion journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Theme Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="dark-card rounded-2xl overflow-hidden group"
          >
            <div className="relative aspect-[4/5]">
              <img
                src="/placeholder.svg?height=500&width=400&text=Minimalist"
                alt="Minimalist Theme"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Minimalist</h3>
                  <p className="text-gray-300 text-sm mb-4">Clean lines, subtle details, and timeless elegance.</p>
                  <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white">Explore Theme</Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Theme Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="dark-card rounded-2xl overflow-hidden group"
          >
            <div className="relative aspect-[4/5]">
              <img
                src="/placeholder.svg?height=500&width=400&text=Urban"
                alt="Urban Theme"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Urban Street</h3>
                  <p className="text-gray-300 text-sm mb-4">Bold patterns, vibrant colors, and edgy designs.</p>
                  <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white">Explore Theme</Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Theme Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="dark-card rounded-2xl overflow-hidden group"
          >
            <div className="relative aspect-[4/5]">
              <img
                src="/placeholder.svg?height=500&width=400&text=Vintage"
                alt="Vintage Theme"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Vintage Revival</h3>
                  <p className="text-gray-300 text-sm mb-4">Nostalgic designs with a modern twist.</p>
                  <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white">Explore Theme</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button className="bg-transparent border-2 border-[#FF3532] text-[#FF3532] hover:bg-[#FF3532] hover:text-white transition-all">
            View All Themes <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
