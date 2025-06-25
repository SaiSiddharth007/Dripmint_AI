"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, Leaf, Shirt, Sparkles } from "lucide-react"

export default function AboutMeSection() {
  return (
    <section id="about-me" className="py-20 dark-theme">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">About Me</span>{" "}
            <span className="text-white">(aka The Guy Behind The Threads)</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 dark-card bento-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">👋 Hey there!</h3>
              <p className="text-gray-300 mb-4">
                I'm M.V. Sai Siddharth — a B.Tech brain from the Indian Institute of Technology, a full-time human,
                part-time visionary, and the official founder of "Why-Don't-Clothes-Ever-Fit-Me?" club (that I made up,
                but still legit).
              </p>
              <p className="text-gray-300">
                Ever stood in front of a mirror wondering why that shirt looks like a potato sack or that pant forgot
                its length? Yep, me too. That's when I decided — why not let{" "}
                <span className="text-[#FF7A32]">AI fix fashion</span>?
              </p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-[#FF3532] text-white px-3 py-1 rounded-full text-sm">Founder</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 dark-card bento-card p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">Education</h3>
              <GraduationCap className="text-[#FF3532]" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm mt-4">B.Tech graduate from the Indian Institute of Technology</p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 dark-card bento-card p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">Vision</h3>
              <Sparkles className="text-[#FF7A32]" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm mt-4">
                If robots can land rockets and write poems, they can help me find pants that don't look like parachutes.
              </p>
            </div>
          </motion.div>

          {/* Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 dark-card bento-card p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">Tech</h3>
              <Code className="text-[#FF3532]" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm mt-4">
                Built Dripmint AI — where fashion meets <span className="text-[#FF7A32]">intelligence</span> (finally).
              </p>
            </div>
          </motion.div>

          {/* Fashion Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 dark-card bento-card p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">Fashion</h3>
              <Shirt className="text-[#FF3532]" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm mt-4">
                It scans you, knows what suits you, and designs what defines you — from color palette to cuff style.
              </p>
            </div>
          </motion.div>

          {/* Sustainability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-1 dark-card bento-card p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">Sustainability</h3>
              <Leaf className="text-[#FF7A32]" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm mt-4">
                Made by MSMEs using eco-friendly threads, because saving the planet never goes out of style.
              </p>
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 dark-card bento-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Long story short?</h3>
              <p className="text-gray-300 mb-2">
                You dream it, AI <span className="text-[#FF7A32]">dripifies</span> it, and it lands at your doorstep,
                stitched to perfection.
              </p>
              <p className="text-gray-300">
                Welcome to the future of fashion, where you're the model, the designer, and the trend.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="inline-block bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-white px-4 py-2 rounded-full text-sm font-medium">
                The Future of Fashion
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
