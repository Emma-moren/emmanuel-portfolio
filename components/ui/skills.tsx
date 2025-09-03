import Image from "next/image";

export function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#646CFF",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#764ABC",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#E535AB",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#FF6C37",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#FFCA28",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#000",
    },
   {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      color: "#000",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#000",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#000",
    },
  ];
  
  const firstHalf = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalf = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F4EFEC] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="container max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#de7a0b]">
            My Skills
          </h2>
        </div>
        
        {/* Left to Right Marquee - Full Width */}
        <div className="relative w-full mb-8 overflow-hidden pt-8 pb-8">
          <div className="flex space-x-6 animate-marquee-left whitespace-nowrap">
            {[...firstHalf, ...firstHalf, ...firstHalf].map((skill, index) => (
              <div
                key={`left-${skill.name}-${index}`}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-[#F4EFEC] transition-all duration-300 hover:scale-105 flex-shrink-0 w-28 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28 outline outline-1 outline-[#de7a0b]/30 hover:outline-2 hover:outline-[#de7a0b]"
                style={{
                  boxShadow: `0 0 15px rgba(222, 122, 11, 0.2)`,
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 relative flex items-center justify-center">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} icon`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    style={{
                      filter: skill.name === "NextJS" ? "invert(1)" : "brightness(1.2)",
                    }}
                  />
                </div>
                <span className="text-[#000]/80 text-xs sm:text-sm text-center font-medium group-hover:text-[#de7a0b] transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right to Left Marquee - Full Width */}
        <div className="relative w-full mb-8 overflow-hidden pt-8 pb-8">
          <div className="flex space-x-6 animate-marquee-right whitespace-nowrap">
            {[...secondHalf, ...secondHalf, ...secondHalf].map((skill, index) => (
              <div
                key={`right-${skill.name}-${index}`}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-[#F4EFEC] transition-all duration-300 hover:scale-105 flex-shrink-0 w-28 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28 outline outline-1 outline-[#de7a0b]/30 hover:outline-2 hover:outline-[#de7a0b]"
                style={{
                  boxShadow: `0 0 20px rgba(222, 122, 11, 0.2)`,
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 relative flex items-center justify-center">
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={`${skill.name} icon`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    style={{
                      filter: skill.name === "NextJS" ? "invert(1)" : "brightness(1.2)",
                    }}
                  />
                </div>
                <span className="text-[#000]/80 text-xs sm:text-sm text-center font-medium group-hover:text-[#de7a0b] transition-colors whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}