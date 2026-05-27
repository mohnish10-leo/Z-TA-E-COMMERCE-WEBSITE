import Link from 'next/link'
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react'
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

export default async function Home() {
  const allProducts = await getProducts()
  const products = allProducts.slice(0, 6)

  return (
    <div className="bg-background text-on-background selection:bg-primary/30 selection:text-primary overflow-x-hidden min-h-screen">


      {/* 2. Hero Section (Final Image Background) */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover object-center animate-[pan_30s_ease-in-out_infinite_alternate]"
            alt="ZETA DRAGON Glacier"
            src="/hero-dragon.jpg"
          />
        </div>

        {/* Elegant dark overlay to guarantee text readability against any part of the image */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

        <div className="relative z-20 text-center max-w-5xl px-margin-mobile md:px-0 flex flex-col items-center justify-center h-full">
          <FadeIn delay={0.2}>
            <span className="font-body text-[11px] tracking-[0.8em] mb-8 block text-white/90 uppercase font-bold drop-shadow-md">Parfums de Grasse</span>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h2 className="font-headline text-[40px] md:text-[90px] leading-[0.9] mb-12 italic tracking-[-0.04em] font-medium text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
              The Art of the Unseen
            </h2>
          </FadeIn>
          <FadeIn delay={0.6}>
            <Link href="#shop" className="group relative inline-flex items-center justify-center border-2 border-white/80 text-white px-12 py-5 font-body text-[10px] uppercase tracking-[0.4em] hover:text-black transition-all duration-700 overflow-hidden font-bold backdrop-blur-sm bg-black/20">
              <span className="relative z-10">Explore the Collection</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>
            </Link>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-90 z-20">
           <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white rotate-90 mb-8 font-bold drop-shadow-md">Scroll</span>
           <div className="w-[2px] h-16 bg-white/50"></div>
        </div>
      </header>

      {/* 3. Marquee */}
      <section className="w-full py-12 border-y border-outline-variant/10 overflow-hidden bg-surface-container-low">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center">
              <span className="font-body text-label-caps text-on-surface-variant/60 tracking-widest uppercase">Eau de Parfum</span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="font-body text-label-caps text-on-surface-variant/60 tracking-widest uppercase">Cruelty-Free</span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="font-body text-label-caps text-on-surface-variant/60 tracking-widest uppercase">Handcrafted in Grasse</span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="font-body text-label-caps text-on-surface-variant/60 tracking-widest uppercase">Sustainable Luxury</span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers Grid */}
      <section id="shop" className="py-32 px-margin-mobile md:px-margin-desktop bg-background">
        <FadeIn className="flex justify-between items-end mb-12">
          <div>
            <h3 className="font-headline text-headline-lg mb-4">Curated Essentials</h3>
            <p className="font-body text-body-md text-on-surface-variant max-w-md">Olfactory masterpieces defined by rare botanicals and radical simplicity.</p>
          </div>
          <Link href="/shop" className="font-body text-label-caps border-b border-primary text-primary pb-1 hidden md:block">
            View All
          </Link>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {products.map((product: any, idx: number) => (
            <FadeIn key={product.slug} delay={idx * 0.1}>
              <Link href={`/product/${product.slug}`} className="group cursor-pointer block">
                <div className="aspect-[3/4] bg-surface-container overflow-hidden relative mb-8">
                  <img 
                    alt={`ZÉTA ${product.name}`} 
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.15] ${product.slug === 'abyss' ? 'scale-110 object-center' : ''}`} 
                    src={product.image} 
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="font-body text-[10px] tracking-[0.3em] text-primary/60 mb-2 block uppercase font-semibold">{product.tagline}</span>
                  <h4 className="font-headline text-headline-md mb-2">{product.name}</h4>
                  <p className="font-body text-label-caps tracking-[0.2em] text-on-surface-variant">${product.price} USD</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5. Editorial Split */}
      <section id="story" className="flex flex-col md:flex-row min-h-[819px]">
        <div className="w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            alt="ZÉTA Philosophy" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChtsZnzreavCm7tNLR4dF7trC34kREfXKQd4JeifVJJR-609XVS-tV-0E4DJ59QPwh1nNlpA1ema_bUq-Y0375ENhryIZGMly2GS0PW9xy5aYOrNGzivn-QPfThk9JqN3nW8YD5Vmee336k_EoNANG-XdBDAdUd491i3tIC6SGgH_F9hmC16ub2yVcZYJAfbn-6XICnsrMEx5KvoaoKCoCcHkYGN0uUNpbuGpyH1BHueg1XcIoMva_WNXxdbvYgV5R35Anh9zf9cY"
          />
        </div>
        <div className="w-full md:w-1/2 bg-surface flex items-center justify-center px-margin-mobile md:px-margin-desktop py-24">
          <FadeIn className="max-w-md">
            <span className="font-body text-label-caps tracking-[0.4em] text-primary/40 mb-8 block uppercase">Philosophy</span>
            <h3 className="font-headline text-headline-lg mb-8 italic">ZÉTA Philosophy</h3>
            <p className="font-body text-body-lg text-on-surface-variant mb-12">
              We believe fragrance is a silent language—a projection of the soul into the physical realm. By stripping away the noise of traditional luxury, we reveal the raw potency of Grasse's most precious ingredients. Each scent is a deliberate exploration of tension and harmony, crafted for those who find power in the unspoken.
            </p>
            <div className="mt-8">
              <p className="font-headline text-headline-md text-primary opacity-80 tracking-widest italic font-medium">MOHNISH</p>
              <p className="font-body text-[10px] tracking-widest text-on-surface-variant mt-2 uppercase font-semibold">Founder & Master Perfumer</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-surface border-t border-outline-variant/30 pt-32 pb-12 px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h4 className="font-body text-label-caps text-primary tracking-[0.2em] mb-8 uppercase">The ZÉTA Journal</h4>
            <div className="relative max-w-sm">
              <input 
                className="w-full bg-transparent border-0 border-b border-outline text-on-surface font-body text-label-caps py-4 focus:ring-0 focus:outline-none focus:border-primary transition-colors duration-500 placeholder:text-on-surface-variant/40" 
                placeholder="JOIN THE CIRCLE" 
                type="email"
              />
              <button className="absolute right-0 bottom-4 text-primary hover:opacity-70 transition-opacity">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-6 font-body text-[11px] leading-relaxed text-on-surface-variant/60">Receive early access to seasonal notes and rare extraits.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-body text-label-caps text-primary tracking-widest mb-4 uppercase">Navigation</h5>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Journal</Link>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Care</Link>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Sustainability</Link>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Shipping</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-body text-label-caps text-primary tracking-widest mb-4 uppercase">Social</h5>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Instagram</Link>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Pinterest</Link>
            <Link href="#" className="font-body text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-300">Vimeo</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-outline-variant/10 gap-8">
          <div className="flex items-center gap-4">
            <h2 className="font-headline text-headline-md tracking-[0.4em] text-on-surface uppercase">ZÉTA</h2>
          </div>
          <p className="font-body text-[10px] text-on-surface-variant/50 tracking-widest uppercase font-semibold">© 2026 ZÉTA PARFUMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="font-body text-[10px] text-on-surface-variant/50 hover:text-primary transition-colors tracking-widest uppercase font-semibold">Privacy Policy</Link>
            <Link href="#" className="font-body text-[10px] text-on-surface-variant/50 hover:text-primary transition-colors tracking-widest uppercase font-semibold">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
