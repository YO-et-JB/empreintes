import Page from "@/web/components/Page"
import { Formik, Form } from "formik"
import Button from "@/web/components/Button"
import { useState, useCallback } from "react"
import { useRouter } from "next/router"
import FormField from "@/web/components/FormField.jsx"
import FormError from "@/web/components/FormError.jsx"
import * as yup from "yup"
import api from "@/web/services/api.js"
import {
  validateEmail,
  validatePassword,
  validateDisplayName,
  validateUsername,
} from "@/api/validators.js"
import { AxiosError } from "axios"

const initialValues = {
  displayName: "",
  username: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  displayName: validateDisplayName.required(),
  username: validateUsername.required(),
  email: validateEmail.required(),
  password: validatePassword.required(), // ne jamais coller le password sur un sign-in
})

const SignUp = () => {
  const router = useRouter()

  const [errors, setErrors] = useState([])

  const handleSubmit = useCallback(
    async ({ email, password, username, displayName }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/users", { email, password, username, displayName })

        if (count) {
          router.push("/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops, Something went wrong, please, try again !"])
      }
    },
    [router]
  )

  return (
    <Page title="Formulaire d'enregistrement" small>
      <div>
        {errors.length ? (
          <div className="mb-4 flex flex-col gap-4 rounded-lg border-4 border-red-600 p-4">
            {errors.map((error) => (
              <FormError key={error}>{error}</FormError>
            ))}
          </div>
        ) : null}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="flex flex-col gap-4">
              <FormField
                name="displayName"
                type="text"
                placeholder="DisplayName"
              />
              <FormField name="username" type="text" placeholder="Username" />
              <FormField name="email" type="email" placeholder="E-mail" />
              <FormField
                name="password"
                type="password"
                placeholder="Password"
              />
              <Button
                type="submit"
                className="w-1/2"
                disabled={isSubmitting || !isValid}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  )
}

SignUp.isPublic = true

export default SignUp
