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
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import AddProduct from "@/components/features/AddProduct/ui/AddProduct"
import useUserState from "@/store/UserSlice"


const ProductsPage = () => {
  const productsState = useProductsState()
  const {products, categories, setProducts, setCategories} = productsState

  const groupedProducts: GroupedProducts[] = useMemo(()=>groupCategories(products, categories), [products, categories])

  const user = useUserState()
  const {toast} = useToast()
  useEffect(()=>{
    fetchProducts(setProducts)
    fetchCategories(setCategories)
  },
  [setCategories, setProducts, toast])
  return (
    <>
      <Container className="sticky top-0 flex justify-between items-center flex-wrap gap-5 bg-white/90 py-4 px-4 rounded-md max-w-[1000px] dark:bg-[#222222] z-30">
        <Categories categories={categories}/>
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Switch id="archieveSwitch" className="mr-2"/>
            <label htmlFor="archieveSwitch">Показать архивные</label>
          </div>
          {user.role == "ROLE_MODER" && <Link to="/requests"><Button variant={"secondary"}>К заявкам</Button></Link>}
          {user.role && <AddProduct/>}
        </div>
      </Container>
      <Container className="max-w-[1000px]">
        <ProductsGroupsWrapper products={groupedProducts}/>
      </Container>
    </>
  )
}

export default ProductsPage