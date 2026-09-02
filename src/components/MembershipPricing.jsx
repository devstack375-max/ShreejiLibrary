import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MembershipPricing({ onSelectPlan }) {
  const { language, t } = useLanguage();
  const isGu = language === 'gu';

  const plans = [
    {
      id: 'half-day',
      name: isGu ? 'હાફ ડે પ્લાન' : 'Half Day Plan',
      tagline: isGu ? 'રોજના ૬-૮ કલાક' : '6–8 hours daily',
      price: '700',
      period: t('pricing.perMonth'),
      featured: false,
      features: isGu ? [
        'સવાર અથવા સાંજની શિફ્ટની પસંદગી',
        'વ્યક્તિગત ડેસ્ક ફાળવણી',
        'AC + હાઇ-સ્પીડ Wi-Fi + ચાર્જિંગ',
        'સુરક્ષિત લોકર સુવિધા',
        'શુદ્ધ RO પીવાનું પાણી',
        'રવિવાર સહિત ઉપલબ્ધ',
      ] : [
        'Choice of morning / evening shift',
        'Personal desk allocation',
        'AC + High-Speed Wi-Fi + charging',
        'Personal locker access',
        'Purified RO drinking water',
        'Weekend access included',
      ],
      buttonText: t('pricing.selectPlan')
    },
    {
      id: 'full-day',
      name: isGu ? 'ફુલ ડે પ્લાન' : 'Full Day Plan',
      tagline: isGu ? 'રોજના ૧૭ કલાક (સવારે ૬ થી રાત્રે ૧૧)' : '17 hours daily (6 AM – 11 PM)',
      price: '1000',
      period: t('pricing.perMonth'),
      featured: true,
      badge: t('pricing.popular'),
      features: isGu ? [
        'સવારે ૬:૦૦ થી રાત્રે ૧૧:૦૦ સુધી અમર્યાદિત સમય',
        '૧૦૦% કન્ફર્મ ફિક્સ રિઝર્વ્ડ સીટ',
        'પર્સનલ ડેડિકેટેડ લોકર સુવિધા',
        'AC + હાઇ-સ્પીડ Wi-Fi + સ્વિચબોર્ડ',
        'ઓપન ટેરેસ રિફ્રેશમેન્ટ લાઉન્જ એક્સેસ',
        'શુદ્ધ RO ઠંડુ પીવાનું પાણી',
        'તમામ રજાઓ અને રવિવારે પણ ચાલુ',
      ] : [
        'Full 17-hour access: 6:00 AM – 11:00 PM',
        '100% Guaranteed fixed reserved seat',
        'Personal dedicated locker facility',
        'AC + High-Speed Wi-Fi + switchboard',
        'Open terrace refreshment lounge access',
        'Purified chilled RO drinking water',
        'Open all 7 days including public holidays',
      ],
      buttonText: t('pricing.selectPlan')
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#983132]">{t('pricing.badge')}</span>
            <div className="h-[1px] w-8 bg-[#983132]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#201E1F]">
            {t('pricing.headingStart')}
            <span className="font-serif italic text-[#EB6A30]">{t('pricing.headingHighlight')}</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#201E1F]/70 font-normal">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.featured
                  ? 'bg-white border-2 border-[#EB6A30] shadow-xl md:-translate-y-2'
                  : 'bg-white border border-[#F5E4E4] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 right-8 bg-[#EB6A30] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Title & Tagline */}
                <h3 className="text-2xl font-bold text-[#201E1F]">{plan.name}</h3>
                <p className="text-xs font-semibold text-[#983132] mt-1 uppercase tracking-wider">{plan.tagline}</p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#201E1F]">₹</span>
                  <span className="text-5xl font-extrabold text-[#201E1F] tracking-tight">{plan.price}</span>
                  <span className="text-sm font-medium text-[#201E1F]/60 ml-1">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-[#201E1F]/80">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.featured ? 'bg-[#FFF0E8] text-[#EB6A30]' : 'bg-[#F5E4E4] text-[#983132]'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-4 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md ${
                    plan.featured
                      ? 'bg-[#EB6A30] hover:bg-[#d5571e] text-white shadow-[#EB6A30]/20'
                      : 'bg-[#FFF8F5] hover:bg-[#983132] text-[#983132] hover:text-white border border-[#F5E4E4]'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#201E1F]/60 flex items-center justify-center gap-2 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#983132]" />
            <span>{t('pricing.seatGuarantee')}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
