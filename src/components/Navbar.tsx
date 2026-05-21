"use client"

import Link from 'next/link'
import { Search, User, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { useCartStore } from '@/store/cartStore'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const { openCart, openSearch } = useUIStore()
  const { items } = useCartStore()
  const pathname = usePathname()
  
  const isProductPage = pathname.startsWith('/product/')
  const isCheckout = pathname === '/checkout'

  if (isCheckout) return null // Hide navbar on checkout for minimal distraction

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-2xl border-b border-outline-variant/20 flex justify-between items-center px-6 md:px-margin-desktop py-6">
      {isProductPage ? (
        <Link href="/#shop" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-body text-label-caps uppercase hidden md:inline-block">Back to Collection</span>
        </Link>
      ) : (
        <div className="flex gap-8 hidden md:flex">
          <Link href="#shop" className="font-body text-label-caps text-primary border-b border-primary pb-1">Shop</Link>
          <Link href="#story" className="font-body text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Story</Link>
        </div>
      )}
      
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
        <Link href="/">
          <h1 className="font-headline text-headline-md tracking-[0.2em] text-on-surface uppercase">ZÉTA</h1>
        </Link>
      </div>
      
      <div className="flex gap-6 items-center">
        <button onClick={openSearch} className="hover:bg-surface-variant/10 p-2 rounded-full transition-all duration-500 scale-100 active:scale-95">
          <Search className="w-5 h-5 text-on-surface-variant" />
        </button>
        <Link href="/login" className="hover:bg-surface-variant/10 p-2 rounded-full transition-all duration-500 scale-100 active:scale-95 hidden md:block">
          <User className="w-5 h-5 text-on-surface-variant" />
        </Link>
        <button onClick={openCart} className="hover:bg-surface-variant/10 p-2 rounded-full transition-all duration-500 scale-100 active:scale-95 relative">
          <ShoppingBag className="w-5 h-5 text-on-surface-variant" />
          {items.length > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          )}
        </button>
      </div>
    </nav>
  )
}
