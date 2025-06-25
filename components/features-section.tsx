"use client"

import { motion } from "framer-motion"
import { Cpu, Palette, Users, Leaf } from "lucide-react"

const features = [
  {
    icon: <Cpu className="w-10 h-10 text-[#FF3532]" />,
    title: "AI Stylist",
    description:
      "Our AI analyzes your facial features, body shape, and skin tone to recommend perfect outfit combinations.",
  },
  {
    icon: <Palette className="w-10 h-10 text-[#FF3532]" />,
    title: "Full Customization",
    description:
      "Customize every detail of your clothing, from fabric and color to precise measurements and unique patterns.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#FF3532]" />,
    title: "Social Wardrobe",
    description: "Share your designs, discover trending styles, and connect with fashion designers and enthusiasts.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#FF3532]" />,
    title: "Sustainable Production",
    description: "Your designs are crafted by local MSMEs using eco-friendly materials and sustainable practices.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Redefining Fashion with{" "}
            <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
              AI-Powered Innovation
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Dripmint AI combines cutting-edge technology with sustainable practices to create a revolutionary fashion
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-[#FFE3B2]/10 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="bg-[#FF3532]/10 dark:bg-[#FF3532]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-space-grotesk dark:text-white">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
