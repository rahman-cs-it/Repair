import React from 'react';

// 1. Extracted SVG Icons into proper React components
const WrenchIcon = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.203-.25.477-.424.784-.504l3.967-1.033c.176-.046.319-.17.382-.338a.502.502 0 00-.115-.548l-4.542-4.541a.502.502 0 00-.547-.115l-1.034 3.967c-.08.307-.254.58-.504.784l-3.053 2.492M11.419 15.17l-4.33-4.33a.5.5 0 00-.708 0l-4.9 4.9a.5.5 0 000 .707l3.623 3.623a.5.5 0 00.707 0l4.9-4.9a.5.5 0 000-.708z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PriceIcon = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// 2. Data array now only holds data (strings and component references)
const features = [
  {
    name: 'Certified Repair Experts',
    description: 'Our team consists of rigorously trained professionals who know your appliances inside and out, ensuring a fix that lasts.',
    icon: WrenchIcon,
  },
  {
    name: '3-Month Service Guarantee',
    description: 'Peace of mind comes standard. If the same issue returns within 90 days, we will make it right at zero extra cost to you.',
    icon: ShieldIcon,
  },
  {
    name: 'Transparent, Upfront Pricing',
    description: 'No hidden fees, no surprises. We provide honest estimates before any work begins so you stay completely in control of the cost.',
    icon: PriceIcon,
  },
  {
    name: 'Lightning-Fast Doorstep Service',
    description: 'Appliance breakdowns cannot wait. We prioritize rapid dispatch to get your AC or fridge running again on the very same day.',
    icon: LightningIcon,
  },
  {
    name: '100% Genuine Spare Parts',
    description: 'We never cut corners. Every replacement part we use is factory-certified to guarantee the safety and longevity of your machine.',
    icon: SparklesIcon,
  },
  {
    name: 'On-Time, Every Time',
    description: 'Your time is valuable. Our technicians arrive precisely within the scheduled window, fully equipped to resolve the problem instantly.',
    icon: ClockIcon,
  },
]

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500 uppercase tracking-wide">
            The Perfect Refrigeration Advantage
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Thousands of Homes Trust Us
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            We don't just fix appliances; we restore your daily routine. Here is what sets our service apart from the rest.
          </p>
        </div>

        {/* Features Grid - New Card Layout */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative flex flex-col rounded-2xl bg-gray-800/50 p-8 shadow-sm ring-1 ring-white/10 transition-all hover:bg-gray-800 hover:ring-blue-500/50"
              >
                {/* Icon Container with subtle glow */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <feature.icon /> {/* 3. Dynamically rendering the component here */}
                </div>
                
                {/* Text Content */}
                <dt className="text-xl font-semibold leading-7 text-white mb-3">
                  {feature.name}
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  )
}