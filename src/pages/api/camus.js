import makeEndpoint from "../../api/makeEndpoint"

const camus = makeEndpoint({
  GET: [
    auth("ADMIN"),
    validate({
      query: {
        limit: validateLimit,
        offset: validateOffset,
      },
    }),
    async (req, res) => {
      const { limit, offset } = req.locals.query
      const users = await User.query().limit(limit).offset(offset)
      const [{ count }] = await User.query().count()

      res.send({ result: filterDBResult(users), count })
    },
  ],
  GET: [
    auth(),
    validate({
      params: {
        userId: validateId.required(),
      },
      body: {
        email: validateEmail,
        username: validateUsername,
        displayName: validateDisplayName,
        password: validatePassword,
      },
    }),
    async (req, res) => {
      const {
        params: { userId },
        body: { email, username, password, displayName },
        session,
      } = req

      if (userId !== session.user.id) {
        hasAccess(req.session, "ADMIN")
      }

      const user = await User.query().findById(userId).throwIfNotFound()

      let passwordHash
      let passwordSalt

      if (password) {
        const [hash, salt] = hashPassword(password)

        passwordHash = hash
        passwordSalt = salt
      }

      const updatedUser = await user
        .$query()
        .patch({
          email,
          username,
          displayName,
          passwordHash,
          passwordSalt,
          updatedAt: new Date(),
        })
        .returning("*")

      res.send({ result: updatedUser, count: 1 })
    },
  ],
})

export default camus
