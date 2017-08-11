/**
 * Created by bagjeongtae on 2017. 8. 7..
 */
const nodemailer = require('nodemailer');
const {email, password} = require('../../config/EMAIL')["GMAIL"];
const jade = require('jade');

const filePath = __dirname + '/server/utils/email/temp.jade';

module.exports = ({toEmail, infos})=>{
    return new Promise( (resolve, reject) => {

        let transporter = nodemailer.createTransport({
            service:'Gmail',
            auth: {
                user: email,
                pass: password
            },
            host: 'smtp.gmail.com',
            port: "465",
            secure: false,
            ignoreTLS: false,
        });

        let mailOptions = {
            from :'pjt3591oo <' + email + '>',
            to: toEmail,
            subject: 'email 테스팅중',
            test: '안녕하세요',
            html: jade.renderFile(filePath, infos)
        };

        transporter.sendMail(mailOptions,  (err, info) => {
            if (err) {
                reject(err);
            }
            transporter.close();
            resolve()
        });
    });
}