type Props = {
  title: string
  price: string
  min: string
  image: string
}

export default function MenuCard({
  title,
  price,
  min,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title + Price */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-sm leading-tight">
            {title}
          </h3>
          <span className="font-semibold text-sm text-red-500">
            {price}
          </span>
        </div>

        {/* Min order */}
        <p className="text-gray-400 text-xs mb-4">{min}</p>

        {/* Button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-semibold transition">
          LIHAT
        </button>

      </div>
    </div>
  )
}