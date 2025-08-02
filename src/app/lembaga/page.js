'use client'

import Image from 'next/image'
import { lurah, perangkatLain, lembagaPendukung } from '@/data/lembaga/data'

export default function LembagaPage() {
  return (
    <main className="px-4 mt-12 md:px-8 py-16 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2f422f] mb-4">Lembaga Kelurahan</h1>
          <p className="text-gray-700">Struktur organisasi dan lembaga pendukung Kelurahan Padebuolo</p>
        </div>

        {/* Lurah */}
        <section>
            <h2 className="text-2xl font-semibold text-[#2f422f] mb-8 text-center">Lurah</h2>
            <div className="flex justify-center">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#f0fdf4] border border-green-200 rounded-2xl shadow p-8 text-center mx-auto">
                <div className="w-48 h-48 mx-auto relative mb-6">
                    <Image
                    src={lurah.foto}
                    alt={lurah.nama}
                    width={192}
                    height={192}
                    className="object-cover rounded-full border-4 border-green-300 shadow-md"
                    />
                </div>
                <h3 className="text-2xl font-bold text-[#2f422f] mb-1">{lurah.nama}</h3>
                <p className="text-md text-gray-600">{lurah.jabatan}</p>
                </div>
            </div>
        </section>

        {/* Perangkat Lain */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f422f] mb-8 text-center">Perangkat Kelurahan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {perangkatLain.map((item, idx) => (
              <div key={idx} className="text-center bg-gray-50 rounded-xl shadow p-4">
                {/* <div className="w-28 h-28 mx-auto relative mb-4">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    width={112}
                    height={112}
                    className="object-cover rounded-full"
                  />
                </div> */}
                <h3 className="font-bold text-md text-[#2f422f]">{item.nama}</h3>
                <p className="text-sm text-gray-600">{item.jabatan}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lembaga Pendukung */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f422f] mb-8 text-center">Lembaga Pendukung</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {lembagaPendukung.map((item, idx) => (
              <div key={idx} className="flex bg-white border rounded-xl shadow-md overflow-hidden">
                <div className="w-32 h-32 relative shrink-0">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#2f422f]">{item.nama}</h3>
                  <p className="text-sm text-gray-700 mb-1">Ketua: {item.ketua}</p>
                  <p className="text-sm text-gray-600">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
