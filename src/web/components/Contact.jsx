import { useState } from "react"
import FormError from "@/web/components/FormError.jsx"
import FormField from "@/web/components/FormField.jsx"
import * as yup from "yup"
import { Form, Formik } from "formik"
import { Switch } from "@headlessui/react"
import classNames from "classnames"
import Link from "@/web/components/Link.jsx"
import Button from "@/web/components/Button.jsx"
import { AxiosError } from "axios"
import { api } from "@/web/components/AppContext.jsx"
import { validateName, validateEmail, validateMessage } from "@/validators.js"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

const validationSchema = yup.object().shape({
  firstName: validateName.required(),
  lastName: validateName.required(),
  email: validateEmail.required(),
  message: validateMessage.required(),
})

const Contact = () => {
  const [agreed, setAgreed] = useState(false)
  const [sendStatus, setSendStatus] = useState(null)
  const [received, setReceived] = useState(false)
  const [errors, setErrors] = useState([])

  const sendFail = (
    <div>
      <h2 className="text-2xl">Échec de l'envoi du message.</h2>{" "}
      <p>
        Veuillez réessayer ou{" "}
        <a
          href="mailto:contact@empreintesetdigitaleseditions.com"
          className="text-slate-700"
        >
          envoyer un e-mail
        </a>
        .
      </p>
    </div>
  )
  const sendSuccess = (
    <div>
      <h2 className="text-2xl">Message reçu!</h2>
      <p>Je vous répondrai dans les plus brefs délais.</p>
    </div>
  )
  const sendingMsg = (
    <div>
      <h2 className="text-2xl">Envoi du message...</h2>
    </div>
  )

  const handleSubmit = async (values, actions) => {
    setErrors([])

    console.log("Sending")
    setSendStatus(sendingMsg)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    try {
      await api.post("/email", values)

      console.log("Response received")
      setSendStatus(sendSuccess)
      setReceived(true)
      actions.resetForm()
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.error) {
        setErrors(err.response.data.error)

        return
      }

      setSendStatus(sendFail)
      setErrors(["Oops. Something went wrong, please try again."])
    }
  }

  return (
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nous contacter
          </h2>
        </div>
        <div className="mt-12">
          {errors.length ? (
            <div className="mb-4 flex flex-col gap-4 rounded-lg border-4 border-red-600 p-4">
              {errors.map((error) => (
                <FormError key={error}>{error}</FormError>
              ))}
            </div>
          ) : null}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid }) => (
              <Form
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                noValidate
              >
                {received}
                <div>
                  <FormField
                    id="firstName-input"
                    type="text"
                    name="firstName"
                    placeholder="Prénom"
                  />
                </div>
                <div>
                  <FormField
                    id="lastName-input"
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                  />
                </div>
                <div className="sm:col-span-2">
                  <FormField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                  />
                </div>
                <div className="sm:col-span-2">
                  <FormField
                    id="msg-text"
                    type="text"
                    name="message"
                    placeholder="Message"
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? "bg-slate-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                        )}
                      >
                        <span className="sr-only">Accepter les politiques</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-5" : "translate-x-0",
                            "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p className="text-base text-gray-500">
                        En sélectionnant ceci, vous acceptez les{" "}
                        <Link
                          href="/privacy-policy"
                          className="font-medium text-gray-700 underline"
                        >
                          Politique de confidentialité
                        </Link>{" "}
                        et{" "}
                        <Link
                          href="/cookies-policy"
                          className="font-medium text-gray-700 underline"
                        >
                          Politique relative aux cookies
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Button
                    id="submit-button"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  >
                    Envoyer
                  </Button>
                  {sendStatus}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact
