import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "VH Multiservices — Votre vision, notre mission";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0D2D6B 0%, #0a1628 55%, #1a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              color: "#fff",
              letterSpacing: 2,
            }}
          >
            <span>V</span>
            <span style={{ color: "#E82020" }}>H</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 8,
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
            }}
          >
            Multiservices
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 940,
            }}
          >
            Votre partenaire multiservices de confiance
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {`« ${siteConfig.slogan} »`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.phoneDisplay}</div>
          <div style={{ display: "flex", color: "#E82020", fontWeight: 700 }}>
            {`${siteConfig.legalForm} — ${siteConfig.country}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
