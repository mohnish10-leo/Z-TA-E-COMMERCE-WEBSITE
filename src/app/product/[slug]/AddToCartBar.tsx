"use client"

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'

export function AddToCartBar({ product }: { product: any }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].id)
  const { addItem } = useCartStore()
  const { openCart } = useUIStore()

  const variant = product.variants.find((v: any) => v.id === selectedVariant)

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      variant: variant.size,
      price: variant.price,
      image: product.image,
      quantity: 1
    })
    openCart()
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface-container-high/90 backdrop-blur-xl border-t border-outline-variant/20 p-4 md:p-6 z-40 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-6">
        <h3 className="font-headline text-headline-md tracking-widest uppercase">{product.name}</h3>
        <span className="font-body text-label-caps text-primary tracking-[0.2em]">${variant?.price} USD</span>
      </div>
      <div className="flex gap-4 items-center w-full md:w-auto">
        <select 
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
          className="bg-transparent border border-outline-variant text-on-surface font-body text-label-caps py-4 px-6 uppercase focus:outline-none focus:border-primary flex-1 md:flex-none cursor-pointer"
        >
          {product.variants.map((v: any) => (
            <option key={v.id} value={v.id} className="bg-surface text-on-surface">{v.size}</option>
          ))}
        </select>
        <button 
          onClick={handleAdd}
          className="bg-primary text-on-primary font-body text-label-caps px-12 py-4 uppercase tracking-widest hover:bg-surface-variant hover:text-primary transition-all duration-300 flex-1 md:flex-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
