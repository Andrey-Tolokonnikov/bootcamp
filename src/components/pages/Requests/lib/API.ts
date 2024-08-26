import { toast } from "@/components/ui/use-toast"

export const fetchRequests = ()=>{
  return fetch(`${import.meta.env.VITE_API_URL}/requests/`)
    .then(res=>res.json())
    .catch(()=>{
      toast({
        title: "Ошибка при загрузке заявок",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}