import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Calendar, Shield, Phone, Users, Clock, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Closing Agent | Automated Closing Process Management | Confer Solutions AI",
  description:
    "Orchestrate flawless closings by coordinating all parties while ensuring every document meets investor and regulatory requirements.",
}

export default function ClosingAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Closing Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Orchestrate flawless closings by coordinating all parties while ensuring every document meets investor
                and regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  View Closing Checklist
                </ConsultationButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Closing Agent Coordination Dashboard"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Automated Closing Process Management</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your closing operations with AI that coordinates all parties, manages timelines, and ensures
              every detail is perfect for a smooth closing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <FileText className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Document Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Automated closing document preparation and comprehensive review
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Calendar className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Settlement Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless settlement coordination and intelligent scheduling
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Title & Escrow</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive title and escrow management with automated tracking
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <CheckCircle className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Final Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Final condition verification and post-closing package assembly
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect Closings, Every Time</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Timeline Management</h3>
                    <p className="text-muted-foreground">
                      Proactively manage closing timelines, identifying potential delays and coordinating solutions
                      before they impact the closing date.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Multi-Party Coordination</h3>
                    <p className="text-muted-foreground">
                      Seamlessly coordinate between borrowers, sellers, real estate agents, title companies, and
                      settlement agents for smooth closings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Compliance Assurance</h3>
                    <p className="text-muted-foreground">
                      Ensure every document meets investor and regulatory requirements with comprehensive compliance
                      verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Closing Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Closing Disclosure preparation and review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Settlement statement coordination</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Title insurance verification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Funding condition clearance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Wire transfer coordination</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Recording and delivery tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Post-closing package assembly</span>
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
              Closing Agent leverages Voice Agent to maintain constant communication with all parties throughout the
              closing process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Title Company Updates</h3>
                <p className="text-muted-foreground">
                  Voice Agent calls title companies for document updates, policy delivery status, and closing
                  preparation coordination.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Calendar className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Settlement Coordination</h3>
                <p className="text-muted-foreground">
                  Contact settlement agents to expedite closings, coordinate signing appointments, and resolve
                  last-minute issues.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Real Estate Agent Communication</h3>
                <p className="text-muted-foreground">
                  Coordinate with real estate agents on closing logistics, key delivery, and final walkthrough
                  scheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Automated Closing Timeline</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Clear to Close</h3>
              <p className="text-sm text-muted-foreground">Verify all conditions cleared</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Document Prep</h3>
              <p className="text-sm text-muted-foreground">Generate closing documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Coordination</h3>
              <p className="text-sm text-muted-foreground">Schedule and coordinate parties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Closing</h3>
              <p className="text-sm text-muted-foreground">Execute closing and funding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="font-bold mb-2">Post-Closing</h3>
              <p className="text-sm text-muted-foreground">Package and deliver to investor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Closing Performance Excellence</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">99.2%</div>
              <div className="text-muted-foreground">On-Time Closings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">60%</div>
              <div className="text-muted-foreground">Faster Closing Process</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">100%</div>
              <div className="text-muted-foreground">Document Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Coordination Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Perfect Your Closing Process?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Closing Agent can ensure flawless closings while reducing coordination overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Closing Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Download Closing Guide
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
