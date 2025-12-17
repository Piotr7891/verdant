import { LucideIcon } from 'lucide-react';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}