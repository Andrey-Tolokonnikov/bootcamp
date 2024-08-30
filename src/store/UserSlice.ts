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
  name: "",
  role: "",
  token: "",
  setName: (name: string) => set({ name }),
  setRole: (role: "ROLE_USER" | "ROLE_MODER") => set({ role }),
  setToken:(token: string) => set({ token }),
}))

export default useUserState