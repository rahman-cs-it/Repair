import React from 'react';

// --- Extracted SVG Components for Clean Code ---
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.724 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742c1.008-.717 1.908-1.455 2.635-2.194C18.158 17.5 19.5 15.666 19.5 13.5c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 2.166 1.342 4.5 3.258 6.42a17.152 17.152 0 003.428 2.933zM12 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
    <path d="M1.5 8.678c0-1.2.841-2.218 2.005-2.43l1.477-.27a15.451 15.451 0 015.018 0l1.477.27c1.164.212 2.005 1.23 2.005 2.43v.417l-7.402 4.811a1 1 0 01-1.096 0L1.5 9.095v-.417z" />
    <path d="M15 11.603l-6.702 4.356a2.5 2.5 0 01-2.596 0L0 11.603V16.5A3.5 3.5 0 003.5 20h9a3.5 3.5 0 003.5-3.5v-4.897z" />
  </svg>
);

const CallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l.515 2.061a3 3 0 01-.737 2.893l-1.076 1.077a14.791 14.791 0 006.257 6.257l1.077-1.076a3 3 0 012.893-.737l2.061.516a3 3 0 011.42 1.819V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
  </svg>
);

export default function ContactSection() {
  return (
    <div className="bg-white py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* --- TOP PART: INTRO SPLIT GRID --- */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 items-center lg:grid-cols-2 bg-slate-50/50 rounded-3xl p-8 sm:p-12 shadow-sm ring-1 ring-slate-100">

          {/* Content Left */}
          <div>
            <p className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">
              // Get In Touch
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Connect With Perfect Refrigeration Today
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Have a sudden breakdown or need a preventative checkup? Our rapid support team handles queries for all major refrigerator, air conditioner, and laundry brands across Mumbai. We are simply a quick text or phone call away from returning your day back to normal.
            </p>
          </div>

          {/* Image Right */}
          <div className="w-full h-64 sm:h-80 overflow-hidden rounded-2xl shadow-md bg-slate-100">
            <img
              src="/Contactsection.webp" // Reuses your generated technician style photo safely
              alt="Perfect Refrigeration expert ready to assist with appliance inquiries"
              loading="lazy"
              className="w-full h-full object-cover object-center"
              width="400"
              height="400"
            />
          </div>

        </div>

        {/* --- BOTTOM PART: CARDS ADDRESS GRID --- */}
        <div className="mt-24 text-center">
          <p className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">
            // We're Here To Help
          </p>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-16">
            Reach Out For Service Inquiries
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left">

            {/* Card 1: Location */}
            <a
              href="https://maps.google.com/?q=Savera+Bldg,+Veera+Desai+Road+Link,+Andheri+West,+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row items-start gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-blue-500/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#041434]">
                <MapPinIcon />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  Savera Bldg, Room No. 10,<br />
                  Veera Desai Road Link,<br />
                  Andheri West, Near Sudarshan Hotel,<br />
                  Mumbai, Maharashtra 400053, India
                </p>
              </div>
            </a>

            {/* Card 2: Email */}
            <a
              href="mailto:info@perfect-refrigeration.com"
              className="flex flex-col sm:flex-row items-start gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-blue-500/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#041434]">
                <EnvelopeIcon />
              </div>
              <div className="w-full overflow-hidden">
                <h4 className="text-lg font-bold text-slate-900 mb-1">Email Address</h4>
                <p className="text-sm font-semibold text-blue-600 break-all hover:text-blue-500 mt-2">
                  info@perfect-refrigeration.com
                </p>
              </div>
            </a>

            {/* Card 3: Contact */}
            <a
              href="tel:+917506320321"
              className="flex flex-col sm:flex-row items-start gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-blue-500/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#041434]">
                <CallIcon />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Direct Line</h4>
                <p className="text-sm font-bold text-slate-700 mt-2 tracking-wide">
                  +91 75063 20321
                </p>
              </div>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}