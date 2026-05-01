import Image from 'next/image'

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center py-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Create Eye‑Catching YouTube Thumbnails in Seconds
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Boost your click‑through rate with AI‑powered designs that match your brand.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition">
          Get Started – Free Trial
        </button>
        <div className="mt-8 flex justify-center">
          {/* Placeholder thumbnail preview */}
          <Image
            src="/placeholder-thumbnail.png"
            alt="Thumbnail designer preview"
            width={640}
            height={360}
            className="rounded shadow-lg"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full max-w-3xl py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">The Problem</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Low CTR on videos because thumbnails look generic.</li>
          <li>Designing thumbnails takes hours you could spend creating content.</li>
          <li>Inconsistent branding across videos confuses viewers.</li>
        </ul>
      </section>

      {/* Solution Overview */}
      <section className="w-full max-w-3xl py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Our Thumbnail Generator?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">AI‑Generated Designs</h3>
            <p className="text-gray-600">Enter your video title and get multiple custom thumbnails instantly.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Brand Consistency</h3>
            <p className="text-gray-600">Upload your logo and color palette; every thumbnail stays on‑brand.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium text-gray-700 mb-2">One‑Click Export</h3>
            <p className="text-gray-600">Download ready‑to‑use PNGs in the exact YouTube dimensions.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-3xl py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Enter Title:</strong> Type your video title.</li>
          <li><strong>Choose Style:</strong> Select a design preset or let AI suggest the best fit.</li>
          <li><strong>Download:</strong> Click download and upload to YouTube.</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-3xl py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">What Creators Say</h2>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-4">
          "My CTR jumped from 3% to 12% after using this tool!" – Emily, 250k subs
        </blockquote>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
          "I saved hours every week – the AI designs look professional every time." – Jake, 1M subs
        </blockquote>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-3xl py-8 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-300 rounded">
            <h3 className="text-2xl font-medium mb-2">Free Tier</h3>
            <p className="text-gray-600 mb-2">5 thumbnail renders per month</p>
            <button className="mt-2 bg-gray-300 text-gray-800 py-2 px-4 rounded disabled:opacity-50" disabled>
              Current Plan
            </button>
          </div>
          <div className="p-6 border border-blue-600 rounded bg-white">
            <h3 className="text-2xl font-medium mb-2">Pro – $9.99/mo</h3>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              <li>Unlimited renders</li>
              <li>Brand presets</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Upgrade Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-3xl py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">FAQ</h2>
        <dl className="space-y-4 text-gray-700">
          <div>
            <dt className="font-medium">Do I need design skills?</dt>
            <dd className="ml-4">No. The AI handles the design; you just provide a title.</dd>
          </div>
          <div>
            <dt className="font-medium">Are the thumbnails YouTube‑approved?</dt>
            <dd className="ml-4">Yes, they meet YouTube’s size and format requirements.</dd>
          </div>
          <div>
            <dt className="font-medium">Can I use my own fonts?</dt>
            <dd className="ml-4">Upload custom fonts in the brand settings.</dd>
          </div>
          <div>
            <dt className="font-medium">Is there a commitment?</dt>
            <dd className="ml-4">Cancel anytime, no contract.</dd>
          </div>
        </dl>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl py-6 text-center text-sm text-gray-500">
        <nav className="mb-4 space-x-4">
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <p>© 2026 ThumbnailGen. All rights reserved.</p>
      </footer>
    </main>
  )
}
