import { Search as SearchIcon} from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Search = () => {
  const [isFocused, setIsFocused] = useState(false) 
  return (
    <>
      {isFocused && <div className="fixed w-screen h-screen top-0 left-0 bg-slate-600/[0.5] z-10"></div>}
      <div className="flex flex-1 border rounded-2xl h-11 relative focus-visible:outline-none min-w-[275px]">
        <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-2 z-30"  color="#8fc5ff"/>
        <Input 
          className="rounded-2xl w-full h-full bg-gray-50 pl-11 text-lg z-20"
          onFocus={()=>setIsFocused(true)}
          onBlur={()=>setIsFocused(false)}
          placeholder="Найти что-то классное..."></Input>
      </div>
    </>
  )
}

export default Search