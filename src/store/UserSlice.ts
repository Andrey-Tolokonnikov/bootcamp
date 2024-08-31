import { create } from "zustand"

interface User {
    name: string,
    role: string,
    token: string,
    setToken: (token: string) => void,
    setName: (name: string) => void,
    setRole: (role: "ROLE_USER" | "ROLE_MODER") => void,
}

const useUserState = create<User>((set) => ({
  name: "John",

  //функционал для модератора
  role: "ROLE_MODER",

  //функционал для пользователя
  //role: "ROLE_USER",

  //функционал для неавторизованного пользователя
  //role: "",

  token: "",
  setName: (name: string) => set({ name }),
  setRole: (role: "ROLE_USER" | "ROLE_MODER") => set({ role }),
  setToken:(token: string) => set({ token }),
}))

export default useUserState