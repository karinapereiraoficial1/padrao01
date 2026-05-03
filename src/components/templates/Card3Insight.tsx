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
      style={{
        width: 1080,
        height: 1350,
        background: backgroundImage ? undefined : "#0d0d1a",
      }}
    >
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[145px] text-center gap-6">
        {card.emoji && (
          <p style={{ fontSize: 48 }}>{card.emoji}</p>
        )}

        {/* "Agora eu entendo:" header */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 64,
            lineHeight: "47px",
            color: "#ffffff",
            textShadow: "0px 4px 4px rgba(0,0,0,0.5)",
          }}
        >
          {card.title}
        </p>

        {/* White bar */}
        <div
          className="bg-white"
          style={{ width: 241, height: 9, borderRadius: 4 }}
        />

        {/* Insight body */}
        <p
          className="text-white"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 36,
            lineHeight: "50px",
            textShadow: "0px 4px 4px rgba(0,0,0,0.5)",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}
