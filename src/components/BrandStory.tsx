import React from 'react';
import { 
  Heart, 
  Leaf, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Sparkles,
  Droplets,
  Recycle
} from 'lucide-react';

interface BrandStoryProps {
  onOpenWaitlist: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FBF9F5] relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#85A947]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#D8BA75]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F0D5] text-[#3D5A19] text-xs font-semibold border border-[#C6DEAC]">
            <Heart className="w-3.5 h-3.5 text-[#557A27]" />
            <span>Generational Heritage & Artisan Craft</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F2913] tracking-tight">
            The Journey From Tradition to Today... It Started With Tallow
          </h2>
          <p className="text-sm sm:text-base text-[#615C52]">
            Italian roots, Australian soul. How an ancient respect for whole-animal stewardship became pure skincare.
          </p>
        </div>

        {/* Two-column layout: Story Art + Narrative (matches Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Portrait / Workshop Craft Mockup */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#DCD3C0] bg-[#ECE5D4] shadow-lg">
              
              {/* Workshop artisan card visual */}
              <div className="h-96 sm:h-[460px] bg-gradient-to-t from-[#364426] via-[#5F7C3A]/60 to-[#E8E1CE] flex flex-col justify-end p-6 sm:p-8 text-white relative">
                
                {/* Decorative botanical leaf watermark */}
                <div className="absolute top-8 right-8 text-white/30">
                  <Leaf className="w-20 h-20" />
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-amber-200 text-xs font-medium border border-white/20">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Single Certified Regenerative Pastures, NSW & VIC</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    "G'day and Ciao!"
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                    Every batch is poured by hand, cut on wooden cradles, and cured for 6 full weeks until each bar achieves its mild, creamy lather.
                  </p>
                </div>
              </div>

              {/* Crafting badges */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#DCD3C0] grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="block font-bold text-[#1F2913] text-base font-serif">6 Weeks</span>
                  <span className="text-[10px] text-[#736F66]">Slow Air Cure</span>
                </div>
                <div>
                  <span className="block font-bold text-[#1F2913] text-base font-serif">100%</span>
                  <span className="text-[10px] text-[#736F66]">Plastic Free</span>
                </div>
                <div>
                  <span className="block font-bold text-[#1F2913] text-base font-serif">0% Synthetics</span>
                  <span className="text-[10px] text-[#736F66]">Non-PUFA</span>
                </div>
              </div>
            </div>

            {/* Australian Sourced & Owned Callout */}
            <div className="bg-[#FAF6EC] border border-[#E2D8C3] rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EBF3DF] flex items-center justify-center text-[#557A27] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <strong className="text-[#1F2913] block">Made With Australian Soul</strong>
                <span className="text-[#6B665C]">Sourced from local pasture-raised cattle to support sustainable regenerative grazing.</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Narrative (faithful to Screenshot 2 copy) */}
          <div className="lg:col-span-7 space-y-6 text-[#454138] text-sm sm:text-base leading-relaxed">
            
            <div className="border-l-4 border-[#789345] pl-4 sm:pl-6 py-1">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2913]">
                Italian Roots, Australian Soul. We are Proudly Australian.
              </h3>
              <p className="text-xs sm:text-sm text-[#736F66] mt-1">
                Multi-generational artisan tradition making pure tallow soaps, balms, and botanical care.
              </p>
            </div>

            <p>
              From the remote mountain villages of Italy, our grandmothers made soap from clean animal fats and cold-pressed olive oils. 
              Inspired by the necessity to be creative and completely self-sufficient, our process originates from an era where 
              <strong> nothing was wasted</strong> and there was an innate, reverent respect for end-to-end agriculture.
            </p>

            <p>
              Ancestral soapmakers blended generous quantities of pastured fat, cold-pressed virgin olive oil, and wood ash lye in heavy pots. 
              Families gathered to make soap collectively for the entire village, letting the bars cure gently for months on wooden shelves. 
              While modern chemistry has refined our temperatures and testing, we remain fiercely faithful to these ancient principles.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#DCD3C0] shadow-2xs">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913] mb-1">
                  <Droplets className="w-4 h-4 text-[#557A27]" />
                  <span>The Least Number of Ingredients</span>
                </div>
                <p className="text-xs text-[#635F56]">
                  We believe skin does not need to process hundreds of lab synthetics. Only raw, active, bio-identical nutrients that sink deep into your cells.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#DCD3C0] shadow-2xs">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1F2913] mb-1">
                  <Recycle className="w-4 h-4 text-[#557A27]" />
                  <span>100% Zero-Plastic Storage</span>
                </div>
                <p className="text-xs text-[#635F56]">
                  We do not store our formulas in plastic, nor do we ship in plastic wrap. Amber glass, metal lids, and raw compostable paper only.
                </p>
              </div>
            </div>

            <p>
              We use certified pasture grass-fed tallow from ethical farms. Saturated animal fat is our hero ingredient because its lipid structure mirrors human skin cells closely, nourishing without disrupting your delicate protective mantle.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenWaitlist}
                className="bg-[#557A27] hover:bg-[#43621E] text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Join Debut Batch Allocation
              </button>
              <span className="text-xs text-[#736F66]">
                Only at <strong className="text-[#1F2913]">delizianaturally.com</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
