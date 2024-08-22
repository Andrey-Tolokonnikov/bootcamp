import { ProductType } from "@/components/entities/Product"
import { create } from "zustand"
import Category from "@/components/entities/Category/Category"

interface productsState {
    products: ProductType[],
    categories: Category[]
    setProducts: (products: ProductType[]) => void,
    setCategories: (categories: Category[]) => void,
}

const useProductsState = create<productsState>((set) => ({
  products: [],
  categories: [],
  setProducts: (products: ProductType[]) => set({ products }),
  setCategories: (categories: Category[]) => set({ categories }),
}))

export default useProductsState