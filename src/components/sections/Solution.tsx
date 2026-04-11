import SectionHeader from '../ui/SectionHeader';
import { FEATURES, FEATURE_ICON_COLORS } from '../../data';

const CORE_FEATURES = FEATURES.slice(0, 3);
const CRISIS_FEATURE = FEATURES[3];

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="The Solution"
          tagBg="#001d3a10"
          tagColor="#001d3a"
          title="Understand, interpret, and act"
          subtitle="Three user-facing capabilities map to classification, knowledge-graph-backed explanation, and action generation — translating complex policy into clear outputs. Crisis support sits alongside that pipeline when human help matters most."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {CORE_FEATURES.map((feature, i) => (
            <div
              key={`${feature.title}-${feature.product ?? i}`}
              className="group bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: FEATURE_ICON_COLORS[i] }}
              >
                <feature.icon size={22} className="text-white" />
              </div>
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-[#001d3a] leading-tight">{feature.title}</h3>
                {feature.product && (
                  <p className="text-sm font-medium text-slate-500 mt-1">{feature.product}</p>
                )}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <p className="text-xs text-slate-400 font-medium">{feature.tech}</p>
            </div>
          ))}
        </div>

        {CRISIS_FEATURE && (
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-sm">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: FEATURE_ICON_COLORS[3] }}
            >
              <CRISIS_FEATURE.icon size={22} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <h3 className="text-base font-semibold text-[#001d3a] leading-tight">{CRISIS_FEATURE.title}</h3>
                {CRISIS_FEATURE.product && (
                  <p className="text-sm font-medium text-slate-500 mt-0.5">{CRISIS_FEATURE.product}</p>
                )}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{CRISIS_FEATURE.description}</p>
              <p className="text-xs text-slate-400 font-medium mt-2">{CRISIS_FEATURE.tech}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
