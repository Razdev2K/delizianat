import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Amanda M.',
      location: 'Victoria, Australia',
      product: 'Tallow Based Shampoo Bar & Face Bar',
      stars: 5,
      date: '14/06/2026',
      title: 'I love this bar! Have been using it for over a year.',
      text: 'Have been using this bar on both my hair and sensitive face. Smells wonderfully clean without synthetic perfume. My scalp psoriasis has calmed down entirely and the rich creamy lather is unmatched.',
      verified: true
    },
    {
      id: 2,
      name: 'Celia Q.',
      location: 'New South Wales, Australia',
      product: 'Hydrating Face Mist - Acqua Di Fiori',
      stars: 5,
      date: '16/07/2026',
      title: 'So refreshing and genuinely uplifting...',
      text: 'Love my Acqua di Fiori! It preps my face before applying the whipped tallow balm. My skin is truly luscious and my complexion is glowing without any breakout or congestion.',
      verified: true
    },
    {
      id: 3,
      name: 'David L.',
      location: 'Queensland, Australia',
      product: 'Pure Heritage Unscented Tallow Bar',
      stars: 5,
      date: '25/08/2026',
      title: 'Zero beef smell, 100% gentle on bad eczema.',
      text: 'I was hesitant about animal tallow soap thinking it would have an odor. Not at all! Completely odorless, super firm bar that doesn’t melt into shower mush. Has saved my hands from cracking.',
      verified: true
    },
    {
      id: 4,
      name: 'Sarah & Liam T.',
      location: 'South Australia',
      product: 'Raw Honey & Colloidal Oat Bar',
      stars: 5,
      date: '02/09/2026',
      title: 'Safe enough for our toddler’s sensitive skin.',
      text: 'We threw away all commercial baby washes full of artificial foaming agents. This honey bar leaves skin feeling moisturized immediately after towel drying. Cannot wait for the next batch!',
      verified: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F4EFE5] border-t border-b border-[#E2D8C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Screenshot 1 */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1F2913] tracking-tight">
            Trusted by Natural Skincare Lovers
          </h2>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#5C574E]">
            <span className="font-semibold text-[#1F2913]">4.98 / 5.0 Rating</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-[#465F22] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#557A27]" /> 180+ Verified Pre-Launch Testers
            </span>
          </div>
        </div>

        {/* Featured Testimonial Box (matches green card in Screenshot 1) */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-[#EBF3DF]/70 border-2 border-[#D5E5BE] rounded-3xl p-6 sm:p-10 text-center relative shadow-xs">
            <Quote className="w-10 h-10 text-[#85A947]/40 mx-auto mb-3" />
            
            <p className="text-lg sm:text-2xl font-serif italic text-[#1F2913] leading-relaxed mb-6">
              "{reviews[currentIndex].text}"
            </p>

            <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
              {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <h4 className="font-bold text-sm text-[#1F2913]">
              {reviews[currentIndex].name}
            </h4>
            <p className="text-xs text-[#5C574E] mt-0.5">
              Verified Tester for <strong className="text-[#3D5A19]">{reviews[currentIndex].product}</strong>
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-white border border-[#D5CDBC] hover:bg-[#FAF8F5] text-[#383734] transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-medium text-[#736F66]">
                {currentIndex + 1} of {reviews.length}
              </span>
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-white border border-[#D5CDBC] hover:bg-[#FAF8F5] text-[#383734] transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#DDD3BF] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#736F66]">{rev.date}</span>
                </div>

                <h4 className="font-serif font-bold text-base text-[#1F2913] mb-1.5">
                  "{rev.title}"
                </h4>
                <p className="text-xs text-[#524E46] leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EFE8DA] flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#1F2913] block">{rev.name}</span>
                  <span className="text-[10px] text-[#736F66]">{rev.location}</span>
                </div>
                <span className="text-[11px] text-[#557A27] font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
