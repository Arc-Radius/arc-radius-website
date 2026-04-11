import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  FileText,
  Phone,
  Stethoscope,
  MessageCircle,
  Home,
  Map,
  Sparkles,
  Star,
  Check,
  Loader2,
  X,
  ChevronDown,
  Bus,
  DollarSign,
  Clock,
  Shield,
  Languages,
  HeartHandshake,
  Search,
  Send,
  BookOpen,
  Info,
  ExternalLink,
  GitCompare,
  Database,
  Cpu,
  Layers,
  PhoneCall,
  MessageSquare,
  Globe,
  Heart,
  Users,
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  CalendarCheck,
  Landmark,
  Building2,
  User,
  Vote,
  BookMarked,
  Mail,
  Share2,
  Twitter,
  Download,
  PenLine,
  Megaphone,
  ThumbsUp,
  ThumbsDown,
  Link2,
  ClipboardCopy,
  Radar,
  Target,
  Ruler,
  CircleDot,
  Navigation,
  Brain,
  GitFork,
  Timer,
  Percent,
  BarChart2,
  Activity,
  Building,
  Scale,
} from 'lucide-react';

// Sample resource data
const sampleResources = [
  {
    id: 1,
    name: 'LGBTQ+ Health Center',
    type: 'clinic',
    address: '123 Main St',
    phone: '(510) 555-0100',
    distance: '0.8 mi',
  },
  {
    id: 2,
    name: 'Rainbow Youth Support',
    type: 'support',
    address: '456 Oak Ave',
    phone: '(510) 555-0200',
    distance: '1.2 mi',
  },
  {
    id: 3,
    name: 'Trans Wellness Clinic',
    type: 'clinic',
    address: '789 Cedar Blvd',
    phone: '(510) 555-0300',
    distance: '1.5 mi',
  },
  {
    id: 4,
    name: 'Queer Community Center',
    type: 'community',
    address: '321 Pine St',
    phone: '(510) 555-0400',
    distance: '2.1 mi',
  },
  {
    id: 5,
    name: 'Affirming Counseling Services',
    type: 'support',
    address: '654 Elm Dr',
    phone: '(510) 555-0500',
    distance: '2.4 mi',
  },
  {
    id: 6,
    name: 'PFLAG East Bay',
    type: 'community',
    address: '987 Maple Way',
    phone: '(510) 555-0600',
    distance: '3.0 mi',
  },
];

const resourceTypes = [
  { id: 'clinic', label: 'Clinics', Icon: Stethoscope },
  { id: 'support', label: 'Support Groups', Icon: MessageCircle },
  { id: 'community', label: 'Community Centers', Icon: Home },
];

// Mock NLP analysis data
const nlpAnalysisData: Record<number, NLPAnalysis> = {
  1: {
    services: [
      'Gender-affirming hormone therapy',
      'PrEP consultation',
      'Mental health screening',
      'STI testing & treatment',
    ],
    keyFindings: [
      'Sliding scale fees available',
      'Walk-ins accepted Tuesdays',
      'Spanish-speaking staff on site',
    ],
    reviewSummary:
      'Patients praise the welcoming environment and knowledgeable staff. Wait times average 15-20 minutes. Multiple reviews highlight the respectful use of chosen names and pronouns.',
    rating: 4.7,
    reviewCount: 128,
  },
  2: {
    services: [
      'Weekly peer support groups',
      'One-on-one mentorship',
      'Coming out support',
      'Family mediation services',
    ],
    keyFindings: [
      'Groups meet every Thursday 6-8pm',
      'Ages 13-24 welcome',
      'Parent/guardian consent not required',
    ],
    reviewSummary:
      'Youth describe feeling "finally understood" and "safe to be themselves." Facilitators are trained LGBTQ+ adults. The space is described as judgment-free and supportive.',
    rating: 4.9,
    reviewCount: 67,
  },
  3: {
    services: [
      'Transgender healthcare',
      'Hormone management',
      'Surgical referrals',
      'Voice therapy',
    ],
    keyFindings: [
      'Informed consent model',
      'Most insurance accepted',
      'Telehealth appointments available',
    ],
    reviewSummary:
      "Highly recommended for trans-specific care. Staff consistently use correct pronouns. Some reviewers note longer wait times for new patient appointments but say it's worth it.",
    rating: 4.8,
    reviewCount: 203,
  },
  4: {
    services: [
      'Community events',
      'Meeting space rental',
      'Resource library',
      'Youth programs',
    ],
    keyFindings: [
      'Open daily 10am-8pm',
      'Free WiFi and workspace',
      'Monthly drag shows and open mics',
    ],
    reviewSummary:
      'A welcoming hub for the local LGBTQ+ community. Events are well-organized and inclusive. The library has extensive LGBTQ+ literature and resources.',
    rating: 4.6,
    reviewCount: 89,
  },
  5: {
    services: [
      'Individual therapy',
      'Couples counseling',
      'Group therapy',
      'Gender identity exploration',
    ],
    keyFindings: [
      'All therapists LGBTQ+ affirming certified',
      'Evening appointments available',
      'Accepts most major insurance',
    ],
    reviewSummary:
      'Clients report feeling safe discussing identity and relationship issues. Therapists are praised for cultural competency. Booking can take 2-3 weeks for new clients.',
    rating: 4.8,
    reviewCount: 156,
  },
  6: {
    services: [
      'Parent support groups',
      'Educational workshops',
      'Advocacy training',
      'School intervention support',
    ],
    keyFindings: [
      'Meetings 1st and 3rd Saturdays',
      'Virtual option available',
      'Sibling support group monthly',
    ],
    reviewSummary:
      'Parents describe it as "life-changing" for understanding their LGBTQ+ children. The community is described as warm and non-judgmental. Great resource for newly out families.',
    rating: 4.9,
    reviewCount: 45,
  },
};

type NLPAnalysis = {
  services: string[];
  keyFindings: string[];
  reviewSummary: string;
  rating: number;
  reviewCount: number;
};

// Chatbot Q&A user stories with hardcoded responses
type QAItem = {
  id: string;
  question: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  response: string;
};

const chatbotQA: Record<number, QAItem[]> = {
  1: [
    {
      id: 'transport',
      question: "I don't have transportation. How can I get there?",
      icon: Bus,
      response:
        'You can take the AC Transit Line 51B from downtown Oakland, which stops directly in front of the center (Main St & 1st Ave stop). The trip takes approximately 15 minutes. Alternatively, BART to 12th St station is a 10-minute walk. The center also offers free Lyft vouchers for first-time patients—just mention this when you call to schedule.',
    },
    {
      id: 'cost',
      question: 'I have no insurance. Can I still get care?',
      icon: DollarSign,
      response:
        "Yes! The LGBTQ+ Health Center operates on a sliding scale based on income. If you're uninsured, bring proof of income (pay stub or tax return) and you may qualify for reduced fees starting at $20/visit. They also help patients enroll in Medi-Cal on-site.",
    },
    {
      id: 'privacy',
      question: "Will my parents find out I'm going here?",
      icon: Shield,
      response:
        "If you're 12 or older, you can consent to mental health services and STI testing without parental permission in California. The center follows strict confidentiality policies. They won't contact your parents or guardians unless you specifically request it or there's a safety concern.",
    },
    {
      id: 'language',
      question: 'Do they have Spanish-speaking staff?',
      icon: Languages,
      response:
        'Yes, the center has 3 Spanish-speaking staff members including a medical assistant and a counselor. Spanish interpretation is available for all appointments. You can request a Spanish-speaking provider when scheduling.',
    },
    {
      id: 'free',
      question: 'Where can I get free STI testing or prevention services?',
      icon: HeartHandshake,
      response:
        'Great news—this center offers FREE HIV/STI testing every Tuesday and Thursday (walk-ins welcome, 2-6pm). PrEP is available at no cost through a patient assistance program if you qualify. Free condoms and safer sex supplies are always available at the front desk, no questions asked. They also partner with the county health department for free Hepatitis A/B vaccinations.',
    },
  ],
  2: [
    {
      id: 'transport',
      question: "I don't have transportation. How can I get there?",
      icon: Bus,
      response:
        'Rainbow Youth Support is accessible via AC Transit Lines 18 and 57, both stopping within 2 blocks (Oak Ave & 5th St). The Thursday evening group coincides with extended bus service until 10pm. Several regular attendees carpool from Berkeley—ask the facilitator about ride-sharing options.',
    },
    {
      id: 'age',
      question: "I'm 14. Can I come without my parents knowing?",
      icon: Shield,
      response:
        'Yes, youth ages 13-24 can attend without parental consent or notification. We never contact parents unless you ask us to. Many young people attend without their families knowing, and we take privacy seriously. Your attendance is confidential.',
    },
    {
      id: 'first-time',
      question: 'What should I expect at my first group meeting?',
      icon: Clock,
      response:
        "Your first visit is low-pressure. You'll be greeted by a peer facilitator who'll show you around. You're welcome to just listen—no pressure to share. Groups start with introductions (just first names), then open discussion. Snacks provided! Most newcomers say they felt welcomed and less alone after their first meeting.",
    },
    {
      id: 'free',
      question:
        'I need free resources but not sure where to start. Can you help?',
      icon: HeartHandshake,
      response:
        "Absolutely—our facilitators can connect you with free resources based on your needs. We keep a resource guide updated monthly with: free clinics for STI testing and healthcare, free counseling through partner organizations, emergency housing assistance, food banks, and free legal help for LGBTQ+ youth. Just ask any facilitator after the meeting or email us, and we'll send you a personalized list.",
    },
  ],
  3: [
    {
      id: 'transport',
      question: "I don't have transportation. How can I get there?",
      icon: Bus,
      response:
        'Trans Wellness Clinic is located on Cedar Blvd, accessible via BART (Ashby station, 8-min walk) or AC Transit Line 72. They also offer telehealth appointments for consultations, follow-ups, and some hormone management visits—no travel required.',
    },
    {
      id: 'hormones',
      question: 'How long until I can start hormone therapy?',
      icon: Clock,
      response:
        'The clinic uses an informed consent model—no therapy letters required. First appointment includes bloodwork and consultation. If medically appropriate, many patients start HRT at their second visit (usually 1-2 weeks later). Total time from first call to starting hormones: typically 2-4 weeks.',
    },
    {
      id: 'cost',
      question: 'How much does hormone therapy cost without insurance?',
      icon: DollarSign,
      response:
        'Initial consultation is $150 on sliding scale (can be as low as $40). Generic estradiol or testosterone costs $20-40/month at most pharmacies with GoodRx. The clinic also connects patients with manufacturer assistance programs that can provide medications free.',
    },
    {
      id: 'free',
      question: 'Do they offer any free services?',
      icon: HeartHandshake,
      response:
        'Yes! Free services include: HIV/STI testing (rapid results in 20 min), PrEP navigation and enrollment assistance, free lab work through their partnership with Quest Diagnostics for uninsured patients, and a monthly free hormone clinic on the last Saturday (first-come, first-served, arrive by 9am). They also have a medication assistance program that helps patients get hormones at no cost.',
    },
  ],
  4: [
    {
      id: 'transport',
      question: "I don't have transportation. How can I get there?",
      icon: Bus,
      response:
        'Queer Community Center is centrally located on Pine St, a 5-minute walk from downtown BART. Multiple bus lines stop nearby (Lines 1, 12, 18). Bike parking available. For evening events, the neighborhood is well-lit and considered safe.',
    },
    {
      id: 'events',
      question: 'What events are good for someone new to the community?',
      icon: Clock,
      response:
        "We recommend starting with 'Coffee & Community' every Sunday 10am—casual, no agenda, just conversation. The monthly 'New to Queer' mixer on first Fridays is designed for people newly out or exploring their identity. Both events have designated welcomers to help newcomers feel comfortable.",
    },
    {
      id: 'free',
      question: 'Where can I find free health services or resources nearby?',
      icon: HeartHandshake,
      response:
        'The center maintains an updated resource board with free services in the area. Currently: Free HIV testing every 2nd Saturday here at the center (partnership with county health). Free legal clinic for name/gender marker changes on 3rd Wednesdays. Free food pantry Mondays 4-6pm (LGBTQ+ affirming, no ID required). Staff can also connect you with emergency funds for housing, utilities, or medical needs through the Rainbow Emergency Fund.',
    },
  ],
  5: [
    {
      id: 'transport',
      question: "I don't have transportation. How can I get there?",
      icon: Bus,
      response:
        'Affirming Counseling Services is on Elm Dr, accessible via AC Transit Line 52. Limited street parking available. They also offer video therapy sessions through a secure platform—most clients do a mix of in-person and virtual appointments.',
    },
    {
      id: 'cost',
      question: 'How much is therapy without insurance?',
      icon: DollarSign,
      response:
        'Standard rate is $150/session, but sliding scale available down to $60 based on income. They also have 2 pre-licensed therapists (supervised by licensed clinicians) who offer sessions at $40-60. Ask about the low-fee waitlist when you call.',
    },
    {
      id: 'matching',
      question: 'Can I request an LGBTQ+ therapist?',
      icon: Shield,
      response:
        'Absolutely. All therapists here are LGBTQ+ affirming certified, and about half identify as LGBTQ+ themselves. When you call to schedule, you can request a therapist who shares your identity or has specific experience (e.g., trans issues, coming out, family acceptance).',
    },
  ],
  6: [
    {
      id: 'transport',
      question: "I don't have transportation. How can I get there?",
      icon: Bus,
      response:
        "PFLAG East Bay meets at the community center on Maple Way. AC Transit Lines 18 and 51B stop within a block. Free parking lot available. Virtual attendance option via Zoom for those who can't make it in person—link sent after registration.",
    },
    {
      id: 'parent',
      question: "My child just came out. I'm struggling. Is this for me?",
      icon: Shield,
      response:
        "Yes, this is exactly what PFLAG is for. Many parents arrive feeling confused, scared, or grieving expectations. You'll meet other parents at various stages of their journey—some newly processing, others years in. No judgment. The only requirement is wanting to support your LGBTQ+ child, even if you don't know how yet.",
    },
    {
      id: 'time',
      question: 'How long are meetings and what happens?',
      icon: Clock,
      response:
        "Meetings are 2 hours: first hour is a presentation or guest speaker on topics like 'Understanding Gender Identity' or 'Navigating Schools.' Second hour is small group discussion where parents share experiences and support each other. Coffee and snacks throughout. Newcomers get a welcome packet with resources.",
    },
  ],
};

// AI Search queries - predefined searches with matching resources
type AISearchResult = {
  query: string;
  summary: string;
  matchingResourceIds: number[];
  details: string;
};

const aiSearchQueries: AISearchResult[] = [
  {
    query: 'free STI testing',
    summary: 'Found 2 locations offering free STI testing near you',
    matchingResourceIds: [1, 3],
    details:
      'LGBTQ+ Health Center offers free HIV/STI testing every Tuesday and Thursday 2-6pm (walk-ins welcome). Trans Wellness Clinic provides free rapid HIV/STI testing with results in 20 minutes. Both locations offer free PrEP enrollment assistance.',
  },
  {
    query: 'free clinic',
    summary: 'Found 2 clinics with free or sliding-scale services',
    matchingResourceIds: [1, 3],
    details:
      'Both clinics offer sliding-scale fees based on income, with visits as low as $20. Trans Wellness Clinic has a monthly free hormone clinic on the last Saturday. LGBTQ+ Health Center offers free testing days and helps with Medi-Cal enrollment on-site.',
  },
  {
    query: 'free counseling',
    summary: 'Found 3 locations with free or low-cost mental health support',
    matchingResourceIds: [2, 4, 5],
    details:
      'Rainbow Youth Support offers free peer support groups every Thursday. Queer Community Center connects visitors with free counseling through partner organizations. Affirming Counseling Services has pre-licensed therapists at $40-60/session and a low-fee waitlist.',
  },
  {
    query: 'hormone therapy',
    summary: 'Found 1 clinic specializing in hormone therapy',
    matchingResourceIds: [3],
    details:
      'Trans Wellness Clinic uses an informed consent model—no therapy letters required. Many patients start HRT within 2-4 weeks of their first call. They offer telehealth appointments and have medication assistance programs for those who qualify.',
  },
  {
    query: 'youth support',
    summary: 'Found 2 locations with youth-specific programs',
    matchingResourceIds: [2, 4],
    details:
      'Rainbow Youth Support serves ages 13-24 with weekly peer groups and one-on-one mentorship. No parental consent required. Queer Community Center has dedicated youth programs and a safe space for young people exploring their identity.',
  },
  {
    query: 'parent support',
    summary: 'Found 1 organization specializing in family support',
    matchingResourceIds: [6],
    details:
      'PFLAG East Bay offers support groups for parents and families of LGBTQ+ individuals. Meetings include educational presentations and small group discussions. Virtual attendance available. Sibling support group meets monthly.',
  },
  {
    query: 'free food',
    summary: 'Found 1 location with food assistance',
    matchingResourceIds: [4],
    details:
      'Queer Community Center runs an LGBTQ+ affirming food pantry every Monday 4-6pm. No ID required. They also connect visitors with emergency funds through the Rainbow Emergency Fund for housing, utilities, or medical needs.',
  },
  {
    query: 'legal help name change',
    summary: 'Found 1 location offering free legal assistance',
    matchingResourceIds: [4],
    details:
      'Queer Community Center hosts a free legal clinic every 3rd Wednesday specifically for name and gender marker changes. Volunteer attorneys help with paperwork and court filing procedures.',
  },
  {
    query: 'spanish speaking',
    summary: 'Found 1 clinic with Spanish-speaking staff',
    matchingResourceIds: [1],
    details:
      'LGBTQ+ Health Center has 3 Spanish-speaking staff members including a medical assistant and counselor. Spanish interpretation is available for all appointments. You can request a Spanish-speaking provider when scheduling.',
  },
  {
    query: 'telehealth virtual',
    summary: 'Found 2 locations offering virtual appointments',
    matchingResourceIds: [3, 5],
    details:
      'Trans Wellness Clinic offers telehealth for consultations, follow-ups, and some hormone management visits. Affirming Counseling Services provides video therapy through a secure platform—most clients do a mix of in-person and virtual sessions.',
  },
];

