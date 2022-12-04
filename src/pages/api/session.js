import makeEndpoint from "../makeEndpoint"
import jsonwebtoken from "jsonwebtoken"
import validate from "@/api/middlewares/validate"
import config from "@/api/config"
import User from "@/api/db/models/User"
import { send401 } from "@/api/utils/http"
import { validatePassword, validateEmailOrUsername } from "@/api/validators"


const session = makeEndpoint({
  POST: [
    validate({
      emailOrUsername: validateEmailOrUsername.required(),
      password: validatePassword.required(),
    }),
    async (req, res) => {
      const { emailOrUsername, password } = req.body

      if (!emailOrUsername) {
        res.status(401).send({ error: ["Invalid credentials."] })

        return
      }

      const user = await User.query()
        .findOne({
          email: emailOrUsername,
        })
        .orWhere({
          username: emailOrUsername,
        })

      if (!user) {
        send401(res)

        return
      }

      if (!user.checkPassword(password)) {
        send401(res)

        return
      }

      const jwt = jsonwebtoken.sign(
        {
          session: {
            user: {
              id: user.id,
              displayName: user.displayName,
              username: user.username,
              role: user.role,
            },
          },
        },
        config.security.jwt.secret,
        { expiresIn: config.security.jwt.expiresIn }
      )

      res.send({ result: [{ jwt }], count: 1 })
    },
  ],
})

export default session
