import Category from "@/components/entities/Category/Category"
import { ProductType } from "@/components/entities/Product"
import { toast } from "@/components/ui/use-toast"

function fetchCategories(setCategories: (categories: Category[]) => void){
  fetch(`${import.meta.env.VITE_API_URL}/categories/`)
    .then(res=>res.json())
    .then(res=>{
      console.log("fetch")
      console.log(res)
      return res
    })
    .then(res=>{setCategories(res)})
    .catch(()=>{
      toast({
        title: "Ошибка при загрузке категорий",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}

function fetchProducts(setProducts: (products: ProductType[]) => void) {
  fetch(`${import.meta.env.VITE_API_URL}/products/`)
    .then(res=>res.json())
    .then(res=>{setProducts(res)})
    .catch(()=>{
      toast({
        title: "Ошибка при загрузке продуктов",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}
export {fetchProducts, fetchCategories}