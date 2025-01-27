"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-6 text-blue-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ace Your Interviews
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-center mb-8 text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Prepare, Practice, and Perfect Your Interview Skills
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
            Get Started
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-blue-200 opacity-20 transform rotate-45"></div>
        <div className="absolute inset-0 bg-teal-200 opacity-20 transform -rotate-45"></div>
      </motion.div>
    </section>
  )
}

