import React from 'react';
import { Link } from 'react-router-dom'; // 1. Imported Link for fast SPA routing

// 2. Extracted the checkmark SVG for cleaner bullet points
const CheckIcon = () => (
  <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

export default function HaboutUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

          {/* Left Column: Overlapping Images */}
          <div className="relative lg:order-first order-last pt-12 lg:pt-0">
            {/* Back Image (Top Left) */}
            <img
              src="/Haboutus3.webp"
              alt="Technician explaining appliance repair process to a homeowner"
              loading="lazy" // 3. Added lazy loading for performance
              className="w-4/5 rounded-2xl bg-slate-50 object-cover shadow-lg h-[350px] sm:h-[450px]"
              width="800"
              height="450"
            />
            {/* Front Image (Bottom Right) */}
            <img
              src="/Haboutus2.webp"
              alt="Perfect Refrigeration expert working on a compressor"
              loading="lazy" // 3. Added lazy loading for performance
              className="absolute -bottom-12 -right-4 sm:right-12 w-3/5 rounded-2xl border-8 border-white bg-white object-cover shadow-2xl h-[250px] sm:h-[300px]"
              width="480"
              height="300"
            />
          </div>

          {/* Right Column: Content */}
          <div>
            <p className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">
              // Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Mumbai's Most Trusted Home Appliance Repair Experts
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              At Perfect Refrigeration, we understand how a broken appliance can instantly disrupt your daily life. Our mission is to restore comfort to homes and businesses across Mumbai with fast, precise, and guaranteed repairs for your ACs, refrigerators, and washing machines.
            </p>

            {/* Icon Callouts */}
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 border-y border-slate-200 py-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="text-base font-semibold text-slate-900">Certified<br />Professionals</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-base font-semibold text-slate-900">Same-Day<br />Resolution</div>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4 text-slate-600">
              <li className="flex gap-x-3">
                <CheckIcon />
                Servicing all major domestic and commercial appliance brands.
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                Transparent pricing with zero hidden charges or surprise fees.
              </li>
              <li className="flex gap-x-3">
                <CheckIcon />
                100% genuine spare parts backed by our post-repair warranty.
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-10 flex">
              <Link
                to="/about"
                className="rounded-md bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}