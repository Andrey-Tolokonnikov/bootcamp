import { toast } from "@/components/ui/use-toast"

export function deleteProduct(productId: string){
  return fetch(`${import.meta.env.VITE_API_URL}/products/${productId}`, {
    method: "DELETE"
  })
    .then(res=>res.json())
    .catch(()=>{
      toast({
        title: "Ошибка при удалении продукта",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}