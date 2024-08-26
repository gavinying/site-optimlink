"use server";

import { z } from "zod";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { EmailTemplate } from "@/components/optimlink/EmailTemplate";
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

async function saveToGoogleSheets(name: string, email: string, request: string) {
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
      CreatedAt: new Date().toISOString(),
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
      subject: "We got your enquiry",
      text: "Thanks for your interest!",
      react: EmailTemplate({ name: name, request: request }),
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
  const [googleSheetsResult, emailResult] = await Promise.all([
    saveToGoogleSheets(name, email, request),
    sendAckEmail(name, email, request),
  ]);
  return {
    message: "Message sent."
  }
}
