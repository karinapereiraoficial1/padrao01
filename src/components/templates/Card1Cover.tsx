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
        className="absolute inset-0 w-full h-full object-cover object-top"
        crossOrigin="anonymous"
      />

      {/* Top gradient — covers top 40% */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "45%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Bottom gradient — covers bottom 35% */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "38%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* TOP — title + subtitle + underline */}
      <div className="absolute top-[80px] left-0 right-0 px-[90px]">
        <p
          className="text-white leading-[58px] tracking-[-2px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 66,
          }}
        >
          {card.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <p
          className="text-white mt-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 62,
            lineHeight: "56px",
          }}
        >
          {card.subtitle}
        </p>

        {/* Underline bar */}
        <div
          className="bg-white mt-4"
          style={{ width: 220, height: 8, borderRadius: 4 }}
        />
      </div>

      {/* BOTTOM — swipe hint + arrow */}
      <div className="absolute bottom-[80px] left-0 right-0 px-[90px] flex items-center justify-between">
        <p
          className="text-white"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: 34,
            lineHeight: "42px",
            letterSpacing: "-0.5px",
            textShadow: "0px 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          {card.body}
        </p>

        {/* Arrow → */}
        <div className="flex flex-col items-center gap-1 ml-6">
          <div className="bg-white" style={{ width: 50, height: 4, borderRadius: 4 }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: "16px solid white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
