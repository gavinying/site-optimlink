"use server";

import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactFormSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
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

        Here is the PDPA checklist for downloading: Link
        If you cannot click the link, copy the following URL and open it in your browser,
        https://drive.google.com/file/d/1wMXWJgAQ7_jc-X53RWGJYXDUDFH9MRGe/view?usp=drive_link

        Please contact our team if you need further assistant.

        Best regards,
        The OptimLink Team
      `,
      // HTML version
      html: `
        <html>
        <body>
          <p>Hi ${name},</p>
          <p>Welcome to <strong>OptimLink</strong>! We're thrilled to have you onboard.</p>
          <p>Here is the PDPA checklist for downloading: <a href="https://drive.google.com/drive/u/0/folders/1ZkKBWSd11p1ag6En9_Q2ZiwLXAsZGjCL">Link</a></p>
          <p>If you cannot click the link, copy the following URL and open it in your browser:</p>
          <p>https://drive.google.com/drive/u/0/folders/1ZkKBWSd11p1ag6En9_Q2ZiwLXAsZGjCL</p>
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
  if(request.includes("free PDPA Checklist")) {
    sendChecklistEmail(name, email, request);
  }
  else {
    sendAckEmail(name, email, request);
  }
  return {
    message: "Message sent.",
  };
}
