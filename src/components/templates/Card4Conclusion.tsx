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
      style={{
        width: 1080,
        height: 1350,
        background: backgroundImage ? undefined : "#111111",
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
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[145px] text-center gap-8">
        {card.emoji && (
          <p style={{ fontSize: 48 }}>{card.emoji}</p>
        )}

        <p
          className="text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 75,
            lineHeight: "60px",
            textShadow: "0px 4px 1px rgba(0,0,0,0.7)",
          }}
        >
          {card.title}
        </p>

        {/* Gray underline */}
        <div
          style={{
            width: 173,
            height: 7,
            borderRadius: 4,
            backgroundColor: "#d9d9d9",
          }}
        />

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
