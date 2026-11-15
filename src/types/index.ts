export type ProductStatus = 'available' | 'pilot' | 'pipeline';

export type ProductSector = 'retail' | 'ecommerce' | 'food' | 'agriculture';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  statusLabel: string;
  category: string;
  sector: ProductSector[];
  image: string;
  materials: string[];
  compostTime: string;
  certification: string;
  moq: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  launchDate?: string;
}

export interface BagSizeOption {
  id: string;
  name: string;
  volume: string;
  dimensions: string;
  thickness: string;
  capacity: string;
  idealFor: string;
  moq: string;
}

export interface CompanyUpdate {
  id: string;
  date: string;
  quarter: string;
  title: string;
  category: 'Certification' | 'Product Launch' | 'R&D Milestone' | 'Supply Chain';
  summary: string;
  highlights: string[];
}
