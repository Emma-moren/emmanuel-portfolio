import { ExternalLink } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const project = {
    title: "Cloud Express Logistics",
    description:
      "A complete logistics platform with integrated warehouse solutions, global shipment management, real-time cargo tracking, and a database developed with HTML, CSS, JavaScript, PHP, and MySQL.",
    link: "https://cloudexpressltd.com/",
    image: "/projects/cloud2.png"
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F4EFEC]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-6 sm:mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#de7a0b]">
          Explore my work
        </h2>
        
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="group overflow-hidden rounded-lg bg-[#F4EFEC] outline-1 outline-[#de7a0b] transition-all duration-300 hover:outline-2 outline-[#de7a0b]">
              <div className="aspect-[16/9] overflow-hidden relative ">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(58,92,176,0.1)]"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#000]/80  text-lg group-hover:text-[#de7a0b] transition-colors">
                    {project.title}
                  </h3>
                  <Link href={project.link} className="text-[#000]/70 hover:text-[#E91E63] transition-colors">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="sr-only">Visit {project.title}</span>
                  </Link>
                </div>
                <p className="text-[#000]/80 text-lg ">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
  
        </div>
      </div>
    </section>
  )
}