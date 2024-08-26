/* eslint-disable no-useless-escape */
import { User } from "@/components/entities/User/model/User"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik} from "formik"
import { Link } from "react-router-dom"
import { RegUser } from "../lib/API"

const AuthForm = () => {
  const emptyInitialValues: User = {
    login: "",
    password: "",
    passwordDbl: ""
  }

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
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(values.login as string)){
          errors.login = "invalid"
        }
        return errors
      }}
      onSubmit={RegUser}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
          <div>
            Почта
            <Input
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
              className={errors.login && touched.login?"border-x-red-400 border-4 dark:border-x-red-400":""}/>
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

export default AuthForm