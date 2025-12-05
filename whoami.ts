import dotenv from "dotenv";
dotenv.config();
import { google } from "googleapis";

async function whoami() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN! });

  const accessTokenResp = await oAuth2Client.getAccessToken();
  const accessToken = accessTokenResp?.token || "";

  const oauth2 = google.oauth2({
    auth: oAuth2Client,
    version: "v2",
  });

  const res = await oauth2.userinfo.get();
  console.log("Email del token:", res.data.email);
}

whoami().catch(console.error);