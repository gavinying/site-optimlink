"use server";

import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Resend } from "resend";

const CHECKLIST_EN_DOWNLOAD_URL = "https://drive.google.com/file/d/17NiL_sjkjGjpa09rnVags3tp_gRtTa5S/view?usp=sharing";
const CHECKLIST_CN_DOWNLOAD_URL = "https://drive.google.com/file/d/1VLcvfpeFG5ihkfhMl25ZCT_jDamtWjbc/view?usp=sharing";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email(),
  request: z.string(),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    request?: string[];
  };
  message?: string | null;
};

async function saveToGoogleSheets(
  name: string,
  email: string,
  request: string
) {
  try {
    const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

    const jwt = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: SCOPES,
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID as string,
      jwt
    );
    await doc.loadInfo();

    if (!doc.sheetsByIndex.length) {
      throw new Error("No sheets found in the Google Spreadsheet");
    }

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Name: name,
      Email: email,
      Request: request,
      CreatedAt: new Date().toLocaleString("en-SG", {
        timeZone: "Asia/Singapore",
      }),
    });

    console.log("User info saved to Google Sheets.");
  } catch (error) {
    console.error("Failed to save user info:", error);
    return false;
  }
  return true;
}

async function sendAckEmail(name: string, email: string, request: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Optimlink <welcome@it.optimlink.com>",
      to: [
        email,
        // "delivered@resend.dev",
        // "bounced@resend.dev",
        // "complained@resend.dev"
      ],
      subject: "Welcome to Optimlink! We've Received Your Inquiry",
      // Plain text version
      text: `
        Hi ${name},

        Welcome to OptimLink! We're thrilled to have you onboard.

        We've received your request: "${request}"

        Our team will reach out to you shortly to discuss the next steps.

        Best regards,
        The OptimLink Team
      `,
      // HTML version
      html: `
        <html>
        <body>
          <p>Hi ${name},</p>
          <p>Welcome to <strong>OptimLink</strong>! We're thrilled to have you onboard.</p>
          <p>We've received your request:</p>
          <p><em>"${request}"</em></p>
          <p>Our team will reach out to you shortly to discuss the next steps.</p>
          <p>Best regards,<br/>The OptimLink Team</p>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Failed to send Ack email:", error);
      return false;
    }

    console.log("Ack email sent to:", email);
  } catch (error) {
    console.error("Failed to send Ack email:", error);
    return false;
  }
  return true;
}

async function sendChecklistEmail(name: string, email: string, request: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Optimlink <welcome@it.optimlink.com>",
      to: [
        email,
      ],
      subject: "Welcome to Optimlink! Here is your free PDPA Checklist.",
      // Plain text version
      text: `
        Hi ${name},

        Welcome to OptimLink! We're thrilled to have you onboard.

        Here is the PDPA checklist for downloading: ${CHECKLIST_EN_DOWNLOAD_URL}
        If you cannot click the link, copy the above URL and open it in your browser.

        Please contact our team if you need further assistance.

        Best regards,
        The OptimLink Team
      `,
      // HTML version
      html: `
        <html>
        <body>
          <p>Hi ${name},</p>
          <p>Welcome to <strong>OptimLink</strong>! We're thrilled to have you onboard.</p>
          <p>Here is the PDPA checklist for downloading: <a href="${CHECKLIST_EN_DOWNLOAD_URL}">Link</a></p>
          <p>If you cannot click the link, copy the following URL and open it in your browser:</p>
          <p>${CHECKLIST_EN_DOWNLOAD_URL}</p>
          <p>Please contact our team if you need further assistance.</p>
          <p>Best regards,<br/>The OptimLink Team</p>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Failed to send Checklist email:", error);
      return false;
    }

    console.log("Checklist email sent to:", email);
  } catch (error) {
    console.error("Failed to send Checklist email:", error);
    return false;
  }
  return true;
}

async function sendChecklistCNEmail(name: string, email: string, request: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Optimlink <welcome@it.optimlink.com>",
      to: [
        email,
      ],
      subject: "欢迎来到Optimlink! 这是免费的PDPA检查表.",
      // Plain text version
      text: `
        您好! ${name},

        欢迎来到Optimlink! 我们很高兴看到你加入!

        请从这里下载PDPA检查表: ${CHECKLIST_CN_DOWNLOAD_URL}
        如果你不能点击链接，请复制下面的网址，并在浏览器中打开。

        如果你有进一步的需要，请联系我们团队。

        致礼,
        OptimLink团队
      `,
      // HTML version
      html: `
        <html>
        <body>
          <p>您好! ${name},</p>
          <p>欢迎来到 <strong>OptimLink</strong>! 我们很高兴看到你加入!</p>
          <p>请从这里下载PDPA检查表: <a href="${CHECKLIST_CN_DOWNLOAD_URL}">Link</a></p>
          <p>如果你不能点击链接，请复制下面的网址，并在浏览器中打开。</p>
          <p>${CHECKLIST_CN_DOWNLOAD_URL}</p>
          <p>如果你有进一步的需要，请联系我们团队。</p>
          <p>致礼,<br/>OptimLink团队</p>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Failed to send Checklist(CN) email:", error);
      return false;
    }

    console.log("Checklist(CN) email sent to:", email);
  } catch (error) {
    console.error("Failed to send Checklist(CN) email:", error);
    return false;
  }
  return true;
}

export async function processForm(prevState: State, formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    request: formData.get("request"),
  };
  console.log(rawFormData);

  // If form validation fails, return errors early. Otherwise, continue.
  const validatedFields = ContactFormSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to send message.",
    };
  }
  console.log("Data validated.");

  // Prepare data for insertion into the database
  const { name, email, request } = validatedFields.data;
  saveToGoogleSheets(name, email, request);
  if(request.includes("PDPA Checklist")) {
    sendChecklistEmail(name, email, request);
  }
  else if (request.includes("PDPA检查表")) {
    sendChecklistCNEmail(name, email, request);
  }
  else {
    sendAckEmail(name, email, request);
  }
  return {
    message: "Message sent.",
  };
}
