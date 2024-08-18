import { Product } from "@/components/entities/Product"
import { GroupedProducts } from "@/components/entities/Product/model/Product"
import useActiveCategory from "@/store/ActiveCategorySlice"
import { useEffect, useRef } from "react"
import {useIntersection} from "react-use"

type Props = {
    group: GroupedProducts
}

const ProductsGroup = (props: Props) => {

  const {setActiveCategory} = useActiveCategory()

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-200px 0px -300px 0px",
    threshold: 1
  })


  useEffect(() => {
    if(intersection?.isIntersecting) {
      setActiveCategory(props.group.id)
    }
   
  }, [ intersection?.isIntersecting, props.group.id, setActiveCategory])

  return (
    <div>
      <div className="text-4xl mb-5 text-bold" ref={intersectionRef} id={`category-${props.group.id}`}>{props.group.title}</div>
      <div className="flex flex-col gap-8">
        {props.group.products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>  
    </div>
  )
}

export default ProductsGroup