import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-green-700">
            Dashboard
          </h1>

          <p className="text-lg leading-8 text-gray-700">
            This dashboard will allow users and homestay owners to manage
            bookings, properties, reviews, AI travel plans, and account
            settings. Functionality will be implemented in upcoming modules.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}