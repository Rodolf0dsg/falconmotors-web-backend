export function makeMessage(to: string, from: string, subject: string, html: string) {
  const message =
    `From: ${from}\r\n` +
    `To: ${to}\r\n` +
    `Subject: ${subject}\r\n` +
    "Content-Type: text/html; charset=utf-8\r\n\r\n" +
    html;

  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}