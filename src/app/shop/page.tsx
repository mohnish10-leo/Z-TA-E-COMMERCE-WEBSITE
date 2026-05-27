import Link from 'next/link'
import { FadeIn } from '@/components/FadeIn'

async function getProducts() {
  try {
    const res = await fetch('https://zeta-e-commerce-website.onrender.com/products', { next: { revalidate: 60 } })
    if (!res.ok) return []
    return res.json()
  } catch (e) {
    return []
  }
}

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <div className="bg-background min-h-screen pt-32 pb-32">
      <div className="px-6 md:px-margin-desktop mb-16 text-center">
        <h1 className="font-headline text-headline-xl uppercase tracking-widest mb-6">The Collection</h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Explore the full range of ZÉTA fragrances. Each scent is a deliberate exploration of tension and harmony.
        </p>
      </div>

      <div className="px-6 md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any, idx: number) => (
          <FadeIn key={product.slug} delay={idx * 0.05}>
            <Link href={`/product/${product.slug}`} className="group cursor-pointer block">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden relative mb-6">
                <img 
                  alt={`ZÉTA ${product.name}`} 
                  className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.15] ${product.slug === 'abyss' ? 'scale-110 object-center' : ''}`} 
                  src={product.image} 
                />
              </div>
              <div className="text-center">
                <span className="font-body text-[10px] tracking-[0.3em] text-primary/60 mb-2 block uppercase font-semibold">{product.tagline}</span>
                <h4 className="font-headline text-xl uppercase tracking-widest mb-2">{product.name}</h4>
                <p className="font-body text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">${product.price} USD</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
