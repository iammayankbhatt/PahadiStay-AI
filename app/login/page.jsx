import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-green-700">
            Login
          </h1>

          <p className="text-gray-600">
            Authentication functionality will be implemented in a future
            module. This page currently serves as a placeholder route for
            the project frontend skeleton.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}