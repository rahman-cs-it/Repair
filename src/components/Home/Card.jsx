import React from 'react';

// 1. Mock Data (You can move this to a separate data.js file later)
const services = [
  {
    id: 1,
    title: 'Complete Diagnostics',
    description: 'Fast and accurate issue detection for all major appliance brands using advanced tools.',
    image: '/Complete Refrigerator Diagnostics.jpg',
    phone: '+917506320321'
  },
  {
    id: 2,
    title: 'Cooling & Temperature',
    description: 'Fixing fridges and ACs that are not cooling, overcooling, or freezing improperly.',
    image: '/Cooling & Temperature Issues.jpg',
    phone: '+917506320321'
  },
  {
    id: 3,
    title: 'Compressor & Motors',
    description: 'Expert repair or replacement for faulty compressors, fan motors, and condenser units.',
    image: '/Compressor & Motor Repairs.jpg',
    phone: '+917506320321'
  },
  {
    id: 4,
    title: 'Gas Charging & Leaks',
    description: 'Safe refrigerant top-ups, precise leak detection, and durable coil repairs.',
    image: '/Gas Charging & Leak Repair.jpg',
    phone: '+917506320321'
  },
  {
    id: 5,
    title: 'Thermostat & Sensors',
    description: 'Resolving inaccurate temperature readings and replacing faulty electronic sensors.',
    image: '/Thermostat & Sensor Replacement.jpg',
    phone: '+917506320321'
  },
  {
    id: 6,
    title: 'Seal & Gasket Fixing',
    description: 'Replacing worn-out door seals to prevent cold air leaks and improve power efficiency.',
    image: '/Door Seal & Gasket Replacement.jpg',
    phone: '+917506320321'
  },
  {
    id: 7,
    title: 'Water Leakage Solutions',
    description: 'Fixing internal clogs, drainage issues, and ice buildup problems.',
    image: '/Water Leakage Solutions.jpg',
    phone: '+917506320321'
  },
  {
    id: 8,
    title: 'Electrical & PCB Repairs',
    description: 'Handling electronic control boards, switches, and complex wiring problems.',
    image: '/Electrical & PCB Repairs.jpg',
    phone: '+917506320321'
  },
  {
    id: 9,
    title: 'Preventive Maintenance',
    description: 'Regular check-ups to keep your appliances running smoothly and efficiently.',
    image: '/Preventive Maintenance.jpg',
    phone: '+917506320321'
  },
  
  /* --- Bonus Cards for AC & Washing Machine --- */
  
  {
    id: 10,
    title: 'AC Deep Cleaning',
    description: 'Comprehensive cooling coil cleaning, filter replacement, and airflow optimization.',
    image: '/AC Deep Cleaning.jpg',
    phone: '+917506320321'
  },
  {
    id: 11,
    title: 'Washing Machine Drum Repair',
    description: 'Fixing washers that won’t spin, vibrate excessively, or make loud grinding noises.',
    image: '/Washing Machine Drum Repair.jpg',
    phone: '+917506320321'
  },
  {
    id: 12,
    title: 'Appliance Installation',
    description: 'Safe and secure uninstallation and reinstallation of heavy home appliances.',
    image: '/Appliance Installation.jpg',
    phone: '+917506320321'
  }
];

export default function Card() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Repair Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Professional doorstep repair for all your home appliances.
          </p>
        </div>

        {/* CSS Grid for Cards */}
        {/* We use gap-y-20 to leave vertical space for the floating images */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            
            /* Individual Service Card */
            <div 
              key={service.id} 
              className="relative flex flex-col rounded-2xl bg-white p-6 pt-36 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg"
            >
              {/* Floating Image */}
              <div className="absolute -top-12 left-1/2 w-[85%] -translate-x-1/2 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white h-40 bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 flex-1">
                  {service.description}
                </p>
              </div>

              {/* Call Button */}
              <a
                href={`tel:${service.phone}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-50 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
              >
                {/* SVG Phone Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                </svg>
                Call {service.phone}
              </a>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}