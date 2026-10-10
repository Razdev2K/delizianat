import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Heart, 
  Users, 
  Leaf, 
  Droplets,
  Award
} from 'lucide-react';
import { CountdownTimer } from './CountdownTimer.tsx';

interface HeroProps {
  onOpenWaitlist: (emailInitial?: string) => void;
  onExploreProducts: () => void;
  subscriberCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWaitlist,
  onExploreProducts,
  subscriberCount,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes('@')) {
      onOpenWaitlist(emailInput);
      setQuickSubmitted(true);
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Soft natural background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3E9] via-[#FAF8F3] to-[#F5EFE4] -z-10" />

      {/* Decorative botanical circle glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#85A947]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header (matches Screenshot 1) */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Status */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF3DF] border border-[#D0E2B8] text-[#3D5A19] text-xs sm:text-sm font-semibold shadow-2xs">
            <span className="flex h-2 w-2 rounded-full bg-[#557A27] animate-pulse" />
            <span>Official Launch in Progress • Small Batch #1 Maturing on Racks</span>
          </div>

          {/* Signature Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1F2913] tracking-tight leading-[1.1]">
            Natural. Responsible. Handcrafted.
          </h1>

          {/* Subheading matching the screenshots */}
          <p className="text-base sm:text-xl text-[#524E46] max-w-2xl mx-auto leading-relaxed font-normal">
            Experience authentic small-batch grass-fed tallow skincare. Handcrafted natural soaps, 
            whipped balms, and botanical facial mists crafted to deeply nourish, heal, and protect your skin.
          </p>

          {/* Countdown & Curing Tracker */}
          <div className="pt-2 pb-4">
            <CountdownTimer targetDate="2026-11-20T10:00:00" />
          </div>

          {/* Waitlist Subscription Bar */}
          <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-xs p-2 sm:p-2.5 rounded-2xl border-2 border-[#DFD6C3] shadow-md">
            {!quickSubmitted ? (
              <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email for early bird launch access..."
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-[#FAF8F5] text-sm text-[#2C2B29] placeholder-[#8A857A] border border-[#E5DECF] focus:outline-none focus:ring-2 focus:ring-[#789345] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#557A27] hover:bg-[#43621E] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-all shrink-0 cursor-pointer"
                >
                  <span>Reserve VIP Bar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2 text-[#3D5A19] font-medium text-sm">
                <Check className="w-5 h-5 text-[#557A27]" />
                <span>Opening waitlist reservation window...</span>
              </div>
            )}

            <div className="flex items-center justify-between px-3 pt-2 text-[11px] text-[#736F66]">
              <span className="flex items-center gap-1 font-medium text-[#465F22]">
                <Sparkles className="w-3 h-3" /> Includes 15% launch coupon + free cedar rest
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" /> {subscriberCount} VIPs registered
              </span>
            </div>
          </div>

          {/* Key Heritage Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs sm:text-sm font-medium text-[#4A4740]">
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1.5 rounded-lg border border-[#E8E1D2]">
              <Leaf className="w-4 h-4 text-[#557A27]" /> 100% Non-PUFA & Pure Saturated Fats
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1.5 rounded-lg border border-[#E8E1D2]">
              <Droplets className="w-4 h-4 text-[#557A27]" /> 6-Week Cold-Process Air Cured
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1.5 rounded-lg border border-[#E8E1D2]">
              <Award className="w-4 h-4 text-[#557A27]" /> Zero Beef Scent • Triple Filtered
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1.5 rounded-lg border border-[#E8E1D2]">
              <ShieldCheck className="w-4 h-4 text-[#557A27]" /> 100% Plastic-Free Packaging
            </span>
          </div>
        </div>

        {/* Hero Visual Mockup: Beautiful Handcrafted Presentation (Matches Screenshot 1 wooden board) */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-[#D8CFBD] bg-[#EFE9DC] shadow-xl">
            
            {/* Visual Header Banner */}
            <div className="h-64 sm:h-96 w-full relative bg-gradient-to-r from-[#D7CCA2] via-[#E4DCBA] to-[#C9BA8D] flex items-center justify-center p-6 text-center">
              
              {/* Artistic composition representing cured soap bars, botanical leaves, and wooden tray */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(#2C2B29_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 max-w-2xl bg-black/40 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
                <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold mb-2 block">
                  Delizia Naturally • Small-Batch Workshop
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2">
                  Handcrafted Without The Beef-Like Scent
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 max-w-lg mx-auto mb-4 font-light">
                  Made by a multi-generational artisan. Sourced from single-certified regenerative pasture livestock, 
                  enriched with cold-pressed olive oils, clays, and wild botanicals.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={onExploreProducts}
                    className="bg-white text-[#2C2B29] hover:bg-stone-100 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    View Product Showcase
                  </button>
                  <button
                    onClick={() => onOpenWaitlist()}
                    className="bg-[#557A27] hover:bg-[#43621E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Get Debut Batch Alert
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Categories Bar (matches screenshot category row: Face and Body, Soap, Hair, Home & Accessories) */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D8CFBD] bg-[#F8F5EE]">
              
              <div 
                onClick={onExploreProducts}
                className="p-4 sm:p-5 text-center group cursor-pointer hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF0E6] flex items-center justify-center mb-2 text-[#9C6D38] group-hover:scale-110 transition-transform">
                  <Droplets className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-[#1F2913] text-base group-hover:text-[#557A27]">
                  Face & Body →
                </h4>
                <p className="text-[11px] text-[#736F66]">Whipped balms & mists</p>
              </div>

              <div 
                onClick={onExploreProducts}
                className="p-4 sm:p-5 text-center group cursor-pointer hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#EAF2DE] flex items-center justify-center mb-2 text-[#557A27] group-hover:scale-110 transition-transform">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-[#1F2913] text-base group-hover:text-[#557A27]">
                  Cold-Process Soap →
                </h4>
                <p className="text-[11px] text-[#736F66]">6-week slow air cure</p>
              </div>

              <div 
                onClick={onExploreProducts}
                className="p-4 sm:p-5 text-center group cursor-pointer hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#E5ECE9] flex items-center justify-center mb-2 text-[#3D7465] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-[#1F2913] text-base group-hover:text-[#557A27]">
                  Hair & Scalp →
                </h4>
                <p className="text-[11px] text-[#736F66]">Solid shampoo bars</p>
              </div>

              <div 
                onClick={onExploreProducts}
                className="p-4 sm:p-5 text-center group cursor-pointer hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#F3EDE2] flex items-center justify-center mb-2 text-[#856D38] group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-[#1F2913] text-base group-hover:text-[#557A27]">
                  Home & Eco →
                </h4>
                <p className="text-[11px] text-[#736F66]">Sisal pouches & tote</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
