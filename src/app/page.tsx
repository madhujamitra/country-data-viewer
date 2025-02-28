"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { isLoggedIn } from "@/services/authService"

export default function SomeProtectedPage() {
  const router = useRouter()

  useEffect(() => {
    // If not logged in, redirect to /login
    if (!isLoggedIn()) {
      router.replace("/login")
    }
  }, [router])

  return (
    <div>
      {/* Actual page content here. 
         If user is not logged in, we redirect above */}
      <h1>Protected Content</h1>
    </div>
  )
}

