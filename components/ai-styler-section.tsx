"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scan, Camera, Upload, Check } from "lucide-react"

export default function AIStylerSection() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    { number: 1, title: "Scan" },
    { number: 2, title: "Analyze" },
    { number: 3, title: "Generate" },
  ]

  return (
    <section id="ai-styler" className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
              AI Stylist That{" "}
              <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
                Understands You
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our advanced AI analyzes your unique features to create personalized fashion recommendations that
              complement your natural attributes.
            </p>

            <div className="flex items-center gap-6 mb-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center"
                  onClick={() => setActiveStep(step.number)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 cursor-pointer transition-colors ${
                      activeStep === step.number
                        ? "bg-[#FF3532] text-white"
                        : "bg-white text-gray-400 border border-gray-200"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-sm font-medium ${activeStep === step.number ? "text-[#FF3532]" : "text-gray-500"}`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            <Tabs defaultValue="camera" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="camera" className="data-[state=active]:bg-[#FF3532]/10">
                  <Camera size={16} className="mr-2" /> Camera
                </TabsTrigger>
                <TabsTrigger value="upload" className="data-[state=active]:bg-[#FF3532]/10">
                  <Upload size={16} className="mr-2" /> Upload
                </TabsTrigger>
                <TabsTrigger value="measurements" className="data-[state=active]:bg-[#FF3532]/10">
                  <Scan size={16} className="mr-2" /> Measurements
                </TabsTrigger>
              </TabsList>
              <TabsContent value="camera" className="bg-white p-6 rounded-xl shadow-sm">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Use your device camera to capture your body shape and facial features for AI analysis.
                </p>
                <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Start Camera</Button>
              </TabsContent>
              <TabsContent value="upload" className="bg-white p-6 rounded-xl shadow-sm">
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center mb-4">
                  <Upload size={48} className="text-gray-400 mb-3" />
                  <p className="text-sm text-gray-500 mb-2">Drag and drop your photo here or click to browse</p>
                  <Button variant="outline" className="mt-2">
                    Browse Files
                  </Button>
                </div>
                <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Upload & Analyze</Button>
              </TabsContent>
              <TabsContent value="measurements" className="bg-white p-6 rounded-xl shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-gray-500 mb-1 block">Height (cm)</label>
                    <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="175" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 mb-1 block">Weight (kg)</label>
                    <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="70" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 mb-1 block">Chest (cm)</label>
                    <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="95" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 mb-1 block">Waist (cm)</label>
                    <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="80" />
                  </div>
                </div>
                <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Submit Measurements</Button>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3532]/20 to-[#FFE3B2]/30 rounded-3xl transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=480"
                  alt="AI Stylist Analysis"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 bg-[#FF3532]/10 rounded-full flex items-center justify-center">
                    <Check size={20} className="text-[#FF3532]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Analysis Complete</p>
                    <p className="text-xs text-gray-500">98% accuracy</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Color Palette</h4>
                  <span className="text-xs text-gray-500">Based on your skin tone</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF3532]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#FFE3B2]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#2E4057]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#F5F5F5]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#084C61]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
