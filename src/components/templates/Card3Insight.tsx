"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  backgroundImage?: string;
}

export default function Card3Insight({ card, backgroundImage }: Props) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1350, backgroundColor: "#0a0a0a" }}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.60)" }} />
        </>
      )}

      {/* Conteúdo no terço inferior-central */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 96px" }}
      >
        {/* Emoji */}
        {card.emoji && (
          <p style={{ fontSize: 56, marginBottom: 40, lineHeight: 1 }}>{card.emoji}</p>
        )}

        {/* Headline itálica — "Agora eu entendo:" */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 70,
            lineHeight: "76px",
            color: "#ffffff",
            letterSpacing: "-0.5px",
            marginBottom: 32,
          }}
        >
          {card.title}
        </p>

        {/* Separador */}
        <div style={{ width: 200, height: 6, borderRadius: 3, backgroundColor: "#ffffff", marginBottom: 40 }} />

        {/* Corpo — insight */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 38,
            lineHeight: "54px",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.1px",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
