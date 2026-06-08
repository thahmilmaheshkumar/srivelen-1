function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function buildEnquiryEmailHtml({ name, phone, email, location, service, message }) {
  const safe = {
    name: escapeHtml(name),
    phone: escapeHtml(phone),
    email: escapeHtml(email),
    location: escapeHtml(location),
    service: escapeHtml(service),
    message: escapeHtml(message),
  };

  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry - SRI VELAN</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f3f4f6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(6, 78, 59, 0.12);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #064E3B 0%, #0F9D58 50%, #22C55E 100%); padding: 36px 32px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #DCFCE7; font-weight: 600;">
                SRI VELAN
              </p>
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                New Website Enquiry
              </h1>
              <p style="margin: 12px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.85);">
                A customer has submitted a new enquiry form
              </p>
            </td>
          </tr>

          <!-- Service badge -->
          <tr>
            <td style="padding: 28px 32px 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <span style="display: inline-block; background-color: #DCFCE7; color: #064E3B; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 999px; border: 1px solid #22C55E;">
                      ${safe.service}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Customer details -->
          <tr>
            <td style="padding: 24px 32px 8px;">
              <h2 style="margin: 0 0 16px; font-size: 18px; color: #064E3B; font-weight: 700;">
                Customer Details
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 16px; background-color: #f9fafb; width: 130px; font-size: 13px; font-weight: 700; color: #6b7280; border-bottom: 1px solid #e5e7eb;">
                    Name
                  </td>
                  <td style="padding: 14px 16px; font-size: 15px; color: #1F2937; font-weight: 600; border-bottom: 1px solid #e5e7eb;">
                    ${safe.name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 16px; background-color: #f9fafb; font-size: 13px; font-weight: 700; color: #6b7280; border-bottom: 1px solid #e5e7eb;">
                    Phone
                  </td>
                  <td style="padding: 14px 16px; font-size: 15px; border-bottom: 1px solid #e5e7eb;">
                    <a href="tel:${safe.phone}" style="color: #0F9D58; text-decoration: none; font-weight: 600;">${safe.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 16px; background-color: #f9fafb; font-size: 13px; font-weight: 700; color: #6b7280; border-bottom: 1px solid #e5e7eb;">
                    Email
                  </td>
                  <td style="padding: 14px 16px; font-size: 15px; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${safe.email}" style="color: #0F9D58; text-decoration: none; font-weight: 600;">${safe.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 16px; background-color: #f9fafb; font-size: 13px; font-weight: 700; color: #6b7280;">
                    Location
                  </td>
                  <td style="padding: 14px 16px; font-size: 15px; color: #1F2937;">
                    ${safe.location}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 16px 32px 28px;">
              <h2 style="margin: 0 0 12px; font-size: 18px; color: #064E3B; font-weight: 700;">
                Message
              </h2>
              <div style="background: linear-gradient(180deg, #DCFCE7 0%, #f0fdf4 100%); border-left: 4px solid #0F9D58; border-radius: 12px; padding: 20px 22px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #1F2937; white-space: pre-wrap;">${safe.message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding: 0 32px 32px; text-align: center;">
              <a href="mailto:${safe.email}?subject=Re:%20Your%20SRI%20VELAN%20Enquiry%20-%20${encodeURIComponent(service)}"
                 style="display: inline-block; background: linear-gradient(135deg, #0F9D58, #22C55E); color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: 999px; box-shadow: 0 8px 20px rgba(15, 157, 88, 0.35);">
                Reply to Customer
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #064E3B; padding: 24px 32px; text-align: center;">
              <p style="margin: 0 0 6px; font-size: 14px; font-weight: 700; color: #DCFCE7;">
                SRI VELAN Surveying Solutions
              </p>
              <p style="margin: 0 0 8px; font-size: 12px; color: rgba(220, 252, 231, 0.8);">
                Satellite (DGPS) &amp; Digital Land Surveying
              </p>
              <p style="margin: 0; font-size: 11px; color: rgba(220, 252, 231, 0.6);">
                Received on ${submittedAt} (IST)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
