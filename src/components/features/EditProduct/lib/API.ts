import { ProductType } from "@/components/entities/Product/model/Product"

function editProduct(product: ProductType, toast: (conf: {[name: string]:string})=>void){
  return fetch(`${import.meta.env.VITE_API_URL}/products/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .catch(()=>{
      toast({
        title: "Ошибка при редактировании продукта",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}

export {editProduct}