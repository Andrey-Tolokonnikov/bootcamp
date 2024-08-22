import React from "react"
import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode,
    className?: string
}

const Container = (props: Props) => {
  return (
    <div className={cn("w-full max-w-[1200px] md:mx-auto p-5 rounded-lg", props.className)}>
      {props.children}
    </div>
  )
}

export default Container