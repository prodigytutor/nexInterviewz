"use client"

import Link from "next/link"
import { Button } from "../components/ui/button"
import { Laptop } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-teal-500 mr-2" />
            <Link href="//"><span className="font-bold text-xl text-blue-900">InterviewPro</span></Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="text-blue-900 hover:text-teal-500">
              Features
            </Link>
            <Link href="#how-it-works" className="text-blue-900 hover:text-teal-500">
              How It Works
            </Link>
            <Link href="#benefits" className="text-blue-900 hover:text-teal-500">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-blue-900 hover:text-teal-500">
              Testimonials
            </Link>
          </div>

          {/* Sign Up and Sign In Buttons */}
          <div className="flex items-center space-x-2">
            <Link href='/sign-in'><Button variant="ghost" className="text-blue-900 hover:text-teal-500">
              Sign In
            </Button></Link>
            <Link href='/sign-in'><Button className="bg-teal-500 text-white hover:bg-teal-600">Sign Up</Button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

