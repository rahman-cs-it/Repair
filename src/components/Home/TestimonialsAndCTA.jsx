import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "My split AC stopped cooling in the middle of May. Perfect Refrigeration sent someone within two hours. Fast, professional, and very transparent about the pricing.",
    author: "Rahul S.",
    location: "Andheri West",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 2,
    content: "The compressor on our double-door fridge died right before a family gathering. The technician fixed it the same day and even cleaned the coils. Absolute lifesavers!",
    author: "Priya M.",
    location: "Bandra",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 3,
    content: "I was worried I'd have to buy a new washing machine when it started making terrible grinding noises. They diagnosed a simple drum issue and saved me thousands.",
    author: "Amit K.",
    location: "Powai",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  }
];

// Reusable Star Component
function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsAndCTA() {
  return (
    <div className="relative" id="testimonials">
      
      {/* --- SECTION 1: TESTIMONIALS --- */}
      <section className="bg-slate-50 py-24 sm:py-32 pb-40 sm:pb-56 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Mumbai Families Say About Us
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div>
                  <StarRating />
                  <p className="text-base leading-7 text-slate-700">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-x-4 border-t border-slate-100 pt-6">
                  <img
                    className="h-12 w-12 rounded-full bg-slate-50 object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-slate-900">{testimonial.author}</h3>
                    <p className="text-sm leading-6 text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: CALL TO ACTION (CTA) --- */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden mt-[-100px]">
        
        {/* Wavy SVG Divider merging into the dark background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[120px]">
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
            className="h-full w-full object-cover"
          />
          {/* Dark blue/black overlay for text readability */}
          <div className="absolute inset-0 bg-[#041434]/80 mix-blend-multiply"></div>
        </div>

        {/* CTA Content */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 lg:px-8 text-center pt-10">
          
          {/* Centered Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm mb-8">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.203-.25.477-.424.784-.504l3.967-1.033c.176-.046.319-.17.382-.338a.502.502 0 00-.115-.548l-4.542-4.541a.502.502 0 00-.547-.115l-1.034 3.967c-.08.307-.254.58-.504.784l-3.053 2.492M11.419 15.17l-4.33-4.33a.5.5 0 00-.708 0l-4.9 4.9a.5.5 0 000 .707l3.623 3.623a.5.5 0 00.707 0l4.9-4.9a.5.5 0 000-.708z" />
            </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              Call +91 75063 20321
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}