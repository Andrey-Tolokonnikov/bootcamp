import Category from "@/components/entities/Category/Category"
import { GroupedProducts, ProductType } from "@/components/entities/Product"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const groupCategories = (products: ProductType[], categories: Category[]) : GroupedProducts[] => {
  return categories.map((category)=>{
    return {
      ...category,
      products: products.filter((product)=>product.categoryId == category.id)
    }
  }).filter(category=>category.products.length > 0)
}
