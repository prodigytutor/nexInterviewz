"use client"

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Elevate Your Interview Game Today
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't let another opportunity slip away. With our AI-powered mock interviews, you'll be prepared to impress in
          any interview scenario. Start your journey to career success now!
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="/dashboard" >
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
            Start Free Trial
          </Button>
          </a>
          <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-blue-900">
            Schedule a Demo
          </Button>
        </motion.div>
        <motion.p
          className="mt-6 text-sm text-blue-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          No credit card required. 14-day free trial for all new users.
        </motion.p>
      </div>
    </section>
  )
}

