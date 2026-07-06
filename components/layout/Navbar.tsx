import { Heart, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-pink-600">
          Wish Gift Shop
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">Shop</a>
          <a href="#" className="hover:text-pink-600">Categories</a>
          <a href="#" className="hover:text-pink-600">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex gap-5">

          <Search className="cursor-pointer hover:text-pink-600"/>

          <Heart className="cursor-pointer hover:text-pink-600"/>

          <ShoppingCart className="cursor-pointer hover:text-pink-600"/>

          <User className="cursor-pointer hover:text-pink-600"/>

        </div>

      </div>
    </header>
  );
}