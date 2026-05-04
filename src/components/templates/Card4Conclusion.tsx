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

      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 108px" }}
      >
        {/* Emoji */}
        {card.emoji && (
          <p style={{ fontSize: 72, lineHeight: 1, marginBottom: 64 }}>{card.emoji}</p>
        )}

        {/* Frase conclusiva */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 80,
            lineHeight: "92px",
            color: "#ffffff",
            letterSpacing: "-1.5px",
            marginBottom: 40,
          }}
        >
          {card.title}
        </p>

        {/* Separador */}
        <div
          style={{
            width: 120,
            height: 4,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.55)",
            marginBottom: 48,
          }}
        />

        {/* Reforço da mensagem */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 40,
            lineHeight: "62px",
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.2px",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
