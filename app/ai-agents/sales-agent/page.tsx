import type { Metadata } from "next"
import { Target, TrendingUp, Users, MessageCircle, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sales Agent | AI-Powered Sales Automation | Confer Solutions AI",
  description:
    "Boost sales performance with our intelligent Sales Agent. Automated lead qualification, personalized outreach, and data-driven insights.",
}

export default function SalesAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Sales Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                Supercharge your sales team with AI-powered lead qualification, personalized outreach, and intelligent
                follow-ups that convert prospects into customers.
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
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Sales Agent Dashboard"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sales Agent Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology that identifies, engages, and converts prospects with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-fintech-600" />,
                title: "Lead Qualification",
                description:
                  "Automatically score and qualify leads based on behavior, demographics, and engagement patterns.",
              },
              {
                icon: <MessageCircle className="h-8 w-8 text-fintech-600" />,
                title: "Personalized Outreach",
                description:
                  "Craft personalized messages and follow-ups based on prospect data and interaction history.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-fintech-600" />,
                title: "Sales Forecasting",
                description: "Predict sales outcomes with AI-powered analytics and pipeline management.",
              },
              {
                icon: <Users className="h-8 w-8 text-fintech-600" />,
                title: "CRM Integration",
                description: "Seamlessly integrate with existing CRM systems for unified customer data management.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-fintech-600" />,
                title: "Performance Analytics",
                description: "Track conversion rates, engagement metrics, and ROI with detailed reporting.",
              },
              {
                icon: <Zap className="h-8 w-8 text-fintech-600" />,
                title: "Automated Follow-ups",
                description: "Never miss a follow-up with intelligent scheduling and automated nurture sequences.",
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

      {/* Results Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our Sales Agent transforms sales performance across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "300%", label: "Increase in Lead Conversion" },
              { metric: "75%", label: "Reduction in Sales Cycle" },
              { metric: "24/7", label: "Continuous Lead Engagement" },
              { metric: "95%", label: "Lead Qualification Accuracy" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sales Agent Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Versatile AI solutions for every stage of your sales funnel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "B2B Lead Generation",
                description:
                  "Identify and engage high-value prospects with personalized outreach campaigns that drive meetings and demos.",
                features: ["LinkedIn integration", "Email sequences", "Meeting scheduling", "Lead scoring"],
              },
              {
                title: "E-commerce Sales",
                description:
                  "Increase online sales with personalized product recommendations and abandoned cart recovery.",
                features: ["Product recommendations", "Cart abandonment", "Upsell automation", "Customer segmentation"],
              },
              {
                title: "Financial Services",
                description:
                  "Qualify loan applications, insurance leads, and investment prospects with compliance-ready processes.",
                features: ["Regulatory compliance", "Risk assessment", "Document collection", "Application processing"],
              },
              {
                title: "Real Estate",
                description:
                  "Connect buyers with properties, qualify mortgage readiness, and schedule property viewings.",
                features: ["Property matching", "Mortgage pre-qualification", "Viewing scheduling", "Market analysis"],
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-fintech-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-fintech-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to 3X Your Sales Performance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading companies using our Sales Agent to automate lead qualification and boost conversions.
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
