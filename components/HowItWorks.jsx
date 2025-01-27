"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { UserPlus, Laptop, MessageSquare, Award } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and tell us about your target industry, role, and experience level.",
  },
  {
    icon: Laptop,
    title: "Start a Mock Interview",
    description: "Choose from various interview types: behavioral, technical, or industry-specific.",
  },
  {
    icon: MessageSquare,
    title: "Answer AI-Generated Questions",
    description: "Respond to tailored questions and receive real-time feedback on your answers.",
  },
  {
    icon: Award,
    title: "Review and Improve",
    description: "Get detailed performance analytics and personalized improvement suggestions.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

