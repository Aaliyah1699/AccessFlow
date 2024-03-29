const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
    name,
    email,
    verificationToken,
    origin,
}) => {
    // TODO: Front-end
    // const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;

    // const message = `<p>Please confirm your email by clicking the following link :
    //  <a href="${verifyEmail}">Verify Email</a>
    //   </p>`;

    // Postman
    const message = `Please confirm email with token : ${verificationToken}`;

    return sendEmail({
        to: email,
        subject: 'Email Confirmation',
        html: `<h4>Hello ${name}, </h4> ${message}`,
    });
};

module.exports = sendVerificationEmail;
