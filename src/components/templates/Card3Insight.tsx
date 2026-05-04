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
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.62)" }} />
        </>
      )}

      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 108px" }}
      >
        {/* Emoji */}
        {card.emoji && (
          <p style={{ fontSize: 64, lineHeight: 1, marginBottom: 56 }}>{card.emoji}</p>
        )}

        {/* Título — "Agora eu entendo:" */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 72,
            lineHeight: "85px",
            color: "#ffffff",
            letterSpacing: "-1px",
            marginBottom: 40,
          }}
        >
          {card.title}
        </p>

        {/* Separador */}
        <div
          style={{
            width: 200,
            height: 3,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.9)",
            marginBottom: 48,
          }}
        />

        {/* Insight principal */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 40,
            lineHeight: "62px",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.2px",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
