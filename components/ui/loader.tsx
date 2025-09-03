"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Function to handle when page is fully loaded
    const handlePageLoad = () => {
      // Wait 3 seconds after page load, then hide loader
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      // Listen for page load event
      window.addEventListener('load', handlePageLoad)
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F4EFEC]">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </div>
  )
}