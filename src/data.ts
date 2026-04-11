import {
  Scale,
  Phone,
  PenLine,
  TextSearch,
  Sparkles,
  Navigation,
  ShieldAlert,
  MessageCircleWarning,
} from 'lucide-react';
import type {
  Stat,
  Feature,
  Technique,
  Competitor,
  MarketPlayer,
  TechStackCategory,
  Pipeline,
  ImpactItem,
  TeamMember,
  Advisor,
} from './types';

// ─── Team & Advisors ─────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: 'AQ',
    name: 'Ambro Quach',
    role: 'ML Engineer · Full-Stack',
    desc: 'CS from UCSD, former SWE at Shell Green Energy. Built the ingestion pipeline, LegalBERT classifier, SageMaker endpoint, and React Native frontend.',
    interests: ['Legal AI', 'Algorithmic Fairness', 'NLP', 'Privacy by Design'],
    linkedin: '#',
    github: '#',
  },
  // {
  //   initials: 'XX',
  //   name: 'Teammate Name',
  //   role: 'Role · Specialty',
  //   desc: 'Short bio here.',
  //   interests: ['Interest 1', 'Interest 2'],
  //   linkedin: '#',
  //   github: '#',
  // },
];

export const ADVISORS: Advisor[] = [
  {
    initials: 'JD',
    name: 'Advisor Name',
    title: 'Capstone Advisor · UC Berkeley School of Information',
    linkedin: '#',
  },
];

// ─── Stats ───────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: '39%', label: 'seriously considered suicide in the past year (46% among trans/nonbinary youth)', highlight: true },
  { value: '12%', label: 'attempted suicide in the past year', highlight: true },
  { value: '50%', label: 'unable to access desired mental health care despite 84% wanting it', highlight: false },
  {
    value: '90%',
    label: 'of LGBTQ+ young people report adverse well-being impacts linked to political developments',
    highlight: false,
  },
  { value: '600+', label: 'anti-LGBTQ+ bills introduced in state legislatures in 2025 (ACLU)', highlight: false },
  { value: '28%', label: 'of youth mental health facilities offer LGBTQ-specific services', highlight: true },
];

// ─── Features (updated) ─────────────────────────────────

export const FEATURES: Feature[] = [
  {
    icon: Scale,
    title: 'Understand',
    product: 'Policy Navigator',
    description:
      'Identify legislation that is relevant to you. LegiScan feeds a three-Lambda pipeline: bills are classified with a fine-tuned LegalBERT model on SageMaker, paired with stance signals, and written into a Neo4j graph so exploration stays tied to real text — not headlines alone.',
    color: 'from-teal-400 to-cyan-400',
    tech: 'LegiScan · LegalBERT · SageMaker · EventBridge',
  },
  {
    icon: TextSearch,
    title: 'Interpret',
    product: 'Knowledge graph',
    description:
      'Explain what bills do, why they matter, and how they are related to other legislation in plain language. Bill text is chunked, embedded with Bedrock Titan V2, and retrieved from the knowledge graph so natural-language questions pull grounded answers instead of generic summaries.',
    color: 'from-sky-400 to-indigo-400',
    tech: 'Neo4j · Vector index · GraphRAG · Bedrock Titan V2 · Chunked bill text',
  },
  {
    icon: PenLine,
    title: 'Act',
    product: 'Letter Generation',
    description:
      'Turn understanding into civic steps: draft representative emails, phone scripts, shareable info cards, and printable flyers. Outputs are conditioned on retrieved bill context, GraphRAG-style explanations, and stance classification so actions stay specific and accountable.',
    color: 'from-rose-400 to-orange-400',
    tech: 'AWS Bedrock · Retrieval · Templates',
  },
  {
    icon: Phone,
    title: 'Support',
    product: 'Crisis Connect',
    description:
      'When you need a person, not a policy brief: one-tap LGBTQ+ crisis lines (Trevor Project ages 13–24, Trans Lifeline, 988, Crisis Text Line) with explicit privacy guidance so expectations are clear before you reach out.',
    color: 'from-amber-400 to-yellow-400',
    tech: 'Curated Resource Database · Privacy-First Design · Deep Linking',
  },
];

