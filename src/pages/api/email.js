import "dotenv/config"
//import makeEndpoint from "@/web/services/makeEndPoints"
import nodemailer from "nodemailer"

// const handler = makeEndpoint({
//   POST: [
//     async (req, res) => {
//       const emailRes = await sendEmail(req.body)

//       if (emailRes.messageId) {
//         return res.status(200).json({ message: `Email sent successfuly` })
//       }
//     },
//   ],
// })

// export default handler

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

  // const emailDetails = {
  //   from: "me@provider.com",
  //   replyTo: "maybeYou@provider.com",
  //   to: "you@provider.com",
  //   subject: "why code no work",
  //   text: "certified dummy moment",
  //   html: "This is a certified noob moment as well",
  // }

  const emailDetails = {
    from: `${req.body.email}`,
    replyTo: `${req.body.lastName} <${req.body.email}>`,
    to: "your.email@provider.com",
    subject: `Message from ${req.body.name}`,
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
