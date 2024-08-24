export type ProductType = {
    id?: string,
    name?: string,
    description?: string,
    link?: string,
    owner?: string,
    contact?: string,
    category_id?: string
}
export type GroupedProducts = {
    name: string,
    id: string,
    products: ProductType[]
}