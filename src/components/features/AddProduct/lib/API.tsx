import { ProductType } from "@/components/entities/Product/model/Product"
import { toast } from "@/components/ui/use-toast"


const getProductWithCategoryInt = (product: ProductType) => {
  return {
    ...product,
    category_id: parseInt(product.category_id as string)
  }
}
function addProduct(product: ProductType){
  return fetch(`${import.meta.env.VITE_API_URL}/products/`, {
    method: "POST",
    body: JSON.stringify(getProductWithCategoryInt(product)),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .catch(()=>{
      toast({
        title: "Ошибка при добавлении продукта",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}

export {addProduct}