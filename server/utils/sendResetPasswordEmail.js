const sendEmail = require('./sendEmail');

const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
    // link to frontend

    // const resetURL = `${origin}/user/reset-password?token=${token}&email=${email}`;
    // const message = `<p>Please reset password clicking the following link :
    //  <a href="${resetURL}">Reset Password</a></p>`;

    // postman
    const message = `Please reset email with : ${token}`;

    return sendEmail({
        to: email,
        subject: 'Reset Password',
        html: `<h4>Hello ${name},</h4> ${message}`,
    });
};

module.exports = sendResetPasswordEmail;
