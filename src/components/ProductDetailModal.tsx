import React from 'react';
import { X, Sparkles, Check, Clock, ShieldCheck, Heart, Leaf } from 'lucide-react';
import { ProductItem } from '../data/products.ts';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onNotify: (product: ProductItem) => void;
  currency: string;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onNotify,
  currency,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FBF9F5] rounded-3xl max-w-2xl w-full border border-[#D5CDBC] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image gradient */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${product.imageBg} border-b border-[#DCD3C1] relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#383734] transition-colors shadow-2xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#3D5A19] text-xs font-semibold mb-3 border border-[#D5E2C4]">
            <Sparkles className="w-3.5 h-3.5 text-[#557A27]" />
            <span>{product.categoryLabel}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2913] mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-[#4E4A42] font-medium">
            {product.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-[#383734]">
            <span className="bg-white/80 px-2.5 py-1 rounded-md border border-[#D8CFBD] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#557A27]" /> {product.curingPeriod}
            </span>
            <span className="bg-white/80 px-2.5 py-1 rounded-md border border-[#D8CFBD] flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5 text-[#557A27]" /> {product.weight}
            </span>
            <span className="bg-white/80 px-2.5 py-1 rounded-md border border-[#D8CFBD] font-bold text-[#1F2913]">
              Est. {product.priceEstimate}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#383734]">
          {/* Status Alert */}
          <div className="bg-[#FAF3E5] border border-[#ECD9B8] rounded-xl p-3.5 text-xs sm:text-sm text-[#7D5B18] flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#9C7120] shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Batch Status: {product.status}</strong>
              <p className="mt-0.5 text-[#5C4516]">
                This item is currently completing its small-batch artisanal curing process at our workshop. Reserve your allocation now to be notified the exact hour it releases.
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#6D685E] mb-2">Description</h4>
            <p className="text-sm leading-relaxed text-[#45423B]">
              {product.description}
            </p>
          </div>

          {/* Hero Ingredient & Scent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-[#F5EFE3] p-3.5 rounded-xl border border-[#E5DAC6]">
              <span className="font-bold text-[#6E685C] block mb-1">Hero Active Component</span>
              <span className="font-medium text-[#1F2913] text-sm">{product.heroIngredient}</span>
            </div>
            <div className="bg-[#F5EFE3] p-3.5 rounded-xl border border-[#E5DAC6]">
              <span className="font-bold text-[#6E685C] block mb-1">Aroma Profile</span>
              <span className="font-medium text-[#1F2913] text-sm">{product.scentProfile}</span>
            </div>
          </div>

          {/* Skin Type */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#6D685E] mb-1">Recommended Skin Type</h4>
            <p className="text-xs sm:text-sm text-[#45423B] bg-white p-3 rounded-lg border border-[#E5DAC6]">
              {product.skinType}
            </p>
          </div>

          {/* Pure Ingredients */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#6D685E] mb-2">Purity Standard Ingredients</h4>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((ing, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center gap-1 bg-white border border-[#DDD3BF] px-2.5 py-1 rounded-md text-xs text-[#383734]"
                >
                  <Check className="w-3 h-3 text-[#557A27]" />
                  {ing}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F3EDE2] border-t border-[#DCD3C1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#736F66] text-center sm:text-left">
            <span>Official Domain: </span>
            <strong className="text-[#3D5A19]">delizianaturally.com</strong>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white border border-[#D5CDBC] text-xs font-semibold text-[#45423B] hover:bg-[#FAF8F3] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onNotify(product);
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#557A27] hover:bg-[#43621E] text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Notify Me on Launch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
