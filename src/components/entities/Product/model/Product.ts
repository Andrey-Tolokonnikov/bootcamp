export type ProductType = {
    id?: string,
    name?: string,
    description?: string,
    link?: string,
    owner?: string,
    contacts?: string,
    category_id?: string
}
export type GroupedProducts = {
    name: string,
    id: string,
    products: ProductType[]
}