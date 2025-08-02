import Image from "next/image";
import Link from "next/link";

export default function PotensiCard({ potensi }) {
  return (
    <Link href={`/potensi/${potensi.slug}`} className="block">
      <div className="bg-white border-2 border-[#90A955] rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        {/* Gambar */}
        <div className="relative w-full aspect-[3/2] sm:aspect-[4/4] rounded-2xl overflow-hidden">
          <Image
            src={potensi.imageUrl} // ⬅️ Ganti dari .image ke .imageUrl
            alt={potensi.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Teks */}
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold text-gray-800">
            {potensi.title}
          </h3>
          {potensi.subtitle && (
            <p className="text-l text-[#947700] mt-1">
              {potensi.subtitle}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
