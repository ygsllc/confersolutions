import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Confer Solutions AI",
  description: "Insights and perspectives on AI innovation in financial services by Yatin Karnik.",
}

export default function BlogPage() {
  const allPosts = [
    {
      title: "MCP-Compliant Server for Parsing Loan Estimates (LE) and Closing Disclosures (CD)",
      excerpt:
        "Transform Loan Estimate and Closing Disclosure PDFs into MISMO-compliant, LLM-ready JSON using an open MCP server built for the mortgage industry. Open-source, reliable, and built for banks, bots, and compliance tools.",
      date: "Nov 12, 2025",
      author: "Yatin Karnik",
      slug: "mcp-compliant-server-parsing-loan-estimates-closing-disclosures",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technical Implementation",
    },
    {
      title: "Self-Healing AI in Mortgage Automation: Transforming Document Processing",
      excerpt:
        "Discover how Self-Healing AI is transforming mortgage automation by correcting OCR errors, reducing manual review, and continuously learning from feedback.",
      date: "Oct 28, 2025",
      author: "Yatin Karnik",
      slug: "self-healing-ai-mortgage-automation-transforming-document-processing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI Innovation",
    },
    {
      title: "How AI Virtual Assistants Help Small Businesses Save Time and Scale",
      excerpt:
        "See an AI agent useful case study in lending, support, and forecasting. Learn how Agentic AI is transforming operations with goal-driven intelligence.",
      date: "Oct 15, 2025",
      author: "Yatin Karnik",
      slug: "how-ai-virtual-assistants-help-small-businesses-save-time-scale",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Business Intelligence",
    },
    {
      title: "The Future of RAG Chatbots in Financial Services",
      excerpt:
        "Explore how Retrieval-Augmented Generation is revolutionizing customer service in banking and lending with context-aware, intelligent responses that understand complex financial queries.",
      date: "Sep 22, 2025",
      author: "Yatin Karnik",
      slug: "future-rag-chatbots-financial-services",
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI Innovation",
    },
    {
      title: "Risk Assessment Revolution: AI-Powered Decision Making",
      excerpt:
        "Learn how machine learning models are helping financial institutions identify and mitigate risks more effectively, reducing losses by up to 40% while improving compliance.",
      date: "Sep 8, 2025",
      author: "Yatin Karnik",
      slug: "risk-assessment-revolution-ai-powered-decision-making",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Risk Management",
    },
    {
      title: "Automating Mortgage Workflows: From Application to Closing",
      excerpt:
        "Discover how end-to-end automation is transforming the mortgage industry, reducing processing time from weeks to days while maintaining accuracy and compliance.",
      date: "Aug 25, 2025",
      author: "Yatin Karnik",
      slug: "automating-mortgage-workflows-application-to-closing",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Process Automation",
    },
  ]

  return (
    <>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">Insights & Perspectives</h1>
            <p className="text-xl text-white/90 mb-4">
              Expert analysis and thought leadership on AI innovation in financial services.
            </p>
            <p className="text-lg text-white/80">By Yatin Karnik, CEO & Founder of Confer Solutions AI</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border card-hover h-full flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-sm text-muted-foreground mb-2">
                      {post.date} • {post.author}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
