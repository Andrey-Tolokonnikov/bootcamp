import { ProductType } from "@/components/entities/Product"

export type RequestType = {
    id: string
    user: string,
    type: "add" | "edit",
    product: ProductType
}