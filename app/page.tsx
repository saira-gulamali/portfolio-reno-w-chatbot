import Chatbot from "../src/components/Chatbot";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            On-Time, On-Budget Renovations Without the Stress
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We help homeowners complete high-quality renovations with clear
            pricing and structured timelines.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl">
              Get a Quote
            </button>
            <button className="border px-6 py-3 rounded-xl">
              Book a Visit
            </button>
          </div>
        </div>
        <div className="bg-gray-300 h-80 rounded-2xl" />
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-6 border-t border-b">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between text-sm text-gray-600">
          <span>⭐ 5.0 Rating</span>
          <span>50+ Projects Completed</span>
          <span>Fully Insured & Certified</span>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Renovating shouldn’t feel risky
        </h2>
        <p className="text-gray-600">
          Avoid delays, budget overruns, and unreliable builders. Our structured
          approach removes uncertainty.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {["Loft Conversions", "Extensions", "Kitchen Renovations"].map(
          (service) => (
            <div key={service} className="bg-white p-6 rounded-2xl shadow">
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600 text-sm mb-4">
                High-quality {service.toLowerCase()} tailored to your home.
              </p>
              <button className="text-orange-500 font-medium">
                Learn more →
              </button>
            </div>
          ),
        )}
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Our Proven Process</h2>
          <div className="grid md:grid-cols-5 gap-6 text-sm">
            {[
              "Consultation",
              "Design",
              "Fixed Quote",
              "Build",
              "Completion",
            ].map((step, i) => (
              <div key={i}>
                <div className="text-orange-500 font-bold text-xl mb-2">
                  {i + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-600 mb-4">
              “Amazing experience. Finished on time and exceeded expectations.”
            </p>
            <div className="font-semibold">Client {i}</div>
          </div>
        ))}
      </section>

      {/* PRICING */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Transparent Pricing</h2>
        <p className="text-gray-600">Most projects range between</p>
        <div className="text-4xl font-bold mt-2">£15K – £60K+</div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Get a Quote</h2>
        <form className="bg-white p-8 rounded-2xl shadow grid gap-4">
          <select className="border p-3 rounded-lg">
            <option>Project Type</option>
            <option>Extension</option>
            <option>Loft Conversion</option>
          </select>
          <select className="border p-3 rounded-lg">
            <option>Budget</option>
            <option>£10K-£30K</option>
            <option>£30K-£60K</option>
          </select>
          <input className="border p-3 rounded-lg" placeholder="Timeline" />
          <input className="border p-3 rounded-lg" placeholder="Your Email" />
          <button className="bg-orange-500 text-white py-3 rounded-xl">
            Get My Quote
          </button>
        </form>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to start your renovation?
        </h2>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-xl">
          Book a Visit
        </button>
      </section>

      <Chatbot />
    </main>
  );
}
