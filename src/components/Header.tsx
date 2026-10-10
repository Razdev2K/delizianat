import React, { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  BookOpen, 
  HelpCircle, 
  Leaf, 
  BellRing,
  Globe,
  Search,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  onOpenWaitlist: () => void;
  onOpenLegal: (tab?: string) => void;
  onOpenPseo: (slug?: string) => void;
  onOpenHostingGuide: () => void;
  activeSection: string;
  currency: string;
  onCurrencyChange: (curr: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenWaitlist,
  onOpenLegal,
  onOpenPseo,
  onOpenHostingGuide,
  currency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      {/* Top Banner (matches screenshot announcement bar style) */}
      {!announcementDismissed && (
        <div className="bg-[#85A947] text-white text-xs md:text-sm py-2 px-4 text-center font-medium relative flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-200 shrink-0" />
          <span>
            <strong>Official Domain Launch:</strong> delizianaturally.com is opening soon! Reserve your small-batch handcrafted soaps with 15% VIP discount.
          </span>
          <button 
            onClick={() => onOpenWaitlist()}
            className="underline underline-offset-2 ml-1 font-bold hover:text-amber-100 hidden sm:inline cursor-pointer"
          >
            Claim Early Access →
          </button>
          <button
            onClick={() => setAnnouncementDismissed(true)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
            title="Dismiss notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo (matches Delizia naturally signature design) */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-left group cursor-pointer"
            >
              {/* Botanical Leaf Emblem */}
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#EBF3DF] text-[#557A27] border border-[#D5E6BE] shadow-xs group-hover:scale-105 transition-transform">
                <Leaf className="w-6 h-6 text-[#6B8E23]" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#789345] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#557A27]"></span>
                </span>
              </div>

              {/* Logo Typography matching screenshots */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-serif tracking-tight text-[#1F2913] leading-none font-semibold">
                  Delizia
                </span>
                <span className="text-sm font-sans tracking-widest text-[#728B36] font-medium italic -mt-0.5">
                  naturally
                </span>
              </div>
            </button>

            {/* Official Domain Pill */}
            <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-medium text-[#4D6525] bg-[#EEF5E4] px-2.5 py-0.5 rounded-full border border-[#D5E5C3]">
              <ShieldCheck className="w-3 h-3 text-[#5F802C]" />
              delizianaturally.com
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#383734]">
            <button 
              onClick={() => scrollTo('hero')} 
              className="hover:text-[#5F802C] transition-colors py-1 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollTo('products')} 
              className="hover:text-[#5F802C] transition-colors py-1 cursor-pointer"
            >
              Artisan Soap
            </button>
            <button 
              onClick={() => scrollTo('story')} 
              className="hover:text-[#5F802C] transition-colors py-1 cursor-pointer"
            >
              Our Philosophy
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="hover:text-[#5F802C] transition-colors py-1 cursor-pointer"
            >
              FAQ
            </button>
            <button 
              onClick={() => onOpenPseo()} 
              className="hover:text-[#5F802C] transition-colors py-1 flex items-center gap-1.5 text-[#4D6525] bg-[#EEF5E4] px-2.5 py-1 rounded-md border border-[#D5E5C3] cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              PSEO Guides
            </button>
            <button 
              onClick={() => onOpenLegal('authenticity')} 
              className="hover:text-[#5F802C] transition-colors py-1 flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              Official Advisory
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Currency Selector */}
            <div className="relative hidden sm:flex items-center">
              <Globe className="w-3.5 h-3.5 text-[#6B6862] absolute left-2 pointer-events-none" />
              <select 
                value={currency} 
                onChange={(e) => onCurrencyChange(e.target.value)}
                className="text-xs bg-[#F2EDE2] border border-[#DED7C8] rounded-md pl-6 pr-2 py-1.5 text-[#3D3B36] font-medium focus:outline-none focus:ring-1 focus:ring-[#789345] cursor-pointer"
              >
                <option value="AUD">Australia (AUD $)</option>
                <option value="USD">United States (USD $)</option>
                <option value="EUR">Europe (EUR €)</option>
                <option value="GBP">United Kingdom (GBP £)</option>
                <option value="NZD">New Zealand (NZD $)</option>
              </select>
            </div>

            {/* VIP Waitlist CTA Button */}
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 bg-[#557A27] hover:bg-[#43621E] text-white text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-md shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <BellRing className="w-3.5 h-3.5 text-amber-200" />
              <span>Join Waitlist</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#3D3B36] hover:bg-[#F2EDE2] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#736F66]">Official Navigation</span>
            <span className="text-xs font-medium text-[#4D6525] bg-[#EEF5E4] px-2 py-0.5 rounded">
              delizianaturally.com
            </span>
          </div>

          <button 
            onClick={() => scrollTo('hero')} 
            className="block w-full text-left py-2 text-base font-medium text-[#2C2B29] hover:text-[#557A27]"
          >
            Home / Coming Soon
          </button>
          <button 
            onClick={() => scrollTo('products')} 
            className="block w-full text-left py-2 text-base font-medium text-[#2C2B29] hover:text-[#557A27]"
          >
            Artisan Soap Previews
          </button>
          <button 
            onClick={() => scrollTo('story')} 
            className="block w-full text-left py-2 text-base font-medium text-[#2C2B29] hover:text-[#557A27]"
          >
            Our Philosophy & Saponification
          </button>
          <button 
            onClick={() => scrollTo('faq')} 
            className="block w-full text-left py-2 text-base font-medium text-[#2C2B29] hover:text-[#557A27]"
          >
            Soap & Tallow FAQ
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenPseo(); }} 
            className="flex items-center justify-between w-full text-left py-2 text-base font-medium text-[#4D6525] bg-[#EEF5E4] px-3 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              PSEO Skincare Guides
            </span>
            <span className="text-xs bg-[#557A27] text-white px-2 py-0.5 rounded">5 Articles</span>
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLegal('authenticity'); }} 
            className="block w-full text-left py-2 text-base font-medium text-[#92400E] hover:text-[#78350F]"
          >
            Official Authenticity Notice (Beware of Copycats)
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLegal('terms'); }} 
            className="block w-full text-left py-2 text-sm text-[#5C5953] hover:text-[#2C2B29]"
          >
            Legal Terms & Privacy
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenHostingGuide(); }} 
            className="block w-full text-left py-2 text-sm text-[#465F22] hover:underline"
          >
            GitHub Free Hosting Guide (for delizianaturally.com)
          </button>

          <div className="pt-3 border-t border-[#E8E2D5] flex items-center justify-between">
            <span className="text-xs text-[#736F66]">Select Currency:</span>
            <select 
              value={currency} 
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="text-xs bg-[#F2EDE2] border border-[#DED7C8] rounded px-2 py-1"
            >
              <option value="AUD">AUD ($)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};
