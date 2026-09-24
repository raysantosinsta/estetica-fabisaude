"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
}

export function FAQItem({ question, answer, id }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-100 mb-4 transition-colors hover:border-[#E8DCC4]">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-button-${id}`}
          className="flex w-full justify-between items-center text-left font-semibold text-lg text-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ willChange: "transform" }}
          >
            <ChevronDown className="w-5 h-5 text-zinc-400" />
          </motion.div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            role="region"
            aria-labelledby={`faq-button-${id}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 16 },
              collapsed: { opacity: 0, height: 0, marginTop: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }} // Custom curve / FLIP-like approach
            className="overflow-hidden"
          >
            <p className="text-zinc-600 pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