// ─── Impact ──────────────────────────────────────────────

export const IMPACT_ITEMS: ImpactItem[] = [
  {
    icon: Sparkles,
    title: 'From noise to clarity',
    gold: true,
    desc: 'When policy news feels overwhelming, user-centered explanations help people decide what deserves attention — and what they can safely ignore — without needing a law degree.',
  },
  {
    icon: Navigation,
    title: 'Fragmentation costs trust',
    gold: false,
    desc: 'The same story is told differently in ten places. Without a single pipeline grounded in bill text, it is hard to know what is accurate, whether it applies to you, or who benefits from a given framing.',
  },
  {
    icon: ShieldAlert,
    title: 'Rights touch everyday life',
    gold: false,
    desc: 'Healthcare, schools, IDs, sports, public accommodations — anti-LGBTQ+ bills cluster in domains that determine whether young adults can learn, heal, travel, and participate fully.',
  },
  {
    icon: MessageCircleWarning,
    title: 'Informed civic action',
    gold: true,
    desc: 'Understanding should not dead-end in anxiety. Pairing interpretation with concrete actions — letters, call scripts, cards, community handouts — helps people respond instead of spiraling.',
  },
];

// ─── Techniques (updated) ────────────────────────────────

export const TECHNIQUES: Technique[] = [
  { name: 'LegalBERT Classification', desc: 'Fine-tuned relevance classifier on bill titles and short descriptions only (no metadata at this stage). Custom LegalBERTClassifier (raw CLS token), threshold 0.60, pos_weight=3.0 for class imbalance.', area: 'Policy Navigator' },
  { name: 'Stance Detection', desc: 'LogReg over 6 political context features: state R-sponsorship ratio, dominant party, percent nay, R/D/other sponsor counts.', area: 'Policy Navigator' },
  { name: 'Serverless Inference', desc: 'SageMaker serverless endpoint (3072MB, ~780ms) packages custom model + LogReg + state profiles in a single model.tar.gz.', area: 'Policy Navigator' },
  { name: 'Three-Lambda Pipeline', desc: 'EventBridge → Poll (LegiScan) → Classify (SageMaker) → Embed (Bedrock + Neo4j). Incremental saves every 100 bills.', area: 'Policy Navigator' },
  { name: 'Knowledge Graph Retrieval', desc: 'GraphRAG-style Q&A: bill text chunked at section boundaries, embedded via Titan V2 (1024-dim), Neo4j cosine vector index.', area: 'Policy Navigator' },
  { name: 'Neo4j Schema', desc: 'Bill, State, Session, Topic, Document, Chunk nodes. Relationships: IN_STATE, IN_SESSION, HAS_TOPIC, HAS_DOCUMENT, HAS_CHUNK.', area: 'Policy Navigator' },
  { name: 'Advocacy Generation', desc: 'Bedrock Claude generates letters, phone scripts, info cards, and flyers using retrieved bill context and stance classification as grounding.', area: 'Letter Generation' },
  { name: 'Topic Categorization', desc: '9 issue categories: healthcare, sports, education, curriculum, facilities, religious exemption, identity docs, expression, civil rights.', area: 'Policy Navigator' },
];

// ─── Competitors ─────────────────────────────────────────

export const COMPETITORS: Competitor[] = [
  { name: 'Trevor Project', resources: false, policy: false, crisis: true },
  { name: 'Findhelp', resources: true, policy: false, crisis: false },
  { name: 'MAP', resources: false, policy: true, crisis: false },
  { name: 'Everywhere Is Queer', resources: true, policy: false, crisis: false },
  { name: 'QLIST', resources: true, policy: false, crisis: false },
  { name: 'Voda', resources: false, policy: false, crisis: false },
  { name: 'ArcRadius', resources: true, policy: true, crisis: true, highlight: true },
];

