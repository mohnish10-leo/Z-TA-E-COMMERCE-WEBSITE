'use client'

import { useState } from 'react'
import { Sparkles, X, Send } from 'lucide-react'
import { FadeIn } from './FadeIn'

export default function AiSommelier() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{role: 'ai'|'user', content: string}[]>([
    { role: 'ai', content: 'Welcome to ZÉTA. I am your Master Perfumer. Tell me, what mood or memory are you seeking to evoke today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = input
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('https://zeta-e-commerce-website.onrender.com/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      })
      
      const data = await res.json()
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }])
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: "My apologies, my senses are currently clouded. Please try again in a moment." }])
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "I am unable to reach the ZÉTA atelier at the moment. Ensure the backend server is running." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-black text-white p-4 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 flex items-center gap-2 group"
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-body text-[10px] uppercase tracking-widest hidden group-hover:block px-2">Ask the Perfumer</span>
      </button>

      {/* Chat Drawer */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-2xl z-50 flex flex-col border-l border-outline-variant/20 animate-in slide-in-from-right duration-500">
          
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-outline-variant/10 bg-surface">
            <div>
              <h3 className="font-headline text-lg uppercase tracking-widest text-on-surface flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI Sommelier
              </h3>
              <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Master Perfumer</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-black transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background/50">
            {messages.map((msg, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <span className="font-body text-[8px] text-on-surface-variant/50 uppercase tracking-widest mb-1">
                    {msg.role === 'user' ? 'You' : 'Master Perfumer'}
                  </span>
                  <div className={`max-w-[85%] p-4 text-sm font-body leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-black text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' 
                      : 'bg-surface-container border border-outline-variant/10 text-on-surface rounded-tr-2xl rounded-br-2xl rounded-bl-2xl'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </FadeIn>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                <span className="font-body text-[8px] text-on-surface-variant/50 uppercase tracking-widest mb-1">Master Perfumer</span>
                <div className="bg-surface-container border border-outline-variant/10 text-on-surface p-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl italic text-xs">
                  Analyzing scent profiles...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={sendMessage} className="p-4 border-t border-outline-variant/10 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your ideal scent..."
                className="w-full bg-surface-container/50 border border-outline-variant/20 text-on-surface font-body text-sm py-4 pl-4 pr-12 focus:outline-none focus:border-black transition-colors placeholder:text-on-surface-variant/40 rounded-none"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-0 top-0 bottom-0 px-4 text-black hover:opacity-70 disabled:opacity-30 transition-opacity flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>

        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
