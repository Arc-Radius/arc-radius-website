import type { ElementType } from 'react';

export type Stat = {
  value: string;
  label: string;
  highlight: boolean;
};

export type Feature = {
  icon: ElementType;
  title: string;
  description: string;
  color: string;
  tech: string;
};

export type Technique = {
  name: string;
  desc: string;
  area: string;
};

export type Competitor = {
  name: string;
  resources: boolean;
  policy: boolean;
  crisis: boolean;
  highlight?: boolean;
};

export type MarketPlayer = {
  name: string;
  stage: 'Startup' | 'Nonprofit' | 'Enterprise';
  product: string;
  customer: string;
  gap: string;
  relationship?: string;
};

export type TechStackCategory = {
  category: string;
  items: string[];
};

export type Pipeline = {
  feature: string;
  flow: string;
};

export type ImpactItem = {
  icon: ElementType;
  title: string;
  gold: boolean;
  desc: string;
};

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  desc: string;
  interests: string[];
  linkedin: string;
  github: string;
};

export type Advisor = {
  initials: string;
  name: string;
  title: string;
  linkedin: string;
};
