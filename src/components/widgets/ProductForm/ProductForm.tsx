/* eslint-disable no-useless-escape */
import { ProductFormType } from "@/components/entities/Product/model/Product"
import { Button } from "@/components/ui/button"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useProducts from "@/store/ProductsSlice"
import { Formik} from "formik"

type Props = {
    onSubmit: (values: ProductFormType) => void,
    onCancel?: ()=>void,
    initialValues?: ProductFormType
}

const ProductForm = (props: Props) => {
  const emptyInitialValues: ProductFormType = {
    title: "",
    description: "",
    link: "",
    contact: "",
    owner: "",
    categoryId: ""
  }

  const {categories} = useProducts()

  return (

    <Formik
      initialValues={props.initialValues ?? emptyInitialValues}
      validate={(values: ProductFormType) => {
        const errors: ProductFormType = {}
        //evr but description required
        Object.keys(values).forEach((key) => {
          if (!values[key as keyof ProductFormType] && key !== "description") {
            errors[key as keyof ProductFormType] = "Required"
          }
        })
        //url
        if(!/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(values.link as string)){
          errors.link = "Invalid link"
        }
        //mail or phone number
        if(![/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi, 
          /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/]
          .some((reg=>reg.test(values.contact as string)))){
          errors.contact = "Invalid contact"
        }
        return errors
      }}
      onSubmit={props.onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
          <div>
            Название
            <Input
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              className={errors.title && touched.title?"border-x-red-400 border-4":""}/>
          </div>

          <Select name="categoryId" defaultValue={values.categoryId} onValueChange={(value)=>{
            setFieldValue("categoryId", value)}}>
            <SelectTrigger className="">
              <SelectValue placeholder="Выберите категорию"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Категории</SelectLabel>
                {categories.map(category=>(
                  <SelectItem key={category.id} value={category.id.toString()} className="cursor-pointer">{category.title}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            Ссылка
            <Input
              name="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
              className={errors.link && touched.link?"border-x-red-400 border-4":""}/>
          </div>
          <div>
            Контакты
            <Input
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
              className={errors.contact && touched.contact?"border-x-red-400 border-4":""}/>
          </div>

          <div>
            Владелец
            <Input
              name="owner"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.owner}
              className={errors.owner&& touched.owner?"border-x-red-400 border-4":""}/>

          </div>

          <div>
            Описание
            <Input
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className={errors.description && touched.description?"border-x-red-400 border-4":""}/>
          </div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
              Отмена
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" disabled={Object.values(errors).some(val=>val) || Object.values(touched).every(val=>!val)}>Подтвердить</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      )}
    </Formik>
  )
}

export default ProductForm