// Legal Rights RAG Q&A mock data
type LegalQAResult = {
  question: string;
  answer: string;
  sources: { name: string; url: string }[];
  followUp: string[];
};

const legalQADatabase: { [key: string]: LegalQAResult } = {
  'access care': {
    question: 'Can I still access gender-affirming care?',
    answer:
      'Even in states with restrictions, options may include: (1) Telehealth from providers in other states—many "refuge states" like California, Minnesota, and Colorado have shield laws protecting providers. (2) Traveling to nearby states without restrictions. (3) Some restrictions only apply to minors, so adults may still access care. (4) Ongoing legal challenges may block enforcement.',
    sources: [
      {
        name: 'Lambda Legal - Healthcare Access',
        url: 'https://lambdalegal.org/know-your-rights/healthcare',
      },
      {
        name: 'TransLaw Help Desk',
        url: 'https://transgenderlawcenter.org/resources/health',
      },
    ],
    followUp: [
      'What states have shield laws?',
      'Can I use telehealth?',
      'What about insurance coverage?',
    ],
  },
  'court challenge': {
    question: 'Is this law being challenged in court?',
    answer:
      'Many restrictive bills face legal challenges on constitutional grounds including equal protection, due process, and First Amendment claims. Organizations like the ACLU, Lambda Legal, and GLAD are actively litigating these cases. Court injunctions have temporarily blocked enforcement in several states while cases proceed.',
    sources: [
      {
        name: 'ACLU - LGBTQ Rights Cases',
        url: 'https://aclu.org/cases?issue=lgbtq-rights',
      },
      {
        name: 'Lambda Legal - Litigation',
        url: 'https://lambdalegal.org/in-court',
      },
    ],
    followUp: [
      'What is an injunction?',
      'How long do court cases take?',
      'Can I join a lawsuit?',
    ],
  },
  'rights school': {
    question: 'What are my rights at school?',
    answer:
      'Federal Title IX protections apply to sex discrimination, which courts have interpreted to include gender identity. You have the right to: be addressed by your correct name/pronouns (in many jurisdictions), access facilities consistent with your gender identity (varies by state/district), be free from harassment, and have your privacy protected. State laws vary significantly.',
    sources: [
      {
        name: 'GLSEN - Know Your Rights',
        url: 'https://glsen.org/knowyourrights',
      },
      {
        name: 'ACLU - Student Rights',
        url: 'https://aclu.org/know-your-rights/students-rights',
      },
    ],
    followUp: [
      'Can my school out me to my parents?',
      'What if I face harassment?',
      'Can I start a GSA?',
    ],
  },
  'name change': {
    question: 'How do I change my name and gender marker?',
    answer:
      'The process varies by state but generally involves: (1) Filing a petition with your local court. (2) Some states require a hearing, others are administrative. (3) Fees range from $0-$500 depending on state and fee waivers. (4) Gender marker changes may require different documentation—some states require surgery, others accept a letter from a provider, some allow self-attestation.',
    sources: [
      {
        name: 'National Center for Transgender Equality - ID Documents',
        url: 'https://transequality.org/documents',
      },
      {
        name: 'Transgender Law Center - ID Update',
        url: 'https://transgenderlawcenter.org/resources/id',
      },
    ],
    followUp: [
      'Do I need a lawyer?',
      'Can I seal my records?',
      'What about my birth certificate?',
    ],
  },
  workplace: {
    question: 'What are my rights at work?',
    answer:
      'Federal law (Title VII as interpreted by the Supreme Court in Bostock v. Clayton County) prohibits employment discrimination based on sexual orientation and gender identity. This means employers cannot fire, refuse to hire, or discriminate against you because you are LGBTQ+. Many states have additional protections. You can file complaints with the EEOC.',
    sources: [
      {
        name: 'EEOC - LGBTQ+ Workers',
        url: 'https://eeoc.gov/sexual-orientation-and-gender-identity-sogi-discrimination',
      },
      {
        name: 'Lambda Legal - Workplace',
        url: 'https://lambdalegal.org/know-your-rights/workplace',
      },
    ],
    followUp: [
      'What about bathroom access at work?',
      'Can I be fired for being trans?',
      'How do I file a complaint?',
    ],
  },
  insurance: {
    question: 'Will insurance cover gender-affirming care?',
    answer:
      'Coverage varies significantly: (1) Many private insurers now cover transition-related care due to ACA non-discrimination rules. (2) Medicaid coverage depends on your state—some cover all care, some have exclusions. (3) Medicare covers medically necessary gender-affirming care. (4) Exclusions specifically for transgender care are increasingly being struck down as discriminatory.',
    sources: [
      { name: 'Out2Enroll - Insurance Guide', url: 'https://out2enroll.org' },
      {
        name: 'Transgender Law Center - Insurance',
        url: 'https://transgenderlawcenter.org/resources/health/insurance',
      },
    ],
    followUp: [
      'How do I appeal a denial?',
      'What about prior authorization?',
      'Are there patient assistance programs?',
    ],
  },
};

// Comparison queries mock data
type ComparisonResult = {
  query: string;
  title: string;
  comparison: {
    optionA: { name: string; points: string[] };
    optionB: { name: string; points: string[] };
  };
  recommendation: string;
};

const comparisonQueries: ComparisonResult[] = [
  {
    query: 'prep vs pep',
    title: 'PrEP vs PEP: HIV Prevention Options',
    comparison: {
      optionA: {
        name: 'PrEP (Pre-Exposure Prophylaxis)',
        points: [
          'Taken BEFORE potential HIV exposure',
          'Daily pill (Truvada/Descovy) or injectable (every 2 months)',
          '99% effective when taken as prescribed',
          'For ongoing HIV prevention',
          'Requires prescription and regular monitoring',
        ],
      },
      optionB: {
        name: 'PEP (Post-Exposure Prophylaxis)',
        points: [
          'Taken AFTER potential HIV exposure',
          'Must start within 72 hours (sooner is better)',
          '28-day course of antiretroviral medication',
          'For emergency situations only',
          'Available at ERs and urgent care',
        ],
      },
    },
    recommendation:
      "If you have ongoing HIV risk, PrEP provides consistent protection. PEP is for emergencies when you weren't on PrEP or had a potential exposure. Talk to a healthcare provider about which is right for you.",
  },
  {
    query: 'support group vs therapy',
    title: 'Support Groups vs Individual Therapy',
    comparison: {
      optionA: {
        name: 'Support Groups',
        points: [
          'Peer connection with shared experiences',
          'Usually free or low-cost',
          'Less clinical, more community-focused',
          "Learn from others' coping strategies",
          'May have less scheduling flexibility',
        ],
      },
      optionB: {
        name: 'Individual Therapy',
        points: [
          'One-on-one personalized attention',
          'Confidential and private',
          'Address deeper/complex issues',
          'Professional clinical guidance',
          'Can be expensive without insurance',
        ],
      },
    },
    recommendation:
      'Many people benefit from both! Support groups offer community and peer connection, while therapy provides personalized clinical care. Consider starting with a support group if cost is a concern, and adding therapy as needed.',
  },
  {
    query: 'clinic a vs clinic b',
    title: 'LGBTQ+ Health Center vs Trans Wellness Clinic',
    comparison: {
      optionA: {
        name: 'LGBTQ+ Health Center',
        points: [
          'General LGBTQ+ healthcare',
          'Free STI testing Tue/Thu',
          'Spanish-speaking staff available',
          'Sliding scale $20-150',
          'Walk-ins accepted Tuesdays',
        ],
      },
      optionB: {
        name: 'Trans Wellness Clinic',
        points: [
          'Trans-specialized healthcare',
          'Informed consent hormone therapy',
          'Telehealth appointments available',
          'Monthly free hormone clinic',
          'Surgical referrals provided',
        ],
      },
    },
    recommendation:
      'Choose LGBTQ+ Health Center for general care, STI services, or if you need Spanish-speaking providers. Choose Trans Wellness Clinic specifically for transgender healthcare, hormone therapy, or if you prefer telehealth options.',
  },
  {
    query: 'california vs texas lgbtq',
    title: 'LGBTQ+ Policy Comparison: California vs Texas',
    comparison: {
      optionA: {
        name: 'California',
        points: [
          '✓ Gender-affirming care protected by law',
          '✓ Conversion therapy banned for minors',
          '✓ Non-binary gender marker option (X)',
          '✓ LGBTQ+ inclusive school curriculum',
          '✓ "Sanctuary state" for trans healthcare',
        ],
      },
      optionB: {
        name: 'Texas',
        points: [
          '✗ Gender-affirming care for minors banned',
          '✗ No conversion therapy ban',
          '✗ Investigations into families seeking trans care',
          '✗ Bathroom restrictions in schools',
          '✗ Sports bans for trans students',
        ],
      },
    },
    recommendation:
      "California offers significantly stronger legal protections for LGBTQ+ individuals and families. If you're in Texas and need trans healthcare, consider telehealth options from out-of-state providers or organizations that help families access care.",
  },
];

// Bill data type for detailed bill analysis
type Bill = {
  id: string;
  number: string;
  title: string;
  summary: string;
  fullText: string;
  state: string;
  status: string;
  progression: number;
  lastAction: string;
  pendingCommittee: string;
  sponsors: { name: string; party: 'D' | 'R' | 'I' }[];
  spectrum: 'Supportive' | 'Neutral' | 'Harmful';
  introducedDate: string;
  history: { date: string; chamber: string; action: string }[];
  subjects: string[];
  similarBills: string[];
  keyDates?: { date: string; description: string; isPast?: boolean }[];
  aiAnalysis: {
    classification: string;
    impactScore: number; // -5 to 5
    keyProvisions: string[];
    potentialImpact: string;
    legalContext: string;
    recommendation: string;
  };
  researchEvidence?: {
    studies: {
      title: string;
      authors: string;
      journal: string;
      year: number;
      finding: string;
      impactType: 'positive' | 'negative' | 'neutral';
      sampleSize?: string;
      doi?: string;
    }[];
    healthImpacts: {
      category: string;
      direction: 'positive' | 'negative';
      magnitude: 'significant' | 'moderate' | 'minor';
      description: string;
    }[];
    dsTechnique: string;
  };
  sponsorContact?: {
    name: string;
    email?: string;
    phone?: string;
    office?: string;
    district?: string;
  };
};

