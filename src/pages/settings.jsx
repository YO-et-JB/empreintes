import Button from "@/web/components/Button.jsx"
import FormField from "@/web/components/FormField.jsx"
import FormError from "@/web/components/FormError"
import Page from "@/web/components/Page.jsx"
import api from "@/web/services/api.js"
import { Form, Formik } from "formik"
import * as yup from "formik"
import { AxiosError } from "axios"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import {
  validateDisplayName,
  validateUsername,
  validateEmail,
} from "@/api/validators"

const initialValues = {
  displayName: "",
  username: "",
  email: "",
}

const validationSchema = yup.object().shape({
  displayName: validateDisplayName.required(),
  username: validateUsername.required(),
  email: validateEmail.required(),
})

const SettingsPage = () => {
  const router = useRouter()

  const [errors, setErrors] = useState([])

  const handleSubmit = useCallback(
    async ({ displayName, username, email }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/users", { displayName, username, email }) // on peut ajourter "/user/userId" à condition d'ajouter params dans users si on veut que chq utilisateur patch

        if (count) {
          router.push("/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops, somthing went wrong ! Please, try again! "])
      }
    },
    [router]
  )

  return (
    <Page title="Settings">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-4" encType="multipart/form-data">
          <FormField name="displayName" type="file" />
          <FormField name="username" type="file" />
          <FormField name="email" type="file" />
          <Button type="submit">SAVE</Button>
        </Form>
      </Formik>
    </Page>
  )
}

export default SettingsPage
