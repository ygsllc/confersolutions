import type { Metadata } from "next"
import { FileText, Zap, Shield, CheckCircle, Clock, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Processing Agent | AI Document Processing | Confer Solutions AI",
  description:
    "Automate document processing with our intelligent Processing Agent. Extract, validate, and process financial documents with 99.9% accuracy.",
}

export default function ProcessingAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Processing Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                Transform document processing with intelligent automation. Extract, validate, and process financial
                documents with unprecedented speed and accuracy.
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
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Document Processing"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Processing Agent Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology that understands, extracts, and processes complex financial documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8 text-fintech-600" />,
                title: "Document Recognition",
                description:
                  "Automatically identify and classify document types including LE, CD, bank statements, and tax returns.",
              },
              {
                icon: <Zap className="h-8 w-8 text-fintech-600" />,
                title: "Instant Processing",
                description:
                  "Process thousands of documents in minutes with parallel processing and cloud scalability.",
              },
              {
                icon: <Shield className="h-8 w-8 text-fintech-600" />,
                title: "Data Validation",
                description: "Cross-reference and validate extracted data against multiple sources for accuracy.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-fintech-600" />,
                title: "Quality Assurance",
                description: "Built-in quality checks and confidence scoring for every extracted data point.",
              },
              {
                icon: <Clock className="h-8 w-8 text-fintech-600" />,
                title: "Real-time Processing",
                description: "Process documents as they arrive with real-time notifications and status updates.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-fintech-600" />,
                title: "Analytics Dashboard",
                description: "Monitor processing volumes, accuracy rates, and performance metrics in real-time.",
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

      {/* Document Types Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Document Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Process any financial document with specialized extraction models for each document type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Loan Estimates (LE)",
                description: "Extract all required fields from LE documents with TRID compliance validation.",
                accuracy: "99.8%",
              },
              {
                title: "Closing Disclosures (CD)",
                description: "Process CD documents with automatic comparison to LE for regulatory compliance.",
                accuracy: "99.7%",
              },
              {
                title: "Bank Statements",
                description: "Analyze transaction history, calculate deposits, and identify income patterns.",
                accuracy: "99.5%",
              },
              {
                title: "Tax Returns",
                description: "Extract income data from 1040, W-2, 1099, and Schedule forms with validation.",
                accuracy: "99.6%",
              },
              {
                title: "Pay Stubs",
                description: "Calculate YTD income, deductions, and employment verification data.",
                accuracy: "99.4%",
              },
              {
                title: "Asset Statements",
                description: "Process investment accounts, retirement funds, and asset verification documents.",
                accuracy: "99.3%",
              },
            ].map((docType, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-fintech-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{docType.title}</h3>
                  <span className="text-sm font-medium text-fintech-600 bg-fintech-100 px-2 py-1 rounded">
                    {docType.accuracy}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{docType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading accuracy and speed that transforms your document processing workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "99.7%", label: "Average Accuracy Rate" },
              { metric: "< 30s", label: "Processing Time per Document" },
              { metric: "10,000+", label: "Documents Processed Daily" },
              { metric: "95%", label: "Straight-Through Processing" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-card p-6 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-fintech-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing systems through APIs, webhooks, and direct integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">API-First Architecture</h3>
              <p className="text-muted-foreground">
                RESTful APIs with comprehensive documentation, SDKs for popular languages, and webhook support for
                real-time notifications.
              </p>
              <ul className="space-y-2">
                {[
                  "RESTful API with OpenAPI specification",
                  "SDKs for Python, JavaScript, and .NET",
                  "Webhook notifications for processing events",
                  "Batch processing for high-volume workflows",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-fintech-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Platform Integrations</h3>
              <p className="text-muted-foreground">
                Pre-built connectors for popular LOS, CRM, and document management systems.
              </p>
              <ul className="space-y-2">
                {[
                  "Encompass, Calyx Point, BytePro integration",
                  "Salesforce, HubSpot CRM connectivity",
                  "SharePoint, Box, Dropbox support",
                  "Custom integration consulting available",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-fintech-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-fintech-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Document Processing?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Process thousands of documents with 99.7% accuracy. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90">
              Start Free Trial
            </ConsultationButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              View API Docs
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
