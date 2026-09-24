"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ images }: { images: { id: number; src: string; alt: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scrolla exatamente a largura de um card visível
      const scrollAmount = direction === "left" ? -450 : 450;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group w-full">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .flex::-webkit-scrollbar { display: none; }
        `}</style>
        
        {images.map((img) => (
          <div key={img.id} className="min-w-[85vw] md:min-w-[450px] snap-center shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-zinc-50">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botões de Navegação com Setas */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[var(--brand-rosegold)] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-zinc-50 opacity-90 hover:opacity-100 transition-all hover:scale-110 z-10"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={() => scroll("right")}
        className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[var(--brand-rosegold)] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-zinc-50 opacity-90 hover:opacity-100 transition-all hover:scale-110 z-10"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
