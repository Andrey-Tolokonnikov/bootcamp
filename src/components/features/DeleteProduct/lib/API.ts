export function deleteProduct(productId: string, toast: (conf: {[name: string]:string})=>void){
  return fetch(`${import.meta.env.VITE_API_URL}/products/${productId}`, {
    method: "DELETE"
  })
    .then(res=>res.json())
    .catch(()=>{
      toast({
        title: "Ошибка при удалении продукта",
        description: "Уже работаем над устранением проблемы",
        variant: "destructive"
      })
    })
}