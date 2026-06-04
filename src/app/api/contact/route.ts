import { NextResponse } from "next/server";

/**
 * Point d'entrée du formulaire de contact.
 * Branchez ici votre logique d'envoi (email transactionnel, CRM, base de
 * données...). Pour l'instant, la requête est validée puis journalisée.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, service, message } = data ?? {};

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // TODO: intégrer un service d'envoi (Resend, Nodemailer, etc.)
    console.info("[contact] nouvelle demande:", {
      name,
      phone,
      email,
      service,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }
}
