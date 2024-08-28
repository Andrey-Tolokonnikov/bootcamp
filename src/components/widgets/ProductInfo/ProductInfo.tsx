import { ProductType } from "@/components/entities/Product"
import DeleteProduct from "@/components/features/DeleteProduct/ui/DeleteProduct"
import EditProduct from "@/components/features/EditProduct/ui/EditProduct"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { Link, Milestone, User } from "lucide-react"

type Props = {
    product: ProductType,
    showActions: boolean
}

const ProductInfo = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 w-full  lg:max-w-[630px] max-w-[300px]">
      <div className="flex md:justify-between w-full md:flex-row flex-col items-start">
        <h1 className="text-2xl font-bold block">{props.product?.name ?? <Skeleton className="h-7 w-80 rounded-md"/>}</h1>
        {props.product && props.showActions? (
          <Popover>
            <PopoverTrigger className=" border-2 rounded-md p-3">Действия</PopoverTrigger>
            <PopoverContent className="flex flex-col gap-1 max-w-[150px]">
              <Button variant={"secondary"}> В архив</Button>
              <DeleteProduct className="w-full" productId={props.product.id as string}/>
              <EditProduct product={props.product}/>
            </PopoverContent>
          </Popover>
        ): props.showActions? <Skeleton className="h-12 w-32 rounded-md"/>:""}
      </div>
      <div><a href={props?.product?.link ?? "#"} className="text-primary flex items-center gap-1"><Link/>{props.product?.link ?? <Skeleton className="h-5 w-72 rounded-md"/>}</a></div>
      <div className="text-slate-700 dark:text-slate-200 flex items-center gap-1"><User className="inline"/>{props.product?.owner ?? <Skeleton className="h-5 w-72 rounded-md"/>}</div>
      <a href= {`mailto: ${props.product?.contacts ?? ""}`} className="flex items-center gap-1"><Milestone />{props.product?.contacts ?? <Skeleton className="h-5 w-72 rounded-md"/>}</a>
      <Accordion type="single" className="w-[80%]" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Описание</AccordionTrigger>
          <AccordionContent>
            {props.product?.description ?? <Skeleton className="h-5 w-72 rounded-md"/>}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>  
  )
}

export default ProductInfo