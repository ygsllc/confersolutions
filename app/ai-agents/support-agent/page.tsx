import type { Metadata } from "next"
import { MessageCircle, Clock, Users, Shield, TrendingUp, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Support Agent | AI Customer Support | Confer Solutions AI",
  description:
    "Deliver exceptional customer support with our AI Support Agent. 24/7 assistance, instant responses, and seamless escalation.",
}

export default function SupportAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Support Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                Deliver exceptional customer support with intelligent automation. Provide instant, accurate responses
                while seamlessly escalating complex issues to human agents.
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
                  Try Live Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Customer Support"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Agent Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI that understands customer needs and provides personalized, accurate support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="h-8 w-8 text-fintech-600" />,
                title: "Intelligent Conversations",
                description: "Natural language understanding that grasps context, intent, and emotional tone.",
              },
              {
                icon: <Clock className="h-8 w-8 text-fintech-600" />,
                title: "24/7 Availability",
                description:
                  "Round-the-clock support that never sleeps, ensuring customers get help when they need it.",
              },
              {
                icon: <Users className="h-8 w-8 text-fintech-600" />,
                title: "Smart Escalation",
                description:
                  "Seamlessly transfer complex issues to human agents with full context and conversation history.",
              },
              {
                icon: <Shield className="h-8 w-8 text-fintech-600" />,
                title: "Secure & Compliant",
                description:
                  "Enterprise-grade security with compliance for financial services and healthcare regulations.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-fintech-600" />,
                title: "Continuous Learning",
                description: "AI that improves over time by learning from interactions and feedback.",
              },
              {
                icon: <Headphones className="h-8 w-8 text-fintech-600" />,
                title: "Multi-Channel Support",
                description: "Consistent support across chat, email, phone, and social media platforms.",
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

      {/* Performance Metrics */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in customer satisfaction and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "< 5s", label: "Average Response Time" },
              { metric: "85%", label: "Issues Resolved Without Escalation" },
              { metric: "4.8/5", label: "Customer Satisfaction Score" },
              { metric: "60%", label: "Reduction in Support Costs" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-fintech-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Agent Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Versatile AI support solutions for every customer interaction scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Account Management",
                description:
                  "Help customers with account inquiries, balance checks, transaction history, and profile updates.",
                capabilities: ["Account verification", "Transaction lookup", "Profile management", "Security settings"],
              },
              {
                title: "Technical Support",
                description:
                  "Troubleshoot technical issues, guide users through processes, and provide step-by-step assistance.",
                capabilities: ["Issue diagnosis", "Step-by-step guidance", "Screen sharing", "Remote assistance"],
              },
              {
                title: "Billing & Payments",
                description:
                  "Process payments, explain charges, handle billing disputes, and manage subscription changes.",
                capabilities: ["Payment processing", "Billing explanations", "Dispute resolution", "Plan changes"],
              },
              {
                title: "Product Information",
                description: "Provide detailed product information, feature explanations, and usage recommendations.",
                capabilities: ["Product catalogs", "Feature comparisons", "Usage tutorials", "Recommendations"],
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-fintech-600 rounded-full mr-3"></div>
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with your existing support infrastructure and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Help Desk Systems",
                description: "Zendesk, Freshdesk, ServiceNow, and custom ticketing systems.",
                icon: "🎫",
              },
              {
                title: "CRM Platforms",
                description: "Salesforce, HubSpot, Microsoft Dynamics, and customer databases.",
                icon: "👥",
              },
              {
                title: "Communication Tools",
                description: "Slack, Microsoft Teams, Discord, and internal chat systems.",
                icon: "💬",
              },
              {
                title: "Knowledge Bases",
                description: "Confluence, Notion, SharePoint, and documentation systems.",
                icon: "📚",
              },
              {
                title: "Analytics Platforms",
                description: "Google Analytics, Mixpanel, and custom reporting dashboards.",
                icon: "📊",
              },
              {
                title: "Payment Systems",
                description: "Stripe, PayPal, Square, and banking APIs for payment support.",
                icon: "💳",
              },
            ].map((integration, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{integration.title}</h3>
                <p className="text-muted-foreground text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-fintech-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Customer Support?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies delivering exceptional customer experiences with AI-powered support.
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
              Try Live Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
