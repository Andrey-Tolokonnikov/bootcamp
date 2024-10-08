import { Link } from "react-router-dom"
import { ProductType } from "../"
import { cn } from "@/lib/utils"

type Props = {
    product: ProductType
}

const Product = (props: Props) => {
  return (
    <div className={cn("flex w-full rounded-md relative p-4 shadow-[0_0px_8px_3px_rgba(34,60,80,0.2)] dark:bg-[#222222] dark:shadow-none transition-transform duration-200 hover:scale-[1.03]")}>
      <img src="icon.png" height={100} width={100} alt=""/>
      <div className="flex flex-col ml-4">
        <Link to={`/product/${props.product.id}`} className="mb-1">
          <p className="text-xl font-bold">{props.product.name}</p>
        </Link>
        <a href={props.product.link} target="_blank" className="text-sm text-primary mb-1">{props.product.link}</a>
        <p className="text-sm text-gray-600 text-ellipsis line-clamp-2 dark:text-slate-400">{props.product.description}</p>
      </div>
    </div>
  )
}

export default Product