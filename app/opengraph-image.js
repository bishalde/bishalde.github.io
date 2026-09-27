import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Bishal De – Software Engineer at Twilio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card (LinkedIn, X, WhatsApp, Slack…), rendered at build time.
export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), "app/_og/portrait.jpg"));
  const src = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0c0c0c", color: "#f5f5f5" }}>
        <img src={src} alt="" width={630} height={630} style={{ objectFit: "cover" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", flex: 1 }}>
          <div style={{ fontSize: 26, color: "#fb923c", letterSpacing: 4, textTransform: "uppercase" }}>Portfolio</div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, lineHeight: 1, marginTop: 20, letterSpacing: -4 }}>
            Bishal De<span style={{ color: "#fb923c" }}>.</span>
          </div>
          <div style={{ fontSize: 34, marginTop: 28, color: "#d4d4d4", lineHeight: 1.3 }}>
            Software Engineer at Twilio
          </div>
          <div style={{ fontSize: 26, marginTop: 12, color: "#8a8a8a", lineHeight: 1.4 }}>
            Full-Stack · ML / Gen-AI · DevOps & Observability
          </div>
          <div style={{ fontSize: 24, marginTop: 40, color: "#8a8a8a" }}>bishalde.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
