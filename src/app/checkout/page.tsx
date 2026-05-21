"use client"

import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault()
    clearCart()
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <CheckCircle2 className="w-24 h-24 text-primary mb-8" />
        <h1 className="font-headline text-headline-xl uppercase tracking-widest mb-4">Order Confirmed</h1>
        <p className="font-body text-body-lg text-on-surface-variant mb-12">Your signature scent is being prepared in Grasse.</p>
        <Link href="/" className="border border-on-surface px-12 py-4 font-body text-label-caps uppercase tracking-widest hover:bg-on-surface hover:text-background transition-colors">
          Return to Collection
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6 md:px-margin-desktop flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-1/2">
        <Link href="/" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-body text-label-caps uppercase tracking-widest">Back</span>
        </Link>
        
        <h1 className="font-headline text-headline-lg uppercase tracking-widest mb-12">Checkout</h1>
        
        <form onSubmit={handlePay} className="flex flex-col gap-8">
          <div>
            <h3 className="font-body text-label-caps tracking-widest text-primary mb-6 uppercase border-b border-outline-variant/30 pb-2">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" placeholder="FIRST NAME" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full" />
              <input required type="text" placeholder="LAST NAME" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full" />
              <input required type="email" placeholder="EMAIL" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full col-span-2" />
              <input required type="text" placeholder="ADDRESS" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full col-span-2" />
            </div>
          </div>
          
          <div>
            <h3 className="font-body text-label-caps tracking-widest text-primary mb-6 uppercase border-b border-outline-variant/30 pb-2 mt-8">Payment Method</h3>
            <div className="flex flex-col gap-4">
              <input required type="text" placeholder="CARD NUMBER" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="MM/YY" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full" />
                <input required type="text" placeholder="CVC" className="bg-transparent border-0 border-b border-outline-variant py-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary w-full" />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={items.length === 0}
            className="w-full bg-primary text-on-primary font-body text-label-caps py-6 uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-colors mt-8 disabled:opacity-50"
          >
            Pay ${getTotal()} USD
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 bg-surface-container p-8 md:p-12 self-start sticky top-24">
        <h3 className="font-headline text-headline-md tracking-widest uppercase mb-8">Order Summary</h3>
        <div className="flex flex-col gap-6 mb-8 border-b border-outline-variant/30 pb-8">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-16 h-20 object-cover" />
              <div className="flex-1">
                <h4 className="font-headline tracking-widest uppercase">{item.name}</h4>
                <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-widest">{item.variant} x {item.quantity}</p>
              </div>
              <span className="font-body text-label-caps tracking-[0.2em]">${item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-body text-label-caps tracking-widest uppercase text-on-surface-variant">Total</span>
          <span className="font-headline text-headline-md tracking-widest">${getTotal()} USD</span>
        </div>
      </div>
    </div>
  )
}
