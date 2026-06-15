import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Platform Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Card
            title="AI Route Planner"
            description="Generate personalized travel itineraries based on your destination, budget, and interests."
            image="https://picsum.photos/500/300?random=1"
            buttonText="Learn More"
          />

          <Card
            title="Homestay Discovery"
            description="Explore authentic homestays across Uttarakhand using location-based search."
            image="https://picsum.photos/500/300?random=2"
            buttonText="Explore"
          />

          <Card
            title="Responsible Tourism"
            description="Promote sustainable travel and better guest-host experiences through civic scoring."
            image="https://picsum.photos/500/300?random=3"
            buttonText="Read More"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}