import { User } from "@/components/entities/User/model/User"
import { toast } from "@/components/ui/use-toast"

export const AuthUser = (values: User, redirect: (path: string)=>void)=>{
  return fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({login: values.login, password: values.password}),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res=>res.json())
    .then(()=>redirect("/"))
    .catch(()=>{
      toast({
        title: "Пользователь с такими данными не найден",
        variant: "destructive"
      })
    })
}