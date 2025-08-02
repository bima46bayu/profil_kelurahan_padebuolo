'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AddPotensiPage() {
  const router = useRouter()

  const [form, setForm] = useState({
    title: '',
    slug: '',
    subtitle: '',
    excerpt: '',
    content: '',
    imageUrl: '',
  })
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `potensi/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('potensi-gambar')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      })

    if (uploadError) {
      alert('Upload gagal')
      console.error('Upload Error:', uploadError.message)
      setUploading(false)
      return
    }

    const { data: publicUrlData } = supabase.storage
      .from('potensi-gambar')
      .getPublicUrl(filePath)

    const url = publicUrlData.publicUrl

    setForm((prev) => ({ ...prev, imageUrl: url }))
    setPreviewUrl(url)
    setUploading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase.from('potensi').insert([form])
    if (error) {
      alert('Gagal menyimpan data')
      console.error(error)
    } else {
      alert('Data berhasil disimpan!')
      router.push('/admin')
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-24 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-[#2f422f] mb-6 text-center">
        Tambah Potensi Kelurahan
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Judul */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Judul</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Slug (tanpa spasi)</label>
          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
            required
          />
        </div>

        {/* Subjudul */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Subjudul</label>
          <input
            type="text"
            name="subtitle"
            value={form.subtitle}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Deskripsi Singkat */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Deskripsi Singkat</label>
          <input
            type="text"
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Konten */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Isi Konten</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl h-40 resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Upload Gambar */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Upload Gambar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded-xl bg-white text-gray-700 file:mr-4 file:py-2 file:px-4
              file:rounded-xl file:border-0 file:text-sm file:font-semibold
              file:bg-green-100 file:text-green-800
              hover:file:bg-green-200 cursor-pointer transition"
          />
          {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
          {previewUrl && (
            <div className="mt-4 rounded-xl overflow-hidden shadow-md w-full max-w-md mx-auto">
              <Image
                src={previewUrl}
                alt="Preview"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Tombol Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#2f422f] hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
          >
            Simpan Potensi
          </button>
        </div>
      </form>
    </div>
  )
}
