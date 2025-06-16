export function AsSeenOnSection() {
  const mediaLogos = [
    { name: "The Reporter", logo: "/placeholder.svg?height=40&width=120" },
    { name: "MarketDaily", logo: "/placeholder.svg?height=40&width=120" },
    { name: "New York Weekly", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Forbes", logo: "/placeholder.svg?height=40&width=120" },
    { name: "National Mortgage News", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Daily Herald", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">As Seen On</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {mediaLogos.map((media, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={media.logo || "/placeholder.svg"}
                  alt={media.name}
                  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
