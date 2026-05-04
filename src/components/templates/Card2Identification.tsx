"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  backgroundImage?: string;
}

// Sistema tipográfico:
//   Body    → Montserrat Light  40px / lh 1.55
//   Display → Playfair Italic Bold  88px / lh 1.15
// Espaçamento em grid de 8px

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
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.58)" }} />
        </>
      )}

      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ padding: "0 108px" }}
      >
        {/* Corpo — identificação com o leitor */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 40,
            lineHeight: "62px",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.2px",
            marginBottom: 56,
          }}
        >
          {card.body}
        </p>

        {/* Separador sutil */}
        <div
          style={{
            width: 56,
            height: 2,
            borderRadius: 1,
            backgroundColor: "rgba(255,255,255,0.22)",
            marginBottom: 48,
          }}
        />

        {/* Destaque — palavra/frase de impacto */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: 88,
            lineHeight: "101px",
            color: "#ae00b1",
            letterSpacing: "-1.5px",
            textShadow: "0 0 48px rgba(174,0,177,0.25)",
          }}
        >
          {card.highlightWord}
        </p>
      </div>
    </div>
  );
}
