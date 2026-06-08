import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { buildEnquiryEmailHtml } from "../utils/emailTemplate.js";

dotenv.config();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

const getTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEnquiryEmail = async ({
  name,
  phone,
  email,
  location,
  service,
  message,
}) => {
  await getTransporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.COMPANY_EMAIL,
    subject: `New Enquiry - ${service} from ${name}`,
    text: [
      "New enquiry from SRI VELAN website",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Location: ${location}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: buildEnquiryEmailHtml({
      name,
      phone,
      email,
      location,
      service,
      message,
    }),
  });
};

// async function sendEnquiryEmail({
//   name,
//   phone,
//   email,
//   location,
//   service,
//   message,
// }) {
//   if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
//     throw new Error(
//       "Email service is not configured. Set SMTP_USER and SMTP_PASS in server/.env",
//     );
//   }

//   const companyEmail =
//     process.env.COMPANY_EMAIL || "srivelanconsultancy@gmail.com";

//   await getTransporter().sendMail({
//     from: {
//       name: "SRI VELAN Website",
//       address: process.env.SMTP_USER,
//     },
//     to: companyEmail,
//     replyTo: email,
//     subject: `New Enquiry - ${service} from ${name}`,
//     text: [
//       "New enquiry from SRI VELAN website",
//       "",
//       `Name: ${name}`,
//       `Phone: ${phone}`,
//       `Email: ${email}`,
//       `Location: ${location}`,
//       `Service: ${service}`,
//       "",
//       "Message:",
//       message,
//     ].join("\n"),
//     html: buildEnquiryEmailHtml({
//       name,
//       phone,
//       email,
//       location,
//       service,
//       message,
//     }),
//   });
// }

export const submitEnquiry = async (req, res) => {
  try {
    const { name, phone, email, location, service, message } = req.body;

    if (!name?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Name is required." });
    }
    if (!phone?.trim() || !phoneRegex.test(phone.replace(/\D/g, ""))) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid 10-digit phone number.",
      });
    }
    if (!email?.trim() || !emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a valid email address." });
    }
    if (!location?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Location is required." });
    }
    if (!service) {
      return res
        .status(400)
        .json({ success: false, message: "Please select a service." });
    }
    if (!message?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Message is required." });
    }

    await sendEnquiryEmail({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      location: location.trim(),
      service,
      message: message.trim(),
    });

    res.json({ success: true, message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Enquiry error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send enquiry. Please try again later.",
    });
  }
};
