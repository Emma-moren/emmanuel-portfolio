"use client";

import { useEffect, useRef } from "react";

export function Hire() {
  const innerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const inner = innerRef.current;
    if (inner) {
      const updateSize = () => {
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
        
        const width = isMobile ? '80px' : isTablet ? '90px' : '100px';
        const height = isMobile ? '120px' : isTablet ? '135px' : '150px';
        
        inner.style.setProperty('--w', width);
        inner.style.setProperty('--h', height);
        inner.style.setProperty('--translateZ', 'calc((var(--w) + var(--h)) + 0px)');
        inner.style.setProperty('--rotateX', '-15deg');
        inner.style.setProperty('--perspective', '1000px');
        inner.style.setProperty('--quantity', '10');
      };
      
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  // 🔥 CHANGE 1: Updated cardColors to use only #de7a0b and #000
  const cardColors = [
    '222, 122, 11',    // #de7a0b
    '0, 0, 0',         // #000
    '222, 122, 11',    // #de7a0b
    '0, 0, 0',         // #000
    '222, 122, 11',    // #de7a0b
    '0, 0, 0',         // #000
    '222, 122, 11',    // #de7a0b
    '0, 0, 0',         // #000
    '222, 122, 11',    // #de7a0b
    '0, 0, 0'          // #000
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F4EFEC] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#de7a0b] mb-8 sm:mb-12 text-center relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-[#de7a0b]">
          Hire Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* 3D Rotating Cards */}
          <div className="rotating-cards-wrapper w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative flex items-center justify-center overflow-hidden">
            <div 
              ref={innerRef}
              className="rotating-cards-inner"
              style={{
                position: 'absolute',
                width: '100px',
                height: '150px',
                top: '25%',
                left: 'calc(50% - var(--w)/2 - 2.5px)',
                zIndex: 2,
                transformStyle: 'preserve-3d',
                animation: 'rotating 20s linear infinite'
              }}
            >
              {cardColors.map((color, index) => (
                <div 
                  key={index}
                  className="rotating-card"
                  style={{
                    position: 'absolute',
                    border: `2px solid rgba(${color})`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    inset: 0,
                    transform: `rotateY(calc((360deg / var(--quantity)) * ${index})) translateZ(var(--translateZ))`,
                    '--color-card': color
                  } as React.CSSProperties}
                >
                  <div 
                    className="rotating-card-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      
                      background: `radial-gradient(circle, rgba(222, 122, 11, 0.3) 0%, rgba(222, 122, 11, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Simple Download CV Button */}
          <div className="gradient-card-wrapper w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
  <button 
    className="download-cv-button bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white font-medium py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base md:text-lg"
    onClick={() => window.open('/Emmanuel-CV.pdf', '_blank')}
  >
    Download CV
  </button>
</div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes rotating {
          from {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
          }
          to {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
          }
        }
        
        @media (max-width: 360px) {
          .rotating-cards-inner {
            transform: scale(0.8);
          }
          
          .download-cv-button {
            transform: scale(0.9);
          }
          
          .download-cv-button:hover {
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  );
}

export default Hire;