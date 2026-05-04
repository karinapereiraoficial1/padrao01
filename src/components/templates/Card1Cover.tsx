"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  coverImage: string;
}

// Zona segura: texto ocupa APENAS os 38% inferiores do card.
// A foto fica nos 62% superiores — rosto nunca coberto.
const SAFE_ZONE_START = 0.62; // 62% do topo é área da foto

export default function Card1Cover({ card, coverImage }: Props) {
  const cardH = 1350;
  const safeTop = Math.round(cardH * SAFE_ZONE_START); // 837px

  return (
    <div
      style={{
        position: "relative",
        width: 1080,
        height: cardH,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* FOTO — ocupa 100% mas o rosto fica nos primeiros 62% */}
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

      {/* GRADIENTE de transição — suave, começa em 45% */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "45%",
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.96) 60%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* ZONA DE TEXTO — começa em safeTop, nunca sobe acima disso */}
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
          padding: "0 88px 72px 88px",
          gap: 0,
        }}
      >
        {/* Headline */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 54,
            lineHeight: "62px",
            letterSpacing: "-1px",
            color: "#ffffff",
            margin: 0,
            marginBottom: 14,
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
            fontSize: 46,
            lineHeight: "50px",
            color: "rgba(255,255,255,0.88)",
            margin: 0,
            marginBottom: 22,
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
            marginBottom: 24,
          }}
        />

        {/* Swipe hint + seta */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: 26,
              lineHeight: "34px",
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
