/**
 * PADRÃO ATELIER '26
 * Paleta de tendência de moda destilada de três referências:
 *
 *   @fashionweek      → cores de passarela 26/27 (beringela, cobalto, tomate, oliva, fúcsia)
 *   @tommyhilfiger    → Americana elevada (navy + vermelho + branco, alfaiataria preppy)
 *   @victoriabeckham  → neutros quentes e tons profundos (creme, pêssego, espresso, borgonha)
 *
 * Regra de composição 60 / 30 / 10:
 *   60% NEUTROS  — respiro, fundo, tipografia
 *   30% ÂNCORAS  — blocos de cor, superfícies, profundidade
 *   10% ACENTOS  — destaque, CTA, uma cor por peça
 *
 * Contrastes conferidos em WCAG 2.1 (ver campo `contrast` de cada cor).
 */

export type PaletteTier = "neutro" | "ancora" | "acento";

export interface PaletteColor {
  /** chave estável usada em código e nas CSS custom properties */
  key: string;
  /** nome de exibição */
  name: string;
  hex: string;
  tier: PaletteTier;
  /** de onde a cor vem — perfil de referência e/ou autoridade de cor */
  origin: string;
  /** quando usar */
  usage: string;
  /** pares aprovados: texto legível sobre esta cor como fundo */
  readableOn: string[];
}

export const PALETTE: PaletteColor[] = [
  // ─────────────────────────── NEUTROS (60%) ───────────────────────────
  {
    key: "egret",
    name: "Egret",
    hex: "#F4EFE7",
    tier: "neutro",
    origin: "Pantone Egret (core FW26/27) · brancos suaves da @victoriabeckham SS26",
    usage: "Fundo principal claro. Substitui o branco puro — mais quente, menos clínico.",
    readableOn: ["tinta", "espresso", "navy", "beringela", "oliva", "poseidon"],
  },
  {
    key: "linho",
    name: "Linho",
    hex: "#E3D7C6",
    tier: "neutro",
    origin: "Neutros quentes @victoriabeckham (cream / knits)",
    usage: "Superfície secundária, cartões, divisórias sobre Egret.",
    readableOn: ["tinta", "espresso", "navy", "beringela"],
  },
  {
    key: "areia",
    name: "Areia",
    hex: "#C9B49B",
    tier: "neutro",
    origin: "Pantone Candied Ginger (core FW26/27)",
    usage: "Neutro médio. Bordas, ícones secundários, texto de apoio sobre fundo escuro.",
    readableOn: ["tinta", "espresso", "navy", "beringela"],
  },
  {
    key: "toffee",
    name: "Toffee",
    hex: "#8A6A4F",
    tier: "neutro",
    origin: "Pantone Toffee (core FW26/27)",
    usage: "Marrom atemporal. Texto grande sobre Egret (≥24px), detalhes de couro/madeira.",
    readableOn: ["egret", "linho"],
  },
  {
    key: "underworld",
    name: "Underworld",
    hex: "#6E6963",
    tier: "neutro",
    origin: "Pantone Underworld 17-4005 (core FW26/27)",
    usage: "Cinza de base. Legenda, metadado, texto terciário sobre Egret.",
    readableOn: ["egret", "linho"],
  },
  {
    key: "espresso",
    name: "Espresso",
    hex: "#3B2C24",
    tier: "neutro",
    origin: "Dark brown @victoriabeckham FW26",
    usage: "Texto de corpo sobre claro. Alternativa quente ao preto.",
    readableOn: ["egret", "linho", "areia", "pessego"],
  },
  {
    key: "tinta",
    name: "Tinta",
    hex: "#181318",
    tier: "neutro",
    origin: "Preto com viés de beringela — passarela FW26/27",
    usage: "Fundo escuro principal e títulos. Nunca #000 puro: guarda um sub-tom violeta.",
    readableOn: ["egret", "linho", "areia", "pessego", "argila"],
  },

  // ─────────────────────────── ÂNCORAS (30%) ───────────────────────────
  {
    key: "navy",
    name: "Navy Heritage",
    hex: "#02154E",
    tier: "ancora",
    origin: "Azul institucional @tommyhilfiger (constante desde 1985)",
    usage: "Âncora de autoridade. Blocos de cor, cabeçalhos, alfaiataria.",
    readableOn: ["egret", "linho", "areia", "pessego"],
  },
  {
    key: "poseidon",
    name: "Poseidon",
    hex: "#2F4E7E",
    tier: "ancora",
    origin: "Pantone Poseidon (core FW26/27) · veludos azuis @victoriabeckham FW26",
    usage: "Azul intermediário entre Navy e Cobalto. Superfície, gradiente, sombra colorida.",
    readableOn: ["egret", "linho", "areia", "pessego"],
  },
  {
    key: "beringela",
    name: "Beringela",
    hex: "#4A2340",
    tier: "ancora",
    origin: "Aubergine — o 'power neutral' declarado da temporada 26/27",
    usage: "O neutro de poder do ano. Use como faria com preto: fundo, bloco, moldura.",
    readableOn: ["egret", "linho", "areia", "pessego"],
  },
  {
    key: "oliva",
    name: "Oliva Queimada",
    hex: "#55522E",
    tier: "ancora",
    origin: "Pantone Burnt Olive 18-0521 (FW26/27) · military green @victoriabeckham",
    usage: "Terroso de contrapeso. Equilibra os acentos saturados sem apagá-los.",
    readableOn: ["egret", "linho", "areia", "pessego"],
  },

  // ─────────────────────────── ACENTOS (10%) ───────────────────────────
  {
    key: "tomate",
    name: "Vermelho Tomate",
    hex: "#D61233",
    tier: "acento",
    origin: "Vermelho @tommyhilfiger × 'tomato red' das passarelas SS26/FW26",
    usage: "Acento primário. CTA, palavra de destaque, um único ponto por peça.",
    readableOn: ["egret"],
  },
  {
    key: "cobalto",
    name: "Cobalto",
    hex: "#0E3FD1",
    tier: "acento",
    origin: "Cobalt blue — dominante em SS26 e FW26 (outerwear statement)",
    usage: "Acento frio de alto impacto. Nunca junto do Tomate no mesmo enquadramento.",
    readableOn: ["egret"],
  },
  {
    key: "argila",
    name: "Argila",
    hex: "#BE7A5F",
    tier: "acento",
    origin: "Pantone Muted Clay (FW26/27) · rusty brown @victoriabeckham Pre-Fall 26",
    usage: "Acento quente e discreto. Ótimo para texto de destaque sobre Tinta.",
    readableOn: ["tinta", "espresso", "navy"],
  },
  {
    key: "teal",
    name: "Teal Transformador",
    hex: "#1C7E84",
    tier: "acento",
    origin: "Transformative Teal — Cor do Ano 2026 (WGSN + Coloro, 092-37-14)",
    usage: "Acento contemporâneo. Sinaliza atualidade sem gritar. Par natural da Beringela.",
    readableOn: ["egret"],
  },
  {
    key: "fucsia",
    name: "Fúcsia Festival",
    hex: "#C0327F",
    tier: "acento",
    origin: "Pantone Festival Fuchsia (FW26/27)",
    usage: "Acento máximo de energia. Dose mínima: filete, ícone, uma palavra.",
    readableOn: ["egret"],
  },
  {
    key: "pessego",
    name: "Pêssego",
    hex: "#F0C3A8",
    tier: "acento",
    origin: "Soft peaches @victoriabeckham SS26",
    usage: "Acento claro. Texto de destaque e superfícies suaves sobre fundos escuros.",
    readableOn: ["tinta", "espresso", "navy", "beringela", "oliva", "poseidon"],
  },
];