// Mock bills data
const billsData: Record<string, Bill[]> = {
  TX: [
    {
      id: 'TX-HB634',
      number: 'H.B. No. 634',
      title: 'LGBTQ+ Senior Housing Task Force',
      summary:
        'Relating to the creation of a task force to evaluate the housing needs of senior citizens who are lesbian, gay, bisexual, transgender, queer, or questioning.',
      fullText: `A BILL TO BE ENTITLED AN ACT relating to the creation of a task force to evaluate the housing needs of senior citizens who are lesbian, gay, bisexual, transgender, queer, or questioning.

BE IT ENACTED BY THE LEGISLATURE OF THE STATE OF TEXAS:

SECTION 1. (a) In this section, "task force" means the task force established under this section.

(b) The task force is established to evaluate the housing needs of senior citizens who are lesbian, gay, bisexual, transgender, queer, or questioning and to develop potential housing solutions to address those needs and provide to those senior citizens safe, affordable housing options.

(c) The task force is composed of the following 10 members:
  (1) the chair of the LGBTQ caucus of the house of representatives, to serve as presiding officer;
  (2) three members appointed by the governor;
  (3) three members appointed by the lieutenant governor;
  (4) three members appointed by the speaker of the house of representatives.

(d) Not later than September 1, 2026, the task force shall prepare and submit a written report summarizing the results and proposing potential housing solutions.

(e) The task force is abolished and this Act expires December 1, 2026.

SECTION 2. This Act takes effect September 1, 2025.`,
      state: 'TX',
      status: 'Introduced',
      progression: 25,
      lastAction: 'Referred to House Administration',
      pendingCommittee: 'House Administration Committee',
      sponsors: [
        { name: 'Rep. Ray Lopez', party: 'D' },
        { name: 'Rep. Penny Morales Shaw', party: 'D' },
      ],
      spectrum: 'Supportive',
      introducedDate: '2024-11-12',
      history: [
        {
          date: '2025-03-04',
          chamber: 'House',
          action: 'Referred to House Administration',
        },
        { date: '2025-03-04', chamber: 'House', action: 'Read first time' },
        { date: '2024-11-12', chamber: 'House', action: 'Filed' },
      ],
      subjects: ['Aging', 'Housing', 'LGBTQ+ Rights', 'Task Force'],
      similarBills: ['SB 1765 (Same As)'],
      keyDates: [
        {
          date: '2025-09-01',
          description: 'Act takes effect',
          isPast: false,
        },
        {
          date: '2025-11-01',
          description:
            'Deadline for Governor, Lt. Governor, and Speaker to make appointments',
          isPast: false,
        },
        {
          date: '2026-09-01',
          description:
            'Task force must submit final report with housing solutions',
          isPast: false,
        },
        {
          date: '2026-12-01',
          description: 'Task force abolished / Act expires',
          isPast: false,
        },
      ],
      aiAnalysis: {
        classification: 'Supportive - Study/Task Force',
        impactScore: 3,
        keyProvisions: [
          'Creates 10-member task force to study LGBTQ+ senior housing needs',
          'Requires input from LGBTQ+ advocacy organizations (Coalition for Aging LGBT, Equality Texas)',
          'Mandates report with housing solutions by September 2026',
          'Includes assessment of long-term care facility transitions',
          'Task force sunsets December 2026',
        ],
        potentialImpact:
          'This bill would be the first formal state recognition of housing challenges faced by LGBTQ+ seniors in Texas. While it does not mandate specific protections, the task force could lead to future legislation addressing discrimination in senior housing and long-term care facilities.',
        legalContext:
          'Currently, Texas has no statewide LGBTQ+ non-discrimination protections in housing. LGBTQ+ seniors face documented discrimination in assisted living and nursing facilities. This bill takes a study-first approach common in conservative legislatures.',
        recommendation:
          'SUPPORT - While this bill only creates a study committee, it represents rare bipartisan acknowledgment of LGBTQ+ senior needs in Texas. The required stakeholder input from Equality Texas ensures community voices will be heard.',
      },
      researchEvidence: {
        studies: [
          {
            title:
              'Housing Discrimination and Health Among LGBTQ+ Older Adults',
            authors: 'Fredriksen-Goldsen et al.',
            journal: 'The Gerontologist',
            year: 2021,
            finding:
              'LGBTQ+ older adults face 2.5x higher rates of housing discrimination, leading to increased social isolation and depression.',
            impactType: 'positive',
            sampleSize: 'n=2,450',
            doi: '10.1093/geront/gnaa123',
          },
          {
            title: 'Long-term Care Needs of LGBT Older Adults',
            authors: 'SAGE & MAP',
            journal: 'Movement Advancement Project Report',
            year: 2022,
            finding:
              '76% of LGBTQ+ seniors are concerned about adequate access to affirming long-term care. Task forces lead to better policy outcomes.',
            impactType: 'positive',
            sampleSize: 'n=3,200',
          },
        ],
        healthImpacts: [
          {
            category: 'Mental Health',
            direction: 'positive',
            magnitude: 'moderate',
            description:
              'Studies show inclusive housing policies reduce depression and anxiety in LGBTQ+ seniors by 23%.',
          },
          {
            category: 'Social Connection',
            direction: 'positive',
            magnitude: 'significant',
            description:
              'Access to affirming housing increases social support networks, reducing isolation-related health risks.',
          },
        ],
        dsTechnique:
          'PubMed/Google Scholar mining with BioBERT for medical literature extraction. Relation extraction identifies policy→health outcome connections. Meta-analysis aggregation for effect sizes.',
      },
      sponsorContact: {
        name: 'Rep. Ray Lopez',
        email: 'ray.lopez@house.texas.gov',
        phone: '(512) 463-0669',
        office: 'Room E2.712, Texas State Capitol',
        district: 'District 125 - San Antonio',
      },
    },
    {
      id: 'TX-SB14',
      number: 'S.B. No. 14',
      title: 'Gender-Affirming Care Ban for Minors',
      summary:
        'Relating to the provision of and professional liability insurance coverage for gender transitioning or gender reassignment medical procedures and treatments for certain children.',
      fullText: `AN ACT relating to prohibiting the provision of gender transitioning or gender reassignment procedures and treatments to certain children...`,
      state: 'TX',
      status: 'Enacted',
      progression: 100,
      lastAction: 'Signed by Governor',
      pendingCommittee: '',
      sponsors: [{ name: 'Sen. Donna Campbell', party: 'R' }],
      spectrum: 'Harmful',
      introducedDate: '2023-01-10',
      history: [
        { date: '2023-06-02', chamber: '', action: 'Signed by Governor' },
        { date: '2023-05-17', chamber: 'House', action: 'Passed' },
        { date: '2023-03-22', chamber: 'Senate', action: 'Passed' },
      ],
      subjects: [
        'Healthcare',
        'Minors',
        'Gender Identity',
        'Medical Procedures',
      ],
      similarBills: ['FL SB 254', 'TN SB 1'],
      keyDates: [
        {
          date: '2023-06-02',
          description: 'Signed into law by Governor Abbott',
          isPast: true,
        },
        {
          date: '2023-09-01',
          description: 'Law took effect',
          isPast: true,
        },
        {
          date: '2024-08-16',
          description:
            'Federal court ruled law can remain in effect during appeals',
          isPast: true,
        },
      ],
      aiAnalysis: {
        classification: 'Harmful - Healthcare Restriction',
        impactScore: -5,
        keyProvisions: [
          'Prohibits gender-affirming medical care for minors',
          'Bans puberty blockers, hormone therapy for gender dysphoria',
          'Requires discontinuation of existing treatments',
          'Creates professional liability for healthcare providers',
          'No exceptions for ongoing treatments',
        ],
        potentialImpact:
          'This law directly impacts an estimated 14,000+ transgender youth in Texas. Research indicates such bans correlate with increased mental health crises and suicide attempts among affected youth. Families report relocating to other states for care.',
        legalContext:
          "Multiple federal lawsuits challenging this law are ongoing. Similar laws in other states have faced mixed court rulings. The law conflicts with major medical associations' guidelines (AAP, AMA, Endocrine Society).",
        recommendation:
          'OPPOSE - This law contradicts medical consensus and has documented harmful effects on transgender youth mental health. Legal challenges are ongoing.',
      },
      researchEvidence: {
        studies: [
          {
            title:
              'Mental Health Outcomes in Transgender Adolescents Before and After Gender-Affirming Care',
            authors: 'Turban JL, King D, Carswell JM, Keuroghlian AS',
            journal: 'JAMA Pediatrics',
            year: 2022,
            finding:
              'Access to pubertal suppression during adolescence was associated with 70% lower odds of suicidal ideation.',
            impactType: 'negative',
            sampleSize: 'n=20,619',
            doi: '10.1001/jamapediatrics.2021.5695',
          },
          {
            title:
              'Association Between Gender-Affirming Care and Mental Health',
            authors: 'Tordoff DM, et al.',
            journal: 'JAMA Network Open',
            year: 2022,
            finding:
              'Receipt of gender-affirming care was associated with 60% lower odds of depression and 73% lower odds of suicidality over 12 months.',
            impactType: 'negative',
            sampleSize: 'n=104',
            doi: '10.1001/jamanetworkopen.2022.0978',
          },
          {
            title: 'The Trevor Project 2024 National Survey',
            authors: 'The Trevor Project',
            journal: 'National Survey Report',
            year: 2024,
            finding:
              'States with care bans saw 22% increase in crisis contacts from transgender youth.',
            impactType: 'negative',
            sampleSize: 'n=18,000+',
          },
        ],
        healthImpacts: [
          {
            category: 'Mental Health',
            direction: 'negative',
            magnitude: 'significant',
            description:
              'Denying gender-affirming care increases depression (60%), anxiety (40%), and suicidal ideation (70%) in transgender youth.',
          },
          {
            category: 'Healthcare Access',
            direction: 'negative',
            magnitude: 'significant',
            description:
              'Forces families to travel out-of-state or discontinue medically necessary treatment, creating care deserts.',
          },
          {
            category: 'Family Stability',
            direction: 'negative',
            magnitude: 'moderate',
            description:
              '45% of affected families report considering relocation, causing economic and social disruption.',
          },
        ],
        dsTechnique:
          'Systematic review mining from PubMed, Cochrane Library. BioBERT extracts health outcomes. Cross-sectional comparison of resource availability across policy environments.',
      },
      sponsorContact: {
        name: 'Sen. Donna Campbell',
        email: 'donna.campbell@senate.texas.gov',
        phone: '(512) 463-0125',
        office: 'Room E1.606, Texas State Capitol',
        district: 'District 25 - New Braunfels',
      },
    },
  ],
  CA: [
    {
      id: 'CA-SB107',
      number: 'S.B. No. 107',
      title: 'Transgender Refuge State',
      summary:
        'Relating to establishing California as a refuge state for transgender youth and families seeking gender-affirming care.',
      fullText: `AN ACT to add Chapter 12.5 to Part 3 of Division 9 of the Family Code, relating to minors...`,
      state: 'CA',
      status: 'Enacted',
      progression: 100,
      lastAction: 'Signed by Governor',
      pendingCommittee: '',
      sponsors: [{ name: 'Sen. Scott Wiener', party: 'D' }],
      spectrum: 'Supportive',
      introducedDate: '2022-02-15',
      history: [
        { date: '2022-09-29', chamber: '', action: 'Signed by Governor' },
        { date: '2022-08-30', chamber: 'Assembly', action: 'Passed' },
        { date: '2022-05-25', chamber: 'Senate', action: 'Passed' },
      ],
      subjects: [
        'Healthcare',
        'Child Custody',
        'Gender-Affirming Care',
        'Interstate',
      ],
      similarBills: ['MN SF 2909', 'CO HB 23-1089'],
      keyDates: [
        {
          date: '2022-09-29',
          description: 'Signed into law by Governor Newsom',
          isPast: true,
        },
        {
          date: '2023-01-01',
          description: 'Law took effect',
          isPast: true,
        },
      ],
      aiAnalysis: {
        classification: 'Supportive - Protection/Refuge',
        impactScore: 5,
        keyProvisions: [
          'Prohibits enforcement of out-of-state judgments removing children due to gender-affirming care',
          'Bars CA courts from considering lawful gender-affirming care in custody disputes',
          'Protects healthcare providers from out-of-state subpoenas',
          'Allows CA courts to take emergency jurisdiction for at-risk transgender youth',
        ],
        potentialImpact:
          'Provides legal protection for families fleeing states with gender-affirming care bans. Ensures continuity of care for transgender youth. May attract families from restrictive states.',
        legalContext:
          'Part of growing "refuge state" movement in response to Texas and other states criminalizing gender-affirming care. Similar laws passed in Minnesota, Colorado, Illinois.',
        recommendation:
          'SUPPORT - This law provides critical protections for transgender youth and their families, ensuring access to medically necessary care.',
      },
    },
  ],
  FL: [
    {
      id: 'FL-HB1521',
      number: 'H.B. No. 1521',
      title: 'Facility Requirements Based on Sex',
      summary:
        'Relating to facility requirements based on sex; requiring that certain facilities be designated for use based on sex.',
      fullText: `AN ACT relating to facility requirements based on sex...`,
      state: 'FL',
      status: 'Enacted',
      progression: 100,
      lastAction: 'Signed by Governor',
      pendingCommittee: '',
      sponsors: [{ name: 'Rep. Rachel Plakon', party: 'R' }],
      spectrum: 'Harmful',
      introducedDate: '2023-03-01',
      history: [
        { date: '2023-05-17', chamber: '', action: 'Signed by Governor' },
        { date: '2023-04-28', chamber: 'Senate', action: 'Passed' },
        { date: '2023-04-19', chamber: 'House', action: 'Passed' },
      ],
      subjects: [
        'Public Facilities',
        'Gender Identity',
        'Bathrooms',
        'Schools',
      ],
      similarBills: ['NC HB 2 (repealed)', 'TN HB 1182'],
      keyDates: [
        {
          date: '2023-05-17',
          description: 'Signed into law by Governor DeSantis',
          isPast: true,
        },
        {
          date: '2023-07-01',
          description: 'Law took effect',
          isPast: true,
        },
        {
          date: '2024-02-28',
          description: 'Federal lawsuit challenging law filed (Doe v. Ladapo)',
          isPast: true,
        },
      ],
      aiAnalysis: {
        classification: 'Harmful - Facility Restriction',
        impactScore: -4,
        keyProvisions: [
          'Requires use of facilities based on sex assigned at birth',
          'Applies to schools, government buildings, detention facilities',
          'Creates criminal penalties for violations',
          'Defines sex as "biological sex at birth"',
        ],
        potentialImpact:
          'Forces transgender individuals to use facilities inconsistent with their gender identity, increasing harassment and safety risks. GLSEN data shows 45% of trans students already avoid school bathrooms.',
        legalContext:
          "Similar to North Carolina's HB2 which cost the state $3.76B in economic losses. Multiple lawsuits expected challenging ADA and Title IX compliance.",
        recommendation:
          'OPPOSE - This law increases safety risks for transgender individuals and has documented negative economic and social impacts.',
      },
    },
  ],
};

// Legislative body information type
type LegislativeBody = {
  governor: {
    name: string;
    party: 'D' | 'R' | 'I';
    since: string;
    lgbtqStance?: 'Supportive' | 'Mixed' | 'Opposed';
  };
  senate: {
    totalSeats: number;
    democrats: number;
    republicans: number;
    other: number;
    majority: 'D' | 'R' | 'Split';
    president?: string;
  };
  house: {
    name: string; // "House" or "Assembly"
    totalSeats: number;
    democrats: number;
    republicans: number;
    other: number;
    majority: 'D' | 'R' | 'Split';
    speaker?: string;
  };
  legislativeSession?: {
    name: string;
    dates: string;
    isActive: boolean;
  };
};

// US State Policy Data
type StatePolicy = {
  name: string;
  abbrev: string;
  score: number; // -3 to 3 scale (-3 = very restrictive, 3 = very protective)
  rating: 'Protective' | 'Mixed' | 'Restrictive' | 'Very Restrictive';
  policies: {
    genderAffirmingCare: 'Protected' | 'No Law' | 'Restricted' | 'Banned';
    conversionTherapy: 'Banned' | 'Partial Ban' | 'No Law';
    nonDiscrimination: 'Comprehensive' | 'Partial' | 'None';
    idDocuments: 'Accessible' | 'Difficult' | 'Very Difficult';
    schoolPolicies: 'Protective' | 'Mixed' | 'Restrictive';
  };
  legislature?: LegislativeBody;
  recentBills: string[];
  resources: string[];
};

const statePolicies: Record<string, StatePolicy> = {
  CA: {
    name: 'California',
    abbrev: 'CA',
    score: 3,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    legislature: {
      governor: {
        name: 'Gavin Newsom',
        party: 'D',
        since: '2019',
        lgbtqStance: 'Supportive',
      },
      senate: {
        totalSeats: 40,
        democrats: 32,
        republicans: 8,
        other: 0,
        majority: 'D',
        president: 'Mike McGuire (D)',
      },
      house: {
        name: 'Assembly',
        totalSeats: 80,
        democrats: 62,
        republicans: 18,
        other: 0,
        majority: 'D',
        speaker: 'Robert Rivas (D)',
      },
      legislativeSession: {
        name: '2025-2026 Regular Session',
        dates: 'Dec 2024 - Nov 2026',
        isActive: true,
      },
    },
    recentBills: [
      'SB 107 - Trans refuge state law (2022)',
      'AB 1266 - School Success Act (2013)',
    ],
    resources: ['Equality California', 'Transgender Law Center', 'ACLU CA'],
  },
  NY: {
    name: 'New York',
    abbrev: 'NY',
    score: 3,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    legislature: {
      governor: {
        name: 'Kathy Hochul',
        party: 'D',
        since: '2021',
        lgbtqStance: 'Supportive',
      },
      senate: {
        totalSeats: 63,
        democrats: 42,
        republicans: 21,
        other: 0,
        majority: 'D',
        president: 'Andrea Stewart-Cousins (D)',
      },
      house: {
        name: 'Assembly',
        totalSeats: 150,
        democrats: 102,
        republicans: 48,
        other: 0,
        majority: 'D',
        speaker: 'Carl Heastie (D)',
      },
      legislativeSession: {
        name: '2025 Regular Session',
        dates: 'Jan 2025 - Jun 2025',
        isActive: true,
      },
    },
    recentBills: [
      'GENDA - Gender Expression Non-Discrimination Act (2019)',
      'Conversion therapy ban (2019)',
    ],
    resources: ['Empire State Pride Agenda', 'ACLU NY', 'GLSEN NY'],
  },
  TX: {
    name: 'Texas',
    abbrev: 'TX',
    score: -3,
    rating: 'Very Restrictive',
    policies: {
      genderAffirmingCare: 'Banned',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'None',
      idDocuments: 'Very Difficult',
      schoolPolicies: 'Restrictive',
    },
    legislature: {
      governor: {
        name: 'Greg Abbott',
        party: 'R',
        since: '2015',
        lgbtqStance: 'Opposed',
      },
      senate: {
        totalSeats: 31,
        democrats: 12,
        republicans: 19,
        other: 0,
        majority: 'R',
        president: 'Dan Patrick (R)',
      },
      house: {
        name: 'House',
        totalSeats: 150,
        democrats: 64,
        republicans: 86,
        other: 0,
        majority: 'R',
        speaker: 'Dade Phelan (R)',
      },
      legislativeSession: {
        name: '89th Legislature (2025)',
        dates: 'Jan 2025 - May 2025',
        isActive: true,
      },
    },
    recentBills: [
      'SB 14 - Gender-affirming care ban for minors (2023)',
      'SB 15 - Sports ban for trans students (2023)',
    ],
    resources: ['Equality Texas', 'ACLU TX', 'Lambda Legal'],
  },
  FL: {
    name: 'Florida',
    abbrev: 'FL',
    score: -3,
    rating: 'Very Restrictive',
    policies: {
      genderAffirmingCare: 'Banned',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'None',
      idDocuments: 'Very Difficult',
      schoolPolicies: 'Restrictive',
    },
    legislature: {
      governor: {
        name: 'Ron DeSantis',
        party: 'R',
        since: '2019',
        lgbtqStance: 'Opposed',
      },
      senate: {
        totalSeats: 40,
        democrats: 13,
        republicans: 27,
        other: 0,
        majority: 'R',
        president: 'Kathleen Passidomo (R)',
      },
      house: {
        name: 'House',
        totalSeats: 120,
        democrats: 36,
        republicans: 84,
        other: 0,
        majority: 'R',
        speaker: 'Daniel Perez (R)',
      },
      legislativeSession: {
        name: '2025 Regular Session',
        dates: 'Mar 2025 - May 2025',
        isActive: true,
      },
    },
    recentBills: [
      "HB 1521 - 'Bathroom bill' (2023)",
      'SB 254 - Gender-affirming care restrictions (2023)',
      "HB 1557 - 'Don't Say Gay' (2022)",
    ],
    resources: ['Equality Florida', 'ACLU FL', 'SAVE'],
  },
  IL: {
    name: 'Illinois',
    abbrev: 'IL',
    score: 2,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    recentBills: [
      'Trans refuge state protections (2023)',
      'Conversion therapy ban (2015)',
    ],
    resources: ['Equality Illinois', 'ACLU IL', 'Pride Action Tank'],
  },
  CO: {
    name: 'Colorado',
    abbrev: 'CO',
    score: 3,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    recentBills: [
      'Trans refuge state law (2023)',
      "Jude's Law - Insurance coverage (2023)",
    ],
    resources: ['One Colorado', 'ACLU CO', 'Inside Out Youth Services'],
  },
  WA: {
    name: 'Washington',
    abbrev: 'WA',
    score: 3,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    recentBills: ['Trans refuge state law (2023)', 'Gender X on IDs (2018)'],
    resources: ['Equal Rights Washington', 'ACLU WA', 'Gender Justice League'],
  },
  TN: {
    name: 'Tennessee',
    abbrev: 'TN',
    score: -3,
    rating: 'Very Restrictive',
    policies: {
      genderAffirmingCare: 'Banned',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'None',
      idDocuments: 'Very Difficult',
      schoolPolicies: 'Restrictive',
    },
    recentBills: [
      'SB 1 - Gender-affirming care ban (2023)',
      'Drag performance restrictions (2023)',
    ],
    resources: ['Tennessee Equality Project', 'ACLU TN', 'OUTMemphis'],
  },
  GA: {
    name: 'Georgia',
    abbrev: 'GA',
    score: -1,
    rating: 'Restrictive',
    policies: {
      genderAffirmingCare: 'Restricted',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'None',
      idDocuments: 'Difficult',
      schoolPolicies: 'Restrictive',
    },
    recentBills: [
      'SB 140 - Gender-affirming care restrictions (2023)',
      'No statewide protections',
    ],
    resources: ['Georgia Equality', 'ACLU GA', 'Lost-n-Found Youth'],
  },
  PA: {
    name: 'Pennsylvania',
    abbrev: 'PA',
    score: 1,
    rating: 'Mixed',
    policies: {
      genderAffirmingCare: 'No Law',
      conversionTherapy: 'Partial Ban',
      nonDiscrimination: 'Partial',
      idDocuments: 'Accessible',
      schoolPolicies: 'Mixed',
    },
    recentBills: [
      'Executive order protections (2023)',
      'Local ordinances vary widely',
    ],
    resources: ['Equality PA', 'ACLU PA', 'Mazzoni Center'],
  },
  OH: {
    name: 'Ohio',
    abbrev: 'OH',
    score: -2,
    rating: 'Restrictive',
    policies: {
      genderAffirmingCare: 'Banned',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'None',
      idDocuments: 'Difficult',
      schoolPolicies: 'Restrictive',
    },
    recentBills: [
      'HB 68 - Gender-affirming care ban (2023)',
      'Trans sports ban (2023)',
    ],
    resources: ['Equality Ohio', 'ACLU OH', 'TransOhio'],
  },
  MA: {
    name: 'Massachusetts',
    abbrev: 'MA',
    score: 3,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    recentBills: [
      'Transgender civil rights law (2016)',
      'Insurance coverage mandate',
    ],
    resources: ['MassEquality', 'GLAD', 'Fenway Health'],
  },
  AZ: {
    name: 'Arizona',
    abbrev: 'AZ',
    score: -1,
    rating: 'Restrictive',
    policies: {
      genderAffirmingCare: 'Restricted',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'Partial',
      idDocuments: 'Difficult',
      schoolPolicies: 'Restrictive',
    },
    recentBills: [
      'SB 1138 - Surgery restrictions for minors (2022)',
      'Sports ban (2022)',
    ],
    resources: ['Equality Arizona', 'ACLU AZ', 'one·n·ten'],
  },
  MN: {
    name: 'Minnesota',
    abbrev: 'MN',
    score: 3,
    rating: 'Protective',
    policies: {
      genderAffirmingCare: 'Protected',
      conversionTherapy: 'Banned',
      nonDiscrimination: 'Comprehensive',
      idDocuments: 'Accessible',
      schoolPolicies: 'Protective',
    },
    recentBills: ['Trans refuge state law (2023)', 'Take Pride Act (2023)'],
    resources: ['OutFront Minnesota', 'ACLU MN', 'Rainbow Health'],
  },
  NC: {
    name: 'North Carolina',
    abbrev: 'NC',
    score: -1,
    rating: 'Restrictive',
    policies: {
      genderAffirmingCare: 'Restricted',
      conversionTherapy: 'No Law',
      nonDiscrimination: 'Partial',
      idDocuments: 'Difficult',
      schoolPolicies: 'Restrictive',
    },
    recentBills: [
      'HB 808 - Gender-affirming care restrictions (2023)',
      'HB 2 repealed but replaced with restrictions',
    ],
    resources: ['Equality NC', 'ACLU NC', 'Campaign for Southern Equality'],
  },
};

