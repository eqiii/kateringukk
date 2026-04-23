import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Katering</h1>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
        </div>

        {/* Action */}
        <div className="flex gap-2">
          <Button variant="outline">Login</Button>
          <Button>Order</Button>
        </div>

      </div>
    </nav>
  )
}