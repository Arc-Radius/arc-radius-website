import SectionHeader from '../ui/SectionHeader';
import { FEATURES, FEATURE_ICON_COLORS } from '../../data';

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="The Solution"
          tagBg="#001d3a10"
          tagColor="#001d3a"
          title="Introducing Arc Radius"
          subtitle="Three integrated tools — Resource Locator, Policy Navigator, and Crisis Connect — powered by NLP, geospatial analysis, and evidence-based health research."
        />

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: FEATURE_ICON_COLORS[i] }}
              >
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#001d3a] mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <p className="text-xs text-slate-400 font-medium">{feature.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
