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
      style={{
        width: 1080,
        height: 1350,
        background: backgroundImage ? undefined : "#1a1a2e",
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
      <div className="absolute inset-0 bg-black/40" />

      {/* Body text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[145px] text-center">
        <p
          className="text-white mb-6"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 40,
            lineHeight: "47px",
            textShadow: "0px 4px 4px rgba(0,0,0,0.5)",
          }}
        >
          {card.body}
        </p>

        {/* Highlight word */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: 75,
            lineHeight: "40px",
            color: "#ae00b1",
            textShadow:
              "0px 4px 4px rgba(255,255,255,0.2), 0px 4px 4px rgba(0,0,0,0.5)",
          }}
        >
          {card.highlightWord}
        </p>
      </div>
    </div>
  );
}
