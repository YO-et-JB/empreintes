import makeEndpoint from "../makeEndpoint"
import multer from "multer"

const multer = multer()

const upload = makeEndpoint({
  POST: [
    upload.single("avatar"),
    async (req, res) => {
      console.log(req.file)

      res.send("OK")
    },
  ],
})

export default upload
