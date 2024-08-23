import { GroupedProducts } from "@/components/entities/Product/model/Product"
import ProductsGroup from "../ProductsGroup/ProductsGroup"
import { Skeleton } from "@/components/ui/skeleton"


type Props = {
    products: GroupedProducts[]
}

const ProductsGroupsWrapper = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 mt-5">
      {props.products.length>0?(
        props.products.map((group) => (
          <ProductsGroup key={group.id} group={group}/>        
        )))
        :
        (
          <>
            <Skeleton className="h-16 w-72 rounded-lg"/>
            <Skeleton className="h-32 w-full rounded-lg"/>
            <Skeleton className="h-32 w-full rounded-lg"/>
          </>
        )}
    </div>
  )
}

export default ProductsGroupsWrapper