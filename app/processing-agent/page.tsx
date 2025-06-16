import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Shield, Clock, Phone, Users, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Processing Agent | Automated Loan Processing | Confer Solutions AI",
  description:
    "Process loans with the precision of a senior processor while maintaining complete audit trails and regulatory compliance.",
}

export default function ProcessingAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Processing Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Process loans with the precision of a senior processor while maintaining complete audit trails and
                regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  View Processing Workflow
                </ConsultationButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Processing Agent Workflow"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Automated Loan Processing & Verification</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your processing operations with AI that handles complex loan processing tasks with the expertise
              and attention to detail of your most experienced processors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <FileText className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Document Collection</h3>
                <p className="text-sm text-muted-foreground">
                  Automated document collection and verification with intelligent follow-up
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Income Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive income, asset, and employment validation processes
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <CheckCircle className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Condition Clearing</h3>
                <p className="text-sm text-muted-foreground">
                  Automated condition clearing with intelligent exception handling
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Vendor Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless third-party vendor coordination and communication
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Senior Processor Precision, AI Speed</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">24/7 Processing</h3>
                    <p className="text-muted-foreground">
                      Never stop processing loans. Work continues around the clock, ensuring faster turn times and
                      improved borrower satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Complete Audit Trails</h3>
                    <p className="text-muted-foreground">
                      Every decision and action is documented with detailed reasoning, creating comprehensive audit
                      trails for compliance and quality assurance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Exception Handling</h3>
                    <p className="text-muted-foreground">
                      Intelligent escalation workflows ensure complex scenarios are handled appropriately while
                      maintaining processing momentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Processing Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Automated document stacking and organization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Income calculation and verification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Asset sourcing and seasoning analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Employment verification coordination</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Appraisal review and condition management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Title and insurance coordination</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Underwriting package preparation</span>
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
              Processing Agent coordinates with Voice Agent to handle all human interactions required during the loan
              processing workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Borrower Follow-Up</h3>
                <p className="text-muted-foreground">
                  Voice Agent calls borrowers for missing documents, clarifications, and status updates, maintaining
                  personal touch throughout processing.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Employer Coordination</h3>
                <p className="text-muted-foreground">
                  Automated follow-up with employers for VOE completion, ensuring timely verification without manual
                  intervention.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <FileText className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Real Estate Agent Communication</h3>
                <p className="text-muted-foreground">
                  Coordinate with real estate agents for required disclosures, contract amendments, and closing timeline
                  updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Processing Performance</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">75%</div>
              <div className="text-muted-foreground">Faster Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">99.8%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Processing Availability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">100%</div>
              <div className="text-muted-foreground">Audit Trail Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate Your Processing Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Processing Agent can transform your loan processing efficiency and accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Processing Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Download Workflow Guide
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
