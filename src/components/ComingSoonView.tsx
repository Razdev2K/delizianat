import React, { useState } from 'react';
import { 
  Leaf, 
  ArrowRight, 
  Check, 
  Copy, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Clock
} from 'lucide-react';
import { CountdownTimer } from './CountdownTimer.tsx';
import { PRODUCTS } from '../data/products.ts';

interface ComingSoonViewProps {
  onOpenLegal: (tab?: string) => void;
  subscriberCount: number;
  onSubscriberAdded: () => void;
}

export const ComingSoonView: React.FC<ComingSoonViewProps> = ({
  onOpenLegal,
  subscriberCount,
  onSubscriberAdded,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Take first 4 preview items
  const previewItems = PRODUCTS.slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const existing = JSON.parse(localStorage.getItem('delizia_waitlist') || '[]');
      const newEntry = {
        email: email.trim(),
        date: new Date().toISOString(),
        currency: 'USD'
      };
      localStorage.setItem('delizia_waitlist', JSON.stringify([...existing, newEntry]));
      onSubscriberAdded();
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const copyCoupon = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('DEBUT15');
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const faqs = [
    {
      q: 'When will the workshop officially open?',
      a: 'Our opening batch is curing on wooden drying racks right now. True cold-process soap takes six full weeks for the water to naturally evaporate and for the soap crystals to firm up. Rushing this would yield soft, fast-melting bars. We expect to open our virtual doors in late November.'
    },
    {
      q: 'Why the warning about unauthorized or imitation soaps?',
      a: 'We have noticed unverified sellers attempting to capitalize on interest in natural tallow soap by selling commercial melt-and-pour bars with synthetic fragrances and cheap fillers under similar names. To protect your skin, we ask that you only purchase through delizianaturally.com once our original batches are ready.'
    },
    {
      q: 'Does grass-fed tallow soap smell like beef?',
      a: 'Not at all. We gently render and filter our pasture-raised suet tallow three times with fresh spring water and sea salt until all impurities and odors are removed. The finished cured bars have a clean, pleasant, completely neutral soap aroma.'
    },
    {
      q: 'What is the DEBUT15 voucher code?',
      a: 'As a thank you for waiting while our debut batches cure, everyone who enters their email gets 15% off their first order plus a 48-hour head start before general release.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF8F5] text-[#2C2924] antialiased">
      
      {/* 1. Header: Understated, Artisan, Grounded */}
      <header className="w-full border-b border-[#E7E1D4] bg-[#FAF8F5]/90 backdrop-blur-xs px-4 py-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Logo with natural leaf emblem */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EAF0E2] flex items-center justify-center text-[#486328] border border-[#D3DEC6]">
              <Leaf className="w-4 h-4 text-[#55782C]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1E2813] leading-none">
                Delizia
              </span>
              <span className="text-xs font-sans tracking-widest text-[#668239] font-medium italic -mt-0.5">
                naturally
              </span>
            </div>
          </div>

          {/* Right badge: Domain & Currency */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0EDE4] border border-[#DDD5C5] text-[#555045]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52772B]"></span>
              <span>delizianaturally.com</span>
            </span>

            <span className="px-2 py-0.5 rounded bg-[#F0EDE4] text-[#4A453A] font-medium border border-[#DDD5C5]">
              USD ($)
            </span>
          </div>
        </div>
      </header>

      {/* 2. Main Body */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-16 space-y-10">
        
        {/* Intro Tag */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF0E2] border border-[#D1DEC3] text-[#3D5B1E] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#52772B] animate-pulse" />
            <span>Workshop Update • Debut Batch Curing on Wooden Racks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1E2813] tracking-tight leading-[1.15]">
            Handcrafted Tallow Soap & Botanicals, Coming Soon.
          </h1>

          <p className="text-sm sm:text-base text-[#575247] max-w-xl mx-auto leading-relaxed">
            We are preparing small-batch cold-process soaps, whipped face balms, and herbal scalp bars using grass-fed pasture tallow and cold-pressed botanical oils.
          </p>
        </div>

        {/* Maker's Note / Advisory */}
        <div className="bg-[#F6EFE3] border border-[#E1D3BF] rounded-2xl p-5 sm:p-7 text-[#4D4537] space-y-2.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C581F]">
            <Info className="w-4 h-4 text-[#A06422]" />
            <span>A Note Regarding Counterfeits & Early Interest</span>
          </div>
          
          <p className="text-xs sm:text-sm leading-relaxed text-[#4A4234]">
            If you came here looking for our natural tallow skincare formulations: 
            <strong> don't worry, we are launching soon with something handcrafted just for you.</strong>
          </p>
          
          <div className="bg-white/80 border border-[#DECFBB] rounded-xl p-3 text-xs sm:text-sm text-[#504535] leading-relaxed">
            Please be cautious and <strong>avoid purchasing unverified or fake soaps</strong> from copycat domains or unverified third-party sellers. Our original, lab-inspected recipes take six weeks to cure properly, and they will only ever be released directly here at <strong>delizianaturally.com</strong>.
          </div>
        </div>

        {/* Live Curing Countdown */}
        <div className="bg-white border border-[#E5DFD2] rounded-2xl p-5 sm:p-6 text-center space-y-3 shadow-2xs">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#6E685D] block">
            Time Remaining for Current 6-Week Air Cure
          </span>
          <CountdownTimer targetDate="2026-11-20T10:00:00" />
          <p className="text-[11px] text-[#7A7468]">
            Slow natural drying allows moisture to evaporate, yielding dense, long-lasting bars rich in natural glycerin.
          </p>
        </div>

        {/* Simple & Human Email Signup Box */}
        <div className="bg-white border-2 border-[#52772B]/30 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-sm">
          {!submitted ? (
            <>
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#52772B]">
                  Opening Announcement List
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#1E2813]">
                  Get Notified on Launch Day
                </h2>
                <p className="text-xs sm:text-sm text-[#615C50] max-w-md mx-auto leading-relaxed">
                  Join our subscriber list to get a direct email the day the curing racks are cleared, plus a 15% early bird discount code.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-1 space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address..."
                    required
                    className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DDD6C7] text-xs sm:text-sm text-[#2C2924] placeholder-[#8F897D] focus:outline-none focus:ring-1 focus:ring-[#52772B] focus:border-[#52772B]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#476725] hover:bg-[#3B561E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Notify Me</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#787266] pt-1">
                <span>No spam, just one opening email.</span>
                <span>•</span>
                <span>{subscriberCount} readers waiting</span>
              </div>
            </>
          ) : (
            <div className="py-2 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EAF0E2] text-[#476725] flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1E2813]">
                You're on the list.
              </h3>
              <p className="text-xs sm:text-sm text-[#5C564A]">
                We saved your email (<strong>{email}</strong>). Use your early-bird code at checkout once we launch:
              </p>

              <div className="bg-[#FAF8F5] border border-[#E0D8C8] rounded-xl p-3 inline-flex items-center gap-3">
                <span className="font-mono font-bold text-base text-[#1E2813]">DEBUT15</span>
                <button
                  onClick={copyCoupon}
                  className="bg-white border border-[#DDD6C7] px-2.5 py-1 rounded text-xs text-[#3D3A33] hover:bg-[#F2ECE1] transition-colors cursor-pointer flex items-center gap-1"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-[#476725]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* What's Coming: Clean 4-Product Preview with USD Pricing */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#E7E1D4] pb-2">
            <h3 className="font-serif font-bold text-lg text-[#1E2813]">
              What We're Making for Batch #1
            </h3>
            <span className="text-xs text-[#6B6559]">Prices in USD</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {previewItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E3DCCF] rounded-xl p-4 flex flex-col justify-between hover:border-[#CCD8BE] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="text-[#736D61] font-medium">{item.categoryLabel}</span>
                    <span className="text-[#476725] bg-[#EAF0E2] px-2 py-0.5 rounded text-[10px] font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#1E2813] mb-0.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#666053] line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F2EDE2] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#7A7468]">{item.weight}</span>
                  <span className="font-bold text-[#1E2813]">{item.priceEstimate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Principles of Our Workshop */}
        <div className="bg-[#FAF8F5] border border-[#E5DFD2] rounded-2xl p-5 sm:p-6 space-y-3">
          <h3 className="font-serif font-bold text-base text-[#1E2813]">
            Our Sourcing & Craft Principles:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#524D41]">
            <div className="p-3 bg-white rounded-xl border border-[#E5DFD2]">
              <strong className="block text-[#1E2813] font-serif text-sm mb-0.5">100% Grass-Fed Pasture Tallow</strong>
              <span>Sourced from regenerative pastures. Rich in fat-soluble vitamins without fragile seed oils.</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E5DFD2]">
              <strong className="block text-[#1E2813] font-serif text-sm mb-0.5">Full 6-Week Air Cure</strong>
              <span>We never rush water evaporation with heat, preserving natural emollient glycerin.</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E5DFD2]">
              <strong className="block text-[#1E2813] font-serif text-sm mb-0.5">Triple-Purified Neutral Aroma</strong>
              <span>Triple-filtered with mountain water and natural salt. Zero lingering beef smell.</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E5DFD2]">
              <strong className="block text-[#1E2813] font-serif text-sm mb-0.5">Zero Single-Use Plastic</strong>
              <span>Paper wraps, amber glass, metal closures, and biodegradable paper postal boxes.</span>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white border border-[#E5DFD2] rounded-2xl p-5 sm:p-6 space-y-3">
          <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E2813]">
            Questions & Answers
          </h3>

          <div className="divide-y divide-[#F0EAE0]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-2.5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#1E2813] hover:text-[#476725] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0 text-[#8C8679]" />}
                  </button>
                  {isOpen && (
                    <p className="text-xs text-[#5C5648] leading-relaxed pt-2">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </main>

      {/* 3. Footer: Simple, Clean, Non-AI */}
      <footer className="w-full border-t border-[#E7E1D4] bg-[#FAF8F5] px-4 py-6 sm:px-8 text-xs text-[#787265] mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-semibold text-[#1E2813]">
              delizianaturally.com
            </div>
            <p className="text-[11px] text-[#8C8679] mt-0.5">
              Handcrafted small-batch soap & tallow skincare • Opening soon
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-medium">
            <button 
              onClick={() => onOpenLegal('authenticity')}
              className="text-[#8C581F] hover:underline cursor-pointer"
            >
              Authenticity Notice
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#1E2813] cursor-pointer"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#1E2813] cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <a 
              href="mailto:contact@delizianaturally.com"
              className="hover:text-[#476725] transition-colors"
            >
              contact@delizianaturally.com
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
