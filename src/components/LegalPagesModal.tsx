import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  Lock, 
  Truck, 
  Leaf, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface LegalPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: string;
  onOpenWaitlist: () => void;
}

export const LegalPagesModal: React.FC<LegalPagesModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'authenticity',
  onOpenWaitlist,
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FBF9F5] rounded-3xl max-w-4xl w-full border border-[#D5CDBC] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:p-6 bg-[#FAF7F2] border-b border-[#E6E0D3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#EBF1E3] flex items-center justify-center text-[#4C6729] border border-[#D5E1C7]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1E2813]">
                Workshop Policies & Notices
              </h3>
              <p className="text-xs text-[#757065]">
                Official information for <strong className="text-[#3F5B1F]">delizianaturally.com</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white hover:bg-[#F2ECE1] text-[#4A463C] transition-colors border border-[#DDD6C7] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-[#E6E0D3] bg-[#F2EDE4] px-4 py-2 gap-1.5 scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setActiveTab('authenticity')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'authenticity'
                ? 'bg-[#476725] text-white shadow-xs'
                : 'bg-white/80 text-[#5C564A] hover:bg-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Authenticity Notice</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-[#476725] text-white shadow-xs'
                : 'bg-white/80 text-[#5C564A] hover:bg-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Use</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-[#476725] text-white shadow-xs'
                : 'bg-white/80 text-[#5C564A] hover:bg-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'shipping'
                ? 'bg-[#476725] text-white shadow-xs'
                : 'bg-white/80 text-[#5C564A] hover:bg-white'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Curing & Shipping</span>
          </button>

          <button
            onClick={() => setActiveTab('sourcing')}
            className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sourcing'
                ? 'bg-[#476725] text-white shadow-xs'
                : 'bg-white/80 text-[#5C564A] hover:bg-white'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>Our Sourcing Standards</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#454138] leading-relaxed">
          
          {/* TAB 1: Authenticity Advisory (Fulfilling user instructions) */}
          {activeTab === 'authenticity' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-[#FAF0E6] border-2 border-[#E8CDAD] rounded-2xl p-4 sm:p-5 text-[#7A3E1D] flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#9C5120] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#612E11]">
                    Official Consumer Advisory: Beware of Imitation & Counterfeit Products
                  </h4>
                  <p className="text-xs sm:text-sm mt-1 leading-relaxed text-[#7A3E1D]">
                    If you are searching for our handcrafted grass-fed tallow soaps and botanical skincare, please be assured: 
                    <strong> our official online home is right here at delizianaturally.com</strong>.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif font-bold text-lg text-[#1F2913]">
                  1. A Message to Our Valued Natural Skincare Community
                </h4>
                <p>
                  To all customers and supporters who love our natural soap formulas: <strong>do not worry</strong>. 
                  We are working diligently behind the scenes, and we are coming soon with something truly special for you. 
                  Our debut signature batches are currently going through their mandatory 6-week traditional air curing on our workshop racks.
                </p>

                <p className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E5DECD] font-medium text-[#2C2B29]">
                  🛡️ <strong>Important Caution:</strong> Please do not buy unverified, unauthorized, or imitation products sold through dubious third-party auction sites, unaccredited social channels, or copycat domains. Only products released directly through <span className="text-[#3D5A19] font-bold">delizianaturally.com</span> carry our authentic formulation guarantee, clean saponification standards, and pure pastured tallow credentials.
                </p>

                <h4 className="font-serif font-bold text-lg text-[#1F2913] pt-2">
                  2. Hallmarks of Genuine Original Batches
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-[#DDD3BF] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F2913]">Triple-Rendered Pasture Tallow:</strong>
                      <span>Zero foul beef odor; pure clean soap bar with creamy micro-bubbles.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#DDD3BF] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F2913]">Zero Plastic Wrapping:</strong>
                      <span>Always paper-banded in compostable unbleached wrap with botanical seals.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#DDD3BF] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F2913]">Traceable Batch Identifiers:</strong>
                      <span>Every official order includes a workshop batch stamp and cure date.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#DDD3BF] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#1F2913]">Direct Dispatch:</strong>
                      <span>Dispatched directly from our workshop to guarantee peak freshness.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => { onClose(); onOpenWaitlist(); }}
                    className="w-full py-3 px-4 rounded-xl bg-[#557A27] hover:bg-[#43621E] text-white font-semibold text-xs sm:text-sm text-center shadow-xs transition-colors cursor-pointer"
                  >
                    Join the Official Verified Waitlist (Receive 15% Launch Discount)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Terms of Service */}
          {activeTab === 'terms' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-xl text-[#1F2913]">
                Website Terms of Service & Reservation Guidelines
              </h4>
              <p className="text-xs text-[#736F66]">
                Last Revised: October 2026 • Published by the Site Operators of delizianaturally.com
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  Welcome to <strong>delizianaturally.com</strong>. By accessing this website or registering for our VIP pre-launch notifications, you agree to comply with the following operational terms and conditions.
                </p>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">1. Pre-Launch Status & Non-Binding Waitlist</h5>
                <p>
                  This website operates as an informative showcase and pre-launch reservation destination. Joining the VIP early bird waitlist does not constitute a financial transaction or binding obligation. No payment details are collected or stored during the coming-soon stage.
                </p>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">2. Product Formulations & Handmade Tolerances</h5>
                <p>
                  Because all our soap bars and balms are handcrafted using ancestral small-batch methods, minor variations in color, natural botanical marbling, and bar weight (±5%) are natural characteristics of small-batch cold-process curing.
                </p>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">3. Intellectual Property</h5>
                <p>
                  All custom recipes, brand emblems, photographic guides, and educational texts displayed on delizianaturally.com remain the exclusive property of this workshop. Unauthorized reproduction or scraping for commercial distribution is strictly prohibited.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-xl text-[#1F2913]">
                Privacy Policy & Personal Data Protection
              </h4>
              <p className="text-xs text-[#736F66]">
                Compliant with Australian Privacy Principles (APP) & Global Data Standards
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  At <strong>delizianaturally.com</strong>, we hold your personal digital privacy in the same high regard as our clean ingredient standards.
                </p>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">1. What Information We Collect</h5>
                <p>
                  During the pre-launch phase, we solely collect voluntary email addresses and optional product preferences for customers seeking VIP launch notifications.
                </p>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">2. Zero Sale of Data</h5>
                <p>
                  We will <strong>never sell, rent, or trade</strong> your email address to data brokers, ad networks, or third parties. Your information is used strictly to inform you of official batch curing milestones and opening launch dates.
                </p>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">3. Right to Unsubscribe</h5>
                <p>
                  You may unsubscribe or request permanent removal of your contact details at any time by contacting us directly at contact@delizianaturally.com or clicking the link in any notification email.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Launch Pre-Orders & Shipping */}
          {activeTab === 'shipping' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-xl text-[#1F2913]">
                Pre-Order Curing Schedule & Shipping Commitments
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  Unlike mass-market factories that spit out chemical bars in seconds, true cold-process soap requires nature’s time to achieve clinical perfection.
                </p>

                <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E5DAC6] space-y-2">
                  <strong className="block text-[#1F2913]">Our 6-Week Curing Cycle:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded-lg border border-[#DDD3BF]">
                      <span className="font-bold text-[#557A27] block">Weeks 1 - 2</span>
                      <span>Saponification completes; bar firms in controlled humidity.</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-[#DDD3BF]">
                      <span className="font-bold text-[#557A27] block">Weeks 3 - 4</span>
                      <span>Water evaporates; soap crystalline lattice densifies.</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-[#DDD3BF]">
                      <span className="font-bold text-[#557A27] block">Weeks 5 - 6</span>
                      <span>Final cure inspection; test lather & pH verification.</span>
                    </div>
                  </div>
                </div>

                <h5 className="font-bold text-[#1F2913] text-sm pt-2">Plastic-Free Dispatch Policy</h5>
                <p>
                  Upon launch, all orders are dispatched in 100% recycled paper mailers with water-activated tape. No plastic bubble wrap, synthetic packing chips, or plastic tape are ever utilized.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: Ethical Sourcing */}
          {activeTab === 'sourcing' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="font-serif font-bold text-xl text-[#1F2913]">
                Ethical Sourcing & Non-Toxic Standard
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  We adhere to a non-negotiable purity standard for every soap and skincare creation:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <span><strong>100% Pasture-Raised & Grass-Fed:</strong> Sourced only from farms practicing soil regeneration and humane livestock care.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <span><strong>Non-PUFA Philosophy:</strong> No high-PUFA industrial seed oils (canola, corn, soy, cotton) that oxidize under body heat.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <span><strong>Zero Petrochemicals or Parabens:</strong> Formulated without SLS, phenoxyethanol, phthalates, or artificial dyes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <span><strong>Cruelty Free:</strong> Tested only on human volunteers, never on animals.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#F4EFE6] border-t border-[#DFD6C3] flex items-center justify-between">
          <span className="text-xs text-[#736F66]">
            Official Domain: <strong>delizianaturally.com</strong>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-[#D5CDBC] text-xs font-semibold text-[#383734] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
