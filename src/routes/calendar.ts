// routes/calendar.ts
import { Router } from "express";
import { createEventAPI } from "../controllers/createEventAPI";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const { date, time, clientName, contact, notes, service } = req.body;

    const result = await createEventAPI(date, time, clientName, contact, notes, service);

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