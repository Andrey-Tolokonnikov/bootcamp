import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/shared/ThemeProvider"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
 
// export function ModeToggle() {
//   const { setTheme } = useTheme()
 
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Тема</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Светлая
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Тёмная
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           Системная
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

export function ModeToggle() {
  const { setTheme } = useTheme()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Тема</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-28 p-0 dark:border-slate-600">
        <div className="hover:bg-slate-100 p-2 rounded-sm dark:hover:bg-slate-800 transition-colors duration-150 cursor-pointer" onClick={() => setTheme("light")}>Светлая</div>
        <div className="hover:bg-slate-100 p-2 rounded-sm dark:hover:bg-slate-800 transition-colors duration-150 cursor-pointer" onClick={() => setTheme("dark")}>Тёмная</div>
        <div className="hover:bg-slate-100 p-2 rounded-sm dark:hover:bg-slate-800 transition-colors duration-150 cursor-pointer" onClick={() => setTheme("system")}>Системная</div>
      </PopoverContent>
    </Popover>
  )
}