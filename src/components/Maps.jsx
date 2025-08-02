'use client'
import Link from 'next/link'

export default function Maps() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Kiri - Teks */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f422f] leading-snug mb-3">
            Jelajahi Kelurahan <br /> Padebuolo
          </h2>
          <p className="text-sm md:text-base text-[#b79327] mb-6">
            Ingin berkunjung atau sekadar mengenal lebih dekat
          </p>
          <a
            href="https://maps.app.goo.gl/SjKP5nNQAqntysGNA"
            className="inline-block bg-[#2f422f] text-white px-12 py-2 rounded-md font-medium cursor-pointer hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jelajahi Sekarang!
          </a>
        </div>

        {/* Kanan - Maps */}
        <div className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-md">
          <div className="w-full h-64 md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.288874292967!2d123.06598354458161!3d0.5349232262372717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792ad637839ab3%3A0x68d7ced4c0056896!2sPadebuolo%2C%20Kota%20Timur%2C%20Kota%20Gorontalo%2C%20Gorontalo!5e0!3m2!1sen!2sid!4v1753609839538!5m2!1sen!2sid"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
