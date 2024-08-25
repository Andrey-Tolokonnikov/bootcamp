import { GroupedProducts} from "@/components/entities/Product/"
import Categories from "@/components/features/Categories/Categories"
import Container from "@/components/shared/Container"
import { Switch } from "@/components/ui/switch"
import ProductsGroupsWrapper from "@/components/widgets/ProductsGroupsWrapper/ProductsGroupsWrapper"
import { groupCategories } from "@/lib/utils"
import { useEffect, useMemo } from "react"
import useProductsState from "@/store/ProductsSlice"
import { useToast } from "@/components/ui/use-toast"
import { fetchCategories, fetchProducts } from "../lib/API"


const ProductsPage = () => {
  const productsState = useProductsState()
  const {products, categories, setProducts, setCategories} = productsState
  console.log("cat")
  console.log(categories)

  const groupedProducts: GroupedProducts[] = useMemo(()=>groupCategories(products, categories), [products, categories])

  const {toast} = useToast()
  useEffect(()=>{
    fetchProducts(setProducts, toast)
    fetchCategories(setCategories, toast)
  },
  [setCategories, setProducts, toast])
  return (
    <>
      <Container className="sticky top-0 flex justify-between items-center flex-wrap gap-5 bg-white/90 py-4 px-4 rounded-md max-w-[1000px] dark:bg-[#222222]">
        <Categories categories={categories}/>
        <div className="flex items-center ">
          <Switch id="archieveSwitch"/>
          <label htmlFor="archieveSwitch" className="ml-2">Показать архивные</label>
        </div>
      </Container>
      <Container className="max-w-[1000px]">
        <ProductsGroupsWrapper products={groupedProducts}/>
      </Container>
    </>
  )
}

export default ProductsPage