import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MembershipPricing({ onSelectPlan }) {
  const plans = [
    {
      id: 'half-day',
      name: 'Half Day',
      tagline: '6 hours daily',
      price: '700',
      period: '/ month',
      featured: false,
      features: [
        'Choice of morning / evening shift',
        'Personal desk allocation',
        'AC + Wi-Fi + charging',
        'Locker access',
        'Drinking water',
      ],
      buttonText: 'Reserve this plan'
    },
    {
      id: 'full-day',
      name: 'Full Day',
      tagline: '12 hours daily',
      price: '1000',
      period: '/ month',
      featured: true,
      badge: 'Recommended',
      features: [
        'Any 12-hour window, 6am–11pm',
        'Reserved fixed seat',
        'Priority support',
        'AC + Wi-Fi + charging',
        'Locker access',
        'Drinking water',
        'Weekend included',
      ],
      buttonText: 'Reserve this plan'
    }
  ];

  return (
    <section id="plans" className="py-24 bg-[#FFF8F5] text-[#201E1F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#983132]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">03 — MEMBERSHIP</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F] leading-tight">
            Simple, honest pricing.
          </h2>

          <p className="mt-4 text-lg text-[#201E1F]/70 font-normal">
            No hidden fees. No lock-ins. Renew month by month.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                plan.featured 
                  ? 'bg-[#201E1F] text-white border-2 border-[#983132] shadow-2xl' 
                  : 'bg-white text-[#201E1F] border border-[#F5E4E4] hover:shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-4 right-8 bg-[#EB6A30] text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm font-medium mb-6 ${plan.featured ? 'text-[#F5E4E4]/70' : 'text-[#201E1F]/60'}`}>
                  {plan.tagline}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl sm:text-6xl font-extrabold tracking-tight">₹{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.featured ? 'text-[#F5E4E4]/70' : 'text-[#201E1F]/60'}`}>
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.featured ? 'bg-[#EB6A30] text-white' : 'bg-[#983132] text-white'
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className={`text-sm font-medium ${plan.featured ? 'text-[#F5E4E4]/90' : 'text-[#201E1F]/80'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 group ${
                  plan.featured 
                    ? 'bg-[#EB6A30] hover:bg-[#d5571e] text-white hover:shadow-lg hover:shadow-[#EB6A30]/40' 
                    : 'bg-[#983132] hover:bg-[#7f2728] text-white hover:shadow-lg hover:shadow-[#983132]/30'
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-xs text-[#201E1F]/60 max-w-xl mx-auto flex items-center justify-center gap-2"
        >
          <ShieldCheck className="w-4 h-4 text-[#983132]" />
          <span>Need a customized corporate or group study desk allocation? Contact us for special rates.</span>
        </motion.div>

      </div>
    </section>
  );
}
