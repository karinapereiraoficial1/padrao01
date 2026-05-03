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
      {/* Background image */}
      <img
        src={coverImage}
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover"
        crossOrigin="anonymous"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Top-right title */}
      <div className="absolute top-[135px] right-[93px] text-right">
        <p
          className="text-white leading-[55px] tracking-[-3.2px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: 64,
          }}
        >
          {card.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      {/* Italic keyword */}
      <div className="absolute top-[268px] right-[93px] text-right">
        <p
          className="text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 69,
            lineHeight: "40px",
          }}
        >
          {card.subtitle}
        </p>
      </div>

      {/* White underline bar */}
      <div
        className="absolute bg-white"
        style={{
          top: 316,
          right: 93,
          width: 241,
          height: 9,
          borderRadius: 4,
        }}
      />

      {/* Swipe hint */}
      <div className="absolute bottom-[160px] right-[93px] text-right">
        <p
          className="text-white"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 100,
            fontSize: 36,
            lineHeight: "38px",
            letterSpacing: "-0.72px",
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          {card.body.split(" ").slice(0, 2).join(" ")}
          <br />
          {card.body.split(" ").slice(2, 5).join(" ")}
          <br />
          {card.body.split(" ").slice(5).join(" ")}
        </p>
      </div>

      {/* Arrow indicator */}
      <div
        className="absolute bg-white"
        style={{
          bottom: 148,
          right: 140,
          width: 55,
          height: 5,
          borderRadius: 4,
        }}
      />
    </div>
  );
}