/** Acesso por chave: PALETTE_BY_KEY.beringela.hex */
export const PALETTE_BY_KEY: Record<string, PaletteColor> = Object.fromEntries(
  PALETTE.map((c) => [c.key, c]),
);

/** Só os hex, para uso direto em style={{ color: HEX.tomate }} */
export const HEX: Record<string, string> = Object.fromEntries(
  PALETTE.map((c) => [c.key, c.hex]),
);

export const byTier = (tier: PaletteTier) => PALETTE.filter((c) => c.tier === tier);

/**
 * Combinações prontas — cada uma é um "look" completo, testado em contraste.
 * Pensadas para peças 1080×1350 (carrossel Instagram).
 */
export interface Combo {
  name: string;
  mood: string;
  background: string;
  text: string;
  accent: string;
  /** contraste texto/fundo em WCAG 2.1 */
  ratio: string;
  /** contraste acento/fundo em WCAG 2.1 */
  accentRatio: string;
  /**
   * `false` quando o acento só passa em texto grande (< 4.5:1) sobre este fundo.
   * Nesse caso use o acento como bloco de cor, filete ou ícone — nunca em texto pequeno.
   */
  accentSafeForSmallText: boolean;
}

export const COMBOS: Combo[] = [
  {
    name: "Atelier Claro",
    mood: "Editorial, arejado, luxo silencioso — a assinatura @victoriabeckham",
    background: "egret",
    text: "espresso",
    accent: "tomate",
    ratio: "11.67:1",
    accentRatio: "4.59:1",
    accentSafeForSmallText: true,
  },
  {
    name: "Passarela Noturna",
    mood: "Desfile à noite, contraste alto, foco na tipografia",
    background: "tinta",
    text: "egret",
    accent: "pessego",
    ratio: "16.02:1",
    accentRatio: "11.42:1",
    accentSafeForSmallText: true,
  },
  {
    name: "Heritage",
    mood: "Americana elevada, preppy e institucional — a assinatura @tommyhilfiger",
    background: "navy",
    text: "egret",
    accent: "tomate",
    ratio: "15.04:1",
    accentRatio: "3.27:1",
    accentSafeForSmallText: false,
  },
  {
    name: "Power Neutral",
    mood: "Beringela como novo preto: sofisticado, atual, sem esforço",
    background: "beringela",
    text: "egret",
    accent: "pessego",
    ratio: "11.43:1",
    accentRatio: "8.14:1",
    accentSafeForSmallText: true,
  },
  {
    name: "Terroso",
    mood: "Oliva e argila, roupa de trabalho refinada, outono 26",
    background: "oliva",
    text: "egret",
    accent: "areia",
    ratio: "6.97:1",
    accentRatio: "3.98:1",
    accentSafeForSmallText: false,
  },
  {
    name: "Statement",
    mood: "Cobalto puro, uma cor só, máximo impacto de feed",
    background: "cobalto",
    text: "egret",
    accent: "pessego",
    ratio: "6.92:1",
    accentRatio: "4.93:1",
    accentSafeForSmallText: true,
  },
];
