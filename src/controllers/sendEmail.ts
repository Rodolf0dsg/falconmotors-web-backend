import { makeMessage } from "../helpers/makeMessage";
import { gmail } from "../google/gmailClient";


export async function sendEmailAPI(name: string, email: string, message: string) {
  const rawMessage = makeMessage(
    process.env.MAIL_SENDER!,
    process.env.MAIL_SENDER!,
    `IMPORTANTE: mensaje de ${name}`,
    `<p><b>Nombre:</b> ${name}</p>
     <p><b>Email:</b> ${email}</p>
     <p>${message}</p>`
  );

  const response = await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw: rawMessage },
  });

  return {
    id: response.data.id,
    threadId: response.data.threadId,
  };
}