import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Facebook, Linkedin, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold font-space-grotesk bg-gradient-to-r from-[#FF3532] to-[#FF7A32] text-transparent bg-clip-text">
                Dripmint
                <span className="text-white">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Redefining fashion with AI-powered personalization and sustainable practices.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF3532] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF3532] transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF3532] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF3532] transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#ai-styler" className="text-gray-400 hover:text-white transition-colors">
                  AI Styler
                </Link>
              </li>
              <li>
                <Link href="#customization" className="text-gray-400 hover:text-white transition-colors">
                  Customization
                </Link>
              </li>
              <li>
                <Link href="#social" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="text-gray-400 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest trends and features.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-0 focus-visible:ring-[#FF3532]"
              />
              <Button className="bg-[#FF3532] hover:bg-[#E62E2B] px-3">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dripmint AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
