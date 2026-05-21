import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  productId: string
  name: string
  variant: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const id = `${item.productId}-${item.variant}`
        const existing = get().items.find((i) => i.id === id)
        if (existing) {
          set({
            items: get().items.map((i) => 
              i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i
            )
          })
        } else {
          set({ items: [...get().items, { ...item, id }] })
        }
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, quantity) => set({
        items: get().items.map((i) => (i.id === id ? { ...i, quantity } : i))
      }),
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0)
    }),
    {
      name: 'zeta-cart'
    }
  )
)
