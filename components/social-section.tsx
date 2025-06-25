"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, User, Star } from "lucide-react"

const designCards = [
  {
    id: 1,
    title: "Summer Vibes Collection",
    designer: "Alex Morgan",
    likes: 342,
    comments: 28,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Urban Street Style",
    designer: "Jamie Chen",
    likes: 215,
    comments: 42,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Minimalist Elegance",
    designer: "Taylor Swift",
    likes: 528,
    comments: 64,
    rating: 4.9,
  },
]

export default function SocialSection() {
  return (
    <section id="social" className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
              Fashion Community
            </span>
          </h2>
          <p className="text-lg text-gray-700">
            Share your designs, discover trending styles, and connect with fashion enthusiasts and designers from around
            the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={`/placeholder.svg?height=500&width=400&text=Design${card.id}`}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{card.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={16} className="text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-700">{card.designer}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-[#FF3532] transition-colors">
                      <Heart size={18} />
                      <span className="text-xs">{card.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-[#FF3532] transition-colors">
                      <MessageCircle size={18} />
                      <span className="text-xs">{card.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-[#FF3532] transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <Button className="bg-[#FF3532] hover:bg-[#E62E2B] text-white text-xs py-1 px-3">Try It</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" className="border-[#FF3532] text-[#FF3532]">
            Explore More Designs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
