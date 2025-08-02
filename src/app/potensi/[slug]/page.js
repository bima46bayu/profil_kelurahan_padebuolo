import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const { data } = await supabase.from("potensi").select("slug")
  return data?.map((item) => ({ slug: item.slug })) || []
}

export default async function PotensiDetailPage({ params }) {
  const { data: potensi, error } = await supabase
    .from("potensi")
    .select("*")
    .eq("slug", (await params).slug)
    .single()

  if (!potensi || error) return notFound()

  return (
    <section className="px-4 md:px-6 py-16 md:py-20 mt-12 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-[#2f422f] text-center mb-2">
        {potensi.title}
      </h1>

      {potensi.subtitle && (
        <p className="text-center text-sm md:text-base text-[#947700] font-medium mb-6">
          {potensi.subtitle}
        </p>
      )}

      <div className="relative w-full max-w-md mx-auto aspect-[4/3] mb-8 rounded-lg overflow-hidden shadow-md">
        <Image
          src={potensi.imageUrl}
          alt={potensi.title}
          fill
          className="object-cover rounded-[24px]"
        />
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
        {potensi.content}
      </p>
    </section>
  )
}
