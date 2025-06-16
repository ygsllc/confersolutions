import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Brain, Shield, FileText, Phone, Users, Target, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Underwriting Agent | Intelligent Mortgage Underwriting | Confer Solutions AI",
  description:
    "Make underwriting decisions with institutional memory and apply lender-specific overlays while generating defensible documentation.",
}

export default function UnderwritingAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Underwriting Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Make underwriting decisions with institutional memory and apply lender-specific overlays while
                generating defensible documentation for every decision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  View Decision Matrix
                </ConsultationButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Underwriting Agent Decision Engine"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Function */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Underwriting Decisions & Analysis</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combine the speed of automated underwriting with the nuanced decision-making of experienced underwriters,
              backed by institutional knowledge and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Brain className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">AUS Decisioning</h3>
                <p className="text-sm text-muted-foreground">
                  Automated AUS decisioning with intelligent overlay application
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Risk Assessment</h3>
                <p className="text-sm text-muted-foreground">Comprehensive risk assessment and mitigation strategies</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Compensating Factors</h3>
                <p className="text-sm text-muted-foreground">Advanced compensating factor analysis and application</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <FileText className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Decision Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Structured decision documentation with detailed justifications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Institutional Memory Meets AI Intelligence</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Lender-Specific Overlays</h3>
                    <p className="text-muted-foreground">
                      Apply your institution's specific overlays, exceptions, and risk tolerances with the consistency
                      of your most experienced underwriters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Guideline Interpretation</h3>
                    <p className="text-muted-foreground">
                      Navigate complex guideline scenarios with nuanced interpretation based on thousands of similar
                      loan decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Defensible Documentation</h3>
                    <p className="text-muted-foreground">
                      Generate comprehensive decision documentation that stands up to investor scrutiny and regulatory
                      examination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Underwriting Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Conventional, FHA, VA, USDA loan programs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Complex income scenarios (self-employed, commission, etc.)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Asset verification and sourcing analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Credit analysis and compensating factors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Property valuation and appraisal review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Debt-to-income ratio optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Investor guideline compliance verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Voice Agent */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voice Agent Integration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Underwriting Agent leverages Voice Agent to gather additional information and coordinate complex
              underwriting scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Additional Documentation</h3>
                <p className="text-muted-foreground">
                  Voice Agent contacts borrowers for additional documentation needed for complex underwriting scenarios,
                  maintaining decision momentum.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Employment History</h3>
                <p className="text-muted-foreground">
                  Coordinate with previous employers for extended employment history verification when required for
                  complex income analysis.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Loan Officer Coordination</h3>
                <p className="text-muted-foreground">
                  Communicate with loan officers on complex scenarios, providing clear explanations and alternative
                  structuring options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Decision Intelligence</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Risk Assessment Matrix</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <span className="font-medium">Low Risk Scenarios</span>
                  <span className="text-green-600 font-bold">Auto-Approve</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <span className="font-medium">Moderate Risk</span>
                  <span className="text-yellow-600 font-bold">Conditional Approval</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <span className="font-medium">High Risk</span>
                  <span className="text-orange-600 font-bold">Manual Review</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <span className="font-medium">Unacceptable Risk</span>
                  <span className="text-red-600 font-bold">Decline</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">98.5%</div>
                  <div className="text-sm text-muted-foreground">Decision Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Faster Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Documentation Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Decision Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Underwriting Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Underwriting Agent can improve decision speed and consistency while maintaining quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Underwriting Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Download Decision Guide
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
