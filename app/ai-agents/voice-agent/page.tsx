import type { Metadata } from "next"
import { Phone, Mic, MessageSquare, Clock, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Voice Agent | AI-Powered Voice Solutions | Confer Solutions AI",
  description:
    "Transform customer interactions with our intelligent Voice Agent. 24/7 automated phone support, natural conversations, and seamless integration.",
}

export default function VoiceAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Voice Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                Transform customer interactions with intelligent voice technology. Our AI Voice Agent handles calls,
                provides instant support, and delivers natural conversations 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90">
                  Get a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-fintech-600"
                >
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Voice Agent Technology"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voice Agent Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered voice technology that understands, responds, and learns from every interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8 text-fintech-600" />,
                title: "24/7 Phone Support",
                description: "Handle unlimited incoming calls with natural, human-like conversations that never sleep.",
              },
              {
                icon: <Mic className="h-8 w-8 text-fintech-600" />,
                title: "Natural Speech Processing",
                description: "Advanced NLP understands accents, context, and intent for seamless communication.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-fintech-600" />,
                title: "Multi-Language Support",
                description: "Communicate in 50+ languages with native-level fluency and cultural awareness.",
              },
              {
                icon: <Clock className="h-8 w-8 text-fintech-600" />,
                title: "Instant Response",
                description: "Zero wait times with immediate, accurate responses to customer inquiries.",
              },
              {
                icon: <Shield className="h-8 w-8 text-fintech-600" />,
                title: "Secure & Compliant",
                description: "Bank-grade security with full compliance for financial services regulations.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-fintech-600" />,
                title: "Performance Analytics",
                description: "Real-time insights into call volume, resolution rates, and customer satisfaction.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voice Agent Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From customer service to sales, our Voice Agent adapts to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Customer Support",
                description:
                  "Handle account inquiries, troubleshooting, and service requests with intelligent routing to human agents when needed.",
                benefits: [
                  "Reduce wait times by 90%",
                  "24/7 availability",
                  "Consistent service quality",
                  "Automatic escalation",
                ],
              },
              {
                title: "Sales & Lead Qualification",
                description:
                  "Engage prospects, qualify leads, and schedule appointments with personalized conversations that convert.",
                benefits: [
                  "Increase lead conversion by 40%",
                  "Automated follow-ups",
                  "CRM integration",
                  "Performance tracking",
                ],
              },
              {
                title: "Appointment Scheduling",
                description:
                  "Streamline booking processes with intelligent calendar management and automated confirmations.",
                benefits: [
                  "Reduce no-shows by 60%",
                  "Calendar integration",
                  "SMS reminders",
                  "Rescheduling automation",
                ],
              },
              {
                title: "Payment & Account Management",
                description: "Secure payment processing and account updates through voice-authenticated transactions.",
                benefits: ["PCI compliant", "Voice biometrics", "Instant verification", "Fraud detection"],
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-fintech-600 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-fintech-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses using our Voice Agent to deliver exceptional customer service 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90">
              Schedule a Demo
            </ConsultationButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
