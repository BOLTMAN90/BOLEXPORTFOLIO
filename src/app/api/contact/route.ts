import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaWeb3Forms(
  accessKey: string,
  name: string,
  email: string,
  message: string
) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New portfolio message from ${name}`,
      from_name: name,
      email,
      message,
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    throw new Error(data.message ?? "Web3Forms delivery failed.");
  }
}

async function sendViaGmail(name: string, email: string, message: string) {
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!gmailUser || !gmailPass) {
    throw new Error("GMAIL_NOT_CONFIGURED");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: gmailUser, pass: gmailPass },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: `"BOLEXMAN Portfolio" <${gmailUser}>`,
    to: TO_EMAIL,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join("\n"),
    html: `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();

    if (web3Key) {
      await sendViaWeb3Forms(web3Key, name.trim(), email.trim(), message.trim());
    } else {
      try {
        await sendViaGmail(name.trim(), email.trim(), message.trim());
      } catch (gmailError) {
        const err = gmailError as { code?: string; message?: string };
        if (err.code === "EAUTH" || err.message?.includes("GMAIL_NOT_CONFIGURED")) {
          return NextResponse.json(
            {
              error: `Email could not be sent. Please email ${siteConfig.email} directly, or ask the site owner to add a Web3Forms access key.`,
            },
            { status: 503 }
          );
        }
        throw gmailError;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: `Failed to send message. Please email ${siteConfig.email} directly.`,
      },
      { status: 500 }
    );
  }
}
