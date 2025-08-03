import Image from 'next/image'

export const metadata = {
  title: "Sejarah Kelurahan Padebuolo",
  description: "Informasi sejarah singkat Kelurahan Padebuolo",
}

export default function SejarahPage() {
  return (
    <section className="mt-12 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Judul dan Gambar Hero */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f422f] mb-6">
            Sejarah Kelurahan Padebuolo
          </h2>
          <div className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl aspect-[4/3] relative rounded-xl shadow-lg overflow-hidden mb-10">
            <Image
              src="/assets/sejarah/kantor-kelurahan-pade.jpg"
              alt="Menara di Kelurahan Padebuolo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Paragraf Sejarah */}
        <div className="text-justify text-gray-700 space-y-6">
          <p>
            Kelurahan Padebuolo yang terletak di wilayah Kota Timur, Kota Gorontalo, memiliki sejarah yang unik dan erat kaitannya dengan kondisi geografis serta dinamika budaya masyarakat pesisir. Nama &quot;Padebuolo&quot; sendiri berasal dari kata &quot;pade-pade&quot;, sebuah istilah lokal yang digunakan oleh masyarakat terdahulu untuk menyebut gelombang ombak kecil di kawasan laut dangkal. Dahulu kala, wilayah ini memang belum berupa daratan sepenuhnya, melainkan hamparan laut dangkal yang dipenuhi gelombang. Namun, melalui proses alamiah selama bertahun-tahun—yakni pecahan ombak yang membawa material pasir dan lumpur—terjadi sedimentasi yang lambat laun membentuk daratan baru. Daratan hasil dari pecahan ombak inilah yang kemudian dikenal sebagai “Padebuolo”, sebagai penanda historis dan geografis asal mula wilayah tersebut.
          </p>
          <p>
            Seiring dengan terbentuknya daratan yang semakin luas dan layak dihuni, masyarakat mulai menetap dan membangun kehidupan di wilayah ini. Aktivitas pemukiman berkembang pesat, jumlah penduduk bertambah, dan kebutuhan akan struktur pemerintahan pun mulai dirasakan. Maka, pada tahun 1910 dibentuklah sistem pemerintahan lokal dengan pengangkatan Dj. Hulungguno sebagai kepala kampung pertama Padebuolo. Peran ini menjadi tonggak penting dalam sejarah administratif Padebuolo, karena sejak saat itu wilayah ini mulai diakui secara struktural dalam sistem pemerintahan setempat.
          </p>
          <p>
            Waktu terus berjalan, dan pada tahun 1975, terjadi perubahan status pemerintahan di wilayah ini dari kampung menjadi desa. Eddy Ibrahim kemudian diangkat sebagai kepala desa pertama, menandai fase baru dalam tata kelola dan pembangunan wilayah. Transformasi ini menunjukkan bahwa Padebuolo tidak hanya berkembang secara fisik, tetapi juga secara administratif dan sosial. Perubahan ini juga mencerminkan dinamika masyarakatnya yang terus bergerak menuju arah modernisasi dan integrasi dalam sistem pemerintahan yang lebih mapan.
          </p>
          <p>
            Puncak dari perubahan administratif itu terjadi pada tahun 1980, ketika Padebuolo secara resmi ditetapkan sebagai sebuah kelurahan. Habibie Konijo menjadi lurah pertama yang memimpin wilayah ini dalam status barunya. Sejak saat itu, Kelurahan Padebuolo terus tumbuh menjadi salah satu wilayah penting di Kota Timur, Gorontalo, dengan identitas yang kuat akan sejarahnya sebagai daratan yang lahir dari pecahan ombak. Sejarah Padebuolo bukan hanya tentang asal-usul tempat, melainkan juga tentang ketangguhan, transformasi, dan semangat masyarakatnya dalam membangun dari dasar alam menjadi sebuah komunitas yang berdaya dan terstruktur.
          </p>
        </div>

        {/* Dokumentasi Sejarah */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Dokumentasi Sejarah
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "/assets/sejarah/artikel2.jpeg", 
              "/assets/sejarah/artikel3.jpg"
              // Tambah gambar lain di sini jika perlu
            ].map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Dokumentasi sejarah ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
