export interface ProductItem {
  id: string;
  name: string;
  category: 'soap' | 'face-body' | 'hair' | 'accessories';
  categoryLabel: string;
  subtitle: string;
  description: string;
  curingPeriod: string;
  heroIngredient: string;
  ingredients: string[];
  skinType: string;
  scentProfile: string;
  weight: string;
  priceEstimate: string;
  status: 'Curing on Racks' | 'Batch Prepared' | 'Limited Batch';
  tag: string;
  imageBg: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'pure-tallow-unscented',
    name: 'Pure Heritage Tallow Bar',
    category: 'soap',
    categoryLabel: 'Cold-Process Soap Bar',
    subtitle: 'Fragrance-free, slow air-cured for sensitive skin',
    description: 'Our foundational soap bar. Made with pasture-raised rendered beef tallow, extra virgin olive oil, and spring water. Hand-cut and cured for six weeks to retain natural moisturizing glycerin.',
    curingPeriod: '6-Week Air Cure',
    heroIngredient: 'Grass-Fed Pasture Tallow',
    ingredients: ['Rendered Pasture Tallow', 'Extra Virgin Olive Oil', 'Spring Water', 'Saponified Lye (zero remains in cured bar)'],
    skinType: 'Dry, reactive, eczema-prone, or fragrance-sensitive skin',
    scentProfile: 'Clean and completely neutral (no animal scent)',
    weight: '4.8 oz (135g)',
    priceEstimate: '$9.50 USD',
    status: 'Curing on Racks',
    tag: 'Classic',
    imageBg: 'from-[#F3ECE1] to-[#E5DACE]'
  },
  {
    id: 'lemongrass-clay-bar',
    name: 'Lemongrass & French Clay Bar',
    category: 'soap',
    categoryLabel: 'Cold-Process Soap Bar',
    subtitle: 'Clarifying green clay with gentle citrus essential oil',
    description: 'Cold-process bar enriched with French green montmorillonite clay and pure steam-distilled lemongrass. Produces a soft, dense lather that cleanses without stripping natural oils.',
    curingPeriod: '6-Week Air Cure',
    heroIngredient: 'French Green Clay & Lemongrass',
    ingredients: ['Pasture Tallow', 'Extra Virgin Olive Oil', 'Cold-Pressed Coconut Oil', 'French Green Clay', 'Steam-Distilled Lemongrass Oil'],
    skinType: 'Normal to combination skin',
    scentProfile: 'Crisp botanical lemongrass',
    weight: '4.9 oz (140g)',
    priceEstimate: '$10.00 USD',
    status: 'Curing on Racks',
    tag: 'Refreshing',
    imageBg: 'from-[#EBF3E1] to-[#D5E6C4]'
  },
  {
    id: 'honey-oatmeal-bar',
    name: 'Raw Honey & Whole Oat Bar',
    category: 'soap',
    categoryLabel: 'Cold-Process Soap Bar',
    subtitle: 'Unheated raw honey and finely ground soothing oats',
    description: 'A comforting, lightly textured bar formulated with unfiltered raw honey and finely milled oats for gentle daily cleansing on itchy or irritated skin.',
    curingPeriod: '6-Week Air Cure',
    heroIngredient: 'Raw Wild Honey & Ground Oats',
    ingredients: ['Pasture Tallow', 'Olive Oil', 'Raw Unheated Honey', 'Colloidal Ground Oats', 'Castor Oil'],
    skinType: 'Sensitive, irritated, or chapped skin',
    scentProfile: 'Mild warm honey grain',
    weight: '4.9 oz (140g)',
    priceEstimate: '$10.50 USD',
    status: 'Limited Batch',
    tag: 'Gentle',
    imageBg: 'from-[#FDF2E2] to-[#F1DFC1]'
  },
  {
    id: 'whipped-tallow-balm-vanilla',
    name: 'Whipped Pasture Tallow Balm',
    category: 'face-body',
    categoryLabel: 'Skin & Face Balm',
    subtitle: 'Lightly whipped face & body balm with golden jojoba',
    description: 'Triple-purified grass-fed tallow whipped with cold-pressed jojoba oil into a light cream. Absorbs cleanly to protect and support dry skin barriers.',
    curingPeriod: 'Small Batch Whip',
    heroIngredient: 'Grass-Fed Tallow & Jojoba Oil',
    ingredients: ['Triple-Filtered Pasture Tallow', 'Cold-Pressed Golden Jojoba Oil', 'Madagascar Vanilla Bean Infusion'],
    skinType: 'Dry, weather-stressed, or delicate face & neck skin',
    scentProfile: 'Subtle real vanilla bean',
    weight: '2.0 fl oz glass jar',
    priceEstimate: '$26.00 USD',
    status: 'Batch Prepared',
    tag: 'Moisturizer',
    imageBg: 'from-[#FAF3EB] to-[#EEDCC9]'
  },
  {
    id: 'hydrating-botanical-mist',
    name: 'Orange Blossom Hydrating Mist',
    category: 'face-body',
    categoryLabel: 'Botanical Toner',
    subtitle: 'Pure steam-distilled floral water in amber glass',
    description: 'Gentle floral hydrosol distilled from fresh blossoms. Spray before applying tallow balm to lock in hydration.',
    curingPeriod: 'Artisan Distillation',
    heroIngredient: 'Neroli Blossom Water',
    ingredients: ['Distilled Citrus Blossom Hydrosol', 'Rosa Damascena Distillate', 'Vegetable Glycerin'],
    skinType: 'All skin types',
    scentProfile: 'Fresh citrus floral',
    weight: '3.4 fl oz amber glass',
    priceEstimate: '$18.00 USD',
    status: 'Limited Batch',
    tag: 'Facial Dew',
    imageBg: 'from-[#FDF0EE] to-[#F5D8D3]'
  },
  {
    id: 'botanical-shampoo-bar',
    name: 'Rosemary & Nettle Shampoo Bar',
    category: 'hair',
    categoryLabel: 'Solid Hair Bar',
    subtitle: 'Solid scalp cleanse with zero plastic bottle waste',
    description: 'Formulated with castor oil, pastured tallow, and an infusion of wild nettle and rosemary leaf. Lathers richly and rinses clean without synthetic sulfates.',
    curingPeriod: '8-Week Cure',
    heroIngredient: 'Stinging Nettle & Rosemary',
    ingredients: ['Pasture Tallow', 'Castor Oil', 'Coconut Oil', 'Wild Nettle Leaf Extract', 'Rosemary Essential Oil'],
    skinType: 'All hair types, sensitive or dry scalps',
    scentProfile: 'Woodsy garden rosemary',
    weight: '3.9 oz (110g)',
    priceEstimate: '$11.00 USD',
    status: 'Curing on Racks',
    tag: 'Solid Bar',
    imageBg: 'from-[#EBF2EB] to-[#CFE2CE]'
  },
  {
    id: 'eco-sisal-soap-pouch',
    name: 'Natural Agave Sisal Soap Bag',
    category: 'accessories',
    categoryLabel: 'Bath Accessory',
    subtitle: 'Woven plant fiber pocket to hang and dry soap bars',
    description: 'Handwoven natural sisal pouch that gently exfoliates, produces rich suds, and allows bars to drain freely between showers.',
    curingPeriod: 'Handmade Fiber',
    heroIngredient: 'Natural Sisal Plant Fiber',
    ingredients: ['Untreated Sisal Agave Plant Fibers', 'Cotton Cord', 'Wooden Bead'],
    skinType: 'Body scrub and soap saving',
    scentProfile: 'Earthy unbleached fiber',
    weight: 'Single Pouch',
    priceEstimate: '$5.00 USD',
    status: 'Batch Prepared',
    tag: 'Accessory',
    imageBg: 'from-[#F7F4EC] to-[#E9DFCB]'
  },
  {
    id: 'organic-cotton-tote',
    name: 'Unbleached Organic Cotton Market Tote',
    category: 'accessories',
    categoryLabel: 'Reusable Bag',
    subtitle: 'Heavyweight organic canvas with screenprinted leaf',
    description: 'Sturdy everyday tote made from 100% unbleached organic canvas. Perfect for groceries, farmers markets, or carrying your essentials.',
    curingPeriod: 'Screen Printed',
    heroIngredient: 'Organic Heavy Cotton Canvas',
    ingredients: ['Certified Organic Unbleached Cotton Canvas', 'Water-Based Eco Pigments'],
    skinType: 'Daily carry',
    scentProfile: 'Natural cotton',
    weight: 'Single Market Bag',
    priceEstimate: '$16.00 USD',
    status: 'Batch Prepared',
    tag: 'Reusable',
    imageBg: 'from-[#F8F7F3] to-[#E8E6DC]'
  }
];
