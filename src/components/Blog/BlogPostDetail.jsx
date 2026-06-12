import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fullBlogPosts } from './blogData';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = fullBlogPosts[slug];

  useEffect(() => {
    if (post) {
      // 1. Set Primary Browser Tab Title
      document.title = post.metaTitle;

      // Helper function to dynamically create or update meta tags cleanly
      const setMeta = (attribute, key, value) => {
        let element = document.querySelector(`meta[${attribute}="${key}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, key);
          document.head.appendChild(element);
        }
        element.setAttribute('content', value);
      };

      // 2. Safe Social Description Truncation (~120 chars for mobile safety)
      const socialDesc = post.metaDescription.length > 120 
        ? `${post.metaDescription.substring(0, 117)}...` 
        : post.metaDescription;

      // 3. Standard Search Engine Tags
      setMeta('name', 'description', post.metaDescription);
      setMeta('name', 'keywords', post.keywords.join(', '));

      // 4. Open Graph Protocol Tags (WhatsApp, Facebook, Discord)
      setMeta('property', 'og:title', post.title);
      setMeta('property', 'og:description', socialDesc);
      setMeta('property', 'og:image', post.image);
      setMeta('property', 'og:site_name', 'FrostFix Appliances');
      setMeta('property', 'og:type', 'article');
      setMeta('property', 'og:url', window.location.href);

      // 5. X / Twitter Card Framework Tags
      setMeta('name', 'twitter:card', 'summary_large_image');
      setMeta('name', 'twitter:title', post.title);
      setMeta('name', 'twitter:description', socialDesc);
      setMeta('name', 'twitter:image', post.image);
    }

    // Reset default properties when user navigates away from the article
    return () => {
      document.title = 'FrostFix Appliances | Expert Repair Services in Mumbai';
    };
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl text-center py-32 px-6">
        <h2 className="text-3xl font-bold text-slate-900">Article Not Found</h2>
        <p className="mt-4 text-slate-600">The requested technical insights post could not be retrieved.</p>
        <Link to="/blog" className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white py-20 sm:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-8 text-slate-700">
        <Link to="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-500 flex items-center gap-2 mb-8 inline-flex">
          ← Back to All Articles
        </Link>

        <div className="flex items-center gap-x-4 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">
          <span>{post.category}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-medium lowercase">{post.readTime}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 mb-10 shadow-sm">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-xl leading-relaxed text-slate-900 font-medium mb-12 border-l-4 border-blue-600 pl-4 bg-slate-50 py-3 rounded-r-xl">
          {post.intro}
        </p>

        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4 leading-snug">
                {section.heading}
              </h2>
              <p className="text-base leading-8 text-slate-600 text-justify">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-950 p-8 text-center text-white relative overflow-hidden ring-1 ring-white/10">
          <h3 className="text-xl font-bold mb-2">Experiencing Appliance Failures in Mumbai?</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Our certified FrostFix specialist mechanics offer same-day diagnostics with complete service warranties.
          </p>
          <a href="tel:+917506320321" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
            Book Same-Day Repair Service
          </a>
        </div>
      </div>
    </article>
  );
}