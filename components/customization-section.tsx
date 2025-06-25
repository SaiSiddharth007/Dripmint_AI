"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shirt,
  Palette,
  Ruler,
  Scissors,
  Move,
  Type,
  Image,
  Shapes,
  Layers,
  Grid,
  Save,
  Download,
  Share2,
} from "lucide-react"

export default function CustomizationSection() {
  const [sleeveLength, setSleeveLength] = useState(50)
  const [collarSize, setCollarSize] = useState(30)
  const [fitStyle, setFitStyle] = useState(60)
  const [designMode, setDesignMode] = useState("basic") // "basic" or "advanced"

  return (
    <section id="customization" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            <span className="bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
              Unlimited Customization
            </span>{" "}
            Options
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Design clothing that perfectly matches your style and fits your body with precision. Every detail is
            customizable.
          </p>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                onClick={() => setDesignMode("basic")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  designMode === "basic" ? "bg-[#FF3532] text-white shadow-md" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Basic Edit
              </button>
              <button
                onClick={() => setDesignMode("advanced")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  designMode === "advanced" ? "bg-[#FF3532] text-white shadow-md" : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Advanced Designer Mode
              </button>
            </div>
          </div>
        </motion.div>

        {designMode === "basic" ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Tabs defaultValue="style" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="style" className="data-[state=active]:bg-[#FF3532]/10">
                    <Shirt size={16} className="mr-2" /> Style
                  </TabsTrigger>
                  <TabsTrigger value="color" className="data-[state=active]:bg-[#FF3532]/10">
                    <Palette size={16} className="mr-2" /> Color
                  </TabsTrigger>
                  <TabsTrigger value="size" className="data-[state=active]:bg-[#FF3532]/10">
                    <Ruler size={16} className="mr-2" /> Size
                  </TabsTrigger>
                  <TabsTrigger value="details" className="data-[state=active]:bg-[#FF3532]/10">
                    <Scissors size={16} className="mr-2" /> Details
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="style" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Style Customization</h3>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-700">Sleeve Length</label>
                      <span className="text-sm text-gray-500">{sleeveLength}%</span>
                    </div>
                    <Slider
                      defaultValue={[50]}
                      max={100}
                      step={1}
                      onValueChange={(value) => setSleeveLength(value[0])}
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-700">Collar Size</label>
                      <span className="text-sm text-gray-500">{collarSize}%</span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={1} onValueChange={(value) => setCollarSize(value[0])} />
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-700">Fit Style</label>
                      <span className="text-sm text-gray-500">{fitStyle}%</span>
                    </div>
                    <Slider defaultValue={[60]} max={100} step={1} onValueChange={(value) => setFitStyle(value[0])} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-[#FF3532] transition-colors">
                      <div className="w-10 h-10 bg-[#FF3532]/10 rounded-full flex items-center justify-center">
                        <Shirt size={20} className="text-[#FF3532]" />
                      </div>
                      <span className="text-sm">Casual</span>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-[#FF3532] transition-colors">
                      <div className="w-10 h-10 bg-[#FF3532]/10 rounded-full flex items-center justify-center">
                        <Shirt size={20} className="text-[#FF3532]" />
                      </div>
                      <span className="text-sm">Formal</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Apply Style Changes</Button>
                </TabsContent>

                <TabsContent value="color" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Color Selection</h3>

                  <div className="grid grid-cols-5 gap-3 mb-6">
                    <div className="aspect-square bg-[#FF3532] rounded-lg cursor-pointer ring-2 ring-offset-2 ring-[#FF3532]"></div>
                    <div className="aspect-square bg-[#FFE3B2] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#2E4057] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#F5F5F5] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#084C61] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#DB504A] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#E3B505] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#4B88A2] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#252525] rounded-lg cursor-pointer"></div>
                    <div className="aspect-square bg-[#FFF1D0] rounded-lg cursor-pointer"></div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Custom Color</h4>
                    <div className="flex gap-3">
                      <input
                        type="color"
                        defaultValue="#FF3532"
                        className="w-10 h-10 p-1 rounded border border-gray-200"
                      />
                      <input
                        type="text"
                        defaultValue="#FF3532"
                        className="flex-1 p-2 border border-gray-200 rounded-md"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Apply Color</Button>
                </TabsContent>

                <TabsContent value="size" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Precise Sizing</h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="text-sm text-gray-700 mb-1 block">Chest (cm)</label>
                      <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="95" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 mb-1 block">Waist (cm)</label>
                      <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="80" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 mb-1 block">Shoulders (cm)</label>
                      <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="45" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 mb-1 block">Sleeve (cm)</label>
                      <input type="number" className="w-full p-2 border border-gray-200 rounded-md" placeholder="65" />
                    </div>
                  </div>

                  <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Apply Measurements</Button>
                </TabsContent>

                <TabsContent value="details" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-4">Fine Details</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700">Add Pockets</label>
                      <input type="checkbox" className="h-4 w-4 text-[#FF3532]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700">Embroidery</label>
                      <input type="checkbox" className="h-4 w-4 text-[#FF3532]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700">Custom Buttons</label>
                      <input type="checkbox" className="h-4 w-4 text-[#FF3532]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-700">Special Stitching</label>
                      <input type="checkbox" className="h-4 w-4 text-[#FF3532]" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-sm text-gray-700 mb-1 block">Additional Notes</label>
                    <textarea
                      className="w-full p-2 border border-gray-200 rounded-md h-20"
                      placeholder="Any special requests or details..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white">Apply Details</Button>
                </TabsContent>
              </Tabs>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 relative"
            >
              <div className="bg-[#FFF8F0] rounded-3xl p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold font-space-grotesk">Live Preview</h3>
                  <p className="text-sm text-gray-500">See your customizations in real-time</p>
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-md">
                    <img
                      src="/placeholder.svg?height=600&width=450"
                      alt="Customized Clothing Preview"
                      className="w-full h-full object-cover rounded-xl"
                    />

                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Custom Design</h4>
                        <span className="text-xs bg-[#FF3532] text-white px-2 py-1 rounded-full">Live</span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-[#FF3532] ring-2 ring-white"></div>
                        <div className="text-sm">
                          <p className="font-medium">Fiery Red Shirt</p>
                          <p className="text-xs text-gray-500">Slim fit, custom collar</p>
                        </div>
                      </div>
                      <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white text-sm py-1">
                        Save Design
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Advanced Designer Mode
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] text-white rounded-xl overflow-hidden shadow-xl"
          >
            <div className="bg-[#222] p-3 flex justify-between items-center border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-sm font-medium">Advanced Designer Canvas</h3>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Save size={16} className="mr-2" /> Save
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Download size={16} className="mr-2" /> Export
                </Button>
                <Button size="sm" className="bg-[#FF3532] hover:bg-[#E62E2B] text-white">
                  <Share2 size={16} className="mr-2" /> Share
                </Button>
              </div>
            </div>

            <div className="flex h-[600px]">
              {/* Left Sidebar - Tools */}
              <div className="w-16 bg-[#1A1A1A] border-r border-gray-700 flex flex-col items-center py-4 gap-6">
                <button className="w-10 h-10 rounded-lg bg-[#FF3532] flex items-center justify-center">
                  <Move size={20} className="text-white" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center">
                  <Type size={20} className="text-gray-300" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center">
                  <Image size={20} className="text-gray-300" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center">
                  <Shapes size={20} className="text-gray-300" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center">
                  <Layers size={20} className="text-gray-300" />
                </button>
                <button className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center">
                  <Grid size={20} className="text-gray-300" />
                </button>
              </div>

              {/* Main Canvas Area */}
              <div className="flex-1 canvas-container relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[300px] h-[400px] bg-white rounded-lg shadow-lg">
                    {/* T-shirt outline */}
                    <svg viewBox="0 0 300 400" className="w-full h-full">
                      <path
                        d="M75,50 L125,50 L125,100 L175,100 L175,50 L225,50 L250,150 L225,150 L225,350 L75,350 L75,150 L50,150 Z"
                        fill="#FF3532"
                        stroke="#000"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Draggable elements would be here */}
                    <div className="absolute top-[120px] left-[100px] bg-white p-2 rounded border-2 border-blue-500 cursor-move">
                      <span className="text-black text-sm">Drag me</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Properties */}
              <div className="w-64 bg-[#1A1A1A] border-l border-gray-700 p-4 overflow-y-auto">
                <h3 className="text-sm font-medium text-gray-300 mb-4">Properties</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Color</label>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#FF3532] ring-2 ring-white cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-[#FFE3B2] cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-[#2E4057] cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-white cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-black cursor-pointer"></div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Size</label>
                    <select className="w-full bg-[#333] border border-gray-600 rounded text-sm p-2 text-gray-200">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Custom...</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Opacity</label>
                    <Slider defaultValue={[100]} max={100} step={1} className="py-2" />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Position</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-gray-500">X</label>
                        <input
                          type="number"
                          value="100"
                          className="w-full bg-[#333] border border-gray-600 rounded text-sm p-1 text-gray-200"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">Y</label>
                        <input
                          type="number"
                          value="120"
                          className="w-full bg-[#333] border border-gray-600 rounded text-sm p-1 text-gray-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-xs font-medium text-gray-300 mb-2">Layers</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-[#333] p-2 rounded text-xs">
                        <span>T-Shirt Base</span>
                        <button className="text-gray-400 hover:text-white">
                          <Layers size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between bg-[#FF3532] bg-opacity-20 p-2 rounded text-xs">
                        <span>Text Element</span>
                        <button className="text-gray-400 hover:text-white">
                          <Layers size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
