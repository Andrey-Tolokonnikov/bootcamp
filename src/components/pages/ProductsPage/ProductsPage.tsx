import { GroupedProducts} from "@/components/entities/Product/"
import Categories from "@/components/features/Categories/Categories"
import Container from "@/components/shared/Container"
import { Switch } from "@/components/ui/switch"
import ProductsGroupsWrapper from "@/components/widgets/ProductsGroupsWrapper/ProductsGroupsWrapper"
import { groupCategories } from "@/lib/utils"
import useProducts from "@/store/ProductsSlice"
import { useMemo } from "react"

const ProductsPage = () => {
  const {products, categories} = useProducts()

  const groupedProducts: GroupedProducts[] = useMemo(()=>groupCategories(products, categories), [products, categories])

  return (
    <>
      <Container className="sticky top-0 flex justify-between items-center flex-wrap gap-5 bg-white/90 py-4 px-2 rounded-md max-w-[1000px] dark:bg-[#222222]">
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