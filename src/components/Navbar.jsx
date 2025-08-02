'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 lg:px-[160px] transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mt-4 bg-[#2f422f] rounded-md shadow-md px-16 py-4 flex items-center justify-between text-white font-semibold">
        {/* Logo */}
        <Link href="/" className="text-sm md:text-base font-semibold whitespace-nowrap">
          Kelurahan Padebuolo
        </Link>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`absolute md:static top-[60px] left-4 right-4 md:top-0 bg-[#2f422f] md:bg-transparent rounded-md md:rounded-none p-4 md:p-0 flex-col md:flex-row flex md:flex md:items-center md:gap-6 transition-all duration-300 ease-in-out ${open ? 'flex' : 'hidden'}`}>
          <Link href="/" className="hover:underline py-2 md:py-0">Beranda</Link>
          <Link href="/sejarah" className="hover:underline py-2 md:py-0">Sejarah</Link>
          <Link href="/profil" className="hover:underline py-2 md:py-0">Profil</Link>
          <Link href="/lembaga" className="hover:underline py-2 md:py-0">Lembaga Kelurahan</Link>
          <Link href="/potensi" className="hover:underline py-2 md:py-0">Potensi</Link>
        </div>
      </div>
    </nav>
  )
}
