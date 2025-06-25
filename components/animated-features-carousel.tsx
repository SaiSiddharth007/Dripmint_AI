"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Cpu, Palette, Users, Leaf, Zap, Sparkles, Heart, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-[#FF3532]" />,
    title: "AI Stylist",
    description: "Personalized outfit recommendations based on your features",
  },
  {
    icon: <Palette className="w-8 h-8 text-[#FF3532]" />,
    title: "Full Customization",
    description: "Design every detail of your clothing with precision",
  },
  {
    icon: <Users className="w-8 h-8 text-[#FF3532]" />,
    title: "Social Wardrobe",
    description: "Share designs and connect with fashion enthusiasts",
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#FF3532]" />,
    title: "Sustainable",
    description: "Eco-friendly materials and ethical production",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#FF3532]" />,
    title: "Fast Delivery",
    description: "Get your custom designs delivered quickly",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#FF3532]" />,
    title: "Unique Designs",
    description: "Stand out with one-of-a-kind fashion pieces",
  },
  {
    icon: <Heart className="w-8 h-8 text-[#FF3532]" />,
    title: "Customer Love",
    description: "Join thousands of satisfied fashion enthusiasts",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#FF3532]" />,
    title: "Quality Guarantee",
    description: "Premium materials and expert craftsmanship",
  },
]

// Duplicate the features to create a seamless loop
const extendedFeatures = [...features, ...features]

export default function AnimatedFeaturesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section className="py-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
              Dripmint AI
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover the features that make our platform revolutionary
          </p>
        </motion.div>
      </div>

      <div ref={containerRef} className="relative w-full">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 z-10"></div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="py-8"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex"
          >
            {extendedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="bg-[#FF3532]/10 dark:bg-[#FF3532]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-space-grotesk dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
