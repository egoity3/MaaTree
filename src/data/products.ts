import { Product, BagSizeOption } from '../types';
import { PRODUCT_IMAGES } from '../assets/images';

export const BAG_SIZES: BagSizeOption[] = [
  {
    id: 'size-250g',
    name: '250 gms Standard Carry Bag',
    volume: '250 gms',
    dimensions: '15 × 22 + 6 cm',
    thickness: '20 Microns (Biopolymer Film)',
    capacity: '250 gms',
    idealFor: 'Spices, confectionery, pharmacy sachets, jewelry & small takeaways',
    moq: '10 kg'
  },
  {
    id: 'size-500g',
    name: '500 gms Standard Carry Bag',
    volume: '500 gms',
    dimensions: '18 × 26 + 8 cm',
    thickness: '22 Microns (Biopolymer Film)',
    capacity: '500 gms',
    idealFor: 'Small dry groceries, bakery pastries, loose herbs & snack packs',
    moq: '10 kg'
  },
  {
    id: 'size-1kg',
    name: '1 kg Standard Carry Bag',
    volume: '1 kg',
    dimensions: '20 × 30 + 8 cm',
    thickness: '25 Microns (Biopolymer Film)',
    capacity: '1 kg',
    idealFor: 'Daily produce, dairy packs, sweet boxes, cosmetics & light retail',
    moq: '10 kg'
  },
  {
    id: 'size-2kg',
    name: '2 kg Standard Carry Bag',
    volume: '2 kg',
    dimensions: '23 × 34 + 10 cm',
    thickness: '28 Microns (Biopolymer Film)',
    capacity: '2 kg',
    idealFor: 'Convenience stores, fruit vendors, takeaway meal boxes & cafés',
    moq: '10 kg'
  },
  {
    id: 'size-5kg',
    name: '5 kg Standard Carry Bag',
    volume: '5 kg',
    dimensions: '28 × 38 + 12 cm',
    thickness: '32 Microns (Biopolymer Film)',
    capacity: '5 kg',
    idealFor: 'General grocery shopping, apparel boutiques, pharmacies & bakeries',
    moq: '10 kg'
  },
  {
    id: 'size-9kg',
    name: '9 kg Standard Carry Bag',
    volume: '9 kg',
    dimensions: '33 × 46 + 14 cm',
    thickness: '38 Microns (Biopolymer Film)',
    capacity: '9 kg',
    idealFor: 'Multi-item grocery hauls, bookshops, folded garments & heavy takeout',
    moq: '10 kg'
  },
  {
    id: 'size-14kg',
    name: '14 kg Standard Carry Bag',
    volume: '14 kg',
    dimensions: '38 × 54 + 18 cm',
    thickness: '45 Microns (Biopolymer Film)',
    capacity: '14 kg',
    idealFor: 'Supermarket checkouts, farm markets, zero-waste stores & heavy retail',
    moq: '10 kg'
  },
  {
    id: 'size-18kg',
    name: '18 kg Standard Carry Bag',
    volume: '18 kg',
    dimensions: '45 × 62 + 20 cm',
    thickness: '55 Microns (Biopolymer Film)',
    capacity: '18 kg',
    idealFor: 'Bulk grocery loads, department stores & wholesale food packaging',
    moq: '10 kg'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'compostable-carry-bag',
    name: 'Standard Carry Bags',
    tagline: 'Available in 8 standard capacities (250 gms to 18 kg) — looks, stretches, and performs like traditional plastic bags, made 100% from plants',
    status: 'available',
    statusLabel: 'In Production · Available Now',
    category: 'Standard Carry Bags',
    sector: ['retail', 'food'],
    image: PRODUCT_IMAGES.heroCarryBags,
    materials: ['Corn Starch', 'Cassava Starch', 'Certified Biodegradable PBAT'],
    compostTime: '90–180 Days in Home Compost',
    certification: 'CIPET Certified · IS/ISO 17088:2021 · CPCB Compliant',
    moq: '10 kg',
    description: 'Our first available product category: Standard Carry Bags engineered to replicate the exact look, smooth touch, flexible stretch, and load capacity of conventional plastic shopping bags across 8 sizes (250 gms, 500 gms, 1 kg, 2 kg, 5 kg, 9 kg, 14 kg, and 18 kg). 100% microplastic-free and food-contact safe.',
    specs: [
      { label: 'Available Sizes', value: '250 gms, 500 gms, 1 kg, 2 kg, 5 kg, 9 kg, 14 kg, 18 kg' },
      { label: 'Appearance', value: 'Translucent biopolymer matte film' },
      { label: 'Tensile Load Rating', value: '250 gms up to 18 kg across 8 standard sizes' },
      { label: 'Shelf Life', value: '18 months in dry store ambient conditions' },
      { label: 'Custom Inks', value: '1–4 color water & soy-based vegetable printing' },
      { label: 'Handles', value: 'Reinforced die-cut punch or vest/t-shirt handles' },
      { label: 'Food Contact', value: 'IS 9845 overall migration compliant (FSSAI)' }
    ],
    features: [
      'Full 8-size retail range: 250 gms, 500 gms, 1 kg, 2 kg, 5 kg, 9 kg, 14 kg, and 18 kg',
      'Looks and feels like conventional plastic shopping bags without the petroleum',
      'Certified home compostable with zero lingering microplastics or toxic residues',
      'Ultrasonic heat-welded leakproof bottom gusset'
    ]
  },
  {
    id: 'compostable-garbage-bags',
    name: 'Garbage Bags',
    tagline: 'Heavy-duty compostable bin liners in Green (Red, Yellow, Blue & Black on order) across Small, Large, and Extra Large sizes — available from Q3 2027',
    status: 'pipeline',
    statusLabel: 'Upcoming Release · Available Q3 2027',
    category: 'Garbage Bags',
    sector: ['retail', 'food', 'ecommerce'],
    image: PRODUCT_IMAGES.garbageBags,
    materials: ['Corn Starch Biopolymer', 'Cassava Starch', 'Natural Mineral Pigments', 'PBAT'],
    compostTime: '90–180 Days in Home & Municipal Compost',
    certification: 'CIPET Tested · IS/ISO 17088:2021 · IS 17899 T',
    moq: '10 kg',
    launchDate: 'Q3 2027',
    description: 'Our second product category: compostable Garbage Bags on perforated continuous rolls available in standard Green, with Red, Yellow, Blue, and Black available on order for color-coded waste segregation. Offered in Small, Large, and Extra Large sizes starting Q3 2027.',
    specs: [
      { label: 'Available Sizes', value: 'Small, Large, Extra Large' },
      { label: 'Standard Color', value: 'Green' },
      { label: 'Colors on Order', value: 'Red, Yellow, Blue, Black' },
      { label: 'Availability', value: 'Launching Q3 2027' },
      { label: 'Small Size', value: '43 × 48 cm · Up to 3 kg waste capacity' },
      { label: 'Large Size', value: '61 × 81 cm · Up to 6 kg waste capacity' },
      { label: 'Extra Large Size', value: '76 × 94 cm · Up to 8 kg waste capacity' },
      { label: 'Bottom Seal', value: 'Leakproof reinforced star-seal with tie string' }
    ],
    features: [
      'Available in Small (3 kg), Large (6 kg), and Extra Large (8 kg) waste capacities',
      'Standard Green film, with Red, Yellow, Blue, and Black available on order for waste segregation',
      'Perforated easy-tear roll format with strong puncture resistance for wet waste',
      '100% plant-based and plastic-free with zero lingering microplastics — launching Q3 2027'
    ]
  },
  {
    id: 'agricultural-mulching-film',
    name: 'Agricultural Mulching Film',
    tagline: 'Soil-biodegradable plant-starch mulch rolls for weed suppression and moisture retention — available from Q3 2027',
    status: 'pipeline',
    statusLabel: 'Upcoming Release · Available Q3 2027',
    category: 'Agricultural Mulching Film',
    sector: ['agriculture', 'food'],
    image: PRODUCT_IMAGES.agriculturalMulchingFilm,
    materials: ['Corn Starch Biopolymer', 'Cassava Starch', 'Soil-Biodegradable PBAT'],
    compostTime: 'Plough-in Soil Biodegradable (90–180 Days Post-Harvest)',
    certification: 'CIPET Tested · IS 17899 T:2022 · IS/ISO 17088:2021',
    moq: '10 kg',
    launchDate: 'Q3 2027',
    description: 'Engineered for Indian horticulture, vegetable farms, and orchards to replace single-use LDPE mulch sheets. Suppresses weeds, conserves irrigation moisture, and regulates soil temperature—then ploughs directly into farmland soil after harvest with zero microplastic residue.',
    specs: [
      { label: 'Availability', value: 'Launching Q3 2027' },
      { label: 'Film Thickness', value: '15 – 25 Microns UV-stabilized biopolymer' },
      { label: 'Roll Width Options', value: '90 cm, 120 cm, 150 cm (Custom drip-hole punching)' },
      { label: 'Post-Harvest Handling', value: 'Zero collection — plough directly into field soil' },
      { label: 'Soil Safety Standard', value: 'IS 17899 T:2022 & IS/ISO 17088:2021 tested' }
    ],
    features: [
      'Eliminates costly post-harvest plastic sheet removal and burning',
      'Conserves irrigation water and suppresses aggressive crop weeds',
      'Ploughs directly into soil where natural microbes mineralize the film',
      '100% microplastic-free and earthworm-safe — launching Q3 2027'
    ]
  },
  {
    id: 'compostable-shipping-mailer',
    name: 'Shipping Mailer',
    tagline: 'Flexible, waterproof e-commerce courier envelopes with dual reuse adhesive strips',
    status: 'pipeline',
    statusLabel: 'Upcoming Release · Available Q4 2027',
    category: 'E-Commerce Logistics',
    sector: ['ecommerce'],
    image: PRODUCT_IMAGES.shippingMailer,
    materials: ['Corn-derived Bio-resin', 'PBAT Flexible Elastomer'],
    compostTime: '180 Days Home Compost',
    certification: 'CIPET Tested · IS/ISO 17088:2021 · IS 17899 T',
    moq: '10 kg',
    launchDate: 'Q4 2027',
    description: 'A tough, weather-resistant flexible biopolymer mailer engineered to replace single-use plastic courier poly bags. Features a second peel-and-seal strip so customers can reuse the envelope for product returns before tossing it in home compost.',
    specs: [
      { label: 'Film Thickness', value: '60 Microns heavy-duty biopolymer' },
      { label: 'Closure', value: 'Dual tamper-evident adhesive strips' },
      { label: 'Water Barrier', value: '100% splash, rain and snow sealed' },
      { label: 'Sizes', value: 'Small (26×38cm), Medium (38×48cm), Large (45×55cm)' }
    ],
    features: [
      'Completely waterproof and tear-resistant during parcel transit',
      'Dual adhesive strip encourages zero-waste customer returns',
      'Opaque dark interior shield prevents package see-through',
      'Matte frosted exterior printable with brand logo'
    ]
  }
];
