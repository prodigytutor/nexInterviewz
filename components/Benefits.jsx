"use client"
import React from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const benefits = {
  jobSeekers: [
    "Boost your confidence with realistic interview practice",
    "Improve your answers with AI-powered feedback",
    "Prepare for industry-specific questions",
    "Track your progress and identify areas for improvement",
    "Practice anytime, anywhere, at your own pace",
  ],
  companies: [
    "Streamline your initial screening process",
    "Assess candidates' knowledge and communication skills efficiently",
    "Ensure consistent evaluation across all applicants",
    "Reduce time and resources spent on preliminary interviews",
    "Identify top candidates more quickly and accurately",
  ],
}

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-teal-600">For Job Seekers</h3>
            <ul className="space-y-4">
              {benefits.jobSeekers.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">For Companies</h3>
            <ul className="space-y-4">
              {benefits.companies.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

