import Category from "@/components/entities/Category/Category"
import { GroupedProducts, ProductType} from "@/components/entities/Product/"
import Categories from "@/components/features/Categories/Categories"
import Container from "@/components/shared/Container"
import { Switch } from "@/components/ui/switch"
import ProductsGroupsWrapper from "@/components/widgets/ProductsGroupsWrapper/ProductsGroupsWrapper"
import { useMemo } from "react"

const groupCategories = (products: ProductType[], categories: Category[]) : GroupedProducts[] => {
  return categories.map((category)=>{
    return {
      ...category,
      products: products.filter((product)=>product.categoryId === category.id)
    }
  })
}

const ProductsPage = () => {

  const products: ProductType[] = useMemo(()=>[

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
    {id: 14, title: "Product 7", categoryId: 4, contact: "hello@mail.com", owner: "Goodman", link: "google.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},
  ], []) 

  const categories: Category[] = useMemo(()=>[
    {id: 1, title: "Category 1"},
    {id: 2, title: "Category 2"},
    {id: 3, title: "Category 3"},
    {id: 4, title: "Category 4"},
  ], []) 

  const groupedProducts: GroupedProducts[] = useMemo(()=>groupCategories(products, categories), [products, categories])

  return (
    <>
      <Container className="sticky top-0 flex justify-between items-center bg-white/90 py-4 px-2 rounded-md max-w-[1000px]">
        <Categories categories={categories}/>
        <div className="flex items-center ">
          <Switch id="archieveSwitch"/>
          <label htmlFor="archieveSwitch" className="ml-2">Показать архивные</label>
        </div>
        
      </Container>
      <Container className="max-w-[1000px]">
        <ProductsGroupsWrapper products={groupedProducts}/>
      </Container>
    </>
  )
}

export default ProductsPage