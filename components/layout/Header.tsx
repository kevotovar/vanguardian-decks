import React from 'react'
import Link from 'next/link'

import ActiveLink from '../router/ActiveLink'

const links = [
  {
    href: '/cards',
    name: 'Cards',
  },
]

export default function Header() {
  return (
    <div className="bg-blue-500 flex justify-between items-center px-4 py-4">
      <h4 className="text-white text-2xl">
        <Link href="/">Vanguardian decks</Link>
      </h4>
      <div>
        {links.map((link) => (
          <ActiveLink
            href={link.href}
            key={link.href}
            activeClassName="underline"
          >
            <div className="text-white cursor-pointer">{link.name}</div>
          </ActiveLink>
        ))}
      </div>
    </div>
  )
}
