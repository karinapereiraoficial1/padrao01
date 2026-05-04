"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  coverImage: string;
  safeZoneRatio?: number; // 0–1: onde o texto pode começar (abaixo do rosto)
}

export default function Card1Cover({ card, coverImage, safeZoneRatio = 0.60 }: Props) {
  const cardH = 1350;
  const cardW = 1080;
  const safeTop = Math.round(cardH * safeZoneRatio);
  const textZoneH = cardH - safeTop; // altura disponível para texto

  // Escala as fontes proporcionalmente ao espaço disponível
  const scale = Math.min(1, textZoneH / 480);
  const titleSize = Math.round(54 * scale);
  const subtitleSize = Math.round(46 * scale);
  const hintSize = Math.round(26 * scale);
  const paddingH = 88;
  const paddingBottom = Math.round(64 * scale);

  return (
    <div
      style={{
        position: "relative",
        width: cardW,
        height: cardH,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Foto */}
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

      {/* Gradiente — começa 15% acima do safe zone */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${Math.max(0, (safeZoneRatio - 0.18) * 100)}%`,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.96) 65%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* ZONA DE TEXTO — ancorada abaixo do rosto detectado */}
      <div
        style={{
          position: "absolute",
          top: safeTop,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: `0 ${paddingH}px ${paddingBottom}px ${paddingH}px`,
          gap: 0,
        }}
      >
        {/* Headline */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: titleSize,
            lineHeight: `${Math.round(titleSize * 1.15)}px`,
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: 0,
            marginBottom: Math.round(12 * scale),
          }}
        >
          {card.title}
        </p>

        {/* Subheadline itálica */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: subtitleSize,
            lineHeight: `${Math.round(subtitleSize * 1.12)}px`,
            color: "rgba(255,255,255,0.88)",
            margin: 0,
            marginBottom: Math.round(20 * scale),
          }}
        >
          {card.subtitle}
        </p>

        {/* Separador */}
        <div
          style={{
            width: 160,
            height: 5,
            borderRadius: 3,
            backgroundColor: "#fff",
            marginBottom: Math.round(20 * scale),
          }}
        />

        {/* Swipe hint + seta */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: hintSize,
              lineHeight: `${Math.round(hintSize * 1.35)}px`,
              color: "rgba(255,255,255,0.65)",
              margin: 0,
              flex: 1,
            }}
          >
            {card.body}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <div style={{ width: 36, height: 3, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.6)" }} />
            <div style={{
              width: 0, height: 0,
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
