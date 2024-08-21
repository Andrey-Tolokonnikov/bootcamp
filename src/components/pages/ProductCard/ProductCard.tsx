import { ProductType } from "@/components/entities/Product"
import Container from "@/components/shared/Container"
import ProductInfo from "@/components/widgets/ProductInfo/ProductInfo"
import useProducts from "@/store/ProductsSlice"
import Error from "../ErrorPage/Error"

import { useParams } from "react-router-dom"


const ProductCard = () => {

  const params = useParams()

  const product : ProductType | undefined = useProducts(state=>state.products.find(product=>product.id === Number(params.id)))

  if(!product){
    return <Error title="Такого продукта не нашлось" text="Возможно, он был удалён"/>
  }
  return (
    <Container className="max-w-[1000px] mt-10">
      <div className="flex items-start gap-10 w-full flex-wrap shadow-[0_0px_8px_3px_rgba(34,60,80,0.2)] p-8 rounded-md">
        <img src="/icon.png" className="mx-auto lg:mx-0" alt="" /> 
        <ProductInfo product={product as ProductType}/>
      </div> 
    </Container>
  )
}

export default ProductCard