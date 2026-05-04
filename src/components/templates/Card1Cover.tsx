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

      {/* OVERLAY (legibilidade) — gradiente mais forte na base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* SAFE ZONE (0% - 82%) */}
      {/* NÃO COLOCAR NADA AQUI */}

      {/* BOTTOM ZONE: subtitle acima, headline ancorada na base */}
      <div
        className="absolute bottom-0 left-0 w-full px-[10%] flex flex-col justify-end gap-[24px]"
        style={{ paddingBottom: 100 }}
      >
        <p className="text-white/75 text-[36px] leading-[1.5] max-w-[80%]">
          {card.subtitle}
        </p>
        <h1 className="text-white text-[64px] leading-[1.15] max-w-[85%] font-semibold">
          {card.title}
        </h1>
      </div>
    </div>
  );
}
