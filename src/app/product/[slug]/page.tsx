import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AddToCartBar } from './AddToCartBar'

async function getProduct(slug: string) {
  try {
    const res = await fetch(`https://zeta-e-commerce-website.onrender.com/products/${slug}`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    const data = await res.json()
    if (data.error) return null
    return data
  } catch (e) {
    return null
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const product = await getProduct(resolvedParams.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="bg-background text-on-background min-h-screen">


      <main className="pt-24 pb-48 flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Imagery */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex justify-center items-start sticky top-24 h-[calc(100vh-6rem)]">
           <div className="w-full h-full bg-surface-container relative overflow-hidden group">
             <img 
                src={product.image} 
                alt={product.name} 
                className={`w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.15] ${product.slug === 'abyss' ? 'scale-110 object-center' : ''}`} 
             />
           </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="w-full md:w-1/2 p-6 md:p-24 overflow-y-auto">
          <span className="font-body text-label-caps tracking-[0.4em] text-primary/60 block mb-6 uppercase">{product.tagline}</span>
          <h1 className="font-headline text-headline-xl mb-8 uppercase tracking-widest">{product.name}</h1>
          <p className="font-body text-body-lg text-on-surface-variant mb-12">
            {product.description}
          </p>

          <div className="border-t border-outline-variant/30 py-12">
            <h3 className="font-body text-label-caps tracking-widest text-primary mb-8 uppercase">The Scent Pyramid</h3>
            <div className="flex flex-col gap-8">
              {['Top', 'Heart', 'Base'].map(type => {
                const note = product.notes?.find((n: any) => n.type === type)
                if (!note) return null
                return (
                  <div key={type} className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                    <span className="font-body text-label-caps text-on-surface-variant/50 tracking-widest">{type}</span>
                    <span className="font-body text-body-md text-on-surface uppercase tracking-widest">{note.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      <AddToCartBar product={product} />
    </div>
  )
}
