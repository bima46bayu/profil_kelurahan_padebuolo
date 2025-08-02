'use client'

export default function Tentang() {
  return (
    <section className="py-36 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f422f] mb-2">
          Tentang Kelurahan Padebuolo
        </h2>
        <h3 className="text-lg md:text-xl text-[#947700] font-medium mb-6">
          Pusat Budaya, UMKM, dan Semangat Kebersamaan
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Terletak di Kecamatan Kota Timur, Kota Gorontalo yang dikenal sebagai pusat kerajinan besi tradisional serta memiliki ekonomi yang ditopang oleh sektor perdagangan, jasa, dan usaha mikro. Mayoritas masyarakat berasal dari suku Gorontalo yang menjunjung tinggi nilai budaya seperti huyula (gotong royong), kekerabatan, serta falsafah hidup yang memprioritaskan kebersamaan dan harmoni. Tradisi yang lekat dan pembangunan yang aktif, Padebuolo terus tumbuh sebagai wilayah yang inklusif, produktif, dan berkarakter.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/beranda/tentang_img.png"
          alt="Kelurahan Padebuolo"
          className="w-full max-w-full rounded-[24px] shadow-md object-cover"
        />
      </div>
    </section>
  );
}
