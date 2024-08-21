import { ProductType } from "@/components/entities/Product"
import { create } from "zustand"
import Category from "@/components/entities/Category/Category"

interface productsState {
    products: ProductType[],
    categories: Category[]
    setProducts: (products: ProductType[]) => void,
    setCategories: (categories: Category[]) => void,
}

const useProducts = create<productsState>((set) => ({
  products: [
    {id: 1, title: "Product 1", categoryId: 1, contact: "hello@mail.com", owner: "Goodman", link: "https://www.google.ru/?hl=ru", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 2, title: "Product 2", categoryId: 1, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 3, title: "Product 3", categoryId: 1, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 4, title: "Product 4", categoryId: 2, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 5, title: "Product 5", categoryId: 2, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 6, title: "Product 6", categoryId: 2, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 7, title: "Product 7", categoryId: 3, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 8, title: "Product 7", categoryId: 3, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 9, title: "Product 7", categoryId: 3, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 10, title: "Product 7", categoryId: 4, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 11, title: "Product 7", categoryId: 4, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 12, title: "Product 7", categoryId: 4, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 13, title: "Product 7", categoryId: 4, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
    {id: 14, title: "Product 7", categoryId: 4, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "} 
  ],
  categories: [
    {id: 1, title: "Category 1"},
    {id: 2, title: "Category 2"},
    {id: 3, title: "Category 3"},
    {id: 4, title: "Category 4"}
  ],
  setProducts: (products: ProductType[]) => set({ products }),
  setCategories: (categories: Category[]) => set({ categories }),
}))

export default useProducts