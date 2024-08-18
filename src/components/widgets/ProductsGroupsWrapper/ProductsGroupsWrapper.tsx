import { GroupedProducts } from "@/components/entities/Product/model/Product"
import ProductsGroup from "../ProductsGroup/ProductsGroup"


type Props = {
    products: GroupedProducts[]
}

const ProductsGroupsWrapper = (props: Props) => (

  <div className="flex flex-col gap-10 mt-5">
    {props.products.map((group) => (
      <ProductsGroup key={group.id} group={group}/>        
    ))}
  </div>
)

export default ProductsGroupsWrapper