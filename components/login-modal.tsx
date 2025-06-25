"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Facebook } from "lucide-react"

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  // This function would be called from the navbar
  // For demo purposes, we'll just add a button to open it
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={openModal}
          className="bg-[#FF3532] hover:bg-[#E62E2B] text-white rounded-full h-14 w-14 shadow-lg"
        >
          <span className="sr-only">Open Login</span>
          <span className="text-xl font-bold">+</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-md shadow-xl">
        <div className="relative p-6">
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
              Dripmint AI
            </h2>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 ${isLogin ? "text-[#FF3532] border-b-2 border-[#FF3532]" : "text-gray-500"}`}
              >
                Log in
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 ${!isLogin ? "text-[#FF3532] border-b-2 border-[#FF3532]" : "text-gray-500"}`}
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="mb-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-5">
              <Facebook size={20} className="text-blue-600" />
              {isLogin ? "Login with Facebook" : "Sign up with Facebook"}
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Input type="email" placeholder="Email address" className="w-full py-5" />
            </div>
            <div>
              <Input type="password" placeholder="Password" className="w-full py-5" />
            </div>

            {isLogin ? (
              <div className="text-right">
                <a href="#" className="text-sm text-[#FF3532]">
                  I forgot
                </a>
              </div>
            ) : (
              <div className="text-xs text-gray-500 mt-2">
                <p>For use by adults only (18 years of age and older). Keep out of reach of children and pets.</p>
              </div>
            )}

            <Button className="w-full bg-[#FF3532] hover:bg-[#E62E2B] text-white py-5">
              {isLogin ? "Log in" : "Sign up"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <button onClick={() => setIsLogin(false)} className="text-[#FF3532] font-medium">
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button onClick={() => setIsLogin(true)} className="text-[#FF3532] font-medium">
                  Log in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
