export type ProductType = {
    id?: string,
    title?: string,
    description?: string,
    link?: string,
    owner?: string,
    contact?: string,
    categoryId?: string
}
export type GroupedProducts = {
    title: string,
    id: string,
    products: ProductType[]
}