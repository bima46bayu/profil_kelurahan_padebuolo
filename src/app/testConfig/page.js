"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function TestConnection() {
  const [status, setStatus] = useState("Checking...")

  useEffect(() => {
    supabase
      .from("potensi")
      .select("*")
      .then(({ data, error }) => {
        if (error) setStatus("❌ Gagal konek ke Supabase!")
        else setStatus(`✅ Berhasil konek! Ditemukan ${data.length} data.`)
      })
  }, [])

  return <div>{status}</div>
}
