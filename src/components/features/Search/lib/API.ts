import { toast } from "@/components/ui/use-toast"

function fetchSearchItems(name: string){
  return fetch(`${import.meta.env.VITE_API_URL}/products/productName?name=${encodeURIComponent(name)}`)
    .then(res=>res.json())
    .catch(()=>{
      toast({
        title: "Ошибка при попытке поиска",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}

export {fetchSearchItems}