import { create } from "zustand"

interface activeCategoryState {
    activeCategory: number,
    setActiveCategory: (activeCategory: number) => void
}

const useActiveCategory = create<activeCategoryState>((set) => ({
  activeCategory: 1,
  setActiveCategory: (num: number) => set(() => ({activeCategory: num})),
}))

export default useActiveCategory