import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  Copy, 
  Gift, 
  ShieldCheck, 
  Leaf, 
  Download,
  AlertCircle
} from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialEmail?: string;
  onSubscriberAdded?: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
  initialEmail = '',
  onSubscriberAdded,
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState('');
  const [productInterest, setProductInterest] = useState(initialProduct || 'Any / All Debut Items');
  const [skinType, setSkinType] = useState('Sensitive / Eczema-prone');
  const [submitted, setSubmitted] = useState(false);
  const [vipCode, setVipCode] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
    if (initialProduct) setProductInterest(initialProduct);
  }, [initialEmail, initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    // Generate VIP code
    const generatedCode = `DELIZIA-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setVipCode(generatedCode);

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('delizia_waitlist') || '[]');
      const newEntry = {
        name: name.trim() || 'Valued Soap Lover',
        email: email.trim(),
        productInterest,
        skinType,
        vipCode: generatedCode,
        date: new Date().toISOString()
      };
      localStorage.setItem('delizia_waitlist', JSON.stringify([...existing, newEntry]));
      if (onSubscriberAdded) onSubscriberAdded();
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const copyCoupon = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('DEBUT15');
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FBF9F5] rounded-3xl max-w-lg w-full border border-[#D5CDBC] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#557A27] to-[#43621E] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-200 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Launch Reservation</span>
          </div>

          <h3 className="text-2xl font-serif font-bold tracking-tight">
            Reserve Your Debut Batch Allocation
          </h3>
          <p className="text-xs sm:text-sm text-stone-200 mt-1">
            Enjoy 15% off opening orders + guaranteed allocation from Batch #1.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-[#FAF3E5] p-3.5 rounded-xl border border-[#ECD9B8] text-xs text-[#7A5816] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9C7120] shrink-0 mt-0.5" />
                <span>
                  <strong>Official Authenticity Guarantee:</strong> By registering at <em>delizianaturally.com</em>, you ensure you will receive genuine, lab-tested natural soap formulations directly from our artisan workshop.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B665C] mb-1">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3BF] text-xs sm:text-sm text-[#2C2B29] placeholder-[#948F83] focus:outline-none focus:ring-2 focus:ring-[#789345]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B665C] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3BF] text-xs sm:text-sm text-[#2C2B29] placeholder-[#948F83] focus:outline-none focus:ring-2 focus:ring-[#789345]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6B665C] mb-1">
                    Skin Profile
                  </label>
                  <select
                    value={skinType}
                    onChange={(e) => setSkinType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD3BF] text-xs text-[#2C2B29] focus:outline-none focus:ring-2 focus:ring-[#789345]"
                  >
                    <option value="Sensitive / Eczema-prone">Sensitive / Eczema-prone</option>
                    <option value="Dry & Tight Complexion">Dry & Tight Complexion</option>
                    <option value="Reactive & Allergen-sensitive">Reactive & Hypoallergenic</option>
                    <option value="Acne-prone / Non-PUFA seeker">Acne-prone / Non-PUFA seeker</option>
                    <option value="Normal / Family Body Wash">Normal / Family Cleansing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#6B665C] mb-1">
                    Most Interested In
                  </label>
                  <select
                    value={productInterest}
                    onChange={(e) => setProductInterest(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#DDD3BF] text-xs text-[#2C2B29] focus:outline-none focus:ring-2 focus:ring-[#789345]"
                  >
                    <option value="Any / All Debut Items">All Debut Items</option>
                    <option value="Pure Heritage Tallow Bar">Pure Unscented Tallow Bar</option>
                    <option value="Lemongrass & Clay Soap">Lemongrass & Clay Bar</option>
                    <option value="Golden Whipped Tallow Balm">Whipped Face Tallow Balm</option>
                    <option value="Botanical Shampoo Bar">Tallow Shampoo Hair Bar</option>
                    <option value="Acqua Di Fiori Mist">Acqua Di Fiori Face Mist</option>
                  </select>
                </div>
              </div>

              <p className="text-[11px] text-[#736F66] leading-relaxed">
                No credit card required. We respect your privacy and will never send spam or sell your details.
              </p>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-[#557A27] hover:bg-[#43621E] text-white font-semibold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Confirm VIP Launch Registration</span>
              </button>
            </form>
          ) : (
            /* Success confirmation screen */
            <div className="text-center space-y-5 animate-fadeIn py-2">
              <div className="w-16 h-16 rounded-full bg-[#EBF3DF] text-[#557A27] border-2 border-[#D5E5C3] flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#557A27] block mb-1">
                  Registration Confirmed!
                </span>
                <h4 className="text-2xl font-serif font-bold text-[#1F2913]">
                  Welcome to Delizia Naturally
                </h4>
                <p className="text-xs sm:text-sm text-[#5C574E] mt-1 max-w-sm mx-auto">
                  Your VIP reservation has been logged. You will receive private access 48 hours before public launch.
                </p>
              </div>

              {/* VIP Card */}
              <div className="bg-[#FAF7F0] border-2 border-[#E5DECD] rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-[#E8DFCC] pb-2">
                  <span className="font-serif font-bold text-[#1F2913] text-sm">Delizia naturally VIP Pass</span>
                  <span className="text-[#557A27] font-semibold">Priority Batch #1</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#736F66] uppercase block">Launch Coupon (15% Off)</span>
                    <span className="font-mono font-bold text-lg text-[#1F2913]">DEBUT15</span>
                  </div>
                  <button
                    onClick={copyCoupon}
                    className="inline-flex items-center gap-1 bg-white border border-[#DDD3BF] hover:bg-[#FAF8F5] px-3 py-1.5 rounded-lg text-xs font-medium text-[#2C2B29] transition-colors cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-xs text-[#736F66] pt-1">
                  <span>VIP Reference ID: </span>
                  <strong className="font-mono text-[#3D5A19]">{vipCode}</strong>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 px-4 rounded-xl bg-[#557A27] hover:bg-[#43621E] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
