"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsletterModal } from "@/components/newsletter-modal"
import { useState } from "react"

type Props = {
  title: string
  description: string
}

export function BlogPreviewSection({ title, description }: Props) {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  return (
    <section className="w-full py-12">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{/* You can add more content here, like a preview of your blog posts */}</CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={() => setIsNewsletterOpen(true)}>
            Get Notified
          </Button>
        </CardFooter>
      </Card>
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </section>
  )
}
