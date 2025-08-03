export const dynamic = 'force-dynamic'

import { supabase } from "@/lib/supabase"
import PotensiCard from "@/components/PotensiCard"

export const metadata = {
  title: "Potensi Desa",
  description: "Potensi unggulan desa seperti wisata dan UMKM",
}

export default async function PotensiPage() {
  const { data: potensiDesa, error } = await supabase
    .from("potensi")
    .select("title, slug, subtitle, imageUrl") // sesuaikan nama kolom

if (error) {
  console.error("Supabase Error:", error);
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl shadow-md text-center max-w-xl mx-auto mt-32">
      <h2 className="text-lg font-semibold mb-1">Gagal Memuat Data Potensi</h2>
      <p className="text-sm">Terjadi kesalahan saat mengambil data dari server. Silakan coba beberapa saat lagi.</p>
    </div>
  );
}
  return (
    <section className="px-6 py-20 mt-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2f422f] mb-2">
          Potensi Kelurahan Padebuolo
        </h1>
        <p className="text-[#947700] mt-2 font-medium">
          Lebih dari Sekadar Wilayah – Ini Rumah bagi Potensi Hebat
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Kelurahan Padebuolo menyimpan beragam potensi yang menjadi kekuatan utama dalam pembangunan...
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {potensiDesa?.map((item) => (
          <PotensiCard key={item.slug} potensi={item} />
        ))}
      </div>
    </section>
  )
}
