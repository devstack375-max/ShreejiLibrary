import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is a Reading Space vs traditional library?',
      answer: 'ShreeJi Reading Library is a modern quiet study hub. We do not lend books. Instead, we provide private wooden acoustic study cubicles, 24°C AC climate control, ergonomic chairs, power sockets, and an environment engineered specifically for serious UPSC, GPSC, CA, NEET & JEE aspirants.'
    },
    {
      question: 'Do you offer fixed reserved seats or floating seats?',
      answer: 'Full Day members receive a fixed reserved seat. You can bring your laptop, notes, and coffee and leave your full study setup intact overnight. Half Day members receive assigned shift desk allocations.'
    },
    {
      question: 'How is air conditioning and silence managed?',
      answer: 'Our high-capacity AC systems maintain a constant 24°C temperature from 6:00 AM to 11:00 PM. We enforce a strict zero-noise policy inside the reading hall. Phone calls and group discussions are strictly restricted to the break lounge.'
    },
    {
      question: 'What are the timing shifts available?',
      answer: 'We offer flexible shift options: Morning Shift (6:00 AM – 12:00 PM), Evening Shift (12:00 PM – 6:00 PM), and Full Day Pass (Any 12-hour window, 6:00 AM – 11:00 PM).'
    },
    {
      question: 'How do I pay and renew my membership?',
      answer: 'You can pay using any UPI app (GPay, PhonePe, Paytm), Credit/Debit Card, Net Banking, or Cash. Memberships renew month-by-month with zero lock-in contracts.'
    },
    {
      question: 'Can I visit for a walk-through or trial desk pass?',
      answer: 'Absolutely! You can schedule a 15-minute walk-through or request a 1-day demo pass by filling out our booking request form below or reaching out via WhatsApp.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white text-[#201E1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#983132]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">07 — FAQ</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F]">
            Questions, answered.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#201E1F]/70">
            Can't find what you're looking for? Reach us directly and we'll respond within the hour.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl border border-[#F5E4E4] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left bg-[#FFF8F5] hover:bg-[#FFF0E8] flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#201E1F] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#983132] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#EB6A30] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white border-t border-[#F5E4E4] text-sm sm:text-base text-[#201E1F]/80 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
