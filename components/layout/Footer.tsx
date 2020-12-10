import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex justify-center bg-blue-200">
      <h6>Vanguardian Decks {currentYear}</h6>
    </div>
  )
}
