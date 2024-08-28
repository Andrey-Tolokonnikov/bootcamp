import { RequestType } from "@/components/entities/Request/model/Request"
import { toast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"

export function useRequest(id: string){
  const [loading, setLoading] = useState(true)
    
  const [request, setRequest] = useState<RequestType | undefined>(undefined)
  
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/requests/${id}`)
      .then(res=>res.json())
      .then(res=>{
        setRequest(res)
      })
      .catch(()=>{
        toast({
          title: "Ошибка при загрузке заявки",
          variant: "destructive"
        })
      })
      .finally(()=>{
        setLoading(false)
      })
  },
  [id])
  return {request, loading}
}

export function fetchProduct(id: string){
  return fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
    .then(res=>res.json())
    .catch(()=>{
      toast({
        title: "Ошибка при загрузке продукта",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}
