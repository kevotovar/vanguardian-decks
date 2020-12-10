import React from 'react'

import Header from './Header'
import Footer from './Footer'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <div className="flex-1 overflow-auto">{children}</div>
      <Footer />
    </div>
  )
}
