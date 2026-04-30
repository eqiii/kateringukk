import MenuCard from "@/components/menu-card"

export default function MenuPage() {
  const menus = [
    { title: "Pasta", price: "Rp 20.000", min: "Min order: 20 pax", image: "/menu1.jpg" },
    { title: "Nasi Beef Premium", price: "Rp 20.000", min: "Min order: 300rb", image: "/menu2.jpg" },
    { title: "Rice Bowl Cumi", price: "Rp 20.000", min: "Min order: 20 pax", image: "/menu3.jpg" },
    { title: "Nasi Kulit Crispy", price: "Rp 20.000", min: "Min order: 300rb", image: "/menu4.jpg" },

    { title: "Ayam Bakar", price: "Rp 22.000", min: "Min order: 20 pax", image: "/menu1.jpg" },
    { title: "Nasi Goreng", price: "Rp 18.000", min: "Min order: 20 pax", image: "/menu2.jpg" },
    { title: "Mie Ayam", price: "Rp 15.000", min: "Min order: 20 pax", image: "/menu3.jpg" },
    { title: "Sate Ayam", price: "Rp 25.000", min: "Min order: 300rb", image: "/menu4.jpg" },

    { title: "Nasi Rendang", price: "Rp 27.000", min: "Min order: 20 pax", image: "/menu1.jpg" },
    { title: "Ayam Geprek", price: "Rp 17.000", min: "Min order: 20 pax", image: "/menu2.jpg" },
    { title: "Bakso", price: "Rp 15.000", min: "Min order: 20 pax", image: "/menu3.jpg" },
    { title: "Soto Ayam", price: "Rp 16.000", min: "Min order: 20 pax", image: "/menu4.jpg" },

    { title: "Nasi Uduk", price: "Rp 14.000", min: "Min order: 20 pax", image: "/menu1.jpg" },
    { title: "Lontong Sayur", price: "Rp 13.000", min: "Min order: 20 pax", image: "/menu2.jpg" },
    { title: "Nasi Kuning", price: "Rp 18.000", min: "Min order: 20 pax", image: "/menu3.jpg" },
    { title: "Ayam Goreng", price: "Rp 19.000", min: "Min order: 20 pax", image: "/menu4.jpg" },

    { title: "Tempe Orek", price: "Rp 10.000", min: "Min order: 20 pax", image: "/menu1.jpg" },
    { title: "Tahu Balado", price: "Rp 11.000", min: "Min order: 20 pax", image: "/menu2.jpg" },
    { title: "Capcay", price: "Rp 15.000", min: "Min order: 20 pax", image: "/menu3.jpg" },
    { title: "Kwetiau", price: "Rp 20.000", min: "Min order: 20 pax", image: "/menu4.jpg" },
  ]

  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Semua Menu</h1>
          <p className="text-gray-500">
            Temukan berbagai pilihan menu terbaik untuk kebutuhan Anda
          </p>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menus.map((menu, i) => (
            <MenuCard key={i} {...menu} />
          ))}
        </div>

      </div>
    </main>
  )
}