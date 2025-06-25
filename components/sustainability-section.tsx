"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf, Recycle, Factory, Award } from "lucide-react"

const sustainabilityFeatures = [
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "Eco-Friendly Materials",
    description: "We use sustainable fabrics and materials that minimize environmental impact.",
  },
  {
    icon: <Recycle className="w-6 h-6 text-green-600" />,
    title: "Zero Waste Production",
    description: "Our production process is designed to eliminate waste and reduce carbon footprint.",
  },
  {
    icon: <Factory className="w-6 h-6 text-green-600" />,
    title: "Local MSME Partners",
    description: "We partner with local micro, small, and medium enterprises to support local economies.",
  },
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    title: "Ethical Practices",
    description: "We ensure fair wages and safe working conditions throughout our supply chain.",
  },
]

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
              Fashion That{" "}
              <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
                Respects Our Planet
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At Dripmint AI, sustainability isn't just a feature—it's a core value. We're committed to creating fashion
              that looks good, feels good, and does good for our planet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {sustainabilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 bg-green-100 rounded-full p-2 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white">Learn More About Our Sustainability</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Eco+Fabric"
                  alt="Eco-friendly fabric"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Local+Artisan"
                  alt="Local artisan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Sustainable+Production"
                  alt="Sustainable production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Zero+Waste"
                  alt="Zero waste"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Carbon Neutral</p>
                  <p className="text-xs text-gray-500">100% Offset</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
