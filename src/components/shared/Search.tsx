import { Search as SearchIcon} from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"



const Search = () => {
  const [isFocused, setIsFocused] = useState(false) 
  return (
    <>
      {isFocused && <div className="fixed w-screen h-screen top-0 left-0 bg-slate-600/[0.5]"></div>}
      <div className="flex border rounded-2xl h-11 relative focus-visible:outline-none w-full mx-20">
        <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-2"  color="#8fc5ff"/>
        <Input className="rounded-2xl w-full h-full bg-gray-50 pl-11 text-lg" onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)}></Input>
      </div>
    </>
  )
}

export default Search