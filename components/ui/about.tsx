'use client'

import { useRef, useEffect } from "react"

export function About() {
  

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F4EFEC]">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-6 sm:mb-8 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#de7a0b]">
            About me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center max-w-7xl mx-auto">
              <div className="order-2 md:order-1">
          <div className="rounded-lg overflow-hidden bg-[#3a5cb0] shadow-lg border border-[#de7a0b]/20 w-full">
          <img 
           src="/projects/pino.jpeg" 
           alt="Emmanuel Irimoren - Full Stack Software Engineer"
           className="w-full h-auto"
           />
          
          </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="space-y-4 text-[#000]/80  text-lg">
             <p>
               I am a Full Stack Software Engineer and Seasoned Business Analyst who is passionate about creating exceptional,
                user-friendly online experiences.   I create fluid, captivating digital solutions by fusing performance and design.
                  My areas of expertise include PHP, TypeScript, Next.js, Node.js, JavaScript, and React.
              </p>
              <p>
                I work best in Agile environments as a cooperative and adaptable team player who collaborates with 
                multiple teams to deliver long-lasting value.   I want to translate complex technical concepts into 
                understandable manuals and documentation that help developers, companies, and users alike in addition to writing code.
              </p>
                <p>
               I can help with everything from critical-clear content to high-performing websites for your company. 
                Every successful
               project is fueled by passion, accuracy, and purpose.  Let's get together and create something truly remarkable!
              </p>
                </div>
                
              </div>
            </div>

        </div>

    </section> 
  )}