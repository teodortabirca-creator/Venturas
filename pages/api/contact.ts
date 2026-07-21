import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodă nepermisă." });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      message: "Cheia Resend nu este configurată.",
    });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Completează numele, emailul și mesajul.",
    });
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Venturas Website <contact@venturas.ro>",
      to: ["contact@venturas.ro"],
      replyTo: email,
      subject: `Mesaj nou de la ${name}`,
      html: `
  <h2>Mesaj nou din formularul Venturas</h2>
  <p><strong>Nume:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Companie:</strong> ${company || "Nespecificată"}</p>
  <p><strong>Data:</strong> ${new Date().toLocaleString("ro-RO")}</p>
  <p><strong>Mesaj:</strong></p>
  <p>${message}</p>
`,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(400).json({
        message: error.message || "Resend nu a putut trimite emailul.",
      });
    }

    return res.status(200).json({
      message: "Mesajul a fost trimis cu succes.",
    });
  } catch (error) {
    console.error("API contact error:", error);

    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Mesajul nu a putut fi trimis.",
    });
  }
}