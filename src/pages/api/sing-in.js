import signIn from "@/pages/sign-in"
import makeEndpoint from "../makeEndpoint"
const { default: makeEndpoint } = require("../makeEndpoint")

const signIn = makeEndpoint({
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

export default signIn
