import { create } from 'zustand'

interface UIState {
  isCartOpen: boolean
  isSearchOpen: boolean
  openCart: () => void
  closeCart: () => void
  openSearch: () => void
  closeSearch: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isSearchOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false })
}))
