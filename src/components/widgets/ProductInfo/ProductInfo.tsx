import { ProductType } from "@/components/entities/Product"
import DeleteProduct from "@/components/features/DeleteProduct/DeleteProduct"
import EditProduct from "@/components/features/EditProduct/EditProduct"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Link, Milestone, User } from "lucide-react"

type Props = {
    product: ProductType
}

const ProductInfo = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 w-full  lg:max-w-[630px] max-w-[300px]">
      <div className="flex md:justify-between w-full md:flex-row flex-col items-start">
        <h1 className="text-2xl font-bold block">{props.product.title}</h1>
        <Popover>
          <PopoverTrigger className=" border-2 rounded-md p-3">Действия</PopoverTrigger>
          <PopoverContent className="flex flex-col gap-1 max-w-[150px]">
            <Button variant={"secondary"}> В архив</Button>
            <DeleteProduct className="w-full" productId={props.product.id}/>
            <EditProduct product={props.product}/>
          </PopoverContent>
        </Popover>
      </div>
      <p><a href={props.product.link} className="text-primary flex items-center gap-1"><Link/>{props.product.link}</a></p>
      <p className="text-slate-700 flex items-center gap-1"><User className="inline"/>{props.product.owner}</p>
      <p className="flex items-center gap-1"><Milestone />{props.product.contact}</p>
      <Accordion type="single" className="w-[80%]" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Описание</AccordionTrigger>
          <AccordionContent>
            {props.product.description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>  
  )
}

export default ProductInfo