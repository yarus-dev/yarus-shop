'use client'

import Link from 'next/link'

type HeaderProps = {
  cartCount?: number
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center" aria-label="Yarus-shop">
          <svg width="24" height="24" viewBox="0 0 24 24" className="mr-2">
            <polygon points="12,4 20,20 4,20" fill="#7030A0" stroke="rgb(48,209,88)" strokeWidth="2" />
          </svg>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/promo" aria-label="Промокод" className="text-xs underline">
            <svg width="16" height="16" viewBox="0 0 24 24" className="inline">
              <path d="M9 3H5a2 2 0 0 0-2 2v4l8 8 6-6-8-8z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="7" cy="7" r="1" fill="currentColor"/>
            </svg>
          </Link>
          <span className="text-sm font-medium">₴</span>
          <Link href="/cart" aria-label="Cart" className="relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="absolute -top-1 -right-2 bg-[#7030A0] text-white text-[10px] px-1 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
      <nav className="flex justify-around text-sm py-2 md:hidden border-t border-gray-200">
        <Link href="/">Home</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="bg-gray-100 text-center text-xs py-1">Доставка – Нова Пошта</div>
      <div className="flex flex-wrap justify-center items-center space-x-4 text-sm py-2">
        <Link href="/login" className="underline">Email/Password</Link>
        <button className="underline">Login with Google</button>
        <button className="underline">Login with Apple</button>
        <button className="bg-[rgb(48,209,88)] text-white rounded px-3 py-1">Guest checkout</button>
      </div>
    </header>
  )
}
