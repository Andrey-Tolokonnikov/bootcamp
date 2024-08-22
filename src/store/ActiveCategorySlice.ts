import { create } from "zustand"

interface activeCategoryState {
    activeCategory: string,
    setActiveCategory: (activeCategory: string) => void
}

const useActiveCategory = create<activeCategoryState>((set) => ({
  activeCategory: "1",
  setActiveCategory: (num: string) => set(() => ({activeCategory: num})),
}))

export default useActiveCategory