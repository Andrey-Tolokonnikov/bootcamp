import Alert from "@/components/shared/Alert"
import { Button } from "@/components/ui/button"

type Props = {
    productId: number,
    className?: string
}
const DeleteProduct = (props: Props) => {
  return (
    <Alert
      triggerButton={<Button className={props.className} variant={"destructive"}>Удалить</Button>}
      title="Вы уверены, что хотите удалить этот продукт?" 
      text="Отменить удаление можно будет, лишь связавшись с модератором"
      okText="Удалить"
      onOk={()=>(console.log(props.productId))}
    />
  )
}

export default DeleteProduct