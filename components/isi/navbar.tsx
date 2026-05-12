import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">Katering</h1>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/paket">Paket</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Action */}
        <div className="flex gap-2">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
