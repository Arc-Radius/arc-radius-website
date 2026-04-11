import {
  Scale,
  Phone,
  PenLine,
  Sparkles,
  Navigation,
  Stethoscope,
  Zap,
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
  { value: '90%', label: 'report negative well-being impacts from anti-LGBTQ+ politics', highlight: false },
  { value: '530+', label: 'anti-LGBTQ+ bills proposed in 2024 alone', highlight: false },
  { value: '28%', label: 'of youth mental health facilities offer LGBTQ-specific services', highlight: true },
];

// ─── Features (updated) ─────────────────────────────────

export const FEATURES: Feature[] = [
  {
    icon: Scale,
    title: 'Policy Navigator',
    description:
      'Real-time legislative tracking across all 50 states powered by a three-Lambda AWS pipeline. LegiScan data is polled via EventBridge, classified by a fine-tuned LegalBERT model on SageMaker, and embedded into a Neo4j knowledge graph via Bedrock Titan V2. Users explore bills by state, see stance predictions (supportive vs harmful), and ask natural-language questions answered by GraphRAG over bill text chunks.',
    color: 'from-teal-400 to-cyan-400',
    tech: 'LegalBERT · SageMaker · Neo4j GraphRAG · Bedrock Embeddings · EventBridge',
  },
  {
    icon: PenLine,
    title: 'Letter Generation',
    description:
      'Generate personalized advocacy content to engage with legislators. Draft emails to state representatives informed by bill analysis, create shareable info cards summarizing key legislation, and produce printable flyers for community distribution — all grounded in classified bill data and policy context from the knowledge graph.',
    color: 'from-rose-400 to-orange-400',
    tech: 'Bedrock Claude · Bill Context Retrieval · Template Engine · Export to PDF/Image',
  },
  {
    icon: Phone,
    title: 'Crisis Connect',
    description:
      'One-tap access to LGBTQ+-specific crisis lines including the Trevor Project (call, text, chat for ages 13-24), Trans Lifeline (by and for trans people — never contacts authorities without consent), the 988 Suicide & Crisis Lifeline, and Crisis Text Line. Includes clear privacy guidance so users know exactly what to expect before reaching out.',
    color: 'from-amber-400 to-yellow-400',
    tech: 'Curated Resource Database · Privacy-First Design · Deep Linking',
  },
];

// ─── Impact ──────────────────────────────────────────────

export const IMPACT_ITEMS: ImpactItem[] = [
  { icon: Sparkles, title: 'Life-Saving Potential', gold: true, desc: 'Research shows LGBTQ+ youth in accepting communities have significantly lower suicide attempt rates. Connecting youth to affirming spaces directly addresses the leading cause of death in this population.' },
  { icon: Navigation, title: 'Information Gap', gold: false, desc: '45% of trans/nonbinary youth families have considered moving states due to anti-LGBTQ+ policies. These families need accessible, accurate information about laws and protections across jurisdictions.' },
  { icon: Stethoscope, title: 'Healthcare Access Crisis', gold: false, desc: "50% of LGBTQ+ youth who wanted mental health care couldn't access it. Cost, parental permission, and geography are major barriers that better resource discovery can address." },
  { icon: Zap, title: 'Rapidly Changing Landscape', gold: true, desc: 'With hundreds of bills introduced annually affecting LGBTQ+ rights, static resources become outdated quickly. AI-powered systems can track and synthesize legislative changes in real-time.' },
];

// ─── Techniques (updated) ────────────────────────────────

export const TECHNIQUES: Technique[] = [
  { name: 'LegalBERT Classification', desc: 'Fine-tuned relevance classifier using custom LegalBERTClassifier (raw CLS token). Threshold-tuned at 0.60 with pos_weight=3.0 for class imbalance.', area: 'Policy Navigator' },
  { name: 'Stance Detection', desc: 'LogReg over 6 political context features: state R-sponsorship ratio, dominant party, percent nay, R/D/other sponsor counts.', area: 'Policy Navigator' },
  { name: 'Serverless Inference', desc: 'SageMaker serverless endpoint (3072MB, ~780ms) packages custom model + LogReg + state profiles in a single model.tar.gz.', area: 'Policy Navigator' },
  { name: 'Three-Lambda Pipeline', desc: 'EventBridge → Poll (LegiScan) → Classify (SageMaker) → Embed (Bedrock + Neo4j). Incremental saves every 100 bills.', area: 'Policy Navigator' },
  { name: 'GraphRAG', desc: 'Bill text chunked at sentence boundaries (500 chars, 50 overlap), embedded via Titan V2 (1024-dim), Neo4j cosine vector index.', area: 'Policy Navigator' },
  { name: 'Neo4j Schema', desc: 'Bill, State, Session, Topic, Document, Chunk nodes. Relationships: IN_STATE, IN_SESSION, HAS_TOPIC, HAS_DOCUMENT, HAS_CHUNK.', area: 'Policy Navigator' },
  { name: 'Advocacy Generation', desc: 'Bedrock Claude generates letters, info cards, and flyers using retrieved bill context and stance classification as grounding.', area: 'Letter Generation' },
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
  { name: 'Arc Radius', resources: true, policy: true, crisis: true, highlight: true },
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
  { category: 'Data Sources', items: ['LegiScan', 'SAMHSA', 'MAP', 'Findhelp', 'PubMed'] },
  { category: 'ML / NLP', items: ['LegalBERT', 'LogReg', 'Bedrock Titan V2', 'Bedrock Claude'] },
  { category: 'Infrastructure', items: ['AWS Lambda', 'SageMaker', 'EventBridge', 'S3', 'Neo4j AuraDB'] },
  { category: 'Frontend', items: ['React Native', 'Expo Router', 'NativeWind', 'TypeScript'] },
];

export const PIPELINES: Pipeline[] = [
  { feature: 'Bill Classification', flow: 'LegiScan → LegalBERT → Stance LogReg → Labels' },
  { feature: 'Knowledge Graph', flow: 'Bill Text → Chunk → Bedrock Embed → Neo4j Vector Index' },
  { feature: 'Advocacy Generation', flow: 'Bill Context → Retrieval → Claude → Letter/Card/Flyer' },
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

export const FEATURE_ICON_COLORS = ['#001d3a', '#001d3a', '#FDB515'];
