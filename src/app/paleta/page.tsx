import type { Metadata } from "next";
import { PALETTE_BY_KEY, COMBOS, byTier, type PaletteColor } from "@/styles/palette";

export const metadata: Metadata = {
  title: "Padrão Atelier '26 — Paleta",
  description: "Paleta de tendência de moda 26/27 para os carrosséis.",
};

const TIERS = [
  {
    tier: "neutro" as const,
    label: "Neutros",
    share: "60%",
    note: "A base. Fundo, respiro e tipografia. Se a peça parecer poluída, aumente esta faixa.",
  },
  {
    tier: "ancora" as const,
    label: "Âncoras",
    share: "30%",
    note: "Profundidade e blocos de cor. Beringela é o novo preto da temporada.",
  },
  {
    tier: "acento" as const,
    label: "Acentos",
    share: "10%",
    note: "Um acento por peça. Dois acentos saturados juntos anulam um ao outro.",
  },
];

function Swatch({ color }: { color: PaletteColor }) {
  const onLight = color.readableOn.includes("egret");
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-atelier-areia/40">
      <div
        className="flex h-32 items-end p-4"
        style={{ backgroundColor: color.hex }}
      >
        <span
          className="font-mono text-xs uppercase tracking-widest"
          style={{ color: onLight ? "#F4EFE7" : "#181318" }}
        >
          {color.hex}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 bg-atelier-egret p-4">
        <h3 className="font-display text-xl text-atelier-tinta">{color.name}</h3>
        <p className="text-xs leading-relaxed text-atelier-underworld">{color.origin}</p>
        <p className="mt-auto pt-2 text-sm leading-relaxed text-atelier-espresso">
          {color.usage}
        </p>
      </div>
    </article>
  );
}

function ComboCard({
  name,
  mood,
  background,
  text,
  accent,
  ratio,
  accentRatio,
  accentSafeForSmallText,
}: (typeof COMBOS)[number]) {
  const bg = PALETTE_BY_KEY[background];
  const fg = PALETTE_BY_KEY[text];
  const ac = PALETTE_BY_KEY[accent];

  return (
    <article className="overflow-hidden rounded-sm border border-atelier-areia/40">
      {/* proporção 4:5 — o mesmo enquadramento de um card 1080×1350 */}
      <div
        className="flex aspect-4/5 flex-col justify-end gap-5 p-8"
        style={{ backgroundColor: bg.hex }}
      >
        {/* O acento entra como bloco de cor: é assim que ele funciona numa peça
            de moda — filete, chip, marca — e não como texto pequeno. */}
        <div className="h-2 w-20 rounded-full" style={{ backgroundColor: ac.hex }} />
        <p
          className="font-display text-3xl italic leading-tight"
          style={{ color: fg.hex }}
        >
          {name}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: fg.hex, opacity: 0.72 }}>
          Acento: {ac.name}
        </p>
      </div>
      <div className="flex flex-col gap-2 bg-atelier-egret p-4">
        <p className="text-sm leading-relaxed text-atelier-espresso">{mood}</p>
        <p className="font-mono text-xs leading-relaxed text-atelier-underworld">
          {bg.name} · {fg.name} · {ac.name}
          <br />
          texto {ratio} · acento {accentRatio}
        </p>
        {!accentSafeForSmallText && (
          <p className="text-xs leading-relaxed text-atelier-toffee">
            Este acento só passa em texto grande sobre este fundo — use como bloco,
            filete ou ícone.
          </p>
        )}
      </div>
    </article>
  );
}

export default function PaletaPage() {
  return (
    <main className="min-h-full bg-atelier-egret px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <header className="flex flex-col gap-6 border-b border-atelier-areia pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-atelier-underworld">
            Temporada 26/27
          </p>
          <h1 className="font-display text-5xl italic leading-tight text-atelier-tinta md:text-7xl">
            Padrão Atelier &rsquo;26
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-atelier-espresso">
            Paleta destilada de três referências: as cores de passarela reunidas por{" "}
            <strong className="font-semibold">@fashionweek</strong>, a Americana elevada de{" "}
            <strong className="font-semibold">@tommyhilfiger</strong> e os neutros quentes de{" "}
            <strong className="font-semibold">@victoriabeckham</strong>. Dezessete cores,
            três faixas de uso, contrastes conferidos em WCAG&nbsp;2.1.
          </p>
        </header>

        {TIERS.map(({ tier, label, share, note }) => (
          <section key={tier} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline gap-4">
                <h2 className="font-display text-3xl text-atelier-tinta">{label}</h2>
                <span className="font-mono text-sm text-atelier-tomate">{share}</span>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-atelier-underworld">
                {note}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {byTier(tier).map((color) => (
                <Swatch key={color.key} color={color} />
              ))}
            </div>
          </section>
        ))}

        <section className="flex flex-col gap-8 border-t border-atelier-areia pt-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-3xl text-atelier-tinta">Combinações prontas</h2>
            <p className="max-w-2xl text-base leading-relaxed text-atelier-underworld">
              Seis looks fechados no enquadramento 4:5 do carrossel. Cada um já passa em
              contraste — é só escolher e aplicar.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMBOS.map((combo) => (
              <ComboCard key={combo.name} {...combo} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 border-t border-atelier-areia pt-12">
          <h2 className="font-display text-3xl text-atelier-tinta">Como usar</h2>
          <ul className="flex max-w-3xl list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-atelier-espresso">
            <li>
              <strong>Um acento por peça.</strong> Tomate e Cobalto nunca no mesmo
              enquadramento — competem e cancelam o foco.
            </li>
            <li>
              <strong>Beringela no lugar do preto.</strong> É o neutro de poder da temporada
              e diferencia o feed de qualquer template padrão.
            </li>
            <li>
              <strong>Nunca #000 nem #fff puros.</strong> Tinta e Egret carregam sub-tom — é o
              que dá o acabamento editorial.
            </li>
            <li>
              <strong>Fundos de foto:</strong> aplique Tinta ou Beringela a 55–65% de opacidade
              sobre a imagem antes do texto, como já fazem os cards 2, 3 e 4.
            </li>
          </ul>
          <p className="font-mono text-xs leading-relaxed text-atelier-underworld">
            Tokens: <code>src/styles/palette.ts</code> · CSS vars{" "}
            <code>--atelier-*</code> · utilitários Tailwind <code>bg-atelier-*</code>,{" "}
            <code>text-atelier-*</code>, <code>border-atelier-*</code>
          </p>
        </section>
      </div>
    </main>
  );
}

export const dynamic = "force-static";
