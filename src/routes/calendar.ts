// routes/calendar.ts
import { Router } from "express";
import { createEventAPI } from "../controllers/createEventAPI";
import { sendEmailAPI } from "../controllers/sendEmail";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { date, time, clientName, contact, notes, service, vehicle } = req.body;

    const result = await createEventAPI(date, time, clientName, contact, notes, service, vehicle);
    
    try {
      
      const emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #007bff;">🚗 Nueva Cita Agendada</h2>
          <p>Se ha registrado una nueva cita en Google Calendar con los siguientes detalles:</p>
          <hr />
          <p><b>Vehículo:</b> ${vehicle}</p>
          <p><b>Servicio:</b> ${service}</p>
          <p><b>Fecha:</b> ${date} a las ${time}</p>
          <br />
          <p><b>Datos del Cliente:</b></p>
          <ul>
            <li><b>Nombre:</b> ${clientName}</li>
            <li><b>Contacto:</b> ${contact}</li>
          </ul>
          <p><b>Notas adicionales:</b><br /> ${notes || "Ninguna"}</p>
          <hr />
          <p style="font-size: 0.8em; color: #666;">Este es un mensaje automático enviado desde tu Backend.</p>
        </div>
      `;
  
      await sendEmailAPI(
        clientName, 
        contact, 
        emailHtml, 
        `Cita Mecanica: ${vehicle} - ${clientName}`
      );

    } catch (mailError) {
      console.error("Error al enviar el correo de notificación:", mailError)
    }

    res.status(200).json({
      ok: true,
      data: result,
    });
    
  } catch (error: any) {
    console.error("Error creando evento:", error);
    console.error("Detalles:", JSON.stringify(error, null, 2));

    res.status(500).json({
      ok: false,
      error: error.message || "Error desconocido",
    });
  }
});




export default router;