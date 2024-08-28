import { RequestType } from "@/components/entities/Request/model/Request"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { Link } from "react-router-dom"

type Props = {
    request: RequestType
}

const Request = (props: Props) => {
  return (
    <div className="flex px-4 py-3 rounded-md justify-between items-center shadow-[0_0px_8px_3px_rgba(34,60,80,0.2)] dark:bg-[#222222] dark:shadow-none">
      <div className="w-[30px] text-center">№{props.request.id}</div>
      <div className="w-[200px] flex items-center"><User/>{props.request.user}</div>
      <div className="w-[200px] text-center">{props.request.type=="add"?"Добавление":"Редактирование"}</div>
      <div className="text-center flex gap-4">
        <Link to={`/requests/${props.request.id}`}>
          <Button variant="secondary">Подробнее</Button>
        </Link>
        <Button variant="destructive">Отказ</Button>
        <Button variant="default">Публикация</Button></div>
    </div>
  )
}

export default Request