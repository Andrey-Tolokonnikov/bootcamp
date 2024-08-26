import { User } from "@/components/entities/User/model/User"
import { toast } from "@/components/ui/use-toast"

export const AuthUser = (values: User)=>{
  return fetch(`${import.meta.env.VITE_API_URL}/auth`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .catch(()=>{
      toast({
        title: "Пользователь с такими данными не найден",
        variant: "destructive"
      })
    })
}