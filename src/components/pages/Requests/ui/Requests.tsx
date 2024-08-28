import { useEffect, useState } from "react"
import { fetchRequests } from "../lib/API"
import { RequestType } from "@/components/entities/Request/model/Request"
import Container from "@/components/shared/Container"
import Request from "@/components/widgets/Request/ui/Request"

const Requests = () => {
  const [requests, setRequests] = useState<RequestType[]>([])
  useEffect(()=>{
    async function getRequests(){
      const requests: RequestType[] = await fetchRequests()
      setRequests(requests)
    }
    getRequests()
  }, [])
  return (
    <Container className="">
      <h1 className="text-4xl mb-4">Заявки</h1>
      <div className="flex flex-col gap-4">
        {requests.map(req=>(
          <Request request={req}/>
        ))}
      </div>
    </Container>
  )
}

export default Requests