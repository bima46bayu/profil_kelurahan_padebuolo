'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import PotensiTable from '@/components/PotensiTable'

export default function AdminPage() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (!data.session) {
        router.push('/admin/login')
      } else {
        setLoading(false)
      }
    }
    checkSession()
  }, [router])

  if (loading) return <p className="text-center mt-20">Memuat...</p>

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 mt-24">
      {/* Header dengan tombol logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#2f422f]">Dashboard Admin</h1>
        <button
          onClick={async () => {
            await supabase.auth.signOut()
            router.push('/admin/login')
          }}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl transition"
        >
          Logout
        </button>
      </div>

      {/* Tabel Potensi */}
      <PotensiTable />
    </div>
  )
}
