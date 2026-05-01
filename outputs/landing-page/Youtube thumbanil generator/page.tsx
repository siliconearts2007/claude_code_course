import React from 'react';

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Eye‑Catching Thumbnails in Seconds</h1>
        <p className="text-lg md:text-xl mb-6">Stop wasting hours on design – let our AI make scroll‑stopping thumbnails for your videos, every time.</p>
        <a href="#pricing" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition">
          Get Started Free
        </a>
      </section>

      {/* Problem */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
        <p>You spend too much time tweaking images, and inconsistent thumbnails hurt click‑through rates. The pressure to publish weekly leaves you scrambling for graphics that actually attract viewers.</p>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <svg className="w-12 h-12 mx-auto mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
            <h3 className="font-semibold mb-2">Instant AI Design</h3>
            <p>Generate a custom thumbnail in 10 seconds – no Photoshop needed.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <svg className="w-12 h-12 mx-auto mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
            <h3 className="font-semibold mb-2">Brand Consistency</h3>
            <p>Apply your channel colors, fonts, and logo with one click.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <svg className="w-12 h-12 mx-auto mb-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18"/></svg>
            <h3 className="font-semibold mb-2">Batch Production</h3>
            <p>Create thumbnails for an entire series in minutes, keeping a cohesive look.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <ol className="space-y-4 text-left">
          <li><strong>Enter Video Info</strong> – title, keywords, and upload your logo.</li>
          <li><strong>Choose a Style</strong> – pick a template that matches your vibe.</li>
          <li><strong>Download &amp; Publish</strong> – get a ready‑to‑use image and boost your CTR.</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">What Creators Say</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">"My CPM jumped 30% after I started using the generator. It’s the best time‑saver I’ve found."</p>
            <footer className="text-sm font-medium">— Ava, 250k subscribers</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">"I love how the AI keeps my branding consistent across videos. My audience notices the polish."</p>
            <footer className="text-sm font-medium">— Liam, 120k subscribers</footer>
          </blockquote>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Pricing</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="border rounded-lg p-6 text-center">
            <h3 className="font-semibold mb-4">Free</h3>
            <p className="text-3xl font-bold mb-4">$0</p>
            <ul className="mb-4 text-left">
              <li>5 thumbnails / month</li>
              <li>Basic templates</li>
            </ul>
            <a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Start Free</a>
          </div>
          <div className="border-2 border-indigo-600 rounded-lg p-6 text-center">
            <h3 className="font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4">$9.99/mo</p>
            <ul className="mb-4 text-left">
              <li>200 thumbnails</li>
              <li>Brand kit & batch mode</li>
            </ul>
            <a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Start Free Trial</a>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <h3 className="font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <ul className="mb-4 text-left">
              <li>Unlimited thumbnails</li>
              <li>Team access & priority support</li>
            </ul>
            <a href="#" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Contact Sales</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">FAQ</h2>
        <dl className="max-w-3xl mx-auto space-y-4">
          <div>
            <dt className="font-medium">Do I need design skills?</dt>
            <dd className="ml-4">No. Just input your video details and let the AI handle the rest.</dd>
          </div>
          <div>
            <dt className="font-medium">Can I use my own fonts?</dt>
            <dd className="ml-4">Yes, upload any font in the brand kit.</dd>
          </div>
          <div>
            <dt className="font-medium">Is there a free tier?</dt>
            <dd className="ml-4">Absolutely – generate up to 5 thumbnails each month at no cost.</dd>
          </div>
        </dl>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <nav className="mb-4">
          <a href="#" className="mx-2 hover:underline">About</a>
          <a href="#" className="mx-2 hover:underline">Docs</a>
          <a href="#" className="mx-2 hover:underline">Contact</a>
        </nav>
        <p>© 2026 Thumbnailify. All rights reserved.</p>
      </footer>
    </div>
  );
}
