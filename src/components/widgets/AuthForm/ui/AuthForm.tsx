import { User } from "@/components/entities/User/model/User"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Formik} from "formik"
import { AuthUser } from "../lib/API"
import { Link } from "react-router-dom"

const AuthForm = () => {
  const emptyInitialValues: User = {
    login: "",
    password: "",
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
        return errors
      }}
      onSubmit={AuthUser}
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
              className={errors.login && touched.login?"border-x-red-400 border-4":""}/>
          </div>
          <div>
            Пароль
            <Input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={errors.password && touched.password?"border-x-red-400 border-4":""}/>
          </div>
          <Button type="submit">Войти</Button>
          <Link to="/registration" className="w-full inline-block"><Button variant={"secondary"} className="w-full">Регистрация</Button></Link>
        </form>
      )}
    </Formik>
  )
}

export default AuthForm