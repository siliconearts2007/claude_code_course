// File: ./outputs/landing-page/Youtube thumbanil generator/page.tsx
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Create Click‑Magnet Thumbnails in Seconds
            </h1>
            <p className="text-lg mb-6">
              Stop guessing. Use proven, high‑CTR designs powered by AI and launch videos that get noticed.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Start Free Trial
            </a>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <Image
              src="/thumbnail-mock.png"
              alt="Thumbnail editor mockup"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold mb-4">Why You’re Struggling</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Hours wasted on manual design tools.</li>
            <li>Uncertain which headline will attract clicks.</li>
            <li>Inconsistent branding across videos.</li>
            <li>Low click‑through rates hold your channel back.</li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12 grid gap-8 md:grid-cols-3">
          <FeatureCard
            title="One‑Click Templates"
            description="Professionally crafted layouts already optimized for YouTube’s algorithm."
          />
          <FeatureCard
            title="AI‑Powered Text Suggestion"
            description="Generate catchy headlines in seconds that boost curiosity."
          />
          <FeatureCard
            title="Export Ready for YouTube"
            description="Download at the exact 1280 × 720 size with optimal file weight."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard step="1" title="Pick a Template" />
            <StepCard step="2" title="Customize" />
            <StepCard step="3" title="Download & Upload" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">What Youtubers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="I cut my thumbnail creation time from 30 minutes to under 2 minutes. My CTR jumped 27%!"
              author="Lena, Gaming Creator"
            />
            <Testimonial
              quote="The AI headline generator gave me ideas I’d never thought of. My subscriber growth accelerated instantly."
              author="Mike, Tech Reviewer"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              tier="Free"
              price="$0"
              features={[
                "Unlimited thumbnails",
                "Limited templates",
                "AI suggestions (5/mo)",
              ]}
              cta="Start Free"
            />
            <PricingCard
              tier="Pro"
              price="$12/mo"
              features={[
                "Full template library",
                "Unlimited AI suggestions",
                "Priority support",
                "Brand kit saving",
              ]}
              cta="Upgrade Now"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">FAQ</h2>
          <dl className="space-y-6">
            <FAQItem
              question="Do I need design skills?"
              answer="No. All templates are drag‑and‑drop ready."
            />
            <FAQItem
              question="Can I use my own fonts?"
              answer="Yes, upload custom fonts in the Pro plan."
            />
            <FAQItem
              question="Is there a water‑mark on the free version?"
              answer="No, thumbnails are clean; Pro provides premium assets."
            />
            <FAQItem
              question="What file format is exported?"
              answer="PNG optimized for YouTube’s recommended size."
            />
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2026 Youtube Thumbnail Generator</p>
          <nav className="flex space-x-4 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

/* Reusable UI components */
function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function StepCard({ step, title }: { step: string; title: string }) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="text-indigo-600 font-bold text-2xl mb-2">{step}</div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="bg-white p-6 rounded-lg shadow">
      <p className="italic mb-4">&ldquo;{quote}&rdquo;</p>
      <footer className="text-right font-medium">– {author}</footer>
    </blockquote>
  );
}

function PricingCard({
  tier,
  price,
  features,
  cta,
}: {
  tier: string;
  price: string;
  features: string[];
  cta: string;
}) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-2">{tier}</h3>
      <p className="text-3xl font-extrabold mb-4">{price}</p>
      <ul className="mb-6 space-y-2 text-left">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
        {cta}
      </button>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <>
      <dt className="font-medium">{question}</dt>
      <dd className="ml-4 text-gray-700">{answer}</dd>
    </>
  );
}
