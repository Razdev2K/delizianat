import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Sparkles,
  Droplets,
  Leaf,
  ShieldCheck
} from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  details?: string[];
  tag: string;
}

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: '1. What is Beef Tallow & Why Do We Use It?',
      tag: 'Ingredients',
      answer: `Once upon a time animal fat, tallow, was used to make all soap. Since the industrial revolution vegetable oils and synthetics were introduced into mass-market manufacturing. Tallow is the term for animal fat that has been gently rendered and cooked down to remove impurities.
      
We go the extra mile and render all our fat three to four times until it is snow-white, completely odorless, and silky smooth. Fat is a natural co-product from local regenerative farms and ethical butchers. Rendering it for natural skincare honors whole-animal stewardship and keeps precious bio-nutrients out of waste streams.
      
Better yet, we source exclusively from certified pasture farms in Victoria and New South Wales. Textures and natural colors of each batch reflect the clean seasonal grass diet of the herd.`,
      details: [
        'Triple-purified with pure spring water and sea salt until free of odor.',
        'Sourced from 100% pasture-fed, chemical-free livestock.',
        'Zero industrial solvents or bleaching chemicals.'
      ]
    },
    {
      id: 'faq-2',
      question: '2. What Are the Biological Skin Benefits of Tallow?',
      tag: 'Skin Health',
      answer: `Tallow from grass-fed ruminant animals is one of the healthiest, most bio-identical fats on earth. For skincare, pasture tallow provides an abundance of skin-repairing nutrients that synthetic lotions cannot duplicate:`,
      details: [
        'Conjugated Linoleic Acid (CLA): Powerful anti-inflammatory properties that calm eczema and dermatitis.',
        'Full spectrum of fat-soluble Vitamins: A (retinol), D3, E, and K2 in their most bioavailable forms.',
        'Bio-compatibility: Fatty acid profile (stearic & oleic acids) closely matches human sebum.',
        'Natural moisture barrier: Forms a breathable protective shield preventing trans-epidermal water loss.'
      ]
    },
    {
      id: 'faq-3',
      question: '3. What Are the Benefits of a Handmade Natural Bar Soap vs. Store-Bought Soap?',
      tag: 'Cold Process',
      answer: `Store-bought commercial bars are technically synthetic detergents (syndets). Their natural soothing glycerin is chemically stripped out to be sold in expensive cosmetics, and replaced with synthetic foaming agents (SLS, phthalates, parabens).
      
Handmade cold-process soap retains 100% of its naturally formed glycerin, which hydrates skin while cleansing. Furthermore, solid soap bars require zero single-use plastic bottles, drastically lowering your household carbon and plastic footprint.`,
      details: [
        'No synthetic foaming sulfates (SLS / SLES).',
        'Retains 100% natural healing glycerin in the bar.',
        'Completely biodegradable and safe for greywater and garden systems.'
      ]
    },
    {
      id: 'faq-4',
      question: '4. Cold Process Soap — What Exactly Is It?',
      tag: 'Craftsmanship',
      answer: `Cold process soap means mixing healthy natural fats with an alkaline solution (saponification) at low temperatures without artificial boiling. Once the batter reaches "trace", it is hand-poured into wooden molds, unmolded after 48 hours, precision cut into individual bars, and placed on curing racks for a minimum of six weeks.
      
This slow six-week cure allows excess water to naturally evaporate, creating a dense, long-lasting bar with rich, luscious foam and a mild, gentle pH. When cold-process saponification completes, 0% lye remains in the finished bar.`,
      details: [
        'Zero heat degradation of delicate botanical oils and botanicals.',
        '6-week cure produces a dense bar that never dissolves into shower mush.',
        '100% complete saponification with nourishing superfat retention.'
      ]
    },
    {
      id: 'faq-5',
      question: '5. Are Your Products Really 100% Plastic-Free?',
      tag: 'Sustainability',
      answer: `Yes, we stand firmly against single-use plastic pollution. All our solid soap bars are wrapped in raw unbleached compostable paper. Moisturizers and face balms are housed in reusable amber glass jars with recyclable aluminum metal closures.
      
Even our shipping parcels are padded with cardboard and paper tape instead of plastic bubble wrap or toxic foam peanuts.`,
      details: [
        'Zero plastic containers or plastic lining.',
        'Home-compostable paper packaging.',
        'Reusable amber glass jars with metal screw caps.'
      ]
    },
    {
      id: 'faq-6',
      question: '6. Why Do You Use Repurposed Botanical Oils and Is It Safe?',
      tag: 'Ingredients',
      answer: `In specific eco-soap lines, we rescue high-grade culinary olive and coconut oil from trusted local farm cafes that would otherwise be discarded. We filter this oil through fine cheesecloth and boil it with clean water before skimming and purifying.
      
During saponification, every single fatty acid is fully transformed into pure soap salts with 0% unreacted residual waste. The resulting soap is ultra-clean, exceptionally rich in lather, and carbon negative.`,
      details: [
        'Rigorous multi-stage purification and filtration.',
        'Complete saponification converts fats into pure cleansing salts.',
        'Helps prevent commercial cooking fats from polluting waterways.'
      ]
    },
    {
      id: 'faq-7',
      question: '7. Is Natural Handcrafted Soap Naturally Antibacterial?',
      tag: 'Hygiene',
      answer: `All real soap is inherently antimicrobial by nature. Soap molecules work through mechanical chemistry: their hydrophobic tails attach to grease, bacteria, and lipid viral membranes, while their hydrophilic heads bond with rinse water. Washing with pure soap mechanically breaks down and washes bacteria down the drain without needing synthetic antibacterial chemicals like triclosan (which breed bacterial resistance).`,
      details: [
        'Mechanically dissolves lipid bilayers of bacteria and viruses.',
        'Gentle on human micro-biome without creating antimicrobial resistance.',
        'Leaves skin squeaky clean yet deeply moisturized.'
      ]
    },
    {
      id: 'faq-8',
      question: '8. When Will Batch #1 Launch and How Do I Pre-Order?',
      tag: 'Launch & Pre-Order',
      answer: `Our debut collection is currently maturing on drying racks in our Australian workshop. Registering your email on our VIP waitlist guarantees you early bird access 48 hours before public launch, plus an automatic 15% discount code and free eco-friendly postal tracking on your order.`,
      details: [
        'Official domain: delizianaturally.com',
        'VIP early bird reservation code issued instantly.',
        'No credit card required to reserve your debut batch slot.'
      ]
    }
  ];

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF7F0] border-t border-[#E5DECD]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F0D5] text-[#3D5A19] text-xs font-semibold border border-[#C6DEAC]">
            <HelpCircle className="w-3.5 h-3.5 text-[#557A27]" />
            <span>Soapmaking Science & Sourcing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F2913] tracking-tight">
            Frequently Asked Questions (FAQ) of Delizia Naturally
          </h2>

          <p className="text-sm sm:text-base text-[#5C574E]">
            Everything you need to know about grass-fed tallow, cold-process saponification, and authentic small-batch skincare.
          </p>

          {/* Quick Search */}
          <div className="max-w-md mx-auto pt-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#8C877D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. eczema, non-plastic, beef scent)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#DDD3BF] text-xs sm:text-sm text-[#2C2B29] placeholder-[#8C877D] focus:outline-none focus:ring-2 focus:ring-[#789345]"
              />
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#DFD5C2] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                >
                  <div className="flex-1">
                    <div className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#EEF5E4] text-[#42601C] mb-1.5">
                      {faq.tag}
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#1F2913]">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-full bg-[#F5EFE3] text-[#4F4B43] shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#4A463D] leading-relaxed border-t border-[#F2ECE0] pt-4 animate-fadeIn">
                    <p className="whitespace-pre-line mb-4 text-[#3E3A32]">
                      {faq.answer}
                    </p>

                    {faq.details && (
                      <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E8DFCC] space-y-1.5 text-xs text-[#4F4B43]">
                        <strong className="block text-[#1F2913] font-semibold mb-1">Key Formulation Facts:</strong>
                        {faq.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-[#557A27] font-bold">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-[#DDD3BF] text-xs sm:text-sm text-[#736F66]">
              No questions matched your search query "{searchQuery}". Try searching for "tallow", "skin", or "soap".
            </div>
          )}
        </div>

        {/* Contact info card matching footer info in screenshot */}
        <div className="mt-12 bg-[#F1EBDD] rounded-2xl p-6 sm:p-8 border border-[#DDD3BF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-lg text-[#1F2913]">Have a Specific Custom Batch Question?</h4>
            <p className="text-xs sm:text-sm text-[#615C52]">
              Feel free to reach out directly to our artisan workshop at <span className="font-semibold text-[#1F2913]">contact@delizianaturally.com</span>
            </p>
          </div>
          <a
            href="mailto:contact@delizianaturally.com"
            className="px-5 py-2.5 rounded-xl bg-white border border-[#D5CDBC] text-xs font-semibold text-[#383734] hover:bg-[#FAF8F5] transition-colors shrink-0"
          >
            Email Workshop
          </a>
        </div>

      </div>
    </section>
  );
};
