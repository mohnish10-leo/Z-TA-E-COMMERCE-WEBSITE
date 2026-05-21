import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-32 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-body text-label-caps uppercase tracking-widest">Back to Collection</span>
        </Link>
        
        <h1 className="font-headline text-headline-xl uppercase tracking-widest mb-4 text-center">Sign In</h1>
        <p className="font-body text-body-md text-on-surface-variant text-center mb-12">Enter your email to access your ZÉTA account.</p>
        
        <form className="flex flex-col gap-6">
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="w-full bg-transparent border border-outline-variant/50 p-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary transition-colors focus:outline-none uppercase" 
            required
          />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            className="w-full bg-transparent border border-outline-variant/50 p-4 font-body text-label-caps placeholder:text-on-surface-variant/40 focus:ring-0 focus:border-primary transition-colors focus:outline-none uppercase" 
            required
          />
          
          <div className="flex justify-between items-center mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primary w-4 h-4" />
              <span className="font-body text-[10px] tracking-widest text-on-surface-variant uppercase">Remember Me</span>
            </label>
            <Link href="#" className="font-body text-[10px] tracking-widest text-primary uppercase hover:underline">Forgot Password?</Link>
          </div>
          
          <button type="submit" className="w-full bg-primary text-on-primary font-body text-label-caps py-4 uppercase tracking-[0.2em] hover:bg-on-surface hover:text-surface transition-colors duration-300 mt-4">
            Sign In
          </button>
        </form>
        
        <div className="mt-12 text-center border-t border-outline-variant/20 pt-8">
          <p className="font-body text-[10px] tracking-widest text-on-surface-variant uppercase mb-4">Don't have an account?</p>
          <Link href="#" className="font-body text-label-caps text-primary border-b border-primary pb-1 uppercase tracking-widest hover:text-on-surface hover:border-on-surface transition-colors">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}
