import { Router } from "express";
import { sendEmailAPI } from "../controllers/sendEmail";

const router = Router();

router.post("/send", async (req, res) => {
  try {
    
    const { name, email, message } = req.body;

    const result = await sendEmailAPI(name, email, message);
    
    res.status(200).json({
      data: result,
      ok: true,
    });
    
  } catch (error: any) {
    console.error("Error enviando correo:", error);
    console.error("Detalles:", JSON.stringify(error, null, 2));

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});


export default router;