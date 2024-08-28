import { useParams } from "react-router-dom"
import Error from "@/components/pages/ErrorPage/Error"
import { fetchProduct, useRequest } from "../lib/API"
import ProductLayout from "@/components/widgets/ProductLayout/ProductLayout"
import Container from "@/components/shared/Container"
import { ProductType } from "@/components/entities/Product"
import { useEffect, useState } from "react"

const RequestCard = () => {

  const params = useParams()

  const {request, loading} = useRequest(params.id as string)

  const [product, setProduct] = useState<ProductType | null>(null)

  useEffect(()=>{

    const getProduct = async () =>{
      const product = await fetchProduct(request?.product.id as string)
      setProduct(product)
    }
    if(request?.type == "edit"){
      getProduct()
    }
  },
  [request])

  
  if(!request && !loading){
    return <Error title="Такой заявки не нашлось"/>
  }

  if(request?.type == "add"){
    return (
      <>
        <Container className="max-w-[1000px]">
          <h1 className="text-2xl font-bold">Заявка №{request?.id}. Добавление</h1>
        </Container>
        <ProductLayout product={request?.product} showActions={false}></ProductLayout>
      </>
    )
  } else{
    return (
      <>
        <Container className="max-w-[1000px] py-0">
          <h1 className="text-2xl font-bold py-4">Заявка №{request?.id}. Редактирование</h1>
          <p className="text-2xl">Было</p>
        </Container>
        <ProductLayout product={product as ProductType} showActions={false}></ProductLayout>
        <Container className="max-w-[1000px] py-0">
          <p className="text-2xl">Стало</p>
        </Container>
        <ProductLayout product={request?.product} showActions={false}></ProductLayout>
      </>
    )
  }
  
}

export default RequestCard