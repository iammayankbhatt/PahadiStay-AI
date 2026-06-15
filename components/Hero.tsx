export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-emerald-500 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Discover Authentic Homestays Across Uttarakhand
        </h1>

        <p className="mx-auto max-w-3xl text-lg md:text-xl">
          Find, plan and experience local stays with AI-powered
          travel assistance.
        </p>

        <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-green-700 transition hover:scale-105">
          Explore Homestays
        </button>
      </div>
    </section>
  );
}