import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react"
 

type Props = {
    triggerButton: React.ReactNode,
    title: string,
    description: string,
    content: React.ReactNode,
}

const ModalWindow = (props: Props) =>{
  return (
    <Dialog>
      <DialogTrigger asChild>
        {props.triggerButton}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>
            {props.description}
          </DialogDescription>
        </DialogHeader>
        {props.content}
      </DialogContent>
    </Dialog>
  )
}

export default ModalWindow