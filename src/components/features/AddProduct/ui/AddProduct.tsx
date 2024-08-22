import ModalWindow from "@/components/shared/ModalWindow"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import ProductForm from "@/components/widgets/ProductForm/ProductForm"
import { ArrowRight, Plus } from "lucide-react"
import { addProduct } from "../lib/API"


const AddProduct = () => {
  const {toast} = useToast()

  return (
    <ModalWindow 
      title="Добавление продукта"
      description="Здесь можно ввести данные нового продукта и отправить их на проверку"
      content={<ProductForm onSubmit={(values)=>{
        addProduct(values, toast)
        toast({
          title: "Продукт успешно отправлен",
          description: "После проверки модератором он будет добавлен в каталог."
        })
      }}></ProductForm>}
      triggerButton={
        <Button className="group relative" variant="default">
          <Plus className="absolute left-2 transition duration-200 group-hover:opacity-0" strokeWidth={2} />
          <ArrowRight className="absolute left-2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          <span className="ml-5">Добавить</span>  
        </Button>
      }
    />
  )
}

export default AddProduct