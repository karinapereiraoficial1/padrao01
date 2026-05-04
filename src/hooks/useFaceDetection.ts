"use client";
import { useCallback, useRef } from "react";

// Retorna a proporção (0–1) do ponto mais baixo do rosto detectado + margem.
// Se não detectar rosto, retorna 0.58 como fallback conservador.
export function useFaceDetection() {
  const modelsLoaded = useRef(false);

  const detectSafeZone = useCallback(
    async (imageDataUrl: string): Promise<number> => {
      // Importação dinâmica para evitar SSR
      const faceapi = await import("face-api.js");

      if (!modelsLoaded.current) {
        await faceapi.nets.tinyFaceDetector.loadFromUri(
          "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights"
        );
        modelsLoaded.current = true;
      }

      // Cria elemento de imagem temporário
      const img = new Image();
      img.src = imageDataUrl;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
      });

      const detections = await faceapi.detectAllFaces(
        img,
        new faceapi.TinyFaceDetectorOptions({ inputSize: 320 })
      );

      if (detections.length === 0) {
        // Sem rosto detectado — usa 58% como zona segura padrão
        return 0.58;
      }

      // Pega o rosto mais proeminente (maior área)
      const mainFace = detections.reduce((prev, curr) =>
        curr.box.area > prev.box.area ? curr : prev
      );

      const { y, height } = mainFace.box;
      // Fundo do rosto como proporção da altura total + 8% de margem
      const faceBottomRatio = (y + height) / img.naturalHeight;
      const safeZoneStart = Math.min(faceBottomRatio + 0.08, 0.88);

      return safeZoneStart;
    },
    []
  );

  return { detectSafeZone };
}
