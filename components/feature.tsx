type Props = {
  title: string
  desc: string
}

export default function Feature({ title, desc }: Props) {
  return (
    <div className="flex gap-4">
      {/* Icon dummy (bisa ganti lucide nanti) */}
      <div className="w-10 h-10 bg-black rounded-md" />

      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  )
}