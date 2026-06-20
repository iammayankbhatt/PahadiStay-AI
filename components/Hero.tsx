export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-400 dark:from-green-950 dark:to-emerald-900 text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-white dark:text-gray-50">
          Discover Authentic Homestays Across Uttarakhand
        </h1>

        <p className="mx-auto max-w-3xl text-lg md:text-xl text-green-50 dark:text-emerald-100/80">
          Find, plan and experience local stays with AI-powered
          travel assistance.
        </p>

        <button className="mt-8 rounded-xl bg-stone-200 px-8 py-3 font-semibold text-green-700 shadow-lg transition hover:scale-105 hover:bg-gray-50 dark:bg-emerald-100 dark:text-green-900 dark:hover:bg-stone-200">
          Explore Homestays
        </button>
        
      </div>
    </section>
  );
}