import { Button } from "@/components/ui/button"
import Image from "next/image"
import Feature from "@/components/feature"
import MenuCard from "@/components/menu-card"
import Link from "next/link"

export default function HomePage() {
  return (
     <main>

      {/* HERO */}
      <section className="relative h-125 w-full">
  {/* Background */}
  <img
    src="/more.png"
    alt="hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay gelap biar teks kebaca */}
  <div className="absolute inset-0 bg-black/40" />

 {/* Content kanan */}
{/* Content kanan */}
<div className="absolute inset-0 flex items-center justify-end">
  
  {/* Wrapper kanan */}
  <div className="w-full flex justify-end pr-6 md:pr-10 lg:pr-16">
    
    <div className="max-w-xl text-right">
      
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
        Solusi cerdas <br />
        manajemen kebutuhan <br />
        makan perusahaan
      </h1>

      <p className="text-white/80 text-lg leading-relaxed">
        Nikmati kemudahan pemesanan makan, pengiriman andal,
        dan efisiensi administrasi dalam satu platform.
      </p>

    </div>

  </div>
</div>
</section>

            {/* FEATURES */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4">
            Gabungan terbaik catering dan food delivery
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            Rasakan kemudahan memesan makan dari catering 
            dengan pengiriman efisien untuk perusahaan.
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            <Feature
              title="Akses ke berbagai catering dan restoran favorit"
              desc="Temukan beragam masakan favorit dari berbagai pilihan merchant."
            />

            <Feature
              title="Pengiriman yang selalu bisa diandalkan"
              desc="Sistem logistik terintegrasi untuk memastikan makanan tepat waktu."
            />

            <Feature
              title="Fleksibilitas pemesanan"
              desc="Pilih cara pemesanan sesuai kebutuhan perusahaan Anda."
            />

            <Feature
              title="Otomatisasi laporan dan pembayaran"
              desc="Dashboard untuk memantau pengeluaran dan laporan otomatis."
            />

          </div>

        </div>
      </section>

      
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6">

    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold">
  Paket Favorit
</h2>

<p className="text-gray-500 text-sm">
  Pilihan paket terbaik untuk kebutuhan konsumsi Anda
</p>
      </div>

     <Link href="/paket">
  <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
    Lihat paket lainnya
  </button>
</Link>
    </div>

    {/* List Menu */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      <MenuCard
  title="Pasta"
  price="Rp 20.000"
  min="Min order: 20 pax"
  image="/menu1.jpg"
/>

<MenuCard
  title="Nasi Campur"
  price="Rp 20.000"
  min="Min order: Rp 300.000"
  image="/menu2.jpg"
/>

<MenuCard
  title="Rice Bowl"
  price="Rp 20.000"
  min="Min order: 20 pax"
  image="/menu3.jpg"
/>

<MenuCard
  title="Nasi Goreng Crispy"
  price="Rp 20.000"
  min="Min order: Rp 300.000"
  image="/menu4.jpg"
/>

    </div>

  </div>
</section>

    </main>
  )
}
