"use client";
import { CardContent } from "@/types/carousel";

interface Props {
  card: CardContent;
  coverImage: string;
}

export default function Card1Cover({ card, coverImage }: Props) {
  return (
    <div className="relative overflow-hidden" style={{ width: 1080, height: 1350 }}>
      {/* IMAGEM */}
      <img
        src={coverImage}
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* OVERLAY (legibilidade) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* TOP ZONE (0% - 18%) */}
      <div className="absolute top-0 left-0 w-full h-[18%] px-[10%] pt-[6%] flex items-start">
        <h1 className="text-white text-[64px] leading-[1.1] max-w-[80%] font-semibold">
          {card.title}
        </h1>
      </div>

      {/* SAFE ZONE (18% - 82%) */}
      {/* NÃO COLOCAR NADA AQUI */}

      {/* BOTTOM ZONE (82% - 100%) */}
      <div className="absolute bottom-0 left-0 w-full h-[18%] px-[10%] pb-[6%] flex items-end">
        <p className="text-white text-[36px] leading-[1.4] max-w-[80%]">
          {card.subtitle}
        </p>
      </div>
    </div>
  );
}
