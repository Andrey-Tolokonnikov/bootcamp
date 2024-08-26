import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

import Container from "./Container"

type Props = {
    title: string,
    description?: string,
    content: React.ReactNode,
}

const CardContainer = (props: Props) => {
  return (
    <Container className="max-w-[600px]">
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {props.content}
        </CardContent>
      </Card>
    </Container>
  )
}

export default CardContainer