"use client"

import { useUIStore } from '@/store/uiStore'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// Mock search function since we don't have a backend search endpoint yet
const fetchProducts = async (query: string) => {
  const res = await fetch('/api/products')
  const products = await res.json()
  return products.filter((p: any) => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
}

export function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUIStore()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    if (query.length > 1) {
      fetchProducts(query).then(setResults)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-[100] p-6 md:p-24 flex flex-col"
        >
          <div className="flex justify-end">
             <button onClick={closeSearch} className="p-2 hover:bg-surface-variant/20 rounded-full transition-colors">
                <X className="w-8 h-8 text-on-surface" />
             </button>
          </div>
          
          <div className="max-w-4xl w-full mx-auto mt-12 flex flex-col flex-1">
            <div className="relative border-b border-primary/50 pb-4">
               <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/50" />
               <input 
                 autoFocus
                 type="text" 
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
                 placeholder="SEARCH FRAGRANCES..." 
                 className="w-full bg-transparent border-none outline-none font-headline text-headline-lg md:text-headline-xl pl-16 tracking-widest uppercase placeholder:text-on-surface-variant/20 text-on-surface"
               />
            </div>

            <div className="mt-12 flex-1 overflow-y-auto">
               {results.length > 0 ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {results.map(product => (
                     <Link href={`/product/${product.slug}`} key={product.id} onClick={closeSearch} className="flex gap-6 items-center group">
                        <img src={product.image} className="w-24 h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div>
                          <span className="font-body text-[10px] text-primary/60 tracking-widest uppercase mb-1 block">{product.tagline}</span>
                          <h4 className="font-headline text-2xl uppercase tracking-widest">{product.name}</h4>
                        </div>
                     </Link>
                   ))}
                 </div>
               ) : query.length > 1 ? (
                 <p className="font-body text-label-caps tracking-widest text-on-surface-variant/50 uppercase">No results found.</p>
               ) : (
                 <div className="flex flex-col gap-6">
                    <span className="font-body text-label-caps tracking-widest text-on-surface-variant/50 uppercase">Popular Searches</span>
                    <div className="flex gap-4">
                      {['Oud', 'Rose', 'Vanilla'].map(t => (
                        <button key={t} onClick={() => setQuery(t)} className="border border-outline-variant/30 px-6 py-2 font-body text-label-caps uppercase hover:border-primary transition-colors tracking-widest">{t}</button>
                      ))}
                    </div>
                 </div>
               )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
