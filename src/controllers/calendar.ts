// controllers/calendar.ts
import { Request, Response } from "express";
import { google } from "googleapis";

const calendar = google.calendar("v3");

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { date, time, clientName, contact, notes } = req.body;

    // Autenticación con OAuth2
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN ?? null,
    });

    // Construcción de fecha/hora en formato RFC3339
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    // Evento con recordatorios
    const event = {
      summary: `Cliente: ${clientName} | Contacto: ${contact}`,
      description: notes,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/Caracas",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "America/Caracas",
      },
      attendees: [
        { email: process.env.MAIL_SENDER ?? null }, // correo donde se crea el evento
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "popup", minutes: 0 },
          { method: "email", minutes: 0 },
          { method: "popup", minutes: 1440 },
          { method: "email", minutes: 1440 },
          { method: "popup", minutes: 2880 },
        ],
      },
    };

    // Insertar evento en Google Calendar
    const responseEvent = await calendar.events.insert({
      auth: oAuth2Client,
      calendarId: "primary",
      requestBody: event,
    });

    res.status(200).json({
      message: "Evento creado exitosamente",
      eventLink: responseEvent.data.htmlLink,
    });
  } catch (error: any) {
    console.error("Error creando evento:", error);

    // Extraer mensaje de error de Google si existe
    const message =
      error?.response?.data?.error?.message ||
      error?.message ||
      "No se pudo crear el evento";

    res.status(500).json({ error: message });
  }
};