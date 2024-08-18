export type ProductType = {
    id: number,
    title: string,
    description?: string,
    link: string,
    owner: string,
    contact: string,
    categoryId: number
}

export type GroupedProducts = {
    title: string,
    id: number,
    products: ProductType[]
}