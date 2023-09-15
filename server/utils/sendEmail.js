const nodemailer = require('nodemailer');

const sendEmail = async () => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ila.bode10@ethereal.email',
            pass: '6k5A1cxwS13XAeRDqg',
        },
    });

    const info = await transporter.sendMail({
        from: '"Shawn Michaels" <TheHeartbreakKid@example.com>', // sender address
        to: 'TheHitmanHart@example.com', 
        subject: 'Montreal Screwj ob', // Subject line
        text: 'My bad', // plain text body
        html: '<b>Sorry babes xoxo</b>', // html body
    });
};

module.exports = sendEmail;
