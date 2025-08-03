import { Suspense } from 'react'
import EditPotensiPage from './EditPotensiPage'

export default function EditPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Memuat halaman edit...</div>}>
      <EditPotensiPage />
    </Suspense>
  )
}
