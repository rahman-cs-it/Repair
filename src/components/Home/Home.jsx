import ApplianceTypes from './ApplianceTypes'
import Card from './Card'
import HaboutUs from './HaboutUs'
import TestimonialsAndCTA from './TestimonialsAndCTA'
import WhyChooseUs from './WhyChooseUs'
export default function Home() {
  return (
    <>


      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen flex items-center">
        <img
          alt="Perfect Refrigeration technician repairing a stainless steel refrigerator compressor in a home kitchen"
          src="/Compressed_Home_img.jpg"
          className="absolute inset-0 -z-10 size-full object-cover object-center md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Fast & Reliable AC, Fridge & Washing Machine Repair
            </h2>
            <p className="mt-8 text-lg font-medium text-white sm:text-xl/8">
              AC not cooling, fridge leaking, or washing machine stuck? Perfect Refrigeration fixes it all. We service all brands, from home appliances to commercial units. Fast, doorstep repair starting at just ₹199.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917506320321"
                className="rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-center transition-all"
              >
                Call Now
              </a>
              <a
                href="#"
                className="rounded-md bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 text-center transition-all backdrop-blur-sm"
              >
                Book a Technician
              </a>
            </div>
          </div>
        </div>
      </div>
      <ApplianceTypes />
      <Card />
      <WhyChooseUs />
      <HaboutUs />
      <TestimonialsAndCTA />
    </>

  )
}