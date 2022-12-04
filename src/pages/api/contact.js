/*import contact from "@/pages/contact"
import makeEndpoint from "../makeEndpoint"
const { default: makeEndpoint } = require("../makeEndpoint")

const auth = async (req, res, next) => {
  const {
    query: { secret },
  } = req

  if (secret === "tomato") {
    await next()

    return
  }

  res.status(401).send("FORBIDDEN")
}

const contact = makeEndpoint({
  GET: [async (req, res) => res.send("GET MESSAGE")],
  POST: [async (req, res) => res.send("POST MESSAGE")],
  PATCH: [async (req, res) => res.send("PATCH MESSAGE")],
  DELETE: [async (req, res) => res.send("DELETE MESSAGE")],
})

export default contact*/
