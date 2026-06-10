import React from 'react';

// --- Extracted SVG Icons ---
const MissionIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const VisionIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ValuesIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

// --- Content Data ---
const commitments = [
  {
    title: 'Our Mission',
    description: 'To deliver rapid, high-quality repair solutions for all major home appliances, ensuring Mumbai families experience zero disruption to their daily comfort.',
    icon: MissionIcon,
  },
  {
    title: 'Our Vision',
    description: 'To be Mumbai’s most trusted household name for appliance care, recognized for our unwavering integrity, technical excellence, and transparent service standards.',
    icon: VisionIcon,
  },
  {
    title: 'Our Core Values',
    description: 'We operate on absolute transparency, genuine craftsmanship, and customer-first thinking. We never cut corners, ensuring every fix is durable, safe, and long-lasting.',
    icon: ValuesIcon,
  },
];

export default function MissionVision() {
  return (
    <div className="bg-[#041434] py-24 sm:py-32" id="mission">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold leading-7 text-lime-400 uppercase tracking-widest">
            // Our Mission, Vision, and Core Values
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Commitment to Excellence
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {commitments.map((item) => (
            
            // Card Container
            <div 
              key={item.title} 
              className="flex flex-row overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              
              {/* Left Color Block (Lime Green) */}
              <div className="w-16 sm:w-20 shrink-0 bg-[#c5e100] flex justify-center pt-8">
                <item.icon />
              </div>
              
              {/* Right Content Block */}
              <div className="flex-1 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}