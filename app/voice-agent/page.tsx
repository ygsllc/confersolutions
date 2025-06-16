import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Users, Zap, Brain, Target, TrendingUp, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Voice Agent | Revolutionary AI Voice Coordination | Confer Solutions AI",
  description:
    "The paradigm shift: When AI makes humans take action. Revolutionary conversational AI that directs human workflows.",
}

export default function VoiceAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Voice Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Revolutionary conversational AI for customer interactions and human coordination. The paradigm shift:
                When AI makes humans take action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  Hear Voice Samples
                </ConsultationButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Voice Agent Communication Hub"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Concept */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Paradigm Shift: When AI Makes Humans Take Action
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              For decades, humans have directed machines and software to execute tasks. Voice Agent represents a
              fundamental reversal—AI that can direct human action to achieve specific objectives. This isn't just
              automation; it's intelligent orchestration of human workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-4">Intelligent Direction</h3>
              <p className="opacity-80">
                AI that understands context, priorities, and human capabilities to direct optimal actions
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-4">Human Orchestration</h3>
              <p className="opacity-80">
                Coordinate complex workflows requiring human participation without human oversight
              </p>
            </div>
            <div className="text-center">
              <Target className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-4">Objective Achievement</h3>
              <p className="opacity-80">
                Focus on outcomes, not processes—AI determines the best path to achieve goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Function */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conversational AI for Customer Interactions & Human Coordination
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform how your organization communicates with customers and coordinates internal workflows through
              natural language conversations that drive action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Phone className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Natural Conversations</h3>
                <p className="text-sm text-muted-foreground">
                  Human-like phone conversations with advanced language understanding
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Outbound Campaigns</h3>
                <p className="text-sm text-muted-foreground">
                  Automated outbound call campaigns with intelligent follow-up sequences
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Problem Resolution</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time problem resolution with context-aware decision making
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Human Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  Direct human task coordination and multi-party conference facilitation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mortgage-Specific Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mortgage-Specific Applications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Voice Agent transforms mortgage operations by intelligently coordinating all the human touchpoints
              required in complex loan workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Appraiser Coordination</h3>
                <p className="text-muted-foreground mb-4">
                  Calls appraisers to expedite reports, clarify property details, or request rush processing.
                  Understands appraisal timelines and can negotiate delivery dates.
                </p>
                <div className="bg-fintech-50 dark:bg-fintech-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "Hi John, this is regarding the appraisal for 123 Main Street. The borrower's rate lock expires
                    Friday. Can we expedite this for Wednesday delivery?"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Title Company Management</h3>
                <p className="text-muted-foreground mb-4">
                  Coordinates with title companies for document updates and closing schedules. Tracks title work
                  progress and resolves title issues proactively.
                </p>
                <div className="bg-fintech-50 dark:bg-fintech-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "We need the title commitment by tomorrow for underwriting. Are there any outstanding requirements
                    we should address?"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Borrower Engagement</h3>
                <p className="text-muted-foreground mb-4">
                  Conducts loan interviews, collects verbal confirmations, and guides borrowers through complex
                  processes with patience and expertise.
                </p>
                <div className="bg-fintech-50 dark:bg-fintech-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "I'm calling to review your loan application. I have a few questions about your employment history
                    to ensure accuracy."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Vendor Management</h3>
                <p className="text-muted-foreground mb-4">
                  Follows up with employers, insurance companies, and other third-party vendors to ensure timely
                  completion of required verifications.
                </p>
                <div className="bg-fintech-50 dark:bg-fintech-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "This is regarding the employment verification for Sarah Johnson. Can you confirm her current salary
                    and employment status?"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformational Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformational Impact</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
              Voice Agent transforms AI from a reactive tool into a proactive coordinator, enabling autonomous systems
              to manage complex workflows that require human participation—without human oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Never miss a critical communication. Voice Agent works around the clock to coordinate time-sensitive
                mortgage workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Context Intelligence</h3>
              <p className="text-muted-foreground">
                Understands loan context, borrower situations, and vendor relationships to make intelligent coordination
                decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Outcome Focused</h3>
              <p className="text-muted-foreground">
                Focuses on achieving specific outcomes rather than following rigid scripts, adapting approach based on
                conversation dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voice Agent Performance</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">95%</div>
              <div className="text-muted-foreground">Call Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">3.2min</div>
              <div className="text-muted-foreground">Average Call Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">80%</div>
              <div className="text-muted-foreground">First Call Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Agent Integration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Voice Agent works seamlessly with all other AI agents to create a complete autonomous mortgage ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Zap className="h-10 w-10 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Sales Agent</h3>
                <p className="text-sm text-muted-foreground">Warm outbound calls to qualified prospects</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Target className="h-10 w-10 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Processing Agent</h3>
                <p className="text-sm text-muted-foreground">Borrower follow-up and document collection</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Brain className="h-10 w-10 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Underwriting Agent</h3>
                <p className="text-sm text-muted-foreground">Complex scenario coordination</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Post-Closing Agent</h3>
                <p className="text-sm text-muted-foreground">Investor and vendor communication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of AI Coordination?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Voice Agent can transform your mortgage operations through intelligent human coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Voice Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Hear Sample Calls
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
