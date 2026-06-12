import React from 'react';
import { Link } from 'react-router-dom';

// --- Extracted Icons for Clean Code Layout ---
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-slate-400" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// --- Localized Mumbai Blog Data ---
const blogPosts = [
  {
    id: 1,
    title: '5 Signs Your AC Needs Servicing Before the Mumbai Summer Peak',
    excerpt: 'Don’t wait for May humidity to find out your AC is failing. Look out for these early warning signs to save on your MSEDCL or BEST electricity bills.',
    category: 'AC Maintenance',
    date: 'Jun 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    slug: 'ac-servicing-mumbai-summer',
  },
  {
    id: 2,
    title: 'How to Prevent Refrigerator Leaks and Cooling Drops During Monsoon',
    excerpt: 'High humidity levels during Mumbai rains can wreak havoc on your fridge coils and door seals. Learn how to optimize your appliance for wet weather.',
    category: 'Fridge Tips',
    date: 'Jun 08, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1571175432244-5f0258591244?auto=format&fit=crop&w=600&q=80',
    slug: 'prevent-refrigerator-monsoon-leaks',
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Cleaning Your Washing Machine Drum Safely',
    excerpt: 'Hard water scale buildup can ruin your clothes and cause grinding noises. Here is a step-by-step cleaning routine using safe household items.',
    category: 'Washing Machines',
    date: 'May 28, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947e8017e?auto=format&fit=crop&w=600&q=80',
    slug: 'cleaning-washing-machine-drum',
  },
  {
    id: 4,
    title: 'Handling Voltage Fluctuations in Mumbai: Protecting Your Smart Fridge',
    excerpt: 'Power spikes can instantly fry a modern inverter refrigerator circuit board. Discover whether your new smart appliance needs an external stabilizer.',
    category: 'Appliance Care',
    date: 'May 20, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    slug: 'voltage-fluctuations-fridge-protection',
  },
  {
    id: 5,
    title: 'Why Your Microwave Isn\'t Heating: 3 Common Internal Fixes',
    excerpt: 'If your microwave runs but leaves your food cold, a blown high-voltage diode or magnetron failure might be the culprit. Here is what to check.',
    category: 'Microwave Repair',
    date: 'May 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80',
    slug: 'microwave-not-heating-fixes',
  },
  {
    id: 6,
    title: 'Front Load vs Top Load Washing Machines: Long-Term Maintenance Guide',
    excerpt: 'Different mechanical builds require completely different care styles. We break down mold prevention for front loaders vs gasket care for top loaders.',
    category: 'Washing Machines',
    date: 'May 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80',
    slug: 'front-load-vs-top-load-maintenance',
  },
  {
    id: 7,
    title: 'Is Your Inverter AC Actually Saving You Money? Let\'s Look at the Data',
    excerpt: 'Inverter compressors are marketed as energy savers, but wrong tonnage selections can reverse those benefits. Find the sweet spot for your bedroom size.',
    category: 'AC Maintenance',
    date: 'May 02, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80',
    slug: 'inverter-ac-energy-savings-truth',
  },
  {
    id: 8,
    title: 'Dealing with Hard Water Damage in Suburban Mumbai Washing Machines',
    excerpt: 'Areas like Andheri and Borivali often face hard water challenges. Learn how lime scale ruins inlet valves and heating elements over time.',
    category: 'Washing Machines',
    date: 'Apr 25, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80e0b96?auto=format&fit=crop&w=600&q=80',
    slug: 'hard-water-damage-washing-machine',
  },
  {
    id: 9,
    title: 'Perfect Refrigerator Temperature Settings for Humid Coastal Cities',
    excerpt: 'Setting your fridge too cold during humid months creates internal frost blockages. Find the optimal temperature matrix for crisp, fresh food.',
    category: 'Fridge Tips',
    date: 'Apr 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80',
    slug: 'fridge-temperature-settings-humidity',
  },
  {
    id: 10,
    title: '5 Common Reasons Your Split AC is Making a Strange Noise',
    excerpt: 'Rattling, buzzing, or whistling coming from your AC unit? Diagnose whether it is a loose fan blade, clogged filter, or a dying compressor motor.',
    category: 'AC Maintenance',
    date: 'Apr 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80',
    slug: 'split-ac-strange-noises-meaning',
  },
  {
    id: 11,
    title: 'How to Safely Clean Your AC Filters Yourself in 15 Minutes',
    excerpt: 'You don\'t always need a technician just to clear out heavy dust layers. Follow our safe, DIY guide to clean your indoor mesh filters cleanly.',
    category: 'AC Maintenance',
    date: 'Mar 29, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80',
    slug: 'clean-ac-filters-diy-guide',
  },
  {
    id: 12,
    title: 'Why Does My Fully Automatic Washing Machine Smell Like Rotten Eggs?',
    excerpt: 'Stagnant water trapped underneath the drum mixes with lint and detergent scum to form bacteria. Here is how to deep clean and sanitize it.',
    category: 'Washing Machines',
    date: 'Mar 22, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1567113463300-1025f5d37615?auto=format&fit=crop&w=600&q=80',
    slug: 'washing-machine-bad-odor-removal',
  },
  {
    id: 13,
    title: 'Microwave Sparking Inside? Don\'t Panic, Check Your Waveguide Cover',
    excerpt: 'Seeing sparks inside the cabin is terrifying, but it\'s usually just a burnt, grease-stained mica sheet waveguide cover rather than a dead machine.',
    category: 'Microwave Repair',
    date: 'Mar 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    slug: 'microwave-sparking-waveguide-fix',
  },
  {
    id: 14,
    title: 'When to Manual Defrost Your Deep Freezer to Save Compressor Life',
    excerpt: 'Ice layers thicker than a quarter inch force your cooling system to run twice as hard, spiking power draw and shortening its overall lifespan.',
    category: 'Fridge Tips',
    date: 'Feb 28, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80',
    slug: 'manual-defrost-deep-freezer-tips',
  },
  {
    id: 15,
    title: 'Top 5 Appliance Management Mistakes Made by Busy Urban Households',
    excerpt: 'Overloading washing machines and slamming refrigerator doors cause quick structural issues. Learn minor habit switches to save on repair bills.',
    category: 'Appliance Care',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    slug: 'appliance-mistakes-urban-households',
  },
  {
    id: 16,
    title: 'How Often Should You Service a Commercial Frost-Free Refrigerator?',
    excerpt: 'For restaurants, cafes, and large household double-door units, routine component checkups are required to maintain gas pressure levels safely.',
    category: 'Fridge Tips',
    date: 'Jan 30, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    slug: 'commercial-refrigerator-service-frequency',
  },
  {
    id: 17,
    title: 'Fixing a Clogged Washing Machine Drain Pump After Heavy Weather',
    excerpt: 'When dirty storm water or heavy lint gets trapped inside your automatic drain pump assembly, the machine stops spinning. Learn the cleanup process.',
    category: 'Washing Machines',
    date: 'Jan 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1521207418485-99c705420785?auto=format&fit=crop&w=600&q=80',
    slug: 'washing-machine-clogged-drain-pump',
  },
  {
    id: 18,
    title: 'Why AC Compressors Trip Repeatedly During Harsh Coastal Heatwaves',
    excerpt: 'When outside temperatures touch record highs, poor ventilation around your outdoor condenser unit forces it to trip due to over-exhaustion thermal locks.',
    category: 'AC Maintenance',
    date: 'Jan 05, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80',
    slug: 'ac-compressor-tripping-heatwave',
  },
  {
    id: 19,
    title: 'Choosing the Right Stabilizer Capacity for High-End Kitchen Appliances',
    excerpt: 'Do not guess your voltage metrics. Understand the exact KVA load calculation formula to purchase a proper surge defender for heavy machinery.',
    category: 'Appliance Care',
    date: 'Dec 20, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=600&q=80',
    slug: 'choosing-right-stabilizer-capacity',
  },
  {
    id: 20,
    title: 'The Complete Pre-Monsoon Household Appliance Protection Checklist',
    excerpt: 'Before high winds and rain hit Mumbai, complete these 6 crucial checks for your external AC units, grounding wires, and indoor appliance setups.',
    category: 'Appliance Care',
    date: 'Dec 10, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    slug: 'pre-monsoon-appliance-protection-checklist',
  }
];

export default function BlogSection() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-slate-100" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header Layout */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold leading-7 text-blue-600 uppercase tracking-widest">
            // Knowledge & Advice
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Latest Insights From Our Repair Experts
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Smart maintenance strategies to prolong your appliance lifespans and avoid costly emergency breakdowns.
          </p>
        </div>

        {/* Responsive Grid Panel */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col items-start justify-between rounded-2xl bg-slate-50/50 p-5 ring-1 ring-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:ring-blue-500/20 group"
            >
              <div className="w-full">
                {/* Image Aspect Box */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-200 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy" // Optimized performance rule
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Meta Row */}
                <div className="flex items-center gap-x-4 text-xs font-medium text-slate-500 mb-3 px-1">
                  <time dateTime={post.date}>{post.date}</time>
                  <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Header & Excerpt */}
                <h3 className="text-xl font-bold leading-snug text-slate-900 px-1 tracking-tight group-hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 px-1 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Read Button Footer */}
              <div className="w-full mt-6 pt-4 border-t border-slate-100 px-1">
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Read Article</span>
                  <ArrowRightIcon />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}