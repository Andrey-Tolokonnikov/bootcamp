import { User } from "@/components/entities/User/model/User"
import { toast } from "@/components/ui/use-toast"


//---------------------------------
// Регистрация на сервере
//---------------------------------
export const RegUser = (values: User, redirect: (path:string)=>void)=>{
  return fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify({name:  values.name, email: values.email, password: values.password}),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(()=>redirect("/auth"))
    .catch(()=>{
      toast({
        title: "Пользователь с такими данными уже существует",
        variant: "destructive"
      })
    })
}

//--------------------------
//Регистрация в LocalStorage
//-------------------------- 

// export const RegUserLocal = (user: User, redirect: (path:string)=>void)=>{

//   let users = []
//   if(localStorage.getItem("users")){
//     users = JSON.parse(localStorage.getItem("users") || "[]")
//   }

//   if(!users.find((u: User)=>u.login === user.login)){
//     localStorage.setItem("users", JSON.stringify([...users, user]))
//     toast({
//       title: "Регистрация прошла успешно",
//     })
//     redirect("/auth")
//   } else {
//     toast({
//       title: "Пользователь с такими данными уже существует",
//       variant: "destructive"
//     })
//   }
// }