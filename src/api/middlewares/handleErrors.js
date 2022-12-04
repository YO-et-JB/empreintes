/*import Objection from "objection"
import { send404, send500 } from "../utils/http.js"

const handleErrors = async (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  if (err instanceof Objection.NotFoundError) {
    send404(res, err.modelClass.name)

    return
  }

  if (err instanceof Objection.UniqueViolationError) {
    res.status(409).send({
      error: [`Duplicated value for "${err.columns.join('", "')}"`],
    })

    return
  }

  // eslint-disable-next-line no-console
  console.error(err)

  send500(res)
}

export default handleErrors
import * as yup from "yup"

const validate = (validators) => async (req, res, next) => {
  const validationSchema = yup.object().shape({
    params: yup.object().shape(validators.params),
    query: yup.object().shape(validators.query),
    body: yup.object().shape(validators.body),
  })

  try {
    const { params, query, body } = await validationSchema.validate(
      req.locals,
      {
        abortEarly: false,
      }
    )

    req.locals.params = params
    req.locals.query = query
    req.locals.body = body
  } catch (err) {
    res.status(420).send({ error: err.errors })

    return
  }

  next()
}

export default validate */
