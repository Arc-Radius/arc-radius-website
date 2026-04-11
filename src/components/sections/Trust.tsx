import SectionHeader from '../ui/SectionHeader';
import { CheckCircle2, Equal, BookOpen } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: CheckCircle2,
    title: 'Accuracy',
    body: 'Outputs are grounded in authoritative legislative data and validated model pipelines so users can rely on what they see.',
  },
  {
    icon: Equal,
    title: 'Consistency',
    body: 'Similar inputs produce stable, predictable behavior across the system so the experience does not feel arbitrary.',
  },
  {
    icon: BookOpen,
    title: 'Clarity',
    body: 'Explanations are written in plain language — no policy or legal background required to follow what a bill does and why it matters.',
  },
] as const;

export default function Trust() {
  return (
    <section className="py-24 px-6 bg-slate-100/80 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Designing for Trust"
          tagBg="#001d3a10"
          tagColor="#001d3a"
          title="Built for a trust-critical audience"
          subtitle="Early research underscored that credibility, clarity, and perceived care mattered as much as raw technical accuracy. Those constraints shaped both product and engineering choices."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {PRINCIPLES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: '#001d3a' }}
              >
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#001d3a] mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
