import { Field, Form, Formik } from "formik"
import { useCallback } from "react"
import Button from "./Button"

const initialValues = {
  email: "",
  subject: "",
  message: "",
}

const Contact = () => {
  const handleSubmit = useCallback(async ({ email, subject, message }) => {
    console.log(email, subject, message)
  }, [])

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900"
      >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Pour nous contacter
          </h2>
          <Form>
            <div>
              <label
                name="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Votre email
              </label>
              <Field
                type="text"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                name="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Sujet
              </label>
              <Field
                type="text"
                row="6"
                name="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Dites-nous en quoi nous pouvons vous aider"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                name="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Message
              </label>
              <Field
                as="textarea"
                type="textarea"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Laissez votre commentaire..."
              />
            </div>
            <Button type="submit" className="py-2 mt-4">
              Envoyer
            </Button>
          </Form>
        </div>
      </Formik>
    </div>
  )
}

export default Contact
