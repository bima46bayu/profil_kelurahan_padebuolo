'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function PotensiTable() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPotensi = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('potensi')
      .select('id, title, slug, subtitle, excerpt')

    if (error) console.error(error)
    else setData(data)

    setLoading(false)
  }

  useEffect(() => {
    fetchPotensi()
  }, [])

  const handleDelete = async (id) => {
    const confirm = window.confirm('Yakin ingin menghapus?')
    if (!confirm) return

    const { error } = await supabase.from('potensi').delete().eq('id', id)
    if (error) {
      alert('Gagal hapus data')
      console.error(error)
    } else {
      fetchPotensi()
    }
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#2f422f]">Daftar Potensi Kelurahan</h2>
        <Link
          href="/admin/add"
          className="bg-[#2f422f] hover:bg-green-800 text-white px-4 py-2 rounded-xl font-semibold transition"
        >
          + Tambah
        </Link>
      </div>

      {/* Tabel */}
      {loading ? (
        <p className="text-center text-gray-600">Memuat data...</p>
      ) : (
        <div className="overflow-auto rounded-xl border border-gray-200">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-green-100 text-[#2f422f] uppercase font-bold text-xs">
              <tr>
                <th className="px-4 py-3">Judul</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Subjudul</th>
                <th className="px-4 py-3">Deskripsi</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-green-50 transition duration-150"
                >
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.slug}</td>
                  <td className="px-4 py-3">{item.subtitle}</td>
                  <td className="px-4 py-3">{item.excerpt}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                      <button
                        onClick={() => router.push(`/admin/edit?id=${item.id}`)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500 italic">
                    Belum ada data potensi.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
