 import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
    onCancel: ()=>void
    onConfirm: ()=>void
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
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Отмена
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">Подтвердить</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ModalWindow