import SectionHeader from '../ui/SectionHeader';
import { IMPACT_ITEMS } from '../../data';

export default function Impact() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Why It Matters"
          tagBg="#001d3a10"
          tagColor="#001d3a"
          title="Why clearer policy tooling matters"
          subtitle="When people can verify what a bill does, see why it matters to them, and choose a proportionate response, the product stops being a dashboard and starts being infrastructure for dignity and civic voice."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {IMPACT_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group bg-slate-50 rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: item.gold ? '#FDB515' : '#001d3a' }}
                >
                  <item.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#001d3a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
