import { ProductType } from "@/components/entities/Product"
import ModalWindow from "@/components/shared/ModalWindow"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import ProductForm from "@/components/widgets/ProductForm/ProductForm"
import { toFormType } from "@/lib/utils"

type Props = {
    product: ProductType
}

const EditProduct = (props: Props) => {
  const {toast} = useToast()

  return (
    <ModalWindow 
      title="Редактирование продукта"
      description="Здесь можно изменить данные продукта и отправить их на проверку"
      content={<ProductForm onSubmit={()=>{
        toast({
          title: "Изменения успешно отправлены",
          description: "После проверки модератором они будут приняты и добавлены в каталог."
        })
      }}
      initialValues={toFormType(props.product)}></ProductForm>}
      triggerButton={
        <Button variant={"default"}>Редактировать</Button>
      }
    />
  )
}

export default EditProduct