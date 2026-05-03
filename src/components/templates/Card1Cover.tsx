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
      {/* Background image — sem crossOrigin para data URLs funcionarem no export */}
      <img
        src={coverImage}
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Gradiente suave no topo */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "25%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Gradiente forte na base — cobre os 55% inferiores */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "55%",
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* TEXTO — todo na metade inferior, abaixo do rosto */}
      <div className="absolute bottom-0 left-0 right-0 px-[80px] pb-[80px] flex flex-col gap-4">
        {/* Título */}
        <p
          className="text-white leading-[62px] tracking-[-2px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 68,
          }}
        >
          {card.title.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </p>

        {/* Palavra em itálico */}
        <p
          className="text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 62,
            lineHeight: "58px",
          }}
        >
          {card.subtitle}
        </p>

        {/* Barra branca */}
        <div className="bg-white" style={{ width: 200, height: 7, borderRadius: 4 }} />

        {/* Swipe hint */}
        <div className="flex items-center justify-between mt-2">
          <p
            className="text-white/80"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: 32,
              lineHeight: "40px",
              letterSpacing: "-0.3px",
            }}
          >
            {card.body}
          </p>
          {/* Seta → */}
          <div className="flex items-center gap-2 ml-4">
            <div className="bg-white/80" style={{ width: 48, height: 3, borderRadius: 4 }} />
            <div style={{
              width: 0, height: 0,
              borderTop: "9px solid transparent",
              borderBottom: "9px solid transparent",
              borderLeft: "15px solid rgba(255,255,255,0.8)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
