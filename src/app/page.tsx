"use client";
import { useState, useRef } from "react";
import { CarouselContent } from "@/types/carousel";
import CarouselPreview from "@/components/CarouselPreview";
import { useFaceDetection } from "@/hooks/useFaceDetection";

export default function Home() {
  const [theme, setTheme] = useState("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [safeZoneRatio, setSafeZoneRatio] = useState<number>(0.60);
  const [detecting, setDetecting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<CarouselContent | null>(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { detectSafeZone } = useFaceDetection();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (ev) => {
      const dataUrl = ev.target?.result as string;
      setCoverImage(dataUrl);
      setContent(null);

      // Detecta rosto e calcula zona segura
      setDetecting(true);
      try {
        const ratio = await detectSafeZone(dataUrl);
        setSafeZoneRatio(ratio);
      } catch {
        setSafeZoneRatio(0.60);
      } finally {
        setDetecting(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!theme.trim()) {
      setError("Digite o tema do carrossel.");
      return;
    }
    if (!coverImage) {
      setError("Adicione uma foto para a capa.");
      return;
    }
    setError("");
    setLoading(true);
    setContent(null);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme }),
    });

    if (!res.ok) {
      setError("Erro ao gerar conteúdo. Verifique a chave da API.");
      setLoading(false);
      return;
    }

    const data = await res.json();
    setContent(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-8 py-5 flex items-center gap-3">
        <span className="text-2xl">✨</span>
        <h1 className="text-xl font-semibold tracking-tight">
          Fazedor de Carrossel
        </h1>
        <span className="ml-auto text-xs text-white/30">by Karina + Claude</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
          <div>
            <label className="block text-sm text-white/60 mb-2">
              Tema do carrossel
            </label>
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              placeholder="Ex: inteligência artificial, produtividade, mindset..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-white/60 mb-2">
              Foto da capa (Card 1)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center cursor-pointer hover:border-purple-500 transition"
            >
              {coverImage ? (
                <div className="relative inline-block">
                  <img
                    src={coverImage}
                    alt="capa"
                    className="h-40 mx-auto object-cover rounded-lg"
                  />
                  {detecting && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                      <p className="text-xs text-white">Detectando rosto...</p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-white/40 text-sm">
                  Clique para escolher uma foto
                </p>
              )}
            </div>
            {coverImage && !detecting && (
              <p className="text-xs text-white/30 mt-1">
                Zona segura detectada: texto inicia em {Math.round(safeZoneRatio * 100)}% da altura
              </p>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            onClick={handleGenerate}
            disabled={loading || detecting}
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-semibold text-lg transition"
          >
            {loading ? "Gerando carrossel..." : detecting ? "Analisando foto..." : "Gerar carrossel ✨"}
          </button>
        </div>

        {content && (
          <div className="mt-16">
            <h2 className="text-lg font-semibold mb-8 text-center text-white/80">
              Carrossel: <span className="text-white">{content.theme}</span>
            </h2>
            <CarouselPreview content={content} coverImage={coverImage} safeZoneRatio={safeZoneRatio} />
          </div>
        )}
      </div>
    </main>
  );
}