export const STARTUPS: MarketPlayer[] = [
  { name: 'Everywhere Is Queer', stage: 'Startup', product: 'Directory of 20K+ queer-owned businesses; 250K+ downloads since Feb 2024', customer: 'LGBTQ+ adults seeking businesses', gap: 'No healthcare/services focus; no policy tracking; not youth-specific' },
  { name: 'QLIST', stage: 'Startup', product: 'Global LGBTQ+ venue guide with 6K+ locations; crowd-sourced', customer: 'LGBTQ+ travelers', gap: 'Nightlife/travel focus; no healthcare, policy, or crisis support' },
  { name: 'Voda', stage: 'Startup', product: 'AI mental health companion with queer-led meditations and journaling', customer: 'LGBTQ+ adults seeking wellness', gap: 'Self-help only; no resource locator or policy tracking' },
];

export const ESTABLISHED_PLAYERS: MarketPlayer[] = [
  { name: 'Trevor Project', stage: 'Nonprofit', product: 'Crisis hotline, chat, text; TrevorSpace community for ages 13-24', customer: 'LGBTQ+ youth in crisis', gap: 'Crisis-focused; no local resource discovery or policy info', relationship: 'Integration Partner' },
  { name: 'Findhelp', stage: 'Enterprise', product: 'Largest US social care network; B2B platform for healthcare/govt', customer: 'Healthcare systems, government', gap: 'B2B only; not LGBTQ-specific; no direct consumer app', relationship: 'API Partner' },
  { name: 'Movement Advancement Project', stage: 'Nonprofit', product: 'Tracks 50+ LGBTQ policies across all states; static maps and reports', customer: 'Researchers, advocates, policymakers', gap: 'Reference tool; no AI Q&A; no resource locator', relationship: 'Data Source' },
];

// ─── Tech Stack ──────────────────────────────────────────

export const TECH_STACK: TechStackCategory[] = [
  {
    category: 'Training & labels',
    items: ['LegiScan (bill text & metadata)', 'ACLU LGBTQ+ bill labels', 'Plural & related org datasets'],
  },
  { category: 'Product & resources', items: ['SAMHSA', 'MAP', 'Findhelp', 'PubMed'] },
  { category: 'ML / NLP', items: ['LegalBERT', 'LogReg', 'Bedrock Titan V2', 'Bedrock Claude'] },
  { category: 'Infrastructure', items: ['AWS Lambda', 'SageMaker', 'EventBridge', 'S3', 'Neo4j AuraDB'] },
  { category: 'Frontend', items: ['React Native', 'Expo Router', 'NativeWind', 'TypeScript'] },
];

export const PIPELINES: Pipeline[] = [
  { feature: 'Bill Classification', flow: 'LegiScan → LegalBERT → Stance LogReg → Labels' },
  { feature: 'Knowledge Graph', flow: 'Bill Text → Chunk → Bedrock Embed → Neo4j Vector Index' },
  { feature: 'Advocacy Generation', flow: 'Bill Context → GraphRAG retrieval → Claude → Letter/Phone script/Card/Flyer' },
  { feature: 'Crisis Connect', flow: 'Curated Database → Deep Links → Privacy Guidance' },
];

export const ABOUT_INTERESTS = [
  'Algorithmic Fairness',
  'Privacy by Design',
  'Legal AI',
  'Bias Detection',
];

export const AREA_COLORS: Record<string, { bg: string; color: string }> = {
  'Policy Navigator': { bg: '#001d3a10', color: '#001d3a' },
  'Letter Generation': { bg: '#FDB51520', color: '#b8860b' },
  'Resource Locator': { bg: '#f1f5f9', color: '#475569' },
  'Take Action': { bg: '#FDB51520', color: '#b8860b' },
};

export const FEATURE_ICON_COLORS = ['#001d3a', '#001d3a', '#001d3a', '#FDB515'];
