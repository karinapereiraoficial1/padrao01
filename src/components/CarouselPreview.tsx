"use client";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { CarouselContent } from "@/types/carousel";
import Card1Cover from "./templates/Card1Cover";
import Card2Identification from "./templates/Card2Identification";
import Card3Insight from "./templates/Card3Insight";
import Card4Conclusion from "./templates/Card4Conclusion";

interface Props {
  content: CarouselContent;
  coverImage: string;
}

const SCALE = 0.25;

export default function CarouselPreview({ content, coverImage }: Props) {
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const downloadCard = async (index: number) => {
    const ref = cardRefs[index].current;
    if (!ref) return;
    // Aguarda imagens carregarem antes de capturar
    await Promise.all(
      Array.from(ref.querySelectorAll("img")).map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((r) => { img.onload = r; img.onerror = r; })
      )
    );
    const png = await toPng(ref, {
      pixelRatio: 1,
      cacheBust: true,
      skipFonts: false,
    });
    const a = document.createElement("a");
    a.href = png;
    a.download = `card-${index + 1}-${content.theme}.png`;
    a.click();
  };

  const downloadAll = async () => {
    for (let i = 0; i < 4; i++) {
      await downloadCard(i);
    }
  };

  const cards = [
    <Card1Cover key={0} card={content.cards[0]} coverImage={coverImage} />,
    <Card2Identification key={1} card={content.cards[1]} />,
    <Card3Insight key={2} card={content.cards[2]} />,
    <Card4Conclusion key={3} card={content.cards[3]} />,
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Cards preview grid */}
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              style={{
                width: 1080 * SCALE,
                height: 1350 * SCALE,
                overflow: "hidden",
                borderRadius: 8,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  transform: `scale(${SCALE})`,
                  transformOrigin: "top left",
                  width: 1080,
                  height: 1350,
                }}
              >
                <div ref={cardRefs[i]}>{card}</div>
              </div>
            </div>
            <button
              onClick={() => downloadCard(i)}
              className="text-sm px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition"
            >
              Baixar Card {i + 1}
            </button>
          </div>
        ))}
      </div>

      {/* Download all */}
      <div className="flex justify-center">
        <button
          onClick={downloadAll}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition text-lg"
        >
          Baixar todos os 4 cards (PNG)
        </button>
      </div>
    </div>
  );
}
