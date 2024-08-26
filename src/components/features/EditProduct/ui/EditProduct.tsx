import { ProductType } from "@/components/entities/Product"
import ModalWindow from "@/components/shared/ModalWindow"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import ProductForm from "@/components/widgets/ProductForm/ProductForm"
import { editProduct } from "../lib/API"
import { useNavigate } from "react-router-dom"

type Props = {
    product: ProductType
}

const EditProduct = (props: Props) => {
  const {toast} = useToast()
  const navigate = useNavigate()

  return (
    <ModalWindow 
      title="Редактирование продукта"
      description="Здесь можно изменить данные продукта и отправить их на проверку"
      content={<ProductForm onSubmit={(values)=>{
        editProduct(values)
        toast({
          title: "Изменения успешно отправлены",
          description: "После проверки модератором они будут приняты и добавлены в каталог."
        })
        navigate("/")
      }}
      initialValues={props.product}></ProductForm>}
      triggerButton={
        <Button variant={"default"}>Редактировать</Button>
      }
    />
  )
}

export default EditProduct