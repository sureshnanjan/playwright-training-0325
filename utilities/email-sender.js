// Email Sender with HTML Body and Attachments
// Using Node.js and Nodemailer

import { createTransport } from 'nodemailer';
import fs from 'fs';
import { join,dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Send an email with HTML body and attachments
 * @param {Object} options - Email options
 * @param {string} options.from - Sender email address
 * @param {string|string[]} options.to - Recipient email address(es)
 * @param {string} [options.cc] - CC recipients
 * @param {string} [options.bcc] - BCC recipients
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML body content
 * @param {string} [options.text] - Plain text version (fallback)
 * @param {Array} [options.attachments] - Array of attachment objects
 * @param {Object} smtpConfig - SMTP server configuration
 * @returns {Promise} - Resolves with info about the sent email
 */
async function sendEmail(options, smtpConfig) {
  // Create a transporter object using SMTP
  const transporter = createTransport(smtpConfig);
  
  // Verify connection configuration
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
  } catch (error) {
    console.error('SMTP connection verification failed:', error);
    throw new Error('Failed to connect to SMTP server');
  }
  
  // Set up email data
  const mailOptions = {
    from: options.from,
    to: options.to,
    cc: options.cc,
    bcc: options.bcc,
    subject: options.subject,
    text: options.text || '', // Plain text version (optional)
    html: options.html,       // HTML version
    attachments: options.attachments || []
  };
  
  // Send mail with defined transport object
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

/**
 * Example usage
 */ 
async function sendTestEmail() {
  // SMTP configuration
  // For Gmail, you might need to use an app password: https://support.google.com/accounts/answer/185833
  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'sureshnanjan6@gmail.com',
      pass: process.env.MY_GMAIL_PWD
    }
  };
  
  // HTML content for the email
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Test Email</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        .header {
          background-color: #f0f0f0;
          padding: 10px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
        }
        .footer {
          background-color: #f0f0f0;
          padding: 10px;
          text-align: center;
          border-radius: 0 0 5px 5px;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Our Newsletter</h1>
        </div>
        <div class="content">
          <h2>Hello there!</h2>
          <p>This is a test email sent using Nodemailer with HTML content.</p>
          <p>Here are some key points:</p>
          <ul>
            <li>This email has HTML formatting</li>
            <li>It includes styled content</li>
            <li>It has attachments</li>
          </ul>
          <p>Please check the attached files for more information.</p>
          <p><strong>Thank you!</strong></p>
        </div>
        <div class="footer">
          <p>This is an automated email. Please do not reply.</p>
          <p>© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  // Email options with attachments
  const emailOptions = {
    from: '"Suresh Nanjan" <sureshnanjan6@gmail.com>',
    to: 'nanjan.suresh@gmail.com',
    cc: 'cc-recipient@example.com',
    subject: 'Test Email with Attachments',
    text: 'This is a plain text version of the email for clients that do not support HTML',
    html: htmlContent,
    attachments: [
      {
        filename: 'report.pdf',
        path: join(__dirname, 'test-data/sample.pdf'),
        contentType: 'application/pdf'
      },
      {
        filename: 'image.png',
        path: join(__dirname, 'test-data/sample.png'),
        cid: 'unique-image-id' // Can be referenced in the HTML as <img src="cid:unique-image-id">
      },
      // Buffer example
      {
        filename: 'text-file.txt',
        content: Buffer.from('Hello world!'),
        contentType: 'text/plain'
      },
      // URL attachment
      {
        filename: 'license.txt',
        path: 'https://raw.githubusercontent.com/nodemailer/nodemailer/master/LICENSE'
      }
    ]
  };
  
  try {
    const info = await sendEmail(emailOptions, smtpConfig);
    console.log('Email sent successfully!');
    return info;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
//console.log(`file://${process.argv[1]}`)// Execute the example if this file is 
// run directly
//console.log(import.meta.url);
if (import.meta.url.endsWith('email-sender.js')) {
  // This is equivalent to require.main === module
  console.log('Running as a script');
     sendTestEmail()
    .then(info => console.log('Done!'))
    .catch(err => console.error('Error:', err));
}

export default { sendEmail };