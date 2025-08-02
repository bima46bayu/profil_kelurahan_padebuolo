export default function Hero() {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/beranda/hero_img.png')"
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Selamat Datang <br />
          di Kelurahan Padebuolo
        </h1>
        <p className="text-lg md:text-xl">
          Jelajahi cerita dan potensi dari ujung negeri yang penuh makna.
        </p>
      </div>
    </section>
  );
}
