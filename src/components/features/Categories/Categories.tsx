
import Category from "@/components/entities/Category/Category"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import useActiveCategory from "@/store/ActiveCategorySlice"

type Props = {
    className?: string,
    categories: Category[]
}

const scrollToCategory = (id: string) => {
  const element = document.getElementById(`category-${id}`)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    })
  }
}

const Categories = (props: Props) => {
  const {activeCategory} = useActiveCategory()
  return (
    <div className={cn("inline-flex items-center rounded-md gap-6 flex-wrap", props.className)}>
      {
        props.categories.length > 0?(
          props.categories.map((category)=>(
            <div key={category.id} className={cn("inline-flex justify-center items-center rounded-md px-2 py-1 cursor-pointer line-clamp-1 text-ellipsis", activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}>
              <a onClick={()=>scrollToCategory(category.id)}>{category.name}</a>
            </div>
          )))
          :
          (
            Array(4).fill(null).map((_, i)=><Skeleton key={i} className="inline-block w-16 h-7 rounded-md"/>)
          )
      }
    </div>
  )
}

export default Categories