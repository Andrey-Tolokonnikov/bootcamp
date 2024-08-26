import { useEffect, useState } from "react"
import { fetchRequests } from "../lib/API"
import { RequestType } from "@/components/entities/Request/model/Request"
import Container from "@/components/shared/Container"

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
    <Container>
      <div>Requests</div>
      {requests.map(req=>(
        <div>{req.user}</div>
      ))}
    </Container>
  )
}

export default Requests