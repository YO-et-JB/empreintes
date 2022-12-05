import Button from "@/web/components/Button.jsx"
import FormError from "@/web/components/FormError.jsx"
import FormField from "@/web/components/FormField.jsx"
import { api } from "@/web/components/AppContext.jsx"
import Page from "@/web/components/Page.jsx"
import { Form, Formik } from "formik"
import { AxiosError } from "axios"
import { useRouter } from "next/router.js"
import { useCallback, useState } from "react"
import * as yup from "yup"
import { validateName, validatePhoneNumber } from "@/validators"
import { useAppContext } from "@/web/components/AppContext.jsx"
import qs from "qs"

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
}

const validationSchema = yup.object().shape({
  firstName: validateName.required(),
  lastName: validateName.required(),
  phoneNumber: validatePhoneNumber.required(),
})

const SettingsPage = () => {
  const router = useRouter()

  const [errors, setErrors] = useState([])

  const { setSession } = useAppContext()

  const handleSubmit = useCallback(
    async ({ firstName, lastName, phoneNumber }) => {
      setErrors([])

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.patch("/users", {
          firstName,
          lastName,
          phoneNumber,
        })

        if (jwt) {
          setSession(jwt)

          router.push(qs.parse(location.search.slice(1))?.returnTo || "/")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [router, setSession]
  )

  return (
    <Page title="Paramètres du compte" small>
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
          <Form className="flex flex-col gap-4" noValidate>
            <FormField
              type="firstName"
              name="firstName"
              placeholder="First name"
            />
            <FormField
              type="lastName"
              name="lastName"
              placeholder="Last name"
            />
            <FormField
              type="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
            />
            <Button type="submit" disabled={isSubmitting || !isValid}>
              Confirm user information
            </Button>
          </Form>
        )}
      </Formik>
    </Page>
  )
}

export default SettingsPage
