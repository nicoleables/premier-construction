const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { fullName, phoneNumber, email, address, preferredDate, help } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ablesnicole55@gmail.com',
        pass: 'Nrariley5',
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'ablesnicole@icloud.com',
      subject: 'New Quote Request',
      text: `New quote request from ${fullName}, Phone: ${phoneNumber}, Email: ${email}, Address: ${address}, Preferred Date: ${preferredDate}, Help: ${help}`,
    };

    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};


