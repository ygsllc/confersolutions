import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "MCP-Compliant Server for Parsing Loan Estimates (LE) and Closing Disclosures (CD) | Confer Solutions AI",
  description:
    "Transform Loan Estimate and Closing Disclosure PDFs into MISMO-compliant, LLM-ready JSON using an open MCP server built for the mortgage industry.",
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MCP-Compliant Server for Parsing Loan Estimates (LE) and Closing Disclosures (CD)
            </h1>
            <div className="flex items-center text-white/80 space-x-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Nov 12, 2025
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Yatin Karnik
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="MCP Server Architecture"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Transform Loan Estimate and Closing Disclosure PDFs into MISMO-compliant, LLM-ready JSON using an open MCP
              server built for the mortgage industry. Open-source, reliable, and built for banks, bots, and compliance
              tools.
            </p>

            <h2>The Challenge: Mortgage Document Processing</h2>
            <p>
              The mortgage industry processes millions of Loan Estimates (LE) and Closing Disclosures (CD) annually.
              These critical documents contain structured data that needs to be extracted, validated, and transformed
              for various downstream systems. Traditional OCR solutions often fail to maintain the semantic
              relationships and compliance requirements inherent in these documents.
            </p>

            <h2>Introducing the MCP-Compliant Server</h2>
            <p>
              Our Model Context Protocol (MCP) compliant server revolutionizes how financial institutions handle LE and
              CD documents. Built specifically for the mortgage industry, this solution transforms complex PDF documents
              into structured, MISMO-compliant JSON that's ready for Large Language Model processing.
            </p>

            <h3>Key Features:</h3>
            <ul>
              <li>
                <strong>MISMO Compliance:</strong> Ensures all extracted data adheres to industry standards
              </li>
              <li>
                <strong>LLM-Ready Output:</strong> Structured JSON optimized for AI processing
              </li>
              <li>
                <strong>Self-Healing Architecture:</strong> Continuously improves accuracy through feedback loops
              </li>
              <li>
                <strong>Open Source:</strong> Transparent, auditable, and customizable
              </li>
              <li>
                <strong>Enterprise Ready:</strong> Built for banks, credit unions, and fintech companies
              </li>
            </ul>

            <h2>Technical Architecture</h2>
            <p>
              The MCP server leverages advanced computer vision and natural language processing to understand document
              structure, extract relevant data points, and maintain contextual relationships between different sections
              of the documents.
            </p>

            <h3>Processing Pipeline:</h3>
            <ol>
              <li>
                <strong>Document Ingestion:</strong> Secure PDF upload and preprocessing
              </li>
              <li>
                <strong>Structure Recognition:</strong> AI-powered layout analysis
              </li>
              <li>
                <strong>Data Extraction:</strong> Intelligent field identification and extraction
              </li>
              <li>
                <strong>Validation:</strong> MISMO compliance checking
              </li>
              <li>
                <strong>JSON Generation:</strong> Structured output creation
              </li>
              <li>
                <strong>Quality Assurance:</strong> Automated accuracy verification
              </li>
            </ol>

            <h2>Benefits for Financial Institutions</h2>
            <p>By implementing our MCP-compliant server, financial institutions can achieve:</p>
            <ul>
              <li>95%+ accuracy in data extraction</li>
              <li>80% reduction in manual processing time</li>
              <li>100% MISMO compliance</li>
              <li>Seamless integration with existing systems</li>
              <li>Enhanced audit trails and compliance reporting</li>
            </ul>

            <h2>Getting Started</h2>
            <p>
              Ready to transform your mortgage document processing? Our team can help you implement and customize the
              MCP server for your specific needs.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="mb-4">
                Schedule a consultation to learn how our MCP-compliant server can transform your mortgage document
                processing workflow.
              </p>
              <ConsultationButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
