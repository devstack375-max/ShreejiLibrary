import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target } from 'lucide-react';

export default function AspirantsFocus() {
  const exams = [
    { title: 'UPSC Civil Services', desc: 'IAS, IPS, IFS & State PSC Prelims & Mains study desks' },
    { title: 'GPSC Class 1 & 2', desc: 'State administrative competitive exam preparation' },
    { title: 'CA Final & Inter', desc: 'Silent environment for heavy accounting & tax audit revision' },
    { title: 'NEET & JEE Top Rankers', desc: 'Focused study zone for Physics, Chemistry & Biology marathons' },
    { title: 'SSC CGL & Banking', desc: 'Dedicated online mock test practice desks with fast Wi-Fi' },
    { title: 'GATE, ESE & PSUs', desc: 'Quiet atmosphere for technical engineering problem solving' }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  return (
    <section className="py-20 bg-[#FFF8F5] text-[#201E1F] border-y border-[#F5E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5E4E4] text-[#983132] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Target className="w-4 h-4 text-[#EB6A30]" />
            <span>Target Exam Aspirants</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#201E1F]">
            Built for those who take their preparation{' '}
            <span className="font-serif italic text-[#983132]">seriously.</span>
          </h2>
          <p className="mt-3 text-base text-[#201E1F]/70">
            Join hundreds of committed aspirants aiming for top ranks in national and state level examinations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {exams.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl border border-[#F5E4E4] shadow-sm flex items-start gap-4 hover:border-[#EB6A30] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#EB6A30] flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#201E1F] mb-1">{item.title}</h4>
                <p className="text-xs text-[#201E1F]/70 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
