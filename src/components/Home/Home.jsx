import React from 'react'
import { Link } from 'react-router-dom' // 1. Imported Link for fast routing

import ApplianceTypes from './ApplianceTypes'
import Card from './Card'
import HaboutUs from './HaboutUs'
// import TestimonialsAndCTA from './TestimonialsAndCTAb'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen flex items-center">
        
        {/* Background Image */}
        <img
          alt="Perfect Refrigeration technician repairing a stainless steel refrigerator compressor in a home kitchen"
          src="/Compressed_Home_img.jpg"
          // We intentionally DO NOT lazy load the hero image for faster perceived loading
          className="absolute inset-0 -z-20 size-full object-cover object-center md:object-center"
        />
        
        {/* 3. Added a subtle dark overlay so the white text is always perfectly readable */}
        <div className="absolute inset-0 -z-10 bg-black/50 mix-blend-multiply" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-sm">
              Fast & Reliable AC, Fridge & Washing Machine Repair
            </h2>
            <p className="mt-8 text-lg font-medium text-slate-200 sm:text-xl/8 drop-shadow">
              AC not cooling, fridge leaking, or washing machine stuck? Perfect Refrigeration fixes it all. We service all brands, from home appliances to commercial units. Fast, doorstep repair starting at just ₹199.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              
              {/* External/Phone Links stay as <a> tags */}
              <a
                href="tel:+917506320321"
                className="rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center transition-all"
              >
                Call Now
              </a>
              
              {/* 1. Internal Navigation uses React Router <Link> */}
              <Link
                to="/booking"
                className="rounded-md bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 text-center transition-all backdrop-blur-sm"
              >
                Book a Technician
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Components */}
      <ApplianceTypes />
      <Card />
      <WhyChooseUs />
      <HaboutUs />
      <Testimonials />
      <CallToAction />
    </>
  )
}