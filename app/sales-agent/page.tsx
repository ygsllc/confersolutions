import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Users, Phone, TrendingUp, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sales Agent | AI-Powered Mortgage Sales Automation | Confer Solutions AI",
  description:
    "Convert leads 24/7 with mortgage expertise that rivals top loan officers, while maintaining full regulatory compliance.",
}

export default function SalesAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Sales Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Convert leads 24/7 with mortgage expertise that rivals top loan officers, while maintaining full
                regulatory compliance across all interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  View ROI Calculator
                </ConsultationButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Sales Agent Dashboard"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Sales Automation & Lead Conversion</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your sales process with an AI agent that never sleeps, never takes a day off, and converts leads
              with the expertise of your best loan officers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Intelligent Lead Qualification</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically qualify and nurture leads based on mortgage readiness
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Automated Pre-Approval</h3>
                <p className="text-sm text-muted-foreground">
                  Streamlined pre-approval workflows with instant decision capability
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <TrendingUp className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Dynamic Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time pricing and product recommendations based on borrower profile
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">CRM Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless pipeline management with automated follow-up sequences
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Loan Officer That Never Sleeps</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">
                      Respond to leads instantly, any time of day or night, ensuring no opportunity is missed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      Every conversation maintains full TRID, RESPA, and state-specific compliance requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Consistent Performance</h3>
                    <p className="text-muted-foreground">
                      No bad days, no vacation time, no training required—consistent high-performance sales execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">300%</div>
                  <div className="text-sm text-muted-foreground">Increase in Lead Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">Higher Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integration with Voice Agent</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sales Agent works seamlessly with Voice Agent to create a complete sales ecosystem that handles both
              digital and voice interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Warm Outbound Calls</h3>
                <p className="text-muted-foreground">
                  Voice Agent makes warm calls to qualified prospects identified by Sales Agent, maintaining
                  conversation context and lead intelligence.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Appointment Scheduling</h3>
                <p className="text-muted-foreground">
                  Automatically schedule appointments with qualified borrowers, coordinating calendars and sending
                  confirmations.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Application Follow-Up</h3>
                <p className="text-muted-foreground">
                  Proactive follow-up on applications in progress, ensuring borrowers stay engaged throughout the
                  process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Sales Agent can increase your conversion rates while reducing sales costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Sales Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Calculate ROI
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
