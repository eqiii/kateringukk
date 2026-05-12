import MenuCard from "@/components/menu-card"
import { createClient } from "@/utils/supabase/server"

export default async function PaketPage() {
  const supabase = await createClient()

  const { data: pakets, error } = await supabase
    .from("pakets")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Semua Paket Catering</h1>
          <p className="text-gray-500">
            Temukan berbagai pilihan paket catering terbaik untuk kebutuhan acara dan perusahaan Anda
          </p>
        </div>

        {/* Error Handling */}
        {error ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">Gagal memuat data paket</p>
            <p className="text-gray-400 text-sm mt-2">{error.message}</p>
          </div>
        ) : (
          /* Grid Paket */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pakets?.map((paket) => (
              <MenuCard
                key={paket.id}
                id={paket.id}
                title={paket.nama_paket || paket.title || "Paket Catering"}
                price={`Rp ${Number(paket.harga || paket.price).toLocaleString("id-ID")}`}
                min={paket.min_order || "20 Pax"}
                image={paket.foto || paket.image || "/default-paket.jpg"}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!pakets || pakets.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Belum ada paket tersedia</p>
            <p className="text-gray-400 text-sm mt-2">Silakan hubungi admin untuk informasi lebih lanjut</p>
          </div>
        ) : null}

      </div>
    </main>
  )
}