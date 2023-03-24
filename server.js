const express = require('express')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')

const app = express()

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.post('send-email', (req, res) => {
    const {name, email, message} = req.body

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'msherwood.matt@gmail.com',
            pass: 'Bettasigma101o!'
        }
    })

    const mailOptions = {
        from: email,
        to: 'recipient-email@example.com',
        subject: 'New Content Form Submission',
        html: '<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            res.send('Error: somthing went wrong')
        }
        else {
            console.log('Email sent' + info.response)
            res.send('Message sent successfully')
        }
    })
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})