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

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32 relative z-10" id="testimonials">
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
                  loading="lazy"
                  width="48"
                  height="48"
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
  );
}