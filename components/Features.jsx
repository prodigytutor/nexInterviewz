"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Brain, Users, BarChart, Zap, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Questions",
    description: "Our advanced AI generates tailored questions based on your industry, role, and experience level.",
    details:
      "The AI adapts in real-time, adjusting difficulty based on your responses to simulate a real interview experience.",
  },
  {
    icon: Users,
    title: "Real-time Feedback",
    description: "Receive instant feedback on your responses to improve your interview skills.",
    details:
      "Our AI analyzes your answers for content, clarity, and relevance, providing constructive criticism to help you improve.",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Track your progress and identify areas for improvement with detailed analytics.",
    details: "View comprehensive reports on your performance across different question types, industries, and skills.",
  },
  {
    icon: Zap,
    title: "Interview Simulations",
    description: "Practice with realistic interview simulations for various industries and roles.",
    details: "Experience mock interviews that mimic the style and format of top companies in your target industry.",
  },
  {
    icon: Globe,
    title: "Industry-Specific Content",
    description: "Access a vast library of industry-specific questions and best practices.",
    details: "Stay up-to-date with the latest interview trends and expectations in your field.",
  },
  {
    icon: Lock,
    title: "Secure and Private",
    description: "Your data and practice sessions are kept completely confidential.",
    details:
      "We use enterprise-grade encryption to ensure your personal information and interview responses are secure.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-teal-500 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{feature.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

