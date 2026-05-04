"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  backgroundImage?: string;
}

export default function Card2Identification({ card, backgroundImage }: Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1350, backgroundColor: "#0d0d0d" }}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
        </>
      )}

      {/* Conteúdo centralizado verticalmente com grid de terços */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 96px" }}
      >
        {/* Bloco 1 — Texto de identificação (corpo) */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 38,
            lineHeight: "54px",
            color: "rgba(255,255,255,0.88)",
            marginBottom: 56,
            letterSpacing: "0.1px",
          }}
        >
          {card.body}
        </p>

        {/* Separador */}
        <div style={{ width: 60, height: 4, borderRadius: 2, backgroundColor: "rgba(255,255,255,0.3)", marginBottom: 40 }} />

        {/* Bloco 2 — Destaque em itálico (highlight) */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 80,
            lineHeight: "82px",
            color: "#ae00b1",
            letterSpacing: "-1px",
            textShadow: "0 4px 24px rgba(174,0,177,0.3)",
          }}
        >
          {card.highlightWord}
        </p>
      </div>
    </div>
  );
}
