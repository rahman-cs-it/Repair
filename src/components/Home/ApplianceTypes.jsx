import React from 'react';

const appliances = [
  {
    id: 1,
    name: 'Single & Double Door Fridges',
    description: 'Expert troubleshooting for standard cooling units. We fix compressor issues, gas leaks, and thermostat failures quickly.',
    image: '/Double Door Fridges.jpg',
    phone: '+919876543210'
  },
  {
    id: 2,
    name: 'Side-By-Side Refrigerators',
    description: 'Specialized care for advanced, multi-door fridge models, including ice maker repairs and digital control panel fixes.',
    image: '/Side-By-Side Refrigerators.jpg',
    phone: '+919876543210'
  },
  {
    id: 3,
    name: 'Split & Inverter ACs',
    description: 'Comprehensive servicing, deep coil cleaning, and complex PCB repair for modern, energy-efficient split air conditioners.',
    image: '/Split & Inverter Acs.jpg',
    phone: '+919876543210'
  },
  {
    id: 4,
    name: 'Window Air Conditioners',
    description: 'Fast, reliable fixes for traditional window units. We handle gas charging, fan motor replacements, and heavy noise issues.',
    image: '/Window Air Conditioners.jpg',
    phone: '+919876543210'
  },
  {
    id: 5,
    name: 'Front-Load Washers',
    description: 'Precision repair for front-loading washing machines, resolving drum alignment, drainage faults, and electronic board errors.',
    image: '/Front-Load Washers.jpg',
    phone: '+919876543210'
  },
  {
    id: 6,
    name: 'Top-Load Washers',
    description: 'Quick solutions for top-loading washers. We fix agitator problems, spin cycle failures, and water inlet blockages.',
    image: '/Top-Load Washers.jpg',
    phone: '+919876543210'
  }
];

export default function ApplianceTypes() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32" id="appliance-types">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We Repair All Major Home Appliances
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From high-tech smart fridges to heavy-duty washing machines, our certified technicians have the expertise to fix any model.
          </p>
        </div>

        {/* Appliance Grid */}
        {/* Adjusted gap-y-24 to make room for the floating rectangles */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
          {appliances.map((appliance) => (
            <div 
              key={appliance.id} 
              // Added pt-36 so the wider image doesn't cover the title
              className="relative flex flex-col items-center rounded-2xl bg-white p-6 pt-36 text-center shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg"
            >
              {/* Floating Rectangular Image */}
              <div className="absolute -top-12 left-1/2 w-[85%] -translate-x-1/2 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white h-40 bg-white">
                <img
                  src={appliance.image}
                  alt={appliance.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 w-full">
                {appliance.name}
              </h3>
              <p className="text-sm text-slate-600 mb-8 flex-1 w-full">
                {appliance.description}
              </p>

              {/* Call to Action Button */}
              <a
                href={`tel:${appliance.phone}`}
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 shadow-sm"
              >
                {/* Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                Book {appliance.name.split(' ')[0]} Repair
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}