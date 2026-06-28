"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import { Homestay } from "@/types/homestay";
import { getHomestays } from "@/services/homestay.service";
import Loader from "@/components/ui/Loader";
import Toast from "@/components/ui/Toast";

export default function Home() {

  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHomestays() {
      try {
        const data = await getHomestays();

        setHomestays(data);
      } catch (error) {
        console.error(error);
        setError("Unable to fetch homestays.");
      } finally {
        setLoading(false);
      }
    }

    fetchHomestays();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader size={60} />
      </div>
    );
  }


  return (
    <>
      <Navbar />

      <Hero />
      {error && (
        <div className="mx-auto mt-6 max-w-7xl px-6">
          <Toast
            message={error}
            type="error"
          />
        </div>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Featured Homestays
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {homestays.map((stay) => (
            <Card
              key={stay.id}
              title={stay.name}
              description={`${stay.location} • ₹${stay.price}/night • ⭐ ${stay.rating}`}
              image={stay.image}
              buttonText="View Details"
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}