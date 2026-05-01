import React from 'react';

export default function LandingPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Create Eye‑Catching YouTube Thumbnails in Seconds
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Boost clicks, grow your channel—no design skills required.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded">
          Start Free Trial
        </button>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Feature title="AI‑Powered Designs" desc="Instantly generate dozens of thumbnail variants." />
          <Feature title="Customizable Templates" desc="Edit text, colors, and icons with a single click." />
          <Feature title="Export Ready" desc="Download 1080×1080 PNGs ready for upload." />
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">What Creators Say</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <blockquote className="italic">"It saved me hours! My click‑through rate jumped 30%" – Alex, Tech Reviews</blockquote>
          <blockquote className="italic">"The AI templates are perfect for my gaming channel" – Maya, Gaming Hub</blockquote>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Plan title="Free" price="$0" features={['5 thumbnails per month']} />
          <Plan title="Pro" price="$9.99/mo" features={['Unlimited thumbnails', 'Premium templates']} />
          <Plan title="Enterprise" price="Custom" features={['Custom plans for agencies']} />
        </div>
        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded">
          Upgrade Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        © 2026 YouTube Thumbnail Generator. All rights reserved.
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-center p-4 border rounded">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Plan({ title, price, features }: { title: string; price: string; features: string[] }) {
  return (
    <div className="border rounded p-6 bg-white shadow">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-semibold mb-4">{price}</p>
      <ul className="text-left mb-4 space-y-1">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}