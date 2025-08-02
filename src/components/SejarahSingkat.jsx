'use client'
import Link from 'next/link'

export default function SejarahSingkat() {
  return (
    <section className="pt-12 pb-36 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/beranda/sejarahSingkat_img.png"
          alt="Kelurahan Padebuolo"
          className="w-full max-w-full h-auto rounded-[24px] shadow-md object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f422f] mb-2">
          Sejarah Kelurahan Padebuolo
        </h2>
        <h3 className="text-lg md:text-xl text-[#947700] font-medium mb-6">
          Jejak Perjalanan dari Tradisi ke Kemajuan
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Nama "Padebuolo" berasal dari istilah lokal pade-pade yang berarti pecahan ombak. Dahulu, wilayah ini merupakan laut dangkal yang secara alami berubah menjadi daratan akibat proses sedimentasi. Seiring bertambahnya luas daratan dan penduduk, struktur pemerintahan mulai dibentuk pada tahun 1910 dengan Dj. Hulungguno sebagai kepala kampung pertama. Status wilayah ini kemudian berubah menjadi desa pada tahun 1975 yang dipimpin oleh Eddy Ibrahim. Selanjutnya, pada tahun 1980, Padebuolo resmi menjadi kelurahan dengan Habibie Konijo sebagai lurah pertama. Perjalanan ini mencerminkan transformasi Padebuolo dari bentukan alam menjadi wilayah administrasi yang berdaya.
        </p>
        <Link href="/sejarah">
          <button className="bg-[#2f422f] text-white px-6 py-2 rounded-lg font-medium cursor-pointer hover:opacity-90 transition">
            Lihat Selengkapnya...
          </button>
        </Link>
      </div>
    </section>
  );
}
