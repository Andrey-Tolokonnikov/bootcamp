import Container from "@/components/shared/Container"
import ProductInfo from "../ProductInfo/ProductInfo"
import { ProductType } from "@/components/entities/Product"

type Props = {
    product?: ProductType
    showActions: boolean
}

const ProductLayout = (props: Props) => {
  return (
    <Container className="max-w-[1000px]">
      <div className="flex items-start gap-10 w-full flex-wrap shadow-[0_0px_8px_3px_rgba(34,60,80,0.2)] p-8 rounded-md dark:bg-[#222222] dark:shadow-none">
        <img src="/icon.png" className="mx-auto lg:mx-0" alt="" /> 
        <ProductInfo showActions={props.showActions as boolean} product={props.product as ProductType}/>
      </div>
    </Container>
  )
}

export default ProductLayout