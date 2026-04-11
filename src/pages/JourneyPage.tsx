import { useState } from 'react';
import {
  Shield,
  Brain,
  Heart,
  MessageCircle,
  ChevronDown,
  BadgeCheck,
  Layers2,
  ScanLine,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: 'How does ArcRadius classify bills as supportive or harmful?',
    a: 'We use a two-stage pipeline. Stage 1 is a fine-tuned LegalBERT relevance model trained only on bill titles and short descriptions (no bill metadata) so downstream work is not skewed by leakage; we prioritize precision on LGBTQ+ relevance because mistakes here drop bills entirely. Stage 2 runs only on LGBTQ+-relevant bills: a metadata-driven logistic regression uses political context — sponsor party mix, state lean, vote patterns — to predict stance. Text-only stance models were weaker on our labeled set, so we chose this approach and tuned selection to minimize false “supportive” labels on harmful bills. Scores and links to source text are always surfaced.',
  },
  {
    q: 'Where does the data come from?',
    a: 'Bill text and metadata come from LegiScan across all 50 states. Training labels draw on curated LGBTQ+ legislation datasets from the ACLU, Plural, and related organizations, combined with our sampling strategy for class balance. Crisis resources come from The Trevor Project, Trans Lifeline, the 988 Lifeline, and Crisis Text Line. Survey statistics are from The Trevor Project\'s 2024 National Survey of 18,000+ LGBTQ+ youth ages 13–24.',
  },
  {
    q: 'Is my data private?',
    a: 'ArcRadius does not collect personal information or require sign-up. Bill searches and letter generation happen locally or through serverless endpoints that do not store user queries. Crisis Connect links go directly to external services — we never sit between users and crisis resources.',
  },
  {
    q: 'How often is the data updated?',
    a: 'Our pipeline polls LegiScan via an EventBridge schedule (currently every week). New and updated bills are automatically classified and embedded into the knowledge graph. The system uses change-hash tracking to avoid reprocessing unchanged bills.',
  },
  {
    q: 'Can the AI make mistakes in classification?',
    a: 'Yes — like all ML systems, ours is not perfect. We surface confidence scores alongside predictions and always link to the original bill text so users can verify. The relevance model emphasizes strong recall on LGBTQ+ bills; the stance layer is tuned so harmful legislation is rarely mislabeled as supportive, because that error carries the highest user risk. The product has a way for users to flag potential misclassifications for review.',
  },
  {
    q: 'Is this a replacement for legal advice?',
    a: 'No. ArcRadius is an informational tool, not a legal service. Bill classifications and generated content are AI-assisted and should not be treated as legal counsel. We encourage users to consult with legal professionals for specific situations.',
  },
  {
    q: 'Who built this and why?',
    a: 'ArcRadius was built at the UC Berkeley School of Information as a Spring 2026 W210 Capstone Project. The project was born from the belief that safety should never depend on your zip code — and that LGBTQ+ youth deserve tools that help them understand and respond to legislation that directly affects their lives.',
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200/60 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-semibold text-[#001d3a] text-sm leading-relaxed group-hover:text-[#00254a] transition-colors">
          {item.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function JourneyPage() {
  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ═══ Page Hero ═══ */}
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: '#FDB51520', color: '#b8860b' }}
          >
            Our Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001d3a] mb-4">
            The Story Behind ArcRadius
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-lg">
            Why we built it, how the AI works, and the principles that guide every design decision.
          </p>
        </div>
      </section>

      {/* ═══ Origin Story ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200/60 mb-12">
            <h2 className="text-xl font-semibold text-[#001d3a] mb-4">
              Why &quot;ArcRadius&quot;?
            </h2>
            <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
              <p>
                In geometry, the arc radius defines a curve&apos;s reach — how far it extends from its center. We chose
                this name because it captures exactly what we&apos;re trying to do: extend the reach of safety,
                resources, and support to LGBTQ+ youth no matter where they are.
              </p>
              <p>
                The project started in Spring 2026 as a UC Berkeley MIDS capstone. We looked at the data — 600+
                anti-LGBTQ+ bills introduced in state legislatures in 2025 alone (ACLU), 39% of LGBTQ+ youth considering
                suicide, half unable to access mental health care — and asked: what if there was one place that connected
                legislation tracking, advocacy tools, and crisis support?
              </p>
              <p>That question became ArcRadius.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Designing for trust ═══ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#001d3a] mb-3 text-center">Designing for trust</h2>
          <p className="text-slate-500 text-center text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            ArcRadius is a trust-critical system for a vulnerable audience. Credibility, clarity, and perceived care were
            as important as raw accuracy — so trust shaped both product and technical decisions.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: BadgeCheck,
                title: 'Accuracy',
                desc: 'Outputs are grounded in authoritative legislative data and validated model pipelines, with links to primary bill text.',
                gold: true,
              },
              {
                icon: Layers2,
                title: 'Consistency',
                desc: 'Similar inputs produce stable, predictable outputs across classification, GraphRAG explanations, and action generation.',
                gold: false,
              },
              {
                icon: ScanLine,
                title: 'Clarity',
                desc: 'Explanations are written in plain language and do not require policy or legal expertise to interpret.',
                gold: false,
              },
            ].map((row, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-200/60">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: row.gold ? '#FDB515' : '#001d3a' }}
                >
                  <row.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-[#001d3a] mb-2">{row.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Guiding Principles (product) ═══ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#001d3a] mb-2 text-center">Guiding principles</h2>
          <p className="text-slate-500 text-center text-sm max-w-xl mx-auto mb-10">
            How we translate trust into everyday product choices.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Shield,
                title: 'Privacy First',
                desc: 'No sign-up required. No personal data collected. No tracking. Crisis links go directly to external services — we never sit between users and help.',
                gold: false,
              },
              {
                icon: Brain,
                title: 'Transparent AI',
                desc: 'Every classification shows its confidence score and links to original bill text. We never hide the AI behind a black box — users can always verify.',
                gold: true,
              },
              {
                icon: Heart,
                title: 'Community-Centered',
                desc: 'Technology should center the needs of the communities it serves, not treat marginalized groups as objects of analysis. Every feature was designed with this in mind.',
                gold: false,
              },
              {
                icon: MessageCircle,
                title: 'Empowerment Over Alarm',
                desc: 'We don\'t just surface problems — we provide tools to respond. Letter generation, phone scripts, info cards, and crisis resources turn awareness into action.',
                gold: true,
              },
            ].map((principle, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200/60"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: principle.gold ? '#FDB515' : '#001d3a' }}
                >
                  <principle.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-[#001d3a] mb-2">{principle.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How the AI Works ═══ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#001d3a] mb-4 text-center">
            How the AI Works
          </h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">
            A simplified look at the pipeline from ingestion through classification, GraphRAG, and advocacy generation.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Poll',
                desc: 'Every 30 days, an EventBridge schedule triggers a Lambda function that polls LegiScan for new and updated bills across all 50 states. Changed bills are identified by comparing hash values.',
              },
              {
                step: '02',
                title: 'Relevance',
                desc: 'A Lambda sends each bill to a SageMaker endpoint running our fine-tuned LegalBERT model on titles and short descriptions. This stage predicts LGBTQ+ relevance before any metadata is used for stance.',
              },
              {
                step: '03',
                title: 'Stance',
                desc: 'Bills flagged as LGBTQ+-relevant go through a separate metadata-driven logistic regression: sponsor party composition, state lean, and vote patterns produce supportive vs. harmful stance predictions.',
              },
              {
                step: '04',
                title: 'Embed',
                desc: 'Relevant bills are chunked at section boundaries, embedded via Amazon Bedrock Titan V2 (1024-dim), and stored in a Neo4j knowledge graph with vector indexing for semantic search.',
              },
              {
                step: '05',
                title: 'Serve',
                desc: 'When a user asks a question, graph-augmented retrieval (GraphRAG) pulls the most relevant chunks from Neo4j into structured prompts for Bedrock Claude — for grounded Q&A or for advocacy outputs like emails, phone scripts, and info cards.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#001d3a', color: '#FDB515', fontFamily: "'DM Mono', monospace" }}
                  >
                    {step.step}
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold text-[#001d3a] mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQs ═══ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#001d3a] mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-center text-sm mb-10">
            Common questions about ArcRadius, our data, and the AI.
          </p>
          <div className="bg-white rounded-2xl border border-slate-200/60 px-6 md:px-8">
            {FAQS.map((faq, i) => (
              <FaqAccordion key={i} item={faq} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
