import { ChevronRight, Search as SearchIcon} from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useDebounce } from "react-use"
import { ProductType } from "@/components/entities/Product"
import { fetchSearchItems } from "../lib/API"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const Search = () => {
  const [isFocused, setIsFocused] = useState(false) 
  const [searchText, setSearchText] = useState("")
  
  const [searchItems, setSearchItems] = useState<ProductType[]>()

  useDebounce(()=>{
    const getItems = async () => {
      const items = await fetchSearchItems(searchText.toLowerCase()) 
      setSearchItems(items as unknown as ProductType[])
    }
    getItems()
  }, 300, [searchText])

  const onBlurDelayed = ()=>{
    setTimeout(()=>{setIsFocused(false)}, 50)
  }

  return (
    <>
      {isFocused && <div className="fixed flex flex-col w-screen h-screen top-0 left-0 bg-slate-600/[0.5] z-40"></div>}
      <div className="flex flex-1 border rounded-2xl h-11 relative focus-visible:outline-none min-w-[275px]">
        <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-2 z-50"  color="#8fc5ff"/>
        <Input 
          className="rounded-2xl w-full h-full bg-gray-50 pl-11 text-lg z-40"
          onFocus={()=>setIsFocused(true)}
          onBlur={onBlurDelayed}
          onChange={(e)=>setSearchText(e.target.value)}
          value={searchText}
          placeholder="Найти что-то классное..."></Input>
        
        <div className={cn("scroll absolute w-full bg-white rounded-xl top-14 shadow-md transition-all duration-300 invisible opacity-0 z-50", isFocused && "visible opacity-100 top-12")}>
          {(searchItems && searchItems.length > 0 ?searchItems?.slice(0, 7).map(item=>(
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="flex group gap-2 px-2 items-center justify-between hover:bg-blue-200 transition-colors p-2 rounded-xl" key={item.id}>
                <div className="flex gap-2">
                  <img src="/icon.png" className="w-[20px] h-[20px]" alt="" />
                  {item.name}
                </div>
                <ChevronRight color="#6b6b6b" className="opacity-0 group-hover:opacity-100 transition duration-100"/>
              </div>
            </Link>
          )):<div className="p-2">Продуктов не найдено</div>)}
        </div>
        
      </div>
    </>
  )
}

export default Search