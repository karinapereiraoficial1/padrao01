"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  coverImage: string;
}

// Fixed 3-zone grid (never interpretive):
//  TOP    0%–25%  → headline (text allowed)
//  MIDDLE 25%–75% → image/face area — NO TEXT
//  BOTTOM 75%–100%→ subtitle + swipe hint (text allowed)

export default function Card1Cover({ card, coverImage }: Props) {
  const W = 1080;
  const H = 1350;
  const PH = Math.round(W * 0.08); // 86px horizontal padding (8%)

  const topH = H * 0.25;        // 337px — TOP ZONE ends here
  const bottomStart = H * 0.75; // 1012px — BOTTOM ZONE starts here
  const bottomPB = Math.round(H * 0.05); // 67px bottom padding

  return (
    <div style={{ position: "relative", width: W, height: H, overflow: "hidden", backgroundColor: "#000" }}>
      {/* Full-bleed image */}
      <img
        src={coverImage}
        alt="cover"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />

      {/* Top scrim — readability for TOP ZONE */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: topH,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%)",
      }} />

      {/* Bottom scrim — readability for BOTTOM ZONE */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: H - bottomStart + Math.round(H * 0.12),
        background: "linear-gradient(to top, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0) 100%)",
      }} />

      {/* TOP ZONE (0–25%): headline */}
      <div style={{
        position: "absolute",
        top: 0,
        left: PH,
        right: PH,
        height: topH,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: 52,
          lineHeight: "60px",
          letterSpacing: "-1px",
          color: "#ffffff",
          margin: 0,
        }}>
          {card.title}
        </p>
      </div>

      {/* BOTTOM ZONE (75–100%): separator + subtitle + swipe hint */}
      <div style={{
        position: "absolute",
        top: bottomStart,
        bottom: 0,
        left: PH,
        right: PH,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: bottomPB,
        gap: 18,
      }}>
        <div style={{ width: 120, height: 4, borderRadius: 2, backgroundColor: "#ffffff" }} />

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 40,
          lineHeight: "48px",
          color: "rgba(255,255,255,0.9)",
          margin: 0,
        }}>
          {card.subtitle}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 24,
            lineHeight: "34px",
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            flex: 1,
          }}>
            {card.body}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <div style={{ width: 36, height: 3, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.6)" }} />
            <div style={{
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderLeft: "12px solid rgba(255,255,255,0.6)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
