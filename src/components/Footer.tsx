import React, { useState } from 'react';
import { 
  Leaf, 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Globe, 
  Check, 
  Sparkles,
  GitBranch,
  BookOpen
} from 'lucide-react';

interface FooterProps {
  onOpenWaitlist: (email?: string) => void;
  onOpenLegal: (tab?: string) => void;
  onOpenPseo: () => void;
  onOpenHostingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWaitlist,
  onOpenLegal,
  onOpenPseo,
  onOpenHostingGuide,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput && emailInput.includes('@')) {
      onOpenWaitlist(emailInput);
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#242A1D] text-[#E5E0D5] pt-16 pb-12 border-t border-[#38422E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid (matching Screenshots 1 & 2 footer sections) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#38422E]">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#3D5226] flex items-center justify-center text-amber-200 border border-[#557235]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-tight leading-none block">
                  Delizia
                </span>
                <span className="text-xs font-sans tracking-widest text-[#A2C76A] italic">
                  naturally
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BDB7AA] leading-relaxed">
              Small-batch grass-fed tallow skincare and traditional cold-process soaps handcrafted with ancestral Italian reverence and Australian soul.
            </p>

            <div className="space-y-1.5 text-xs text-[#BDB7AA] pt-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#A2C76A]" />
                <span>Official Domain: <strong className="text-white">delizianaturally.com</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A2C76A]" />
                <a href="mailto:contact@delizianaturally.com" className="hover:text-white transition-colors">
                  contact@delizianaturally.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A2C76A]" />
                <span>Handmade in Australia • Pasture Sourced</span>
              </div>
            </div>

            {/* Authenticity Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#344028] border border-[#485938] text-amber-200 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Official Genuine Workshop Portal</span>
            </div>
          </div>

          {/* Column 2: Important Things / Legal & Policies */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg">
              Important Things & Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#BDB7AA]">
              <li>
                <button 
                  onClick={() => onOpenLegal('authenticity')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-amber-300 font-medium cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Consumer Authenticity Advisory</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy (No Data Selling)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('shipping')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Launch Pre-Orders & Shipping Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service & Domain Usage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenLegal('sourcing')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Ethical Sourcing & Non-PUFA Standard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenHostingGuide()}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-[#A2C76A] font-medium cursor-pointer"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Free GitHub Hosting Guide (delizianaturally.com)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Programmatic SEO & Education */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg">
              Skincare Science & Guides (pSEO)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#BDB7AA]">
              <li>
                <button 
                  onClick={onOpenPseo}
                  className="hover:text-white transition-colors text-left flex items-center gap-1 text-[#A2C76A] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Explore All 5 Knowledge Guides</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPseo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tallow Soap for Eczema & Sensitive Skin
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPseo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cold Process Saponification vs Syndet Bars
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPseo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Non-PUFA Skincare & Saturated Lipids
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenPseo}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Zero-Waste Plastic-Free Bathroom Routine
                </button>
              </li>
              <li>
                <span className="text-[11px] text-[#8E8779] block pt-1">
                  International postage available upon batch release.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription (matches screenshot) */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-base sm:text-lg">
              Subscribe to Debut Announcements
            </h4>
            <p className="text-xs text-[#BDB7AA] leading-relaxed">
              Don't miss our official batch release. We'll send an opening coupon code and alert you the moment the curing racks are cleared.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#2F3726] border border-[#48563B] text-xs text-white placeholder-[#8B8576] focus:outline-none focus:ring-1 focus:ring-[#A2C76A]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#557A27] hover:bg-[#689430] text-white transition-colors cursor-pointer"
                  title="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-[#A2C76A] flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Early access reservation started!
                </div>
              )}
            </form>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#8E8779]">
              <span>Follow our craft:</span>
              <div className="flex items-center gap-2 text-white">
                <span className="hover:text-amber-200 cursor-pointer">Instagram</span>
                <span>•</span>
                <span className="hover:text-amber-200 cursor-pointer">YouTube</span>
                <span>•</span>
                <span className="hover:text-amber-200 cursor-pointer">TikTok</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E8779] text-center md:text-left">
          <div>
            <span>© 2026, <strong>delizianaturally.com</strong>. All rights reserved. Handcrafted in Australia.</span>
            <div className="mt-1 text-[11px] text-[#736E62]">
              Official Launch Portal • No Unverified Third-Party Affiliations
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button 
              onClick={() => onOpenLegal('authenticity')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Authenticity Advisory
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('shipping')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Shipping & Pre-Orders
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
