import FormError from "@/web/components/FormError.jsx"
import Input from "@/web/components/Input.jsx"
import { ErrorMessage, Field } from "formik"

const FormField = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <Field as={Input} {...props} />
      <ErrorMessage name={props.name} component={FormError} />
    </div>
  )
}
export default FormField
