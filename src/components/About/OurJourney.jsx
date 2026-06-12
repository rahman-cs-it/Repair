import React from 'react';

// 1. Extracted Checkmark Icon for the stats list
const CheckCircleIcon = () => (
  <svg className="h-6 w-6 text-blue-600 flex-none" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

// 2. Extracted Trophy/Experience Icon for the floating badge
const ExperienceIcon = () => (
  <svg className="h-8 w-8 text-blue-200" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.203-.25.477-.424.784-.504l3.967-1.033c.176-.046.319-.17.382-.338a.502.502 0 00-.115-.548l-4.542-4.541a.502.502 0 00-.547-.115l-1.034 3.967c-.08.307-.254.58-.504.784l-3.053 2.492M11.419 15.17l-4.33-4.33a.5.5 0 00-.708 0l-4.9 4.9a.5.5 0 000 .707l3.623 3.623a.5.5 0 00.707 0l4.9-4.9a.5.5 0 000-.708z" />
  </svg>
);

export default function OurJourney() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 overflow-hidden" id="our-journey">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Left Column: Image & Floating Badge */}
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl bg-slate-200">
              <img
                src="/Ourjourney.webp" // Add your generated image here
                alt="Experienced Perfect Refrigeration technician smiling"
                loading="lazy" // 3. Performance boost
                className="h-full w-full object-cover object-center"
                width="400"
                height="400"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 right-4 sm:-right-8 flex items-center gap-4 rounded-xl bg-[#041434] p-6 shadow-2xl ring-1 ring-white/10 sm:p-8">
              <ExperienceIcon />
              <div>
                <p className="text-3xl font-bold tracking-tight text-white">15+</p>
                <p className="text-sm font-medium text-blue-200 uppercase tracking-wide mt-1">Years Servicing Mumbai</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center lg:pt-8">
            <p className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">
              // Our Story
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building Mumbai's Most Reliable Appliance Repair Team
            </h2>
            
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Perfect Refrigeration started with a simple goal: to provide honest, high-quality repair services to homes across Mumbai. What began as a small neighborhood workshop has grown into a city-wide network of certified experts. We have spent years mastering the intricate mechanics of refrigerators, air conditioners, and washing machines of every major brand.
            </p>
            
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our core philosophy has never changed—we treat every home like our own. By focusing on transparent pricing, genuine spare parts, and rapid response times, we have built lasting trust with thousands of families. Your comfort is our business, and we work tirelessly to keep your daily life running without interruption.
            </p>

            {/* Stats List */}
            <div className="mt-10 max-w-xl space-y-4 text-base leading-7 text-slate-700">
              <div className="flex gap-x-3 items-center">
                <CheckCircleIcon />
                <span className="font-medium text-slate-900">99% Positive Customer Feedback</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <CheckCircleIcon />
                <span className="font-medium text-slate-900">5,000+ Home Appliances Restored</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <CheckCircleIcon />
                <span className="font-medium text-slate-900">Expert Certified Technicians</span>
              </div>
              <div className="flex gap-x-3 items-center">
                <CheckCircleIcon />
                <span className="font-medium text-slate-900">Same-Day Repair Guarantee</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}