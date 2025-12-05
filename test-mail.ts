import dotenv from "dotenv";
dotenv.config();

import { getTransporter } from "./src/controllers/transporter";


async function testMail() {
  const transporter = await getTransporter();
  const info = await transporter.sendMail({
    from: `"Falcon Motors" <${process.env.MAIL_SENDER}>`,
    to: 'fororus12@gmail.com',
    subject: "Prueba OAuth2",
    text: "Este es un correo de prueba con OAuth2",
  });
  console.log("Mensaje enviado:", info.messageId);
}

testMail().catch(console.error);