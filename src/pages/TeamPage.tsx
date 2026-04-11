import { Linkedin } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TEAM_MEMBERS = [
  {
    name: 'Beth McBride',
    role: 'Product/Project Manager',
    skills: [
      'UI/UX Research',
      'Exploratory Analysis',
      'Project Coordination',
      'Engineering Support',
    ],
    linkedin: '#',
    photo: null, // replace with import or URL
  },
  {
    name: 'Chase Martin',
    role: 'SWE/Data Engineer',
    skills: [
      'Product Dev',
      'Full-Stack Dev',
      'UI/UX Design',
      'Data Infrastructure',
    ],
    linkedin: '#',
    photo: null,
  },
  {
    name: 'Ambro Quach',
    role: 'SWE/Data Engineer',
    skills: [
      'Full-stack Dev',
      'Product Design',
      'Architecture Design',
      'API Integration',
    ],
    linkedin: '#',
    photo: null,
  },
  {
    name: 'Ishani Cheshire',
    role: 'DS/ML Engineer',
    skills: [
      'ML Research',
      'ML Model Architect',
      'Data Visualization',
      'Explanatory Analysis',
    ],
    linkedin: '#',
    photo: null,
  },
  {
    name: 'Indri Adisoemarta',
    role: 'DS/ML Engineer',
    skills: [
      'Policy Domain Expert',
      'ML Model Architect',
      'ML Ops/Deployment',
      'Generative AI Systems',
    ],
    linkedin: '#',
    photo: null,
  },
];

const ADVISORS = [
  {
    name: 'Joyce J. Shen',
    title: 'Capstone Advisor · UC Berkeley School of Information',
    linkedin: '#',
  },
  {
    name: 'Zona Kostic',
    title: 'Capstone Advisor · UC Berkeley School of Information',
    linkedin: '#',
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// Alternate between berkeley blue and gold for visual variety
const AVATAR_COLORS = ['#001d3a', '#b8860b', '#001d3a', '#b8860b', '#001d3a'];

export default function TeamPage() {
  return (
    <div className="font-sans bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: '#001d3a10', color: '#001d3a' }}
          >
            The Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001d3a] mb-4">
            Built at Berkeley
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-lg">
            A Spring 2026 capstone project from the UC Berkeley School of
            Information.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  {/* Avatar */}
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: AVATAR_COLORS[i] }}
                    >
                      <span className="text-lg font-semibold text-white">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center hover:border-slate-300 hover:bg-slate-100 transition-all"
                  >
                    <Linkedin size={14} className="text-slate-500" />
                  </a>
                </div>

                <h3 className="text-base font-semibold text-[#001d3a]">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-400 mb-4">{member.role}</p>

                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200/60 text-slate-500 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Advisors
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {ADVISORS.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#001d3a15' }}
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: '#001d3a' }}
                  >
                    {getInitials(advisor.name)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-[#001d3a]">
                    {advisor.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {advisor.title}
                  </p>
                </div>
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-slate-300 hover:bg-slate-100 transition-all shrink-0"
                >
                  <Linkedin size={14} className="text-slate-500" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
