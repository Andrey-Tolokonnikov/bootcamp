export type ProductType = {
    id: number,
    title: string,
    description?: string,
    link: string,
    owner: string,
    contact: string,
    categoryId: number
}
export type ProductFormType = {
        title?: string,
        description?: string,
        link?: string,
        contact?: string,
        owner?: string,
        categoryId?: string
    }

export type GroupedProducts = {
    title: string,
    id: number,
    products: ProductType[]
}