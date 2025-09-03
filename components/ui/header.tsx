"use client";
import { useState, useEffect } from "react";

// Typing animation component
function TypingText({ text, duration = 5000 }: { text: string; duration?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex >= text.length) return;
    
    const timePerChar = duration / text.length;
    
    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, timePerChar);
    
    return () => clearTimeout(timer);
  }, [currentIndex, text, duration]);
  
  return (
    <span className="relative inline-block">
      {displayText}
      <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-white/80 animate-blink"></span>
    </span>
  );
}
export function Header() {
    return(
        <header className="py-8 sm:py-12 md:py-16 w-full bg-[#F4EFEC] relative flex flex-col ">
            <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col">
                <div className="flex items-center justify-between py-6 sm:py-8 w-full">
<h1 className="text-2xl font-bold text-[#000]">
          Emma<span className="text-[#de7a0b] mr-auto">nuel</span>
          </h1>
          <div className="text-[#000] text-sm sm:text-base lg:text-lg font-medium">EN</div>
                </div>
                <div className="flex flex-col items-center justify-center w-full mb-4 text-center">
                    
                    <h2 className="text-4xl font-bold text-[#de7a0b] mb-2">Emmanuel Irimoren</h2>
                    <p className="text-[#000]/80 h-6 text-lg">
                    <TypingText text="Full Stack Software Engineer" duration={5000}/>
                    </p>
                        
                
                </div>

            </div>

        </header>
    )
}