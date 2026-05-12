import Feature from "@/components/feature"
import MenuCard from "@/components/menu-card"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server"

export default async function HomePage() {

  const supabase = await createClient()

  // GANTI: from("menu") ➡️ from("pakets")
  const { data: pakets, error } = await supabase
    .from("pakets")
    .select("*")
    .limit(8)

  return (
    <main>

      {/* HERO */}
      <section className="relative h-125 w-full">

        <img
          src="/more.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-end">

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

      {/* PAKET SECTION (sebelumnya MENU) */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-6">

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

          {/* DATA DARI SUPABASE - Table: pakets */}
          {error ? (
            <p className="text-red-500 text-sm">Gagal memuat data paket.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {pakets?.map((paket) => (
                <MenuCard
                  key={paket.id}
                  id={paket.id} // Tambahkan id untuk routing
                  // Mapping field database 'pakets' ke props MenuCard
                  title={paket.nama_paket || paket.title || "Paket Catering"}
                  price={`Rp ${paket.harga || paket.price}`}
                  min={paket.min_order || "20 Pax"}
                  image={paket.foto || paket.image}
                />
              ))}
            </div>
          )}

        </div>

      </section>

    </main>
  )
}