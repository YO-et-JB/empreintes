import "dotenv/config"
import nodemailer from "nodemailer"

const emailSender = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
  console.log(req.body)

  const emailDetails = {
    from: `${req.body.email}`,
    replyTo: `${req.body.lastName} <${req.body.email}>`,
    to: "your.email@provider.com",
    subject: `Message from ${req.body.firstName} ${req.body.lastName}`,
    text: `${req.body.message} | Sent from ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  }
  console.log("details", emailDetails)

  await new Promise((resolve, reject) => {
    transporter.sendMail(emailDetails, function (err, info) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })

  res.status(200)
  res.send("Success!")
}

export default emailSender
