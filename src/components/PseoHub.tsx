import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Tag, 
  Share2, 
  ChevronRight, 
  ExternalLink,
  Code,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { PSEO_ARTICLES, PseoArticle } from '../data/pseoData.ts';
import { PRODUCTS } from '../data/products.ts';

interface PseoHubProps {
  onOpenWaitlist: (product?: string) => void;
  selectedArticleSlug?: string;
  onSelectArticle?: (slug: string) => void;
}

export const PseoHub: React.FC<PseoHubProps> = ({
  onOpenWaitlist,
  selectedArticleSlug,
  onSelectArticle,
}) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(selectedArticleSlug || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('National Australia');
  const [copiedUrl, setCopiedUrl] = useState(false);

  const cities = [
    'National Australia',
    'Melbourne (VIC)',
    'Sydney (NSW)',
    'Brisbane (QLD)',
    'Perth (WA)',
    'Adelaide (SA)',
    'Canberra (ACT)',
    'Byron Bay & Northern Rivers',
    'International (USA, UK, NZ, EU)'
  ];

  const currentArticle = activeSlug
    ? PSEO_ARTICLES.find((a) => a.slug === activeSlug)
    : null;

  const filteredArticles = PSEO_ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      categoryFilter === 'all' || art.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`https://delizianaturally.com/#/seo/${activeSlug}`);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    }
  };

  return (
    <section id="pseo" className="py-16 sm:py-24 bg-[#FBF9F5] border-t border-[#E5DECD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If viewing a single programmatic article */}
        {currentArticle ? (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Top Navigation Back */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveSlug(null);
                  if (onSelectArticle) onSelectArticle('');
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#557A27] hover:text-[#43621E] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All PSEO Educational Guides</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs bg-white border border-[#D5CDBC] px-3 py-1.5 rounded-lg text-[#383734] hover:bg-[#F7F4EB] transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#557A27]" />
                <span>{copiedUrl ? 'Copied Canonical URL!' : 'Share Article URL'}</span>
              </button>
            </div>

            {/* Article Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD3BF] shadow-sm space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E5F0D5] text-[#3D5A19] border border-[#C6DEAC]">
                  {currentArticle.category}
                </span>
                <span className="text-xs text-[#736F66] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#557A27]" /> {currentArticle.readingTime}
                </span>
                <span className="text-xs bg-[#FAF7F0] border border-[#E5DAC6] px-2.5 py-0.5 rounded-md text-[#524E46]">
                  Target Keyword: <strong>{currentArticle.targetKeyword}</strong>
                </span>
                {selectedCity !== 'National Australia' && (
                  <span className="text-xs bg-[#F2EDE2] text-[#4F4B43] px-2 py-0.5 rounded-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#557A27]" /> Serving {selectedCity}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-[#1F2913] leading-tight">
                {currentArticle.title}
              </h1>

              <p className="text-base sm:text-lg text-[#555047] leading-relaxed">
                {currentArticle.summary}
              </p>

              {/* SEO Meta Preview Bar (for search engines & GitHub free hosting preview) */}
              <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#E5DECD] text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-[#736F66]">
                  <Code className="w-3.5 h-3.5 text-[#557A27]" />
                  <span className="font-semibold text-[#1F2913]">PSEO Canonical Index:</span>
                  <span className="text-[#3D5A19] font-mono">https://delizianaturally.com/#/seo/{currentArticle.slug}</span>
                </div>
                <p className="text-[#635E55] italic">
                  Meta Description: "{currentArticle.metaDescription}"
                </p>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-[#F4EFE5] rounded-2xl p-6 sm:p-8 border border-[#DDD3BF] space-y-3">
              <h3 className="font-serif font-bold text-lg text-[#1F2913] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#557A27]" />
                <span>Executive Summary & Key Takeaways</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#47433B]">
                {currentArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#557A27] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body Sections */}
            <div className="space-y-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD3BF] shadow-xs">
              {currentArticle.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2913] border-b border-[#F2ECE0] pb-2">
                    {sec.heading}
                  </h2>
                  <p className="text-sm sm:text-base text-[#47433B] leading-relaxed">
                    {sec.content}
                  </p>
                  {sec.bulletPoints && (
                    <div className="bg-[#FAF7F0] p-4 rounded-xl border border-[#E5DAC6] space-y-2 text-xs sm:text-sm text-[#4A463E]">
                      {sec.bulletPoints.map((bp, bidx) => (
                        <div key={bidx} className="flex items-start gap-2">
                          <span className="text-[#557A27] font-bold">•</span>
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Regional Availability Callout */}
              <div className="bg-[#EEF5E4] p-5 rounded-2xl border border-[#D5E5C3] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-[#1F2913] text-base">
                    Local Postal Dispatch to {selectedCity}
                  </h4>
                  <p className="text-xs text-[#526B29] mt-0.5">
                    Orders from <strong className="text-[#1F2913]">delizianaturally.com</strong> ship with 100% plastic-free carbon-neutral tracking directly to your door.
                  </p>
                </div>
                <button
                  onClick={() => onOpenWaitlist()}
                  className="bg-[#557A27] hover:bg-[#43621E] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs shrink-0 cursor-pointer"
                >
                  Reserve Your Allocation
                </button>
              </div>
            </div>

            {/* In-Article FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDD3BF] space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#1F2913]">
                Frequently Asked Inquiries for this Topic
              </h3>
              <div className="space-y-3">
                {currentArticle.faq.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E5DAC6]">
                    <h4 className="font-semibold text-sm text-[#1F2913] mb-1">
                      {item.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#544F45] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Products for this PSEO topic */}
            <div className="bg-[#F8F5EE] rounded-3xl p-6 sm:p-8 border border-[#DDD3BF]">
              <h3 className="font-serif font-bold text-xl text-[#1F2913] mb-4">
                Formulations Curing for this Need
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentArticle.recommendedProducts.map((pId) => {
                  const prod = PRODUCTS.find((p) => p.id === pId);
                  if (!prod) return null;
                  return (
                    <div key={pId} className="bg-white p-4 rounded-2xl border border-[#DDD3BF] flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#736F66]">{prod.categoryLabel}</span>
                        <h4 className="font-serif font-bold text-base text-[#1F2913]">{prod.name}</h4>
                        <span className="text-xs font-semibold text-[#557A27]">{prod.priceEstimate}</span>
                      </div>
                      <button
                        onClick={() => onOpenWaitlist(prod.name)}
                        className="bg-[#557A27] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#43621E] transition-colors cursor-pointer"
                      >
                        Notify Me
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ) : (
          /* Hub Overview & Multi-Page Browser */
          <div className="space-y-10">
            
            {/* Hub Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F0D5] text-[#3D5A19] text-xs font-semibold border border-[#C6DEAC]">
                <BookOpen className="w-3.5 h-3.5 text-[#557A27]" />
                <span>Programmatic SEO (pSEO) Skincare Knowledge Hub</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F2913] tracking-tight">
                Natural Soap & Tallow Skincare Library
              </h2>

              <p className="text-sm sm:text-base text-[#5C574E]">
                Targeted educational guides designed for high-ranking search visibility and informed skincare enthusiasts. Built to work seamlessly on static GitHub hosting!
              </p>
            </div>

            {/* Filter Controls: Search + Category + Region */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#DDD3BF] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#8C877D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides by keyword, eczema, cold-process, PUFA..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DDD3BF] text-xs sm:text-sm text-[#2C2B29] placeholder-[#8C877D] focus:outline-none focus:ring-2 focus:ring-[#789345]"
                />
              </div>

              {/* City / Regional Selector */}
              <div className="flex items-center gap-2 shrink-0">
                <MapPin className="w-4 h-4 text-[#557A27] shrink-0" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="text-xs bg-[#FAF8F5] border border-[#DDD3BF] rounded-xl px-3 py-2.5 text-[#2C2B29] font-medium focus:outline-none focus:ring-1 focus:ring-[#789345]"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Article Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.slug}
                  onClick={() => {
                    setActiveSlug(article.slug);
                    if (onSelectArticle) onSelectArticle(article.slug);
                  }}
                  className="bg-white rounded-2xl p-6 border border-[#DDD3BF] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold px-2.5 py-0.5 rounded-full bg-[#E5F0D5] text-[#3D5A19] border border-[#C6DEAC]">
                        {article.category}
                      </span>
                      <span className="text-[#736F66] flex items-center gap-1 text-[11px]">
                        <Clock className="w-3 h-3 text-[#557A27]" /> {article.readingTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#1F2913] group-hover:text-[#557A27] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#59554B] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2ECE0] mt-4 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-[#736F66] truncate max-w-[180px]">
                      #{article.targetKeyword}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#557A27] group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Hosting & SEO Verification Box */}
            <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#DDD3BF] flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-base text-[#1F2913]">
                  Optimized for Free GitHub Pages Hosting & Google Crawlers
                </h4>
                <p className="text-xs text-[#5C574E] mt-0.5">
                  All pages include canonical tags, schema markup, and zero-server dependencies so you can host free on GitHub with custom domain <strong className="text-[#1F2913]">delizianaturally.com</strong>.
                </p>
              </div>

              <div className="inline-flex items-center gap-2">
                <span className="text-xs bg-white px-3 py-1.5 rounded-lg border border-[#DDD3BF] font-mono text-[#3D5A19]">
                  JSON-LD & OpenGraph Ready
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
