"use client"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import profilDesa from "@/data/profil/data"

export default function ProfilDesaPage() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    duration: 2000,
    slides: { perView: 1 },
    autoplay: { delay: 3000 },
  })

  return (
    <>
      <main className="max-w-6xl mt-12 mx-auto px-4 md:px-8 py-12 space-y-16">
        {/* Slider */}
        <section>
          <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow">
            {profilDesa.sliderImages.map((img, idx) => (
              <div key={idx} className="keen-slider__slide">
                <Image
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  width={1200}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg space-y-3">
            <h2 className="text-xl font-bold text-center text-green-800">Visi</h2>
            <p className="text-center font-medium text-gray-700">{profilDesa.visi}</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg space-y-3">
            <h2 className="text-xl font-bold text-center text-green-800">Misi</h2>
            <ol className="list-decimal list-inside space-y-1 font-medium text-gray-700">
              {profilDesa.misi.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* Informasi Umum Kelurahan */}
        <section className="rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-4 text-white text-center">
          <div className="bg-[#947700] text-white font-semibold flex items-center justify-center py-6 text-lg sm:text-2xl">
            Informasi Umum Kelurahan
          </div>
          <InfoItem label="RT" value={profilDesa.info.rt} />
          <InfoItem label="RW" value={profilDesa.info.rw} />
          <InfoItem label="Penduduk" value={profilDesa.info.penduduk} />
        </section>

        {/* Lembaga Pendidikan */}
        <SectionBlock title="Lembaga Pendidikan Formal" data={profilDesa.pendidikan} icon="🎓" />

        {/* Peribadatan */}
        <SectionBlock title="Prasarana Peribadatan" data={profilDesa.peribadatan} icon="🏠" />

        {/* Olahraga */}
        <SectionBlock title="Prasarana Olahraga" data={profilDesa.olahraga} icon="🏃‍♂️" />

        {/* Kesehatan */}
        <SectionBlock title="Fasilitas Kesehatan" data={profilDesa.kesehatan} icon="🏥" />
      </main>
    </>
  )
}

function InfoItem({ label, value }) {
  return (
    <div className="bg-green-900 py-6 border-t border-white sm:border-t-0 sm:border-l">
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm mt-2 font-medium">{label}</div>
    </div>
  )
}

function SectionBlock({ title, data, icon }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-center text-green-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg flex items-start gap-2 text-sm">
            <span className="text-xl">{icon}</span>
            <p className="font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
