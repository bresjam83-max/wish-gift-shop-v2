import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="text-center py-24">
        <h1 className="text-6xl font-bold text-pink-600">
          Welcome to Wish Gift Shop
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Premium Fashion Collection For Everyone
        </p>

        <button className="mt-8 rounded-lg bg-pink-600 px-8 py-4 text-white hover:bg-pink-700">
          Shop Now
        </button>
      </section>
    </main>
  );
}