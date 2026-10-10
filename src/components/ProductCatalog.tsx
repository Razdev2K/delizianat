import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Leaf, 
  Clock, 
  Eye, 
  BellRing, 
  Check, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/products.ts';
import { ProductDetailModal } from './ProductDetailModal.tsx';

interface ProductCatalogProps {
  onOpenWaitlist: (initialProduct?: string) => void;
  currency: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenWaitlist,
  currency,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Upcoming Batch' },
    { id: 'soap', label: 'Cold-Process Soap' },
    { id: 'face-body', label: 'Face & Body Balms' },
    { id: 'hair', label: 'Hair & Scalp Bars' },
    { id: 'accessories', label: 'Home & Eco Accessories' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#F8F5EE] border-t border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (matches Screenshot 1) */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F0D5] text-[#3D5A19] text-xs font-semibold border border-[#C6DEAC]">
            <Sparkles className="w-3.5 h-3.5 text-[#557A27]" />
            <span>Debut Collection Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F2913] tracking-tight">
            Tallow Specialists - A One Stop Shop for Natural Soap & Skincare
          </h2>

          <p className="text-sm sm:text-base text-[#524E46] leading-relaxed">
            We make tallow soap, skincare, and bath essentials using regenerative grass-fed tallow as our hero ingredient. 
            All handcrafted by a multi-generational artisan without the beef-like scent.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#557A27] text-white shadow-xs'
                    : 'bg-white text-[#55524A] hover:bg-[#EFE9DC] border border-[#DDD3BF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#DED4C1] overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300"
            >
              {/* Product Visual Container (aesthetic rendering of soap bars / balms) */}
              <div className={`relative h-56 bg-gradient-to-br ${product.imageBg} p-5 flex flex-col justify-between overflow-hidden`}>
                
                {/* Decorative textures */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2C2B29_1px,transparent_1px)] [background-size:12px_12px]" />

                {/* Top Tags */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/90 text-[#3D5A19] border border-white/60">
                    {product.tag}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-200">
                    {product.status}
                  </span>
                </div>

                {/* Center Soap Mockup Graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/90 shadow-md border-2 border-white/80 p-3 flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-xs font-serif font-bold text-[#1F2913] leading-tight">
                      Delizia
                    </span>
                    <span className="text-[9px] text-[#728B36] italic font-medium">
                      naturally
                    </span>
                    <div className="mt-2 text-[8px] uppercase tracking-wider text-[#736F66] font-medium border-t border-stone-200 pt-1 w-full text-center truncate">
                      {product.heroIngredient.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Info */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#4F4B43]">
                  <span className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-[#557A27]" /> {product.curingPeriod.split(' ')[0]} {product.curingPeriod.split(' ')[1]}
                  </span>
                  <span className="font-semibold text-[#1F2913]">
                    {product.weight}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A7468]">
                    {product.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-[#1F2913] text-lg sm:text-xl group-hover:text-[#557A27] transition-colors mt-0.5 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#5C584F] line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>
                </div>

                {/* Key Ingredient Badge */}
                <div className="pt-3 border-t border-[#EDE4D3] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#736F66]">Estimated Price:</span>
                    <span className="font-bold text-[#1F2913] text-sm">
                      {product.priceEstimate}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg border border-[#D5CDBC] bg-[#FAF8F5] hover:bg-[#F2ECE0] text-xs font-semibold text-[#3D3B36] transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenWaitlist(product.name)}
                      className="inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg bg-[#557A27] hover:bg-[#43621E] text-xs font-semibold text-white shadow-2xs transition-colors cursor-pointer"
                    >
                      <BellRing className="w-3.5 h-3.5 text-amber-200" />
                      <span>Notify Me</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-[#DED4C1] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF3DF] flex items-center justify-center text-[#557A27] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1F2913]">
                Zero Harmful Synthetics • Never Tested on Animals
              </h4>
              <p className="text-xs sm:text-sm text-[#5C584F]">
                Every single soap bar is cured in our Australian workshop using verified food-grade grass-fed tallow, virgin oils, and natural clays.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenWaitlist()}
            className="inline-flex items-center gap-2 bg-[#557A27] hover:bg-[#43621E] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shrink-0 shadow-xs transition-colors cursor-pointer"
          >
            <span>Reserve Debut Batch Allocation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onNotify={(prod) => onOpenWaitlist(prod.name)}
        currency={currency}
      />
    </section>
  );
};
