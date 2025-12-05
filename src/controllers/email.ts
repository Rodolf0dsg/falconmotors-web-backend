
import { Request, Response } from "express";
import { getTransporter } from "./transporter";

export const sendEmail = async(req: Request, res: Response) => {
    try {
    const { name, email, message } = req.body;
    console.log({ name, email, message });
    
    const transporter = await getTransporter();

    const info = await transporter.sendMail({
      from: `"Contacto Falcon Motors" <${process.env.MAIL_SENDER}>`,
      to: process.env.MAIL_SENDER,
      replyTo: email,
      subject: `IMPORTANTE: mensaje de ${name}`,
      html: `
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "No se pudo enviar el correo" });
  }
}