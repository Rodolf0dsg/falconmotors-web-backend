import { calendar } from "../google/calendarClient";

export async function createEventAPI(date: string, time: string, clientName: string, contact: string, notes: string, service: string) {
const event = {
  summary: `Cita: ${service} con ${clientName}`,
  description: `Cliente: ${clientName}\nTeléfono: ${contact}\nNotas: ${notes}`,
  start: {
    dateTime: `${date}T${time}:00`,
    timeZone: "America/Caracas",
  },
  end: {
    dateTime: `${date}T${time}:00`,
    timeZone: "America/Caracas",
  },
  reminders: {
    useDefault: false,
    overrides: [
      { method: "popup", minutes: 0 },   
      { method: "email", minutes: 1440 },
      { method: "email", minutes: 120 }, 
      { method: "email", minutes: 30 },  
    ],
  },
};

  const response = await calendar.events.insert({
    calendarId: "primary",
    requestBody: event,
  });

  return {
    id: response.data.id,
    htmlLink: response.data.htmlLink,
  };
}