import Alert from "@/components/shared/Alert"
import { Button } from "@/components/ui/button"
import { deleteProduct } from "../lib/API"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"

type Props = {
    productId: string,
    className?: string
}
const DeleteProduct = (props: Props) => {
  const {toast} = useToast()
  const navigate = useNavigate()

  return (
    <Alert
      triggerButton={<Button className={props.className} variant={"destructive"}>Удалить</Button>}
      title="Вы уверены, что хотите удалить этот продукт?" 
      text="Отменить удаление можно будет, лишь связавшись с модератором"
      okText="Удалить"
      onOk={()=>{
        deleteProduct(props.productId, toast).then(()=>{
          toast(
            {
              title: "Продукт помечен на удаление",
              description: "После подтверждения модератором продукт будет удалён из каталога",
              variant: "default"
            }
          )
          navigate("/")
        })
        
      }}
    />
  )
}

export default DeleteProduct