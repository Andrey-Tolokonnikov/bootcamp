/* eslint-disable no-useless-escape */
import { User } from "@/components/entities/User/model/User"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik} from "formik"
import { Link, useNavigate } from "react-router-dom"
import {RegUser } from "../lib/API"

const RegForm = () => {
  const emptyInitialValues: User = {
    email: "",
    name: "",
    password: "",
    passwordDbl: ""
  }

  const navigate = useNavigate()

  return (
    <Formik
      initialValues={emptyInitialValues}
      validate={(values: User) => {
        const errors: User = {}
        Object.keys(values).forEach((key) => {
          if (!values[key as keyof User]) {
            errors[key as keyof User] = "Required"
          }
        })
        if(values.password!== values.passwordDbl){
          errors.passwordDbl = "Пароли не совпадают"
        }
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(values.email as string)){
          errors.email = "invalid"
        }
        return errors
      }}
      onSubmit={(values)=>RegUser(values, navigate)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
          <div>
            Почта
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.email && touched.email?"border-x-red-400 border-4 dark:border-x-red-400":""}/>
          </div>
          <div>
            Имя
            <Input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={errors.name && touched.name?"border-x-red-400 border-4 dark:border-x-red-400":""}/>
          </div>
          <div>
            Пароль
            <Input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={errors.password && touched.password?"border-x-red-400 border-4 dark:border-x-red-400":""}/>
          </div>
          <div>
            Повторите пароль
            <Input
              name="passwordDbl"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordDbl}
              className={touched.passwordDbl && errors.passwordDbl?"border-x-red-400 border-4 dark:border-x-red-400":""}/>
          </div>
          {errors.passwordDbl == "Пароли не совпадают" && touched.passwordDbl?<p className="text-red-600">{errors.passwordDbl}</p>:""}
          <Button type="submit">Зарегистироваться</Button>
          <Link to="/auth" className="w-full inline-block"><Button variant={"secondary"} className="w-full">Авторизация</Button></Link>
        </form>
      )}
    </Formik>
  )
}

export default RegForm