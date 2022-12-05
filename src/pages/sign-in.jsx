import { useAppContext } from "@/web/components/AppContext.jsx"
import Button from "@/web/components/Button.jsx"
import FormError from "@/web/components/FormError.jsx"
import FormField from "@/web/components/FormField.jsx"
import Page from "@/web/components/Page"
import { api } from "@/web/components/AppContext.jsx"
import { validateEmailOrUsername, validatePassword } from "@/validators.js"
import { AxiosError } from "axios"
import { Form, Formik } from "formik"
import { useRouter } from "next/router.js"
import qs from "qs"
import { useCallback, useState } from "react"
import * as yup from "yup"
import { LockClosedIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import siteLogo from "../../public/icons/logo3.svg"

const initialValues = {
  emailOrUsername: "",
  password: "",
}

const validationSchema = yup.object().shape({
  emailOrUsername: validateEmailOrUsername.required(),
  password: validatePassword.required(),
})

const SignInPage = () => {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const { setSession } = useAppContext()
  const handleSubmit = useCallback(
    async ({ emailOrUsername, password }) => {
      setErrors([])

      try {
        const {
          data: {
            result: [{ jwt }],
          },
        } = await api.post("/session", {
          emailOrUsername,
          password,
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
    <Page>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <Image
            className="mx-auto h-12 w-auto"
            src={siteLogo}
            alt="Empreintes & Digitales Editions"
          />
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Connectez-vous à votre compte
            </h2>
          </div>
          {errors.length ? (
            <div className="mb-4 flex flex-col gap-4 border-4 border-red-700 p-4">
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
              <Form className="mt-8 space-y-6" noValidate>
                <div className="-space-y-px shadow-sm">
                  <div>
                    <FormField
                      type="email"
                      name="emailOrUsername"
                      placeholder="E-mail or Username"
                      className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <FormField
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-500 focus:outline-none focus:ring-slate-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-slate-600 hover:text-slate-500"
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                </div>
                <div>
                  <Button type="submit" disabled={isSubmitting || !isValid}>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-slate-500 group-hover:text-slate-400"
                        aria-hidden="true"
                      />
                    </span>
                    S'identifier
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          <p className="text-center text-xs text-gray-500">
            &copy;2022 Empreintes&Digitales Éditions. Tous les droits sont
            réservés.
          </p>
        </div>
      </div>
    </Page>
  )
}

SignInPage.isPublic = true

export default SignInPage
