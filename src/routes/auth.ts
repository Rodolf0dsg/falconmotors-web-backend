import { Router } from "express";
import { google } from "googleapis";

const router = Router();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const scopes = [
  "https://www.googleapis.com/auth/gmail.send",
  "https://www.googleapis.com/auth/calendar.events"
];

// Ruta para iniciar autorización con la pantalla de consentimiento oauth
router.get("/auth", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent", // solo la primera vez //TODO: quitar
    scope: scopes,
  });
  res.redirect(url);
});

//El codigo recibido lo imprimimos en la consola del backend //TODO: quitar esto luego de la primera generada
router.get("/oauth2callback", async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code as string);
  console.log("Access Token:", tokens.access_token);
  console.log("Refresh Token:", tokens.refresh_token);
  res.send("Tokens generados, revisa la consola");
});

//TODO: Colocar la nueva ruta en el server

export default router;