"use client"

import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ArrowRight, Trash2 } from 'lucide-react'
import Link from 'next/link'

export function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore()
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            onClick={closeCart}
          />
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-surface z-[101] border-l border-outline-variant/30 flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-outline-variant/20">
              <h2 className="font-headline text-headline-md tracking-widest uppercase">Your Cart</h2>
              <button onClick={closeCart} className="p-2 hover:bg-surface-variant/20 rounded-full transition-colors">
                <X className="w-6 h-6 text-on-surface" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-on-surface-variant/50">
                  <p className="font-body text-label-caps tracking-widest uppercase">Your cart is empty.</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-24 h-32 object-cover bg-surface-container" />
                    <div className="flex flex-col justify-between flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-headline text-lg uppercase tracking-widest">{item.name}</h4>
                          <p className="font-body text-[10px] tracking-widest text-on-surface-variant mt-1 uppercase">{item.variant}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-on-surface-variant hover:text-primary transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-4 border border-outline-variant/30 px-3 py-1">
                          <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}><Minus className="w-3 h-3" /></button>
                          <span className="font-body text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="w-3 h-3" /></button>
                        </div>
                        <p className="font-body text-label-caps tracking-[0.2em]">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-outline-variant/20 bg-surface-container-low">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-body text-label-caps tracking-widest text-on-surface-variant uppercase">Subtotal</span>
                  <span className="font-headline text-headline-md tracking-widest">${getTotal()}</span>
                </div>
                <Link 
                  href="/checkout" 
                  onClick={closeCart}
                  className="w-full bg-primary text-on-primary font-body text-label-caps py-4 flex justify-center items-center gap-2 uppercase tracking-[0.2em] hover:bg-on-surface hover:text-surface transition-colors duration-300"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
