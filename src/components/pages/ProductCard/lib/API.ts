import { ProductType } from "@/components/entities/Product"
import { toast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"

export function useProduct(id: string){
  const [loading, setLoading] = useState(true)
  
  const [product, setProduct] = useState<ProductType | undefined>(undefined)

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(res=>res.json())
      .then(res=>{
        setProduct(res)
      })
      .catch(()=>{
        toast({
          title: "Ошибка при загрузке продукта",
          description: "Уже работаем над устранением проблемы",
          variant: "destructive"
        })
      })
      .finally(()=>{
        setLoading(false)
      })
  },
  [id])
  return {product, loading}
}
