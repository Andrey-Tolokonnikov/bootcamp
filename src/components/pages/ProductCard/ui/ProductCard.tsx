import Error from "../../ErrorPage/Error"

import { useParams } from "react-router-dom"
import { useProduct } from "../lib/API"
import ProductLayout from "@/components/widgets/ProductLayout/ProductLayout"

const ProductCard = () => {

  const params = useParams()

  //const product : ProductType | undefined = useProducts(state=>state.products.find(product=>product.id == params.id))
  const {product, loading} = useProduct(params.id as string)
  
  if(!product && !loading){
    return <Error title="Такого продукта не нашлось" text="Возможно, он был удалён"/>
  }
  return (
    <ProductLayout showActions={true} product={product}/>
  )
}

export default ProductCard