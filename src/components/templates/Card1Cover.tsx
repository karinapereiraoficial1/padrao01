"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  coverImage: string;
}

export default function Card1Cover({ card, coverImage }: Props) {
  return (
    <div
      className="relative overflow-hidden bg-black"
      style={{ width: 1080, height: 1350 }}
    >
      {/* Foto — object-position top para rosto aparecer no topo */}
      <img
        src={coverImage}
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Gradient suave no topo — só para dar respiro visual */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)",
        }}
      />

      {/* Gradient forte na base — safe zone do texto */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "48%",
          background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* BLOCO DE TEXTO — 100% na zona segura (base) */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ padding: "0 96px 88px 96px" }}
      >
        {/* Headline */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: 62,
            lineHeight: "68px",
            letterSpacing: "-1.5px",
            color: "#ffffff",
            marginBottom: 12,
          }}
        >
          {card.title}
        </p>

        {/* Subheadline — itálico, levemente menor */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 52,
            lineHeight: "54px",
            color: "rgba(255,255,255,0.90)",
            marginBottom: 24,
          }}
        >
          {card.subtitle}
        </p>

        {/* Separador */}
        <div style={{ width: 180, height: 6, borderRadius: 3, backgroundColor: "#ffffff", marginBottom: 28 }} />

        {/* Texto secundário + seta */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: 30,
              lineHeight: "38px",
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.2px",
              flex: 1,
            }}
          >
            {card.body}
          </p>
          {/* Seta → */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 24, flexShrink: 0 }}>
            <div style={{ width: 44, height: 3, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.7)" }} />
            <div style={{
              width: 0, height: 0,
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              borderLeft: "13px solid rgba(255,255,255,0.7)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
