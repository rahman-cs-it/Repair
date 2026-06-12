import React from 'react';

const ToolIcon = () => (
  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.203-.25.477-.424.784-.504l3.967-1.033c.176-.046.319-.17.382-.338a.502.502 0 00-.115-.548l-4.542-4.541a.502.502 0 00-.547-.115l-1.034 3.967c-.08.307-.254.58-.504.784l-3.053 2.492M11.419 15.17l-4.33-4.33a.5.5 0 00-.708 0l-4.9 4.9a.5.5 0 000 .707l3.623 3.623a.5.5 0 00.707 0l4.9-4.9a.5.5 0 000-.708z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
  </svg>
);

export default function CallToAction() {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden mt-[-60px] sm:mt-[-120px]" id="cta">

      {/* Wavy SVG Divider merging into the dark background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[120px]" aria-hidden="true">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-50"
          ></path>
        </svg>
      </div>

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1920&q=80"
          alt="Technician repairing an appliance"
          loading="lazy"
          className="h-full w-full object-cover"
          width="400"
          height="400"
        />
        <div className="absolute inset-0 bg-[#041434]/80 mix-blend-multiply" aria-hidden="true"></div>
      </div>

      {/* CTA Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 lg:px-8 text-center pt-10">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm mb-8">
          <ToolIcon />
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Don't Let a Broken Appliance Ruin Your Day!
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Our certified technicians are available across Mumbai for fast, reliable, and guaranteed same-day repairs. Call us now and get your routine back on track.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="tel:+917506320321"
            className="flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            <PhoneIcon />
            Call +91 75063 20321
          </a>
        </div>
      </div>
    </section>
  );
}