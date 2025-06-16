import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json()

    // Using fetch to send email via a simple email service
    // For now, we'll simulate the email sending and log the data
    const emailData = {
      from: "yatin@confersolutions.ai",
      to: "info@confersolutions.ai",
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <h2>New AI Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
        <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
      `,
    }

    // Log the email data (in production, you'd send this via an email service)
    console.log("Consultation request received:", emailData)

    return NextResponse.json({
      success: true,
      message: "Consultation request received successfully!",
    })
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
