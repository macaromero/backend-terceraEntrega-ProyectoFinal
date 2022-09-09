const nodemailer = require('nodemailer');

const user = 'xander7@ethereal.email'
const pass = '63VkUWUN3WkpCpRY8u'

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: user,
        pass: pass,
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = {
    user,
    transporter
}