// Default data for states not specifically listed
const defaultStatePolicy: Omit<StatePolicy, 'name' | 'abbrev'> = {
  score: 0,
  rating: 'Mixed',
  policies: {
    genderAffirmingCare: 'No Law',
    conversionTherapy: 'No Law',
    nonDiscrimination: 'Partial',
    idDocuments: 'Difficult',
    schoolPolicies: 'Mixed',
  },
  recentBills: ['Check local legislature for updates'],
  resources: ['ACLU', 'Lambda Legal', 'Local LGBTQ+ organizations'],
};

// All US states for the map
const allStates = [
  { abbrev: 'AL', name: 'Alabama' },
  { abbrev: 'AK', name: 'Alaska' },
  { abbrev: 'AZ', name: 'Arizona' },
  { abbrev: 'AR', name: 'Arkansas' },
  { abbrev: 'CA', name: 'California' },
  { abbrev: 'CO', name: 'Colorado' },
  { abbrev: 'CT', name: 'Connecticut' },
  { abbrev: 'DE', name: 'Delaware' },
  { abbrev: 'FL', name: 'Florida' },
  { abbrev: 'GA', name: 'Georgia' },
  { abbrev: 'HI', name: 'Hawaii' },
  { abbrev: 'ID', name: 'Idaho' },
  { abbrev: 'IL', name: 'Illinois' },
  { abbrev: 'IN', name: 'Indiana' },
  { abbrev: 'IA', name: 'Iowa' },
  { abbrev: 'KS', name: 'Kansas' },
  { abbrev: 'KY', name: 'Kentucky' },
  { abbrev: 'LA', name: 'Louisiana' },
  { abbrev: 'ME', name: 'Maine' },
  { abbrev: 'MD', name: 'Maryland' },
  { abbrev: 'MA', name: 'Massachusetts' },
  { abbrev: 'MI', name: 'Michigan' },
  { abbrev: 'MN', name: 'Minnesota' },
  { abbrev: 'MS', name: 'Mississippi' },
  { abbrev: 'MO', name: 'Missouri' },
  { abbrev: 'MT', name: 'Montana' },
  { abbrev: 'NE', name: 'Nebraska' },
  { abbrev: 'NV', name: 'Nevada' },
  { abbrev: 'NH', name: 'New Hampshire' },
  { abbrev: 'NJ', name: 'New Jersey' },
  { abbrev: 'NM', name: 'New Mexico' },
  { abbrev: 'NY', name: 'New York' },
  { abbrev: 'NC', name: 'North Carolina' },
  { abbrev: 'ND', name: 'North Dakota' },
  { abbrev: 'OH', name: 'Ohio' },
  { abbrev: 'OK', name: 'Oklahoma' },
  { abbrev: 'OR', name: 'Oregon' },
  { abbrev: 'PA', name: 'Pennsylvania' },
  { abbrev: 'RI', name: 'Rhode Island' },
  { abbrev: 'SC', name: 'South Carolina' },
  { abbrev: 'SD', name: 'South Dakota' },
  { abbrev: 'TN', name: 'Tennessee' },
  { abbrev: 'TX', name: 'Texas' },
  { abbrev: 'UT', name: 'Utah' },
  { abbrev: 'VT', name: 'Vermont' },
  { abbrev: 'VA', name: 'Virginia' },
  { abbrev: 'WA', name: 'Washington' },
  { abbrev: 'WV', name: 'West Virginia' },
  { abbrev: 'WI', name: 'Wisconsin' },
  { abbrev: 'WY', name: 'Wyoming' },
  { abbrev: 'DC', name: 'Washington D.C.' },
];

type Resource = {
  id: number;
  name: string;
  type: string;
  address: string;
  phone: string;
  distance: string;
};

// Helper function to get Tailwind color class
function getStateColorClass(abbrev: string): string {
  const policy = statePolicies[abbrev];
  if (!policy) return 'bg-gray-300 hover:bg-gray-400';

  switch (policy.rating) {
    case 'Protective':
      return 'bg-green-500 hover:bg-green-600';
    case 'Mixed':
      return 'bg-yellow-400 hover:bg-yellow-500';
    case 'Restrictive':
      return 'bg-orange-500 hover:bg-orange-600';
    case 'Very Restrictive':
      return 'bg-red-600 hover:bg-red-700';
    default:
      return 'bg-gray-300 hover:bg-gray-400';
  }
}

// State Cell Component for the grid map
function StateCell({
  abbrev,
  onClick,
}: {
  abbrev: string;
  onClick: (abbrev: string) => void;
}) {
  const colorClass = getStateColorClass(abbrev);
  const state = allStates.find((s) => s.abbrev === abbrev);

  return (
    <button
      onClick={() => onClick(abbrev)}
      className={`aspect-square rounded ${colorClass} text-white text-[10px] font-bold flex items-center justify-center transition-colors shadow-sm hover:scale-105`}
      title={state?.name || abbrev}
    >
      {abbrev}
    </button>
  );
}

