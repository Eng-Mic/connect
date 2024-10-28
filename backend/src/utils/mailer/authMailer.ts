import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';


// Creating email transporter
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    port: Number(process.env.MAIL_PORT),
    secure: Boolean(process.env.MAIL_SECURE),
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
    }
});


// Function to send verification email
export const sendVerificationEmail = async (userEmail: string, userName: string, verificationUrl: string) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'YourAppName',
      link: 'https://yourappdomain.com/', // The link to your app's website
      logo: 'https://yourappdomain.com/logo.png', // Optional logo
    },
  });

  // Construct the email body
  const emailBody = mailGenerator.generate({
    body: {
      name: userName,
      intro: `Welcome to Connect! We're excited to have you on board.`,
      action: {
        instructions: 'To get started, please confirm your email address by clicking the button below:',
        button: {
          color: '#22BC66', // Optional button color
          text: 'Verify Your Email',
          link: verificationUrl, // Link to your email verification endpoint
        },
      },
      outro: 'Needless to remind you not to share this link with anyone 🤫.If you did not create an account with us, please ignore this email.',
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.MAIL_EMAI, // Connect email address
    to: userEmail,
    subject: 'Verify Your Email Address',
    html: emailBody,
  };

  // Send email using Nodemailer
  await transporter.sendMail(mailOptions);
};


// Function to send password reset request email
export const sendPasswordResetRequestEmail = async (userEmail: string, userName: string, passwordResetUrl: string) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'YourAppName',
      link: 'https://yourappdomain.com/', // The link to your app's website
      logo: 'https://yourappdomain.com/logo.png', // Optional logo
    },
  });

  // Construct the email body
  const emailBody = mailGenerator.generate({
    body: {
      name: userName,
      intro: `Welcome again to Connect! We're excited to have you on board.`,
      action: {
        instructions: 'To reset your password, please click the button below:',
        button: {
          color: '#22BC66', // Optional button color
          text: 'Reset Password',
          link: passwordResetUrl, // Link to your email password reset endpoint
        },
      },
      outro: 'Thank you for being part of the family.',
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email address
    to: userEmail,
    subject: 'Password Reset Request',
    html: emailBody,
  };

  // Send email using Nodemailer
  await transporter.sendMail(mailOptions);
};
