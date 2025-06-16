import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, FileText, TrendingUp, Phone, Users, AlertTriangle, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Post-Closing Agent | Automated Compliance & Quality Assurance | Confer Solutions AI",
  description:
    "Ensure every loan meets investor standards and regulatory requirements while maintaining complete audit trails for examinations.",
}

export default function PostClosingAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Post-Closing Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ensure every loan meets investor standards and regulatory requirements while maintaining complete audit
                trails for examinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  View Audit Checklist
                </ConsultationButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Post-Closing Agent Compliance Dashboard"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Post-Closing Compliance & Quality Assurance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your post-closing operations with AI that ensures every loan file meets the highest standards
              for investor delivery and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Automated Audits</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive post-closing audits with detailed compliance verification
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <FileText className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Investor Packages</h3>
                <p className="text-sm text-muted-foreground">
                  Automated investor package preparation and delivery coordination
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <AlertTriangle className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Exception Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Intelligent exception tracking and automated resolution workflows
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <TrendingUp className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Performance Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive performance analytics and compliance insights
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bulletproof Compliance, Every Loan</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Complete Audit Trails</h3>
                    <p className="text-muted-foreground">
                      Maintain comprehensive audit trails for every loan, ensuring full transparency and regulatory
                      compliance for examinations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Investor Standards</h3>
                    <p className="text-muted-foreground">
                      Verify every loan meets specific investor requirements and guidelines, reducing buyback risk and
                      ensuring smooth delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Continuous Monitoring</h3>
                    <p className="text-muted-foreground">
                      Ongoing compliance monitoring and reporting, with proactive identification of potential issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Audit Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Document completeness verification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Regulatory compliance validation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Investor guideline adherence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Quality control sampling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Exception identification and tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Performance trend analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Regulatory reporting automation</span>
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
              Post-Closing Agent coordinates with Voice Agent to resolve exceptions and maintain communication with all
              stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Investor Communication</h3>
                <p className="text-muted-foreground">
                  Voice Agent contacts investors for missing requirements, delivery confirmations, and exception
                  resolution coordination.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Vendor Follow-Up</h3>
                <p className="text-muted-foreground">
                  Follow up with vendors on outstanding conditions, missing documents, and compliance requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <AlertTriangle className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Critical Issue Escalation</h3>
                <p className="text-muted-foreground">
                  Escalate critical compliance issues to appropriate staff with detailed context and recommended
                  resolution steps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Compliance Monitoring</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Compliance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <span className="font-medium">Regulatory Compliance</span>
                  <span className="text-green-600 font-bold">99.8%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <span className="font-medium">Investor Standards</span>
                  <span className="text-blue-600 font-bold">99.5%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <span className="font-medium">Document Completeness</span>
                  <span className="text-purple-600 font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <span className="font-medium">Exception Resolution</span>
                  <span className="text-orange-600 font-bold">98.2%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Performance Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Faster Audit Process</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Reduced Buybacks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Audit Trail Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Risk Mitigation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Regulatory Risk</h3>
                <p className="text-muted-foreground mb-4">
                  Continuous monitoring ensures compliance with all federal and state regulations.
                </p>
                <div className="text-2xl font-bold text-green-600">Minimized</div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <FileText className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Buyback Risk</h3>
                <p className="text-muted-foreground mb-4">
                  Thorough investor guideline verification reduces loan buyback exposure.
                </p>
                <div className="text-2xl font-bold text-green-600">Reduced 95%</div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <AlertTriangle className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Operational Risk</h3>
                <p className="text-muted-foreground mb-4">
                  Automated processes eliminate human error and ensure consistent quality.
                </p>
                <div className="text-2xl font-bold text-green-600">Eliminated</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bulletproof Your Compliance?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Post-Closing Agent can ensure perfect compliance while reducing audit overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Compliance Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Download Audit Guide
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
