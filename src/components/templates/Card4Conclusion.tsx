"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  backgroundImage?: string;
}

export default function Card4Conclusion({ card, backgroundImage }: Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1350, backgroundColor: "#080808" }}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />
        </>
      )}

      {/* Conteúdo centralizado */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 96px" }}
      >
        {/* Emoji */}
        {card.emoji && (
          <p style={{ fontSize: 56, marginBottom: 48, lineHeight: 1 }}>{card.emoji}</p>
        )}

        {/* Headline itálica — título conclusivo */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 76,
            lineHeight: "82px",
            color: "#ffffff",
            letterSpacing: "-1px",
            marginBottom: 36,
            textShadow: "0 4px 4px rgba(0,0,0,0.6)",
          }}
        >
          {card.title}
        </p>

        {/* Separador cinza */}
        <div style={{ width: 160, height: 6, borderRadius: 3, backgroundColor: "#d9d9d9", marginBottom: 40 }} />

        {/* Corpo — reforço da mensagem */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 36,
            lineHeight: "52px",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.1px",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
