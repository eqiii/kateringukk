import Link from "next/link";

type Props = {
  id: string | number; // Tambahkan ID untuk routing
  title: string;
  price: string;
  min: string;
  image: string;
}

export default function MenuCard({
  id,
  title,
  price,
  min,
  image,
}: Props) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">

      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
        />
        {/* Badge Min Order (Overlay di gambar biar estetik) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-700 shadow-sm">
          Min. {min}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">

        {/* Title */}
        <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1 line-clamp-2">
          {title}
        </h3>
        
        {/* Price */}
        <p className="text-red-600 font-bold text-xl mb-4">
          {price}
          <span className="text-xs text-gray-400 font-normal"> /pax</span>
        </p>

        {/* Button - Menggunakan Link agar bisa diklik */}
        <Link 
          href={`/paket/${id}`} 
          className="mt-auto w-full text-center bg-gray-900 hover:bg-red-600 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          Lihat Detail
        </Link>

      </div>
    </div>
  )
}