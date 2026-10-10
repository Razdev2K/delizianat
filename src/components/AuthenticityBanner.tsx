import React from 'react';
import { ShieldCheck, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface AuthenticityBannerProps {
  onOpenWaitlist: () => void;
  onOpenLegalNotice: () => void;
}

export const AuthenticityBanner: React.FC<AuthenticityBannerProps> = ({
  onOpenWaitlist,
  onOpenLegalNotice,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4EFE6] via-[#FAF7F0] to-[#EAE3D2] border-2 border-[#D8CDB8] p-6 sm:p-8 shadow-sm">
      {/* Background organic leaf accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#85A947]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#C89B3C]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F0D5] border border-[#C5DCAB] text-[#3D5A19] text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4 text-[#557A27]" />
              <span>Official Domain Announcement & Authenticity Advisory</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2913] tracking-tight mb-2">
              Looking for our signature natural soaps? Don't worry — we are coming soon!
            </h2>

            {/* Advisory paragraph directly fulfilling user prompt */}
            <p className="text-sm sm:text-base text-[#4F4B43] leading-relaxed mb-4">
              If you came here in search of our artisan grass-fed tallow soaps, herbal shampoo bars, and botanical face balms: 
              <strong className="text-[#1F2913]"> you are in the right place at delizianaturally.com</strong>. 
              Our small-batch curing racks are currently maturing our original formulations to perfection. 
              <span className="block mt-1.5 font-medium text-[#7C2D12] bg-[#FDF2ED] px-3 py-2 rounded-lg border border-[#F6D2C3]">
                ⚠️ Consumer Advisory: Please do not purchase unverified or counterfeit imitations from unauthorized third parties. We are preparing something very special for you. Wait for our official original batch release right here to receive our authentic, lab-tested natural bars!
              </span>
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-[#383734] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0" />
                <span>100% Original Heritage Recipe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0" />
                <span>Zero Synthetic Fragrance / Non-PUFA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0" />
                <span>Direct From Master Artisan</span>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 md:min-w-[240px]">
            <button
              onClick={onOpenWaitlist}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#557A27] hover:bg-[#43621E] text-white font-semibold px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all text-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Get 15% Off Debut Batch</span>
            </button>

            <button
              onClick={onOpenLegalNotice}
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F4EB] text-[#423E37] border border-[#D5CDBC] font-medium px-4 py-2.5 rounded-xl transition-colors text-xs cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 text-[#856404]" />
              <span>Read Authenticity Notice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