// State Detail View Component
function StateDetailView({
  stateAbbrev,
  onClose,
  onBillClick,
}: {
  stateAbbrev: string;
  onClose: () => void;
  onBillClick: (bill: Bill) => void;
}) {
  const state = allStates.find((s) => s.abbrev === stateAbbrev);
  const policy = statePolicies[stateAbbrev] || {
    ...defaultStatePolicy,
    name: state?.name || stateAbbrev,
    abbrev: stateAbbrev,
  };
  const stateBills = billsData[stateAbbrev] || [];

  const getPolicyColor = (
    status: string,
    policyType?: string
  ): { bg: string; text: string; label: string } => {
    // Special handling for "Banned" which has different meanings per policy
    if (status === 'Banned') {
      // For conversion therapy, "Banned" is good (protective)
      if (policyType === 'conversionTherapy') {
        return { bg: 'bg-green-100', text: 'text-green-700', label: status };
      }
      // For other policies like gender-affirming care, "Banned" is bad (restrictive)
      return { bg: 'bg-red-100', text: 'text-red-700', label: status };
    }

    switch (status) {
      case 'Protected':
      case 'Comprehensive':
      case 'Accessible':
      case 'Protective':
        return { bg: 'bg-green-100', text: 'text-green-700', label: status };
      case 'Partial':
      case 'Partial Ban':
      case 'Mixed':
      case 'No Law':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: status };
      case 'Restricted':
      case 'Difficult':
      case 'Restrictive':
        return { bg: 'bg-orange-100', text: 'text-orange-700', label: status };
      case 'Very Difficult':
      case 'None':
        return { bg: 'bg-red-100', text: 'text-red-700', label: status };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', label: status };
    }
  };

  const ratingColors: Record<string, { bg: string; text: string }> = {
    Protective: { bg: 'bg-green-500', text: 'text-white' },
    Mixed: { bg: 'bg-yellow-400', text: 'text-gray-800' },
    Restrictive: { bg: 'bg-orange-500', text: 'text-white' },
    'Very Restrictive': { bg: 'bg-red-600', text: 'text-white' },
  };

  const ratingStyle = ratingColors[policy.rating] || ratingColors['Mixed'];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-lg ${ratingStyle.bg} ${ratingStyle.text} flex items-center justify-center font-bold text-lg`}
          >
            {stateAbbrev}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {policy.name}
            </h3>
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${ratingStyle.bg} ${ratingStyle.text}`}
            >
              {policy.rating}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Policy Grid */}
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Policy Overview
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries(policy.policies).map(([key, value]) => {
            const colors = getPolicyColor(value, key);
            const labels: Record<string, string> = {
              genderAffirmingCare: 'Gender-Affirming Care',
              conversionTherapy: 'Conversion Therapy',
              nonDiscrimination: 'Non-Discrimination',
              idDocuments: 'ID Documents',
              schoolPolicies: 'School Policies',
            };
            return (
              <div
                key={key}
                className={`p-3 rounded-lg ${colors.bg} ${colors.text}`}
              >
                <p className="text-xs font-medium opacity-75">
                  {labels[key] || key}
                </p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legislative Bodies */}
      {policy.legislature && (
        <div className="p-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <Landmark size={16} className="text-gray-500" />
            State Government
          </h4>

          {/* Governor */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  policy.legislature.governor.party === 'D'
                    ? 'bg-blue-100'
                    : policy.legislature.governor.party === 'R'
                    ? 'bg-red-100'
                    : 'bg-gray-100'
                }`}
              >
                <User
                  size={20}
                  className={
                    policy.legislature.governor.party === 'D'
                      ? 'text-blue-600'
                      : policy.legislature.governor.party === 'R'
                      ? 'text-red-600'
                      : 'text-gray-600'
                  }
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Gov. {policy.legislature.governor.name}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                      policy.legislature.governor.party === 'D'
                        ? 'bg-blue-100 text-blue-700'
                        : policy.legislature.governor.party === 'R'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {policy.legislature.governor.party === 'D'
                      ? 'Democrat'
                      : policy.legislature.governor.party === 'R'
                      ? 'Republican'
                      : 'Independent'}
                  </span>
                  <span className="text-xs text-gray-500">
                    Since {policy.legislature.governor.since}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legislative Session */}
          {policy.legislature.legislativeSession && (
            <div className="mb-4 p-2 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Vote size={14} className="text-amber-600" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-amber-800">
                    {policy.legislature.legislativeSession.name}
                  </p>
                  <p className="text-xs text-amber-600">
                    {policy.legislature.legislativeSession.dates}
                  </p>
                </div>
                {policy.legislature.legislativeSession.isActive && (
                  <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-medium rounded">
                    In Session
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Senate and House */}
          <div className="grid grid-cols-2 gap-3">
            {/* Senate */}
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Building2 size={14} className="text-gray-500" />
                <p className="text-xs font-semibold text-gray-700">
                  State Senate
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1 h-3 rounded-full overflow-hidden bg-gray-100">
                  <div
                    className="h-full bg-blue-500"
                    style={{
                      width: `${
                        (policy.legislature.senate.democrats /
                          policy.legislature.senate.totalSeats) *
                        100
                      }%`,
                    }}
                  />
                  <div
                    className="h-full bg-red-500"
                    style={{
                      width: `${
                        (policy.legislature.senate.republicans /
                          policy.legislature.senate.totalSeats) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-blue-600 font-medium">
                    D: {policy.legislature.senate.democrats}
                  </span>
                  <span className="text-red-600 font-medium">
                    R: {policy.legislature.senate.republicans}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {policy.legislature.senate.totalSeats} seats •{' '}
                  <span
                    className={
                      policy.legislature.senate.majority === 'D'
                        ? 'text-blue-600 font-medium'
                        : 'text-red-600 font-medium'
                    }
                  >
                    {policy.legislature.senate.majority === 'D' ? 'Dem' : 'GOP'}{' '}
                    Majority
                  </span>
                </p>
                {policy.legislature.senate.president && (
                  <p className="text-xs text-gray-400 truncate">
                    Pres: {policy.legislature.senate.president}
                  </p>
                )}
              </div>
            </div>

            {/* House/Assembly */}
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Building2 size={14} className="text-gray-500" />
                <p className="text-xs font-semibold text-gray-700">
                  State {policy.legislature.house.name}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1 h-3 rounded-full overflow-hidden bg-gray-100">
                  <div
                    className="h-full bg-blue-500"
                    style={{
                      width: `${
                        (policy.legislature.house.democrats /
                          policy.legislature.house.totalSeats) *
                        100
                      }%`,
                    }}
                  />
                  <div
                    className="h-full bg-red-500"
                    style={{
                      width: `${
                        (policy.legislature.house.republicans /
                          policy.legislature.house.totalSeats) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-blue-600 font-medium">
                    D: {policy.legislature.house.democrats}
                  </span>
                  <span className="text-red-600 font-medium">
                    R: {policy.legislature.house.republicans}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {policy.legislature.house.totalSeats} seats •{' '}
                  <span
                    className={
                      policy.legislature.house.majority === 'D'
                        ? 'text-blue-600 font-medium'
                        : 'text-red-600 font-medium'
                    }
                  >
                    {policy.legislature.house.majority === 'D' ? 'Dem' : 'GOP'}{' '}
                    Majority
                  </span>
                </p>
                {policy.legislature.house.speaker && (
                  <p className="text-xs text-gray-400 truncate">
                    Speaker: {policy.legislature.house.speaker}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Bills */}
      <div className="p-4 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Recent Legislation
        </h4>
        {stateBills.length > 0 ? (
          <div className="space-y-2">
            {stateBills.map((bill) => {
              const spectrumColors = {
                Supportive: 'bg-green-100 text-green-700 border-green-200',
                Neutral: 'bg-gray-100 text-gray-700 border-gray-200',
                Harmful: 'bg-red-100 text-red-700 border-red-200',
              };
              return (
                <button
                  key={bill.id}
                  onClick={() => onBillClick(bill)}
                  className="w-full p-3 bg-white border border-gray-200 rounded-lg text-left hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-500">
                          {bill.number}
                        </span>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded border ${
                            spectrumColors[bill.spectrum]
                          }`}
                        >
                          {bill.spectrum}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900">
                        {bill.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {bill.status} • {bill.progression}% progression
                      </p>
                    </div>
                    <Sparkles
                      size={16}
                      className="text-gray-300 group-hover:text-purple-400 transition-colors shrink-0 ml-2"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <ul className="space-y-2">
            {policy.recentBills.map((bill, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <FileText size={14} className="text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-600">{bill}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
          <Sparkles size={10} />
          Click a bill to view AI-powered analysis
        </p>
      </div>

      {/* Resources */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Local Resources & Organizations
        </h4>
        <div className="flex flex-wrap gap-2">
          {policy.resources.map((resource, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
            >
              {resource}
            </span>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 flex items-start gap-2">
          <Info size={12} className="shrink-0 mt-0.5" />
          Policy information is summarized for educational purposes. Laws change
          frequently. Consult legal resources for the most current information.
        </p>
      </div>
    </div>
  );
}

// Bill Detail View Component with AI Analysis
function BillDetailView({
  bill,
  onClose,
}: {
  bill: Bill;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'rights' | 'action' | 'details'
  >('overview');
  const [draftLetter, setDraftLetter] = useState<string | null>(null);
  const [isGeneratingLetter, setIsGeneratingLetter] = useState(false);
  const [copied, setCopied] = useState(false);

  // Legal RAG Q&A state
  const [legalQuestion, setLegalQuestion] = useState('');
  const [legalAnswer, setLegalAnswer] = useState<LegalQAResult | null>(null);
  const [isLoadingLegal, setIsLoadingLegal] = useState(false);

  // Generate a draft letter based on bill stance
  const generateLetter = async (stance: 'support' | 'oppose') => {
    setIsGeneratingLetter(true);
    // Simulate AI letter generation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSupport = stance === 'support';
    const letterTemplate = isSupport
      ? `Dear ${bill.sponsors[0]?.name || 'Honorable Legislator'},

I am writing to express my strong SUPPORT for ${bill.number} - ${bill.title}.

As a constituent who cares deeply about LGBTQ+ rights and wellbeing, I believe this legislation is an important step forward for our community. Research shows that ${
          bill.researchEvidence?.studies?.[0]?.finding ||
          'supportive policies lead to better outcomes for LGBTQ+ individuals'
        }.

This bill would help address critical needs in our state and I urge you to continue championing this important cause.

Thank you for your leadership on this issue.

Respectfully,
[Your Name]
[Your Address]
[Your Email]`
      : `Dear ${bill.sponsors[0]?.name || 'Honorable Legislator'},

I am writing to express my strong OPPOSITION to ${bill.number} - ${bill.title}.

As a constituent concerned about the wellbeing of LGBTQ+ individuals in our state, I urge you to reconsider this legislation. Research from ${
          bill.researchEvidence?.studies?.[0]?.journal ||
          'peer-reviewed journals'
        } shows that ${
          bill.researchEvidence?.studies?.[0]?.finding ||
          'similar policies have negative impacts on affected communities'
        }.

The potential health impacts of this legislation are concerning:
${
  bill.researchEvidence?.healthImpacts
    ?.map((h) => `- ${h.description}`)
    .join('\n') || '- Negative mental health outcomes\n- Reduced access to care'
}

I ask that you vote NO on this bill and consider the real human impact of such policies.

Respectfully,
[Your Name]
[Your Address]
[Your Email]`;

    setDraftLetter(letterTemplate);
    setIsGeneratingLetter(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    const text = `${bill.spectrum === 'Harmful' ? '🚨 OPPOSE' : '✅ SUPPORT'} ${
      bill.number
    }: ${bill.title}. ${bill.summary.slice(0, 100)}... #LGBTQ #Policy`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  // Legal RAG Q&A handler
  const handleLegalQuestion = async (question?: string) => {
    const q = question || legalQuestion;
    if (!q.trim()) return;

    setIsLoadingLegal(true);
    // Simulate RAG retrieval delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const queryLower = q.toLowerCase();

    // Match against legal Q&A database
    let match: LegalQAResult | null = null;
    for (const [key, value] of Object.entries(legalQADatabase)) {
      if (
        queryLower.includes(key) ||
        key.split(' ').some((word) => queryLower.includes(word))
      ) {
        match = value;
        break;
      }
    }

    if (match) {
      setLegalAnswer(match);
    } else {
      // Default response for unmatched queries
      setLegalAnswer({
        question: q,
        answer: `I don't have specific information on "${q}" yet. For personalized legal guidance, I recommend contacting one of the legal resources below. They offer free consultations and can address your specific situation.`,
        sources: [
          {
            name: 'Lambda Legal Help Desk',
            url: 'https://lambdalegal.org/helpdesk',
          },
          {
            name: 'Trans Law Center',
            url: 'https://transgenderlawcenter.org/legalinfo',
          },
        ],
        followUp: [
          'What are my healthcare rights?',
          'How do I change my name?',
          'What are my rights at work?',
        ],
      });
    }

    setIsLoadingLegal(false);
    setLegalQuestion('');
  };

  const spectrumColors = {
    Supportive: {
      bg: 'bg-green-500',
      light: 'bg-green-100',
      text: 'text-green-700',
    },
    Neutral: {
      bg: 'bg-gray-500',
      light: 'bg-gray-100',
      text: 'text-gray-700',
    },
    Harmful: { bg: 'bg-red-500', light: 'bg-red-100', text: 'text-red-700' },
  };

  const colors = spectrumColors[bill.spectrum];

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className={`p-4 ${colors.light} border-b border-gray-200`}>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-mono text-gray-600">
                {bill.number}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded ${colors.bg} text-white font-medium`}
              >
                {bill.spectrum}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-gray-200 text-gray-600">
                {bill.status}
              </span>
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {bill.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{bill.summary}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/50 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            <span>Legislative Progress</span>
            <span>{bill.progression}%</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.bg} transition-all`}
              style={{ width: `${bill.progression}%` }}
            />
          </div>
        </div>

        {/* Sponsors */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs text-gray-500">Sponsors:</span>
          {bill.sponsors.map((sponsor, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-0.5 rounded ${
                sponsor.party === 'D'
                  ? 'bg-blue-100 text-blue-700'
                  : sponsor.party === 'R'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {sponsor.name}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs - Consolidated to 4 */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'overview'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Sparkles size={16} />
          Overview
        </button>
        <button
          onClick={() => setActiveTab('rights')}
          className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'rights'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Shield size={16} />
          Your Rights
        </button>
        <button
          onClick={() => setActiveTab('action')}
          className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'action'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Megaphone size={16} />
          Take Action
        </button>
        <button
          onClick={() => setActiveTab('details')}
          className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'details'
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <FileText size={16} />
          Details
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 max-h-[500px] overflow-auto">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* AI Classification Badge */}
            <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-100">
              <Sparkles className="text-purple-500" size={18} />
              <div>
                <p className="text-xs text-purple-600 font-medium">
                  LegalBERT Classification
                </p>
                <p className="text-sm font-semibold text-purple-800">
                  {bill.aiAnalysis.classification}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs text-purple-600">Impact Score</p>
                <p
                  className={`text-lg font-bold ${
                    bill.aiAnalysis.impactScore > 0
                      ? 'text-green-600'
                      : bill.aiAnalysis.impactScore < 0
                      ? 'text-red-600'
                      : 'text-gray-600'
                  }`}
                >
                  {bill.aiAnalysis.impactScore > 0 ? '+' : ''}
                  {bill.aiAnalysis.impactScore}
                </p>
              </div>
            </div>

            {/* Key Provisions */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Key Provisions
              </h4>
              <ul className="space-y-1">
                {bill.aiAnalysis.keyProvisions.map((provision, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <Check
                      size={14}
                      className="text-gray-400 mt-0.5 shrink-0"
                    />
                    {provision}
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Impact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Potential Impact
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {bill.aiAnalysis.potentialImpact}
              </p>
            </div>

            {/* Legal Context */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Legal Context
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {bill.aiAnalysis.legalContext}
              </p>
            </div>

            {/* Recommendation */}
            <div
              className={`p-3 rounded-lg ${
                bill.spectrum === 'Supportive'
                  ? 'bg-green-50 border border-green-200'
                  : bill.spectrum === 'Harmful'
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <h4
                className={`text-sm font-semibold mb-1 ${
                  bill.spectrum === 'Supportive'
                    ? 'text-green-700'
                    : bill.spectrum === 'Harmful'
                    ? 'text-red-700'
                    : 'text-gray-700'
                }`}
              >
                Recommendation
              </h4>
              <p
                className={`text-sm ${
                  bill.spectrum === 'Supportive'
                    ? 'text-green-600'
                    : bill.spectrum === 'Harmful'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                {bill.aiAnalysis.recommendation}
              </p>
            </div>

            {/* Subjects */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Subjects
              </h4>
              <div className="flex flex-wrap gap-1">
                {bill.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Dates */}
            {bill.keyDates && bill.keyDates.length > 0 && (
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays size={16} className="text-amber-600" />
                  <h4 className="text-sm font-semibold text-amber-800">
                    Key Dates
                  </h4>
                </div>
                <div className="space-y-2">
                  {bill.keyDates.map((keyDate, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-2 rounded ${
                        keyDate.isPast
                          ? 'bg-amber-100/50'
                          : 'bg-white border border-amber-200'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {keyDate.isPast ? (
                          <CalendarCheck size={14} className="text-amber-500" />
                        ) : (
                          <CalendarDays size={14} className="text-amber-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-xs font-semibold ${
                            keyDate.isPast ? 'text-amber-600' : 'text-amber-800'
                          }`}
                        >
                          {new Date(keyDate.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                          {!keyDate.isPast && (
                            <span className="ml-2 px-1.5 py-0.5 bg-amber-200 text-amber-700 rounded text-xs font-medium">
                              Upcoming
                            </span>
                          )}
                        </p>
                        <p
                          className={`text-xs mt-0.5 ${
                            keyDate.isPast
                              ? 'text-amber-600/80'
                              : 'text-amber-700'
                          }`}
                        >
                          {keyDate.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DS Technique Note */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Database size={14} className="text-slate-500" />
                <span className="text-xs font-semibold text-slate-600">
                  DS Technique: LegalBERT + LegiScan
                </span>
              </div>
              <p className="text-xs text-slate-500">
                This analysis uses a fine-tuned LegalBERT model trained on
                LegiScan bill data. The model classifies bills by impact type
                and extracts key provisions using Named Entity Recognition
                (NER). Impact scores are predicted based on historical policy
                outcomes.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'action' && (
          <div className="space-y-4">
            {/* Research Evidence Section - moved from Evidence tab */}
            {bill.researchEvidence && (
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 mb-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <BookMarked size={16} />
                  Research Evidence
                </h4>
                <div className="space-y-2">
                  {bill.researchEvidence.studies
                    .slice(0, 2)
                    .map((study, idx) => (
                      <div
                        key={idx}
                        className="p-2 bg-white rounded border border-blue-100"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-blue-600">
                            {study.title}
                          </p>
                          {study.doi && (
                            <a
                              href={`https://doi.org/${study.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 flex-shrink-0"
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">
                          {study.finding}
                        </p>
                        <p className="text-xs text-gray-400">
                          {study.journal}, {study.year}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Action Header */}
            <div
              className={`p-3 rounded-lg ${
                bill.spectrum === 'Harmful'
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-green-50 border border-green-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {bill.spectrum === 'Harmful' ? (
                  <ThumbsDown size={18} className="text-red-600" />
                ) : (
                  <ThumbsUp size={18} className="text-green-600" />
                )}
                <span
                  className={`font-semibold ${
                    bill.spectrum === 'Harmful'
                      ? 'text-red-700'
                      : 'text-green-700'
                  }`}
                >
                  {bill.spectrum === 'Harmful'
                    ? 'Oppose This Bill'
                    : 'Support This Bill'}
                </span>
              </div>
              <p
                className={`text-xs ${
                  bill.spectrum === 'Harmful'
                    ? 'text-red-600'
                    : 'text-green-600'
                }`}
              >
                {bill.spectrum === 'Harmful'
                  ? 'Research shows this bill could harm LGBTQ+ individuals. Take action to oppose it.'
                  : 'This bill supports LGBTQ+ rights. Help ensure it passes by showing your support.'}
              </p>
            </div>

            {/* Contact Sponsor */}
            {bill.sponsorContact && (
              <div className="p-3 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Mail size={14} />
                  Contact the Sponsor
                </h4>
                <div className="text-xs text-gray-600 space-y-1 mb-3">
                  <p>
                    <strong>{bill.sponsorContact.name}</strong>
                  </p>
                  {bill.sponsorContact.district && (
                    <p>{bill.sponsorContact.district}</p>
                  )}
                  {bill.sponsorContact.email && (
                    <p className="flex items-center gap-1">
                      <Mail size={10} />
                      <a
                        href={`mailto:${bill.sponsorContact.email}`}
                        className="text-blue-500 hover:underline"
                      >
                        {bill.sponsorContact.email}
                      </a>
                    </p>
                  )}
                  {bill.sponsorContact.phone && (
                    <p className="flex items-center gap-1">
                      <Phone size={10} />
                      {bill.sponsorContact.phone}
                    </p>
                  )}
                </div>

                {/* Generate Letter Button */}
                <button
                  onClick={() =>
                    generateLetter(
                      bill.spectrum === 'Harmful' ? 'oppose' : 'support'
                    )
                  }
                  disabled={isGeneratingLetter}
                  className={`w-full py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                    bill.spectrum === 'Harmful'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  } disabled:opacity-50`}
                >
                  {isGeneratingLetter ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Generating Letter...
                    </>
                  ) : (
                    <>
                      <PenLine size={14} />
                      Draft{' '}
                      {bill.spectrum === 'Harmful'
                        ? 'Opposition'
                        : 'Support'}{' '}
                      Letter with AI
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Generated Letter */}
            {draftLetter && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-amber-800 flex items-center gap-2">
                    <PenLine size={14} />
                    Your Draft Letter
                  </h4>
                  <button
                    onClick={() => copyToClipboard(draftLetter)}
                    className="text-xs px-2 py-1 bg-amber-200 hover:bg-amber-300 text-amber-800 rounded flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check size={12} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <ClipboardCopy size={12} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-amber-700 whitespace-pre-wrap bg-white p-3 rounded border border-amber-200 max-h-48 overflow-auto">
                  {draftLetter}
                </pre>
                <div className="flex gap-2 mt-2">
                  <a
                    href={`mailto:${
                      bill.sponsorContact?.email || ''
                    }?subject=${encodeURIComponent(
                      `RE: ${bill.number} - ${bill.title}`
                    )}&body=${encodeURIComponent(draftLetter)}`}
                    className="flex-1 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-1"
                  >
                    <Mail size={12} />
                    Send via Email
                  </a>
                  <button
                    onClick={() => {
                      const blob = new Blob([draftLetter], {
                        type: 'text/plain',
                      });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `letter-${bill.number.replace(
                        /\s/g,
                        '-'
                      )}.txt`;
                      a.click();
                    }}
                    className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-1"
                  >
                    <Download size={12} />
                    Download
                  </button>
                </div>
              </div>
            )}

            {/* Share & Organize */}
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Share2 size={14} />
                Share & Organize
              </h4>

              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  onClick={shareOnTwitter}
                  className="py-2 bg-sky-500 hover:bg-sky-600 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-1"
                >
                  <Twitter size={12} />
                  Share on X
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `${bill.spectrum === 'Harmful' ? '🚨' : '✅'} ${
                        bill.number
                      }: ${bill.title}\n\n${
                        bill.summary
                      }\n\nTake action: Contact ${
                        bill.sponsors[0]?.name || 'your representative'
                      }`
                    )
                  }
                  className="py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-1"
                >
                  <Link2 size={12} />
                  Copy Summary
                </button>
              </div>

              <div className="p-2 bg-gray-50 rounded text-xs text-gray-600">
                <p className="font-medium mb-1">Ways to amplify your voice:</p>
                <ul className="space-y-1 text-gray-500">
                  <li>• Share on social media with #LGBTQ hashtags</li>
                  <li>• Contact local advocacy orgs (Equality Texas, HRC)</li>
                  <li>• Attend town halls and public hearings</li>
                  <li>• Write letters to the editor</li>
                  <li>• Organize with community members</li>
                </ul>
              </div>
            </div>

            {/* DS Technique Note */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Database size={14} className="text-slate-500" />
                <span className="text-xs font-semibold text-slate-600">
                  DS Technique: LLM Letter Generation
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Letters are generated using GPT-4 fine-tuned on effective
                advocacy communications. The model incorporates research
                evidence, bill specifics, and persuasive writing techniques.
                Sentiment analysis ensures appropriate tone for support/oppose
                stances.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div className="space-y-4">
            {/* Bill Text Section */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FileText size={16} className="text-gray-600" />
                Bill Text
              </h4>
              <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono bg-white p-3 rounded-lg max-h-40 overflow-auto">
                {bill.fullText}
              </pre>
            </div>

            {/* History Timeline */}
            <div className="p-4 bg-white rounded-xl border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Clock size={16} className="text-gray-600" />
                Legislative History
              </h4>
              <div className="space-y-2">
                {bill.history.map((entry, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 pb-2 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-16 shrink-0">
                      <p className="text-xs font-medium text-gray-500">
                        {entry.date}
                      </p>
                      {entry.chamber && (
                        <p className="text-xs text-gray-400">{entry.chamber}</p>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{entry.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Bills */}
            {bill.similarBills.length > 0 && (
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="text-sm font-semibold text-amber-800 mb-3 flex items-center gap-2">
                  <GitFork size={16} />
                  Similar Bills (Copycat Detection)
                </h4>
                <div className="space-y-1">
                  {bill.similarBills.map((similar, idx) => (
                    <p key={idx} className="text-sm text-amber-700">
                      {similar}
                    </p>
                  ))}
                </div>
                <p className="text-xs text-amber-600 mt-2 italic">
                  Identified using BERT embeddings + cosine similarity
                </p>
              </div>
            )}

            {/* DS Insights Section */}
            <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2">
                <Brain size={18} className="text-indigo-600" />
                <span className="font-semibold text-indigo-800">
                  Data Science Insights
                </span>
              </div>
              <p className="text-xs text-indigo-600 mt-1">
                ML models trained on historical legislative data
              </p>
            </div>

            {/* 1. Bill Passage Prediction */}
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Percent size={16} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Bill Passage Prediction
                  </h4>
                  <p className="text-xs text-gray-500">
                    Classification & Regression Models
                  </p>
                </div>
              </div>

              {/* Mock Predictions */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">
                    Likelihood to Pass
                  </p>
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-2xl font-bold ${
                        bill.spectrum === 'Supportive'
                          ? 'text-amber-500'
                          : 'text-emerald-500'
                      }`}
                    >
                      {bill.spectrum === 'Supportive' ? '34%' : '78%'}
                    </span>
                    <span className="text-xs text-gray-400 mb-1">
                      confidence
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${
                        bill.spectrum === 'Supportive'
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                      }`}
                      style={{
                        width: bill.spectrum === 'Supportive' ? '34%' : '78%',
                      }}
                    />
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">
                    Predicted Time to Pass
                  </p>
                  <div className="flex items-end gap-2">
                    <Timer size={16} className="text-blue-500" />
                    <span className="text-2xl font-bold text-blue-600">
                      {bill.spectrum === 'Supportive' ? '18+' : '6-9'}
                    </span>
                    <span className="text-xs text-gray-400 mb-1">months</span>
                  </div>
                </div>
              </div>

              {/* Stage Probabilities */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 mb-2">
                  Stage Progression Probability
                </p>
                <div className="space-y-1.5">
                  {[
                    {
                      stage: 'Committee',
                      prob: bill.spectrum === 'Supportive' ? 45 : 92,
                    },
                    {
                      stage: 'Floor Vote',
                      prob: bill.spectrum === 'Supportive' ? 28 : 75,
                    },
                    {
                      stage: 'Other Chamber',
                      prob: bill.spectrum === 'Supportive' ? 18 : 62,
                    },
                    {
                      stage: 'Governor Sign',
                      prob: bill.spectrum === 'Supportive' ? 12 : 55,
                    },
                  ].map((item) => (
                    <div key={item.stage} className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-24">
                        {item.stage}
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-400"
                          style={{ width: `${item.prob}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600 w-10">
                        {item.prob}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Administration Factor */}
              <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-xs font-medium text-amber-700 mb-1">
                  Historical Administration Analysis
                </p>
                <p className="text-xs text-amber-600">
                  Similar bills under{' '}
                  <strong>
                    {bill.state === 'TX' ? 'R-controlled' : 'D-controlled'}
                  </strong>{' '}
                  legislatures:{' '}
                  {bill.spectrum === 'Harmful'
                    ? '82% passage rate'
                    : '23% passage rate'}
                </p>
              </div>

              {/* DS Technique */}
              <div className="mt-3 p-2 bg-slate-50 rounded border border-slate-200">
                <p className="text-xs text-slate-600">
                  <strong>Techniques:</strong> XGBoost classifier, Survival
                  analysis (Cox regression), Features: bill text embeddings,
                  sponsor party, committee assignment, state political lean,
                  session timing
                </p>
              </div>
            </div>

            {/* 2. Bill Similarity Network */}
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-violet-100 rounded-lg">
                  <GitFork size={16} className="text-violet-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Bill Similarity Network
                  </h4>
                  <p className="text-xs text-gray-500">
                    Text Embeddings & Graph Analysis
                  </p>
                </div>
              </div>

              {/* Mini Network Visualization */}
              <div className="relative h-40 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg mb-3 overflow-hidden">
                {/* Central Bill Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-10">
                  {bill.number.split(' ')[0]}
                </div>

                {/* Connected Bills */}
                {[
                  { x: '20%', y: '30%', label: 'FL HB1521', sim: 94 },
                  { x: '75%', y: '25%', label: 'TN SB1', sim: 87 },
                  { x: '15%', y: '70%', label: 'AR HB1570', sim: 82 },
                  { x: '80%', y: '65%', label: 'AL SB184', sim: 79 },
                  { x: '50%', y: '15%', label: 'MS HB1125', sim: 76 },
                ].map((node, i) => (
                  <React.Fragment key={i}>
                    {/* Connection Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={node.x}
                        y2={node.y}
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                      />
                    </svg>
                    {/* Node */}
                    <div
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-violet-300 rounded-full px-2 py-1 shadow-sm"
                      style={{ left: node.x, top: node.y }}
                    >
                      <p className="text-xs font-medium text-violet-700">
                        {node.label}
                      </p>
                      <p className="text-xs text-violet-400">{node.sim}%</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Similar Bills List */}
              <div className="space-y-2 mb-3">
                <p className="text-xs font-medium text-gray-600">
                  Most Similar Bills (by text embedding)
                </p>
                {[
                  {
                    bill: 'FL HB1521',
                    title: 'Facility Requirements Based on Sex',
                    sim: 94,
                  },
                  {
                    bill: 'TN SB1',
                    title: 'Gender-Affirming Care Restrictions',
                    sim: 87,
                  },
                  {
                    bill: 'AR HB1570',
                    title: 'SAFE Act',
                    sim: 82,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <div>
                      <span className="text-xs font-medium text-gray-700">
                        {item.bill}
                      </span>
                      <span className="text-xs text-gray-400 ml-2">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-violet-600">
                      {item.sim}% match
                    </span>
                  </div>
                ))}
              </div>

              {/* DS Technique */}
              <div className="p-2 bg-slate-50 rounded border border-slate-200">
                <p className="text-xs text-slate-600">
                  <strong>Techniques:</strong> BERT/LegalBERT embeddings, Cosine
                  similarity, Hierarchical clustering, Force-directed graph
                  layout, Community detection (Louvain)
                </p>
              </div>
            </div>

            {/* 3. Similar States Comparison */}
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-rose-100 rounded-lg">
                  <Activity size={16} className="text-rose-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    What Similar States Look Like
                  </h4>
                  <p className="text-xs text-gray-500">
                    Resource availability in states with similar policies
                  </p>
                </div>
              </div>

              {/* Descriptive Comparison */}
              <div className="p-3 bg-gray-50 rounded-lg mb-3">
                <p className="text-xs font-medium text-gray-600 mb-2">
                  {bill.spectrum === 'Harmful'
                    ? 'States with restrictive policies tend to have:'
                    : 'States with protective policies tend to have:'}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-700">
                        Affirming Healthcare Facilities
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        bill.spectrum === 'Harmful'
                          ? 'text-rose-600'
                          : 'text-emerald-600'
                      }`}
                    >
                      {bill.spectrum === 'Harmful'
                        ? '2.3 per 100K'
                        : '5.8 per 100K'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-700">
                        LGBTQ+ Support Groups
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        bill.spectrum === 'Harmful'
                          ? 'text-rose-600'
                          : 'text-emerald-600'
                      }`}
                    >
                      {bill.spectrum === 'Harmful'
                        ? '1.1 per 100K'
                        : '3.4 per 100K'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home size={14} className="text-gray-500" />
                      <span className="text-sm text-gray-700">
                        Community Centers
                      </span>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        bill.spectrum === 'Harmful'
                          ? 'text-rose-600'
                          : 'text-emerald-600'
                      }`}
                    >
                      {bill.spectrum === 'Harmful'
                        ? '0.4 per 100K'
                        : '1.2 per 100K'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">
                  Based on {bill.similarBills?.length || 3} states with similar
                  legislation
                </p>
              </div>

              {/* Actionable Next Steps */}
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 mb-3">
                <p className="text-xs font-semibold text-amber-800 mb-2 flex items-center gap-1">
                  <Target size={12} />3 Things You Can Do With This Info
                </p>
                <ol className="text-xs text-amber-700 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1.</span>
                    <span>
                      <strong>Find resources now</strong> — Use our Resource
                      Locator to see what's available in your area today
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">2.</span>
                    <span>
                      <strong>Compare states</strong> — If considering
                      relocation, see the Policy Navigator map for
                      state-by-state comparison
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">3.</span>
                    <span>
                      <strong>Take action</strong> — Contact your legislators
                      using the draft letter tool above
                    </span>
                  </li>
                </ol>
              </div>

              {/* Data Sources */}
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                  SAMHSA Treatment Locator
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                  CenterLink Directory
                </span>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                  MAP Policy Data
                </span>
              </div>

              {/* DS Technique - Honest framing */}
              <div className="p-2 bg-slate-50 rounded border border-slate-200">
                <p className="text-xs text-slate-600">
                  <strong>Method:</strong> Cross-sectional comparison of
                  resource availability across states grouped by policy
                  environment. Correlation, not causation—many factors influence
                  resource availability.
                </p>
              </div>
            </div>

            {/* Summary DS Techniques Card */}
            <div className="p-3 bg-indigo-100 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 size={14} className="text-indigo-600" />
                <span className="text-xs font-semibold text-indigo-800">
                  Data Pipeline Summary
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="font-medium text-indigo-700">Input Data</p>
                  <p className="text-indigo-600">
                    LegiScan bills, SAMHSA, Census, MAP
                  </p>
                </div>
                <div>
                  <p className="font-medium text-indigo-700">Models</p>
                  <p className="text-indigo-600">
                    XGBoost, BERT, Graph Neural Networks
                  </p>
                </div>
                <div>
                  <p className="font-medium text-indigo-700">Outputs</p>
                  <p className="text-indigo-600">
                    Predictions, Similarity, Comparisons
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rights' && (
          <div className="space-y-4">
            {/* Personalized Impact */}
            <div
              className={`p-4 rounded-xl border ${
                bill.spectrum === 'Harmful'
                  ? 'bg-rose-50 border-rose-200'
                  : 'bg-emerald-50 border-emerald-200'
              }`}
            >
              <h4
                className={`text-sm font-semibold mb-2 flex items-center gap-2 ${
                  bill.spectrum === 'Harmful'
                    ? 'text-rose-800'
                    : 'text-emerald-800'
                }`}
              >
                <AlertCircle size={16} />
                What This Means For You
              </h4>
              <p
                className={`text-sm ${
                  bill.spectrum === 'Harmful'
                    ? 'text-rose-700'
                    : 'text-emerald-700'
                }`}
              >
                {bill.spectrum === 'Harmful'
                  ? `This ${
                      bill.status === 'Enacted' ? 'law' : 'bill'
                    } may restrict access to ${
                      bill.subjects.includes('Healthcare')
                        ? 'gender-affirming healthcare'
                        : bill.subjects.includes('Public Facilities')
                        ? 'public facilities matching your gender identity'
                        : 'certain protections'
                    } in ${bill.state}. ${
                      bill.status === 'Enacted'
                        ? 'It is currently in effect.'
                        : 'It has not yet passed—there may still be time to take action.'
                    }`
                  : `This ${
                      bill.status === 'Enacted' ? 'law' : 'bill'
                    } provides protections for LGBTQ+ individuals in ${
                      bill.state
                    }. ${
                      bill.status === 'Enacted'
                        ? 'These protections are currently in effect.'
                        : 'If passed, it would expand your rights.'
                    }`}
              </p>
            </div>

            {/* AI Explainability - Why This Classification */}
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="text-sm font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Brain size={16} />
                Why We Classified This as "{bill.spectrum}"
              </h4>
              <div className="space-y-2 text-sm text-purple-700">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs bg-purple-200 px-1.5 py-0.5 rounded">
                    1
                  </span>
                  <span>
                    <strong>Key provisions detected:</strong>{' '}
                    {bill.aiAnalysis.keyProvisions.slice(0, 2).join('; ')}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs bg-purple-200 px-1.5 py-0.5 rounded">
                    2
                  </span>
                  <span>
                    <strong>Impact score:</strong>{' '}
                    {bill.aiAnalysis.impactScore > 0 ? '+' : ''}
                    {bill.aiAnalysis.impactScore}/5 based on affected
                    populations and scope
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs bg-purple-200 px-1.5 py-0.5 rounded">
                    3
                  </span>
                  <span>
                    <strong>Similar to:</strong>{' '}
                    {bill.similarBills.length > 0
                      ? bill.similarBills[0]
                      : 'No similar bills found'}{' '}
                    (pattern matching)
                  </span>
                </div>
              </div>
              <div className="mt-3 p-2 bg-white/50 rounded-lg">
                <p className="text-xs text-purple-600">
                  <strong>Model:</strong> LegalBERT fine-tuned on 10K+ LGBTQ+
                  bills from LegiScan. Classification confidence:{' '}
                  {bill.spectrum === 'Harmful'
                    ? '94%'
                    : bill.spectrum === 'Supportive'
                    ? '91%'
                    : '78%'}
                </p>
              </div>
            </div>

            {/* Know Your Rights Q&A */}
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MessageCircle size={16} className="text-blue-500" />
                Common Questions
              </h4>
              <div className="space-y-2">
                {[
                  {
                    q:
                      bill.spectrum === 'Harmful'
                        ? 'Can I still access care if this passes?'
                        : 'What new protections does this give me?',
                    a:
                      bill.spectrum === 'Harmful'
                        ? `Options may include: out-of-state telehealth, refuge states (CA, MN, CO), or legal challenges. See legal resources below.`
                        : `This law ${
                            bill.status === 'Enacted'
                              ? 'provides'
                              : 'would provide'
                          }: ${bill.aiAnalysis.keyProvisions[0].toLowerCase()}.`,
                  },
                  {
                    q: 'Is this law being challenged in court?',
                    a:
                      bill.aiAnalysis.legalContext ||
                      'Legal status information not available for this bill.',
                  },
                  {
                    q:
                      bill.spectrum === 'Harmful'
                        ? 'What are my options if I live here?'
                        : "How do I know if I'm protected?",
                    a:
                      bill.spectrum === 'Harmful'
                        ? 'Contact one of the legal organizations below for personalized guidance on your situation.'
                        : 'These protections apply statewide. Contact legal aid if you experience discrimination.',
                  },
                ].map((item, idx) => (
                  <details key={idx} className="group">
                    <summary className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900 py-2">
                      <ChevronDown
                        size={14}
                        className="group-open:rotate-180 transition-transform"
                      />
                      {item.q}
                    </summary>
                    <p className="text-sm text-gray-600 pl-6 pb-2">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Legal RAG Q&A Chatbot */}
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
              <h4 className="text-sm font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                <MessageCircle size={16} />
                Ask About Your Rights
                <span className="text-xs font-normal px-2 py-0.5 bg-indigo-200 rounded-full">
                  RAG-Powered
                </span>
              </h4>

              {/* Input */}
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={legalQuestion}
                  onChange={(e) => setLegalQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLegalQuestion()}
                  placeholder="e.g., Can I still access care? What are my rights at school?"
                  className="flex-1 px-3 py-2 text-sm border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button
                  onClick={() => handleLegalQuestion()}
                  disabled={isLoadingLegal || !legalQuestion.trim()}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoadingLegal ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  Ask
                </button>
              </div>

              {/* Quick Questions */}
              <div className="flex flex-wrap gap-1 mb-3">
                {[
                  'access care',
                  'rights school',
                  'name change',
                  'workplace',
                  'insurance',
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleLegalQuestion(q)}
                    className="text-xs px-2 py-1 bg-white border border-indigo-200 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    {q === 'access care'
                      ? '💊 Healthcare access'
                      : q === 'rights school'
                      ? '🏫 School rights'
                      : q === 'name change'
                      ? '📝 Name/ID change'
                      : q === 'workplace'
                      ? '💼 Workplace rights'
                      : '🏥 Insurance coverage'}
                  </button>
                ))}
              </div>

              {/* Response */}
              {legalAnswer && (
                <div className="p-3 bg-white rounded-lg border border-indigo-100">
                  <p className="text-sm text-gray-700 mb-3">
                    {legalAnswer.answer}
                  </p>

                  {/* Sources */}
                  {legalAnswer.sources.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-gray-500 mb-1">
                        Sources:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {legalAnswer.sources.map((src, idx) => (
                          <a
                            key={idx}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100 flex items-center gap-1"
                          >
                            {src.name}
                            <ExternalLink size={10} />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Follow-up Questions */}
                  {legalAnswer.followUp.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">
                        Related questions:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {legalAnswer.followUp.map((fq, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setLegalQuestion(fq);
                              handleLegalQuestion(fq);
                            }}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                          >
                            {fq}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DS Technique note */}
              <p className="text-xs text-indigo-500 mt-2 italic">
                Retrieval-Augmented Generation over legal FAQ corpus from Lambda
                Legal, TLC, ACLU
              </p>
            </div>

            {/* Legal Resources */}
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="text-sm font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Scale size={16} />
                Free Legal Resources
              </h4>
              <div className="grid gap-2">
                {[
                  {
                    name: 'Lambda Legal',
                    desc: 'LGBTQ+ legal defense & advocacy',
                    url: 'https://lambdalegal.org/helpdesk',
                    phone: '1-866-542-8336',
                    focus: 'All LGBTQ+ legal issues',
                  },
                  {
                    name: 'Transgender Law Center',
                    desc: 'Trans-specific legal support',
                    url: 'https://transgenderlawcenter.org/legalinfo',
                    phone: '1-415-865-0176',
                    focus: 'Healthcare, ID documents, discrimination',
                  },
                  {
                    name: `ACLU ${bill.state}`,
                    desc: 'State-specific civil liberties',
                    url: `https://aclu.org/affiliates?state=${bill.state}`,
                    phone: null,
                    focus: 'Know your rights, legal intake',
                  },
                  {
                    name: 'GLBTQ Legal Advocates (GLAD)',
                    desc: 'New England & national impact',
                    url: 'https://glad.org/know-your-rights',
                    phone: '1-800-455-4523',
                    focus: 'Legal info line, court cases',
                  },
                ].map((org, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-lg border border-blue-100"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {org.name}
                        </p>
                        <p className="text-xs text-gray-500">{org.desc}</p>
                        <p className="text-xs text-blue-600 mt-1">
                          {org.focus}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <a
                          href={org.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors flex items-center gap-1"
                        >
                          <ExternalLink size={10} />
                          Website
                        </a>
                        {org.phone && (
                          <a
                            href={`tel:${org.phone}`}
                            className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors flex items-center gap-1"
                          >
                            <Phone size={10} />
                            Call
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DS Technique Explanation */}
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-600">
                <strong>How this works:</strong> Bill text → LegalBERT extracts
                affected rights & populations → RAG retrieves relevant legal FAQ
                content → Personalized impact based on bill status &
                jurisdiction. Legal resources matched by state and issue type.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Prototype() {
  const [activeView, setActiveView] = useState('resources');
  const [zipcode, setZipcode] = useState('');
  const [searchedLocation, setSearchedLocation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);
  const [activeFilters, setActiveFilters] = useState([
    'clinic',
    'support',
    'community',
  ]);
  const [searchRadius, setSearchRadius] = useState<number>(5); // miles
  const [showGeospatialPanel, setShowGeospatialPanel] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );
  const [nlpAnalysis, setNlpAnalysis] = useState<NLPAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string>('');
  const [qaResponse, setQaResponse] = useState<QAItem | null>(null);
  const [isLoadingQA, setIsLoadingQA] = useState(false);
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [aiSearchResult, setAiSearchResult] = useState<AISearchResult | null>(
    null
  );
  const [isSearching, setIsSearching] = useState(false);
  const [aiQueryType, setAiQueryType] = useState<'resources' | 'compare'>(
    'resources'
  );
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [showDSTechniques, setShowDSTechniques] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedBill, setSelectedBill] = useState<Bill | null>(null);

  const handleZipcodeSearch = async () => {
    if (!zipcode.trim()) return;

    setIsLoading(true);
    // Simulate search delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSearchedLocation(zipcode);
    setResources(sampleResources);
    setSelectedResource(null);
    setNlpAnalysis(null);
    setIsLoading(false);
  };

  const handleSelectResource = (resource: Resource) => {
    setSelectedResource(resource);
    setNlpAnalysis(null);
    setSelectedQuestion('');
    setQaResponse(null);
  };

  const handleGetInfo = async () => {
    if (!selectedResource) return;

    setIsAnalyzing(true);
    // Simulate NLP analysis delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setNlpAnalysis(nlpAnalysisData[selectedResource.id] || null);
    setIsAnalyzing(false);
  };

  const handleCloseAnalysis = () => {
    setNlpAnalysis(null);
    setSelectedQuestion('');
    setQaResponse(null);
  };

  const handleQuestionSelect = async (questionId: string) => {
    if (!selectedResource || !questionId) {
      setSelectedQuestion('');
      setQaResponse(null);
      return;
    }

    setSelectedQuestion(questionId);
    setIsLoadingQA(true);

    // Simulate NLP response delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const qa = chatbotQA[selectedResource.id]?.find((q) => q.id === questionId);
    setQaResponse(qa || null);
    setIsLoadingQA(false);
  };

  const handleAISearch = async () => {
    if (!aiSearchQuery.trim()) return;

    setIsSearching(true);
    setSelectedResource(null);
    setNlpAnalysis(null);
    // Clear previous results
    setAiSearchResult(null);
    setComparisonResult(null);

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const queryLower = aiSearchQuery.toLowerCase();

    if (aiQueryType === 'resources') {
      // Resource search logic
      const match = aiSearchQueries.find(
        (q) =>
          queryLower.includes(q.query) ||
          q.query.split(' ').some((word) => queryLower.includes(word))
      );

      if (match) {
        setAiSearchResult(match);
        const matchingResources = sampleResources.filter((r) =>
          match.matchingResourceIds.includes(r.id)
        );
        setResources(matchingResources);
        setSearchedLocation('AI Search');
      } else {
        setAiSearchResult({
          query: aiSearchQuery,
          summary: 'Showing all resources in your area',
          matchingResourceIds: [1, 2, 3, 4, 5, 6],
          details:
            "I couldn't find a specific match for your query, but here are all LGBTQ+ affirming resources in your area. Try searching for specific services like 'free STI testing', 'hormone therapy', 'youth support', or 'free counseling'.",
        });
        setResources(sampleResources);
        setSearchedLocation('AI Search');
      }
    } else if (aiQueryType === 'compare') {
      // Comparison logic
      const match = comparisonQueries.find(
        (q) =>
          queryLower.includes(q.query) ||
          q.query.split(' ').some((word) => queryLower.includes(word))
      );

      if (match) {
        setComparisonResult(match);
      } else {
        setComparisonResult({
          query: aiSearchQuery,
          title: 'Comparison not found',
          comparison: {
            optionA: { name: 'Option A', points: ['No data available'] },
            optionB: { name: 'Option B', points: ['No data available'] },
          },
          recommendation:
            "Try comparing: 'PrEP vs PEP', 'support group vs therapy', 'clinic A vs clinic B', or 'California vs Texas LGBTQ'.",
        });
      }
    }

    setIsSearching(false);
  };

  const handleAISearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAISearch();
    }
  };

  const clearAISearch = () => {
    setAiSearchResult(null);
    setComparisonResult(null);
    setAiSearchQuery('');
    setResources([]);
    setSearchedLocation(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleZipcodeSearch();
    }
  };

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredResources = resources.filter((r) =>
    activeFilters.includes(r.type)
  );

  const navItems = [
    { id: 'resources', label: 'Resource Locator', Icon: MapPin },
    { id: 'policy', label: 'Policy Navigator', Icon: FileText },
    { id: 'crisis', label: 'Crisis Hotline', Icon: Phone },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Back to Main */}
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
        >
          <ArrowLeft size={16} />
          Back to Main
        </Link>

        {/* Logo/Brand */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-semibold text-gray-800">Arc Radius</h1>
          <p className="text-sm text-gray-500 mt-1">Find your safe space</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex flex-col items-center gap-2 px-4 py-5 rounded-lg text-center transition-all ${
                activeView === item.id
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.Icon size={24} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">You are not alone</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl">
          {activeView === 'resources' && (
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Resource Locator
                </h2>
                <p className="text-gray-500">
                  Find affirming resources near you
                </p>
              </div>

              {/* Data Sources Panel */}
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Database size={14} className="text-blue-600" />
                  <span className="text-xs font-semibold text-blue-800">
                    Data Sources for Resource Locator
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 bg-white rounded border border-blue-100">
                    <p className="font-semibold text-blue-700 mb-1">
                      SAMHSA Treatment Locator
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> ZIP code,
                      facility type filters
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> Mental health
                      & substance abuse treatment facilities with LGBTQ+
                      services flag
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-100">
                    <p className="font-semibold text-blue-700 mb-1">
                      Findhelp API
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> Location,
                      service category (food, housing, transit)
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> Social
                      services, community programs, support groups with
                      eligibility info
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded border border-blue-100">
                    <p className="font-semibold text-blue-700 mb-1">
                      CenterLink Directory
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> State/city
                      location
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> Verified
                      LGBTQ+ community centers, services offered, contact info
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Chatbot Search */}
              <div className="mb-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      AI Assistant
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDSTechniques(!showDSTechniques)}
                    className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
                  >
                    <Info size={12} />
                    DS Techniques
                  </button>
                </div>

                {/* Query Type Tabs */}
                <div className="flex gap-1 mb-3 p-1 bg-gray-100 rounded-lg">
                  <button
                    onClick={() => {
                      setAiQueryType('resources');
                      clearAISearch();
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                      aiQueryType === 'resources'
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <MapPin size={14} />
                    Find Resources
                  </button>
                  <button
                    onClick={() => {
                      setAiQueryType('compare');
                      clearAISearch();
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                      aiQueryType === 'compare'
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <GitCompare size={14} />
                    Compare
                  </button>
                </div>

                {/* Search Input */}
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Search
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={aiSearchQuery}
                      onChange={(e) => setAiSearchQuery(e.target.value)}
                      onKeyPress={handleAISearchKeyPress}
                      placeholder={
                        aiQueryType === 'resources'
                          ? 'e.g., free STI testing, hormone therapy, youth support...'
                          : 'e.g., PrEP vs PEP, support group vs therapy...'
                      }
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                  </div>
                  <button
                    onClick={handleAISearch}
                    disabled={isSearching || !aiSearchQuery.trim()}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-400 flex items-center gap-2"
                  >
                    {isSearching ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                  </button>
                </div>

                {/* DS Techniques Panel */}
                {showDSTechniques && (
                  <div className="mt-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-700">
                        Data Science Architecture
                      </h4>
                      <button
                        onClick={() => setShowDSTechniques(false)}
                        className="p-1 hover:bg-slate-200 rounded"
                      >
                        <X size={14} className="text-slate-400" />
                      </button>
                    </div>

                    <div className="space-y-3 text-xs">
                      {/* Query Router */}
                      <div className="flex items-start gap-2">
                        <div className="p-1.5 bg-blue-100 rounded">
                          <Cpu size={14} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">
                            Query Router (NLP Classifier)
                          </p>
                          <p className="text-slate-500">
                            DistilBERT classifies intent → routes to appropriate
                            pipeline
                          </p>
                        </div>
                      </div>

                      {/* Resource Search */}
                      <div className="flex items-start gap-2">
                        <div className="p-1.5 bg-green-100 rounded">
                          <MapPin size={14} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">
                            Resource Search (Embedding Similarity)
                          </p>
                          <p className="text-slate-500">
                            sentence-transformers → vector DB → filtered results
                          </p>
                        </div>
                      </div>

                      {/* Health RAG */}
                      <div className="flex items-start gap-2">
                        <div className="p-1.5 bg-purple-100 rounded">
                          <Database size={14} className="text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">
                            Health Info (RAG Pipeline)
                          </p>
                          <p className="text-slate-500">
                            Clinical guidelines → chunk retrieval → LLM
                            synthesis → cited response
                          </p>
                        </div>
                      </div>

                      {/* Comparison */}
                      <div className="flex items-start gap-2">
                        <div className="p-1.5 bg-orange-100 rounded">
                          <Layers size={14} className="text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">
                            Comparison (Structured Extraction)
                          </p>
                          <p className="text-slate-500">
                            Entity extraction → knowledge graph → comparison
                            generation
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <p className="text-slate-400 italic">
                          Demo uses hardcoded responses. Production would use
                          LangChain/LlamaIndex with real embeddings.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Resource Search Result */}
                {aiSearchResult && aiQueryType === 'resources' && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <MapPin
                          size={16}
                          className="text-green-500 mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {aiSearchResult.summary}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {aiSearchResult.details}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={clearAISearch}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                      >
                        <X size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Comparison Result */}
                {comparisonResult && aiQueryType === 'compare' && (
                  <div className="mt-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <GitCompare size={16} className="text-orange-500" />
                        <span className="text-sm font-medium text-gray-800">
                          {comparisonResult.title}
                        </span>
                      </div>
                      <button
                        onClick={clearAISearch}
                        className="p-1 hover:bg-orange-100 rounded transition-colors"
                      >
                        <X size={14} className="text-orange-400" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      {/* Option A */}
                      <div className="p-3 bg-white rounded-lg border border-orange-100">
                        <h5 className="text-xs font-semibold text-gray-700 mb-2">
                          {comparisonResult.comparison.optionA.name}
                        </h5>
                        <ul className="space-y-1">
                          {comparisonResult.comparison.optionA.points.map(
                            (point, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-start gap-1"
                              >
                                <span className="text-orange-400 mt-0.5">
                                  •
                                </span>
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Option B */}
                      <div className="p-3 bg-white rounded-lg border border-orange-100">
                        <h5 className="text-xs font-semibold text-gray-700 mb-2">
                          {comparisonResult.comparison.optionB.name}
                        </h5>
                        <ul className="space-y-1">
                          {comparisonResult.comparison.optionB.points.map(
                            (point, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-600 flex items-start gap-1"
                              >
                                <span className="text-orange-400 mt-0.5">
                                  •
                                </span>
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="p-2 bg-orange-100 rounded">
                      <p className="text-xs text-orange-800">
                        <strong>Recommendation:</strong>{' '}
                        {comparisonResult.recommendation}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Zipcode Search */}
              <div className="mb-4 flex gap-2">
                <input
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Or enter zipcode for all resources..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <button
                  onClick={handleZipcodeSearch}
                  disabled={isLoading}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-400"
                >
                  {isLoading ? 'Searching...' : 'Search'}
                </button>
              </div>

              {/* Filters */}
              <div className="mb-4 flex flex-wrap gap-2">
                {resourceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => toggleFilter(type.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-sm ${
                      activeFilters.includes(type.id)
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <type.Icon size={16} />
                    <span>{type.label}</span>
                  </button>
                ))}
                {/* Geospatial Toggle */}
                <button
                  onClick={() => setShowGeospatialPanel(!showGeospatialPanel)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-sm ${
                    showGeospatialPanel
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-emerald-600 border-emerald-300 hover:border-emerald-400'
                  }`}
                >
                  <Radar size={16} />
                  <span>Geospatial</span>
                </button>
              </div>

              {/* Geospatial Analysis Panel */}
              {showGeospatialPanel && (
                <div className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Radar size={18} className="text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-800">
                        Geospatial Analysis
                      </span>
                    </div>
                    <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                      DS Feature
                    </span>
                  </div>

                  {/* Search Radius Slider */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                        <Target size={12} />
                        Search Radius
                      </label>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {searchRadius} miles
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={searchRadius}
                      onChange={(e) => setSearchRadius(Number(e.target.value))}
                      className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                    <div className="flex justify-between text-xs text-emerald-500 mt-1">
                      <span>1 mi</span>
                      <span>10 mi</span>
                      <span>25 mi</span>
                      <span>50 mi</span>
                    </div>
                  </div>

                  {/* Coverage Analysis */}
                  {searchedLocation && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-white rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-1">
                          <CircleDot size={14} className="text-emerald-500" />
                          <span className="text-xs font-medium text-gray-600">
                            Resources in Range
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-emerald-700">
                          {
                            filteredResources.filter(
                              (r) =>
                                parseFloat(r.distance.replace(' mi', '')) <=
                                searchRadius
                            ).length
                          }
                        </p>
                        <p className="text-xs text-gray-500">
                          of {filteredResources.length} total
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-emerald-100">
                        <div className="flex items-center gap-2 mb-1">
                          <Ruler size={14} className="text-emerald-500" />
                          <span className="text-xs font-medium text-gray-600">
                            Nearest Resource
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-emerald-700">
                          {filteredResources.length > 0
                            ? Math.min(
                                ...filteredResources.map((r) =>
                                  parseFloat(r.distance.replace(' mi', ''))
                                )
                              ).toFixed(1)
                            : '—'}
                        </p>
                        <p className="text-xs text-gray-500">miles away</p>
                      </div>
                    </div>
                  )}

                  {/* Resource Density Visualization */}
                  {searchedLocation && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Navigation size={14} className="text-emerald-600" />
                        <span className="text-xs font-medium text-emerald-700">
                          Resource Density by Type
                        </span>
                      </div>
                      <div className="space-y-2">
                        {resourceTypes.map((type) => {
                          const count = filteredResources.filter(
                            (r) =>
                              r.type === type.id &&
                              parseFloat(r.distance.replace(' mi', '')) <=
                                searchRadius
                          ).length;
                          const maxCount = 6;
                          const percentage = (count / maxCount) * 100;
                          return (
                            <div key={type.id}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600 flex items-center gap-1">
                                  <type.Icon size={12} />
                                  {type.label}
                                </span>
                                <span className="font-medium text-emerald-700">
                                  {count}
                                </span>
                              </div>
                              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-emerald-500 transition-all duration-300"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Coverage Gap Alert */}
                  {searchedLocation &&
                    filteredResources.filter(
                      (r) =>
                        parseFloat(r.distance.replace(' mi', '')) <=
                        searchRadius
                    ).length === 0 && (
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertCircle
                            size={16}
                            className="text-amber-500 shrink-0 mt-0.5"
                          />
                          <div>
                            <p className="text-xs font-semibold text-amber-800">
                              Resource Desert Detected
                            </p>
                            <p className="text-xs text-amber-600">
                              No resources found within {searchRadius} miles.
                              Consider expanding your search radius or contact
                              statewide organizations.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* DS Technique Explanation */}
                  <div className="p-2 bg-white rounded-lg border border-emerald-100 mt-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Database size={12} className="text-emerald-500" />
                      <span className="text-xs font-semibold text-emerald-700">
                        Geospatial DS Techniques
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>
                        <strong>Input:</strong> User coordinates (from ZIP),
                        resource coordinates, search radius
                      </p>
                      <p>
                        <strong>Techniques:</strong> Haversine distance
                        calculation, spatial indexing (R-tree), k-nearest
                        neighbors, coverage analysis
                      </p>
                      <p>
                        <strong>Output:</strong> Filtered resources, density
                        heatmaps, coverage gaps, accessibility scores
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Map and Side Panel */}
              <div className="flex-1 flex gap-4 min-h-96">
                {/* Map */}
                <div className="flex-1 bg-gray-100 rounded-xl overflow-hidden relative">
                  {!searchedLocation ? (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <Map size={40} className="mx-auto mb-2" />
                        <span className="text-sm">
                          Enter a zipcode to view map
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0">
                      {/* Simple map visualization */}
                      <div className="w-full h-full bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">
                            Map: {searchedLocation}
                          </span>
                        </div>
                        {/* Resource pins */}
                        {filteredResources.map((resource, index) => {
                          const positions = [
                            { top: '30%', left: '45%' },
                            { top: '40%', left: '60%' },
                            { top: '50%', left: '35%' },
                            { top: '55%', left: '55%' },
                            { top: '35%', left: '70%' },
                            { top: '60%', left: '40%' },
                          ];
                          const pos = positions[index % positions.length];
                          const resourceType = resourceTypes.find(
                            (t) => t.id === resource.type
                          );
                          const IconComponent = resourceType?.Icon;
                          return (
                            <button
                              key={resource.id}
                              onClick={() => handleSelectResource(resource)}
                              className={`absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform text-gray-600 ${
                                selectedResource?.id === resource.id
                                  ? 'scale-125 text-gray-900'
                                  : ''
                              }`}
                              style={{ top: pos.top, left: pos.left }}
                              title={resource.name}
                            >
                              {IconComponent && <IconComponent size={24} />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Side Panel */}
                <div className="w-80 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-medium text-gray-800">
                      {filteredResources.length > 0
                        ? `${filteredResources.length} Resources Found`
                        : 'Search to find resources'}
                    </h3>
                  </div>

                  <div className="flex-1 overflow-auto">
                    {filteredResources.length === 0 &&
                      resources.length === 0 && (
                        <div className="p-4 text-center text-gray-400 text-sm">
                          Enter a zipcode to find resources near you
                        </div>
                      )}
                    {filteredResources.length === 0 && resources.length > 0 && (
                      <div className="p-4 text-center text-gray-400 text-sm">
                        No resources match your filters
                      </div>
                    )}
                    {filteredResources.map((resource) => {
                      const resourceType = resourceTypes.find(
                        (t) => t.id === resource.type
                      );
                      const IconComponent = resourceType?.Icon;
                      return (
                        <div
                          key={resource.id}
                          onClick={() => handleSelectResource(resource)}
                          className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                            selectedResource?.id === resource.id
                              ? 'bg-gray-50'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-gray-500">
                              {IconComponent && <IconComponent size={20} />}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-800 truncate">
                                {resource.name}
                              </h4>
                              <p className="text-sm text-gray-500 truncate">
                                {resource.address}
                              </p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-gray-400">
                                  {resource.distance}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {resource.phone}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Resource Detail */}
                  {selectedResource && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <h4 className="font-medium text-gray-800 mb-2">
                        {selectedResource.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {selectedResource.address}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {selectedResource.phone}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700">
                          Get Directions
                        </button>
                        <button className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                          Call
                        </button>
                      </div>

                      {/* Get Info Button */}
                      {!nlpAnalysis && (
                        <button
                          onClick={handleGetInfo}
                          disabled={isAnalyzing}
                          className="w-full mt-3 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isAnalyzing ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Analyzing...
                            </>
                          ) : (
                            <>
                              <Sparkles size={16} />
                              Get Info
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* NLP Analysis Panel */}
              {nlpAnalysis && selectedResource && (
                <div className="mt-4 bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} className="text-gray-500" />
                      <h3 className="font-medium text-gray-800">
                        AI Analysis: {selectedResource.name}
                      </h3>
                    </div>
                    <button
                      onClick={handleCloseAnalysis}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <X size={18} className="text-gray-400" />
                    </button>
                  </div>

                  <div className="p-4 space-y-4">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <Star
                        size={18}
                        className="text-amber-500 fill-amber-500"
                      />
                      <span className="font-medium text-gray-800">
                        {nlpAnalysis.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({nlpAnalysis.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Services Offered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {nlpAnalysis.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Findings */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Key Findings
                      </h4>
                      <ul className="space-y-1">
                        {nlpAnalysis.keyFindings.map((finding, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <Check
                              size={14}
                              className="text-green-500 mt-0.5 shrink-0"
                            />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Review Summary */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Review Summary
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {nlpAnalysis.reviewSummary}
                      </p>
                    </div>

                    {/* Chatbot Q&A */}
                    {chatbotQA[selectedResource.id] && (
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Have a question? Ask our AI assistant
                        </h4>
                        <div className="relative">
                          <select
                            value={selectedQuestion}
                            onChange={(e) =>
                              handleQuestionSelect(e.target.value)
                            }
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 appearance-none cursor-pointer"
                          >
                            <option value="">
                              Select a common question...
                            </option>
                            {chatbotQA[selectedResource.id].map((qa) => (
                              <option key={qa.id} value={qa.id}>
                                {qa.question}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          />
                        </div>

                        {/* Loading State */}
                        {isLoadingQA && (
                          <div className="mt-3 p-4 bg-gray-50 rounded-lg flex items-center gap-2 text-sm text-gray-500">
                            <Loader2 size={16} className="animate-spin" />
                            Processing your question...
                          </div>
                        )}

                        {/* Q&A Response */}
                        {qaResponse && !isLoadingQA && (
                          <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-white rounded-lg border border-gray-200">
                                <qaResponse.icon
                                  size={18}
                                  className="text-gray-600"
                                />
                              </div>
                              <div className="flex-1">
                                <p className="text-xs font-medium text-gray-500 mb-1">
                                  AI Response
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                  {qaResponse.response}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeView === 'policy' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Policy Navigator
                  </h2>
                  <p className="text-gray-500">
                    Understand LGBTQ+ policies by state. Click a state to see
                    details.
                  </p>
                </div>
                {(selectedState || selectedBill) && (
                  <button
                    onClick={() => {
                      if (selectedBill) {
                        setSelectedBill(null);
                      } else {
                        setSelectedState(null);
                      }
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ArrowLeft size={16} />
                    {selectedBill ? 'Back to State' : 'Back to Map'}
                  </button>
                )}
              </div>

              {/* Data Sources Panel */}
              <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Database size={14} className="text-purple-600" />
                  <span className="text-xs font-semibold text-purple-800">
                    Data Sources for Policy Navigator
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 bg-white rounded border border-purple-100">
                    <p className="font-semibold text-purple-700 mb-1">
                      MAP Equality Maps
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> State codes,
                      policy categories
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> 50+ LGBTQ+
                      policy categories per state, policy tally scores,
                      protection ratings
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded border border-purple-100">
                    <p className="font-semibold text-purple-700 mb-1">
                      LegiScan API
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> State,
                      session, keyword filters
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> Real-time
                      bill tracking, full text, sponsors, voting records, status
                      updates
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded border border-purple-100">
                    <p className="font-semibold text-purple-700 mb-1">
                      GLSEN State Snapshots
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> State
                      selection
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> School
                      climate data, anti-bullying policies, curriculum laws,
                      student safety metrics
                    </p>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center justify-center gap-6 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-green-500" />
                    <span className="text-gray-600">Protective</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-yellow-400" />
                    <span className="text-gray-600">Mixed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-orange-500" />
                    <span className="text-gray-600">Restrictive</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-red-600" />
                    <span className="text-gray-600">Very Restrictive</span>
                  </div>
                </div>
              </div>

              {!selectedState ? (
                /* US Map Grid */
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  {/* Geographic-ish Grid Layout */}
                  <div className="max-w-2xl mx-auto">
                    {/* Row 1 - Top */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <div className="col-span-2" />
                      <div className="col-span-8" />
                      <StateCell abbrev="ME" onClick={setSelectedState} />
                      <StateCell abbrev="VT" onClick={setSelectedState} />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <StateCell abbrev="WA" onClick={setSelectedState} />
                      <StateCell abbrev="MT" onClick={setSelectedState} />
                      <StateCell abbrev="ND" onClick={setSelectedState} />
                      <StateCell abbrev="MN" onClick={setSelectedState} />
                      <StateCell abbrev="WI" onClick={setSelectedState} />
                      <div />
                      <StateCell abbrev="MI" onClick={setSelectedState} />
                      <div className="col-span-2" />
                      <StateCell abbrev="NY" onClick={setSelectedState} />
                      <StateCell abbrev="NH" onClick={setSelectedState} />
                      <StateCell abbrev="MA" onClick={setSelectedState} />
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <StateCell abbrev="OR" onClick={setSelectedState} />
                      <StateCell abbrev="ID" onClick={setSelectedState} />
                      <StateCell abbrev="WY" onClick={setSelectedState} />
                      <StateCell abbrev="SD" onClick={setSelectedState} />
                      <StateCell abbrev="IA" onClick={setSelectedState} />
                      <StateCell abbrev="IL" onClick={setSelectedState} />
                      <StateCell abbrev="IN" onClick={setSelectedState} />
                      <StateCell abbrev="OH" onClick={setSelectedState} />
                      <StateCell abbrev="PA" onClick={setSelectedState} />
                      <StateCell abbrev="NJ" onClick={setSelectedState} />
                      <StateCell abbrev="CT" onClick={setSelectedState} />
                      <StateCell abbrev="RI" onClick={setSelectedState} />
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <StateCell abbrev="CA" onClick={setSelectedState} />
                      <StateCell abbrev="NV" onClick={setSelectedState} />
                      <StateCell abbrev="UT" onClick={setSelectedState} />
                      <StateCell abbrev="CO" onClick={setSelectedState} />
                      <StateCell abbrev="NE" onClick={setSelectedState} />
                      <StateCell abbrev="KS" onClick={setSelectedState} />
                      <StateCell abbrev="MO" onClick={setSelectedState} />
                      <StateCell abbrev="KY" onClick={setSelectedState} />
                      <StateCell abbrev="WV" onClick={setSelectedState} />
                      <StateCell abbrev="VA" onClick={setSelectedState} />
                      <StateCell abbrev="MD" onClick={setSelectedState} />
                      <StateCell abbrev="DE" onClick={setSelectedState} />
                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <div />
                      <StateCell abbrev="AZ" onClick={setSelectedState} />
                      <StateCell abbrev="NM" onClick={setSelectedState} />
                      <StateCell abbrev="OK" onClick={setSelectedState} />
                      <StateCell abbrev="AR" onClick={setSelectedState} />
                      <StateCell abbrev="TN" onClick={setSelectedState} />
                      <StateCell abbrev="NC" onClick={setSelectedState} />
                      <StateCell abbrev="SC" onClick={setSelectedState} />
                      <div className="col-span-3" />
                      <StateCell abbrev="DC" onClick={setSelectedState} />
                    </div>

                    {/* Row 6 */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <div className="col-span-2" />
                      <StateCell abbrev="TX" onClick={setSelectedState} />
                      <div />
                      <StateCell abbrev="LA" onClick={setSelectedState} />
                      <StateCell abbrev="MS" onClick={setSelectedState} />
                      <StateCell abbrev="AL" onClick={setSelectedState} />
                      <StateCell abbrev="GA" onClick={setSelectedState} />
                      <div className="col-span-4" />
                    </div>

                    {/* Row 7 - Florida */}
                    <div className="grid grid-cols-12 gap-1 mb-1">
                      <div className="col-span-7" />
                      <StateCell abbrev="FL" onClick={setSelectedState} />
                      <div className="col-span-4" />
                    </div>

                    {/* Row 8 - Alaska & Hawaii */}
                    <div className="grid grid-cols-12 gap-1 mt-4">
                      <StateCell abbrev="AK" onClick={setSelectedState} />
                      <StateCell abbrev="HI" onClick={setSelectedState} />
                      <div className="col-span-10" />
                    </div>
                  </div>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    Click any state to view detailed policy information
                  </p>
                </div>
              ) : selectedBill ? (
                /* Bill Detail View */
                <BillDetailView
                  bill={selectedBill}
                  onClose={() => setSelectedBill(null)}
                />
              ) : (
                /* State Detail View */
                <StateDetailView
                  stateAbbrev={selectedState}
                  onClose={() => setSelectedState(null)}
                  onBillClick={(bill) => setSelectedBill(bill)}
                />
              )}
            </div>
          )}

          {activeView === 'crisis' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Crisis Support
              </h2>
              <p className="text-gray-500">
                Immediate help when you need it. All services are free and
                confidential.
              </p>

              {/* Data Sources Panel */}
              <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Database size={14} className="text-rose-600" />
                  <span className="text-xs font-semibold text-rose-800">
                    Data Sources for Crisis Support
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-white rounded border border-rose-100">
                    <p className="font-semibold text-rose-700 mb-1">
                      SAMHSA National Helpline Directory
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> Service type,
                      population served
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> 24/7 crisis
                      hotlines, treatment referral services, language
                      availability
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded border border-rose-100">
                    <p className="font-semibold text-rose-700 mb-1">
                      LGBTQ+ Org APIs (Trevor Project, Trans Lifeline)
                    </p>
                    <p className="text-gray-600 mb-1">
                      <span className="font-medium">Input:</span> Service
                      category, contact method
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Output:</span> Specialized
                      LGBTQ+ crisis lines, text/chat options, hours of operation
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-full">
                    <AlertCircle className="text-red-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-red-800">
                      If you're in immediate danger, call 911
                    </p>
                    <p className="text-sm text-red-600">
                      For life-threatening emergencies, always call emergency
                      services first.
                    </p>
                  </div>
                </div>
              </div>

              {/* LGBTQ+ Specific Resources */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Heart size={16} className="text-pink-500" />
                  LGBTQ+ Crisis Support
                </h3>
                <div className="space-y-3">
                  {/* Trevor Project */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Heart className="text-orange-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            The Trevor Project
                          </h4>
                          <p className="text-sm text-gray-500 mt-0.5">
                            24/7 crisis support for LGBTQ+ youth under 25
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <a
                              href="tel:1-866-488-7386"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                            >
                              <PhoneCall size={14} />
                              1-866-488-7386
                            </a>
                            <a
                              href="sms:678678?body=START"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              <MessageSquare size={14} />
                              Text START to 678-678
                            </a>
                            <a
                              href="https://www.thetrevorproject.org/get-help/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              <Globe size={14} />
                              Online Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Trained counselors available 24/7. TrevorChat and
                        TrevorText also available. Specializes in LGBTQ+ youth
                        crisis intervention.
                      </p>
                    </div>
                  </div>

                  {/* Trans Lifeline */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Users className="text-blue-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Trans Lifeline
                          </h4>
                          <p className="text-sm text-gray-500 mt-0.5">
                            Peer support hotline run by and for trans people
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <a
                              href="tel:1-877-565-8860"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                            >
                              <PhoneCall size={14} />
                              1-877-565-8860
                            </a>
                            <a
                              href="https://translifeline.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              <Globe size={14} />
                              translifeline.org
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        All operators are trans-identified. Will never contact
                        authorities without permission. Also offers microgrants
                        for trans people in crisis.
                      </p>
                    </div>
                  </div>

                  {/* LGBT National Hotline */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Phone className="text-purple-500" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            LGBT National Hotline
                          </h4>
                          <p className="text-sm text-gray-500 mt-0.5">
                            Peer support for LGBTQ+ people of all ages
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <a
                              href="tel:1-888-843-4564"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors"
                            >
                              <PhoneCall size={14} />
                              1-888-843-4564
                            </a>
                            <a
                              href="https://lgbthotline.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              <Globe size={14} />
                              Online Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Available Mon-Fri 4pm-12am ET, Sat 12pm-5pm ET.
                        Volunteer-staffed by LGBTQ+ individuals. Also has a
                        dedicated youth talkline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Crisis Resources */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  General Crisis Support
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {/* 988 Lifeline */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <PhoneCall className="text-green-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          988 Suicide & Crisis Lifeline
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          24/7 support for anyone in crisis
                        </p>
                        <a
                          href="tel:988"
                          className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                        >
                          <PhoneCall size={14} />
                          Call or Text 988
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Crisis Text Line */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <MessageSquare className="text-teal-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          Crisis Text Line
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Free 24/7 text-based support
                        </p>
                        <a
                          href="sms:741741?body=HELLO"
                          className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
                        >
                          <MessageSquare size={14} />
                          Text HELLO to 741741
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* SAMHSA */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Stethoscope className="text-indigo-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          SAMHSA National Helpline
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Substance abuse & mental health
                        </p>
                        <a
                          href="tel:1-800-662-4357"
                          className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors"
                        >
                          <PhoneCall size={14} />
                          1-800-662-4357
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* National Domestic Violence Hotline */}
                  <div className="p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-rose-100 rounded-lg">
                        <Shield className="text-rose-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          National DV Hotline
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Domestic violence support 24/7
                        </p>
                        <a
                          href="tel:1-800-799-7233"
                          className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 bg-rose-500 text-white rounded-lg text-sm font-medium hover:bg-rose-600 transition-colors"
                        >
                          <PhoneCall size={14} />
                          1-800-799-7233
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <BookOpen size={16} className="text-amber-500" />
                  Additional Resources
                </h3>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-amber-800 mb-2">
                        Youth-Specific
                      </h4>
                      <ul className="space-y-1 text-amber-700">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          Teen Line: (800) 852-8336
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          National Runaway Safeline: 1-800-786-2929
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          Childhelp: 1-800-422-4453
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-800 mb-2">
                        Specialized Support
                      </h4>
                      <ul className="space-y-1 text-amber-700">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          RAINN (Sexual Assault): 1-800-656-4673
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          NEDA (Eating Disorders): 1-800-931-2237
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                          Veterans Crisis: 988, press 1
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Note */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <Info className="text-gray-400 shrink-0 mt-0.5" size={18} />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-700 mb-1">
                      Your privacy matters
                    </p>
                    <p>
                      All crisis lines are confidential. Most will not contact
                      authorities unless there is immediate danger to life.
                      Trans Lifeline specifically will never contact authorities
                      without your consent. If you're concerned about phone
                      records, consider using text or online chat options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
