import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  const { theme } = await req.json();

  if (!theme) {
    return NextResponse.json({ error: "Tema é obrigatório" }, { status: 400 });
  }

  const prompt = `Você é um especialista em criação de conteúdo para Instagram no estilo reflexivo/motivacional.
Crie o conteúdo para um carrossel de 4 cards sobre o tema: "${theme}".

O carrossel segue este padrão narrativo:
- Card 1 (capa): Gancho — uma frase que desperta curiosidade, com uma palavra-chave que resume o tema
- Card 2: Identificação — uma situação com que o leitor se identifica, com uma frase de destaque em itálico
- Card 3: Virada — o momento de insight/entendimento
- Card 4: Conclusão — a mensagem final com call-to-action implícito

Responda APENAS com JSON válido neste formato exato:
{
  "cards": [
    {
      "title": "frase gancho em 2 linhas curtas",
      "subtitle": "uma palavra que define o tema (ex: reflexão, verdade, mudança)",
      "highlightWord": "",
      "body": "frase menor de incentivo para passar o slide (ex: Passa para o lado para entender)",
      "emoji": ""
    },
    {
      "title": "",
      "subtitle": "",
      "highlightWord": "2 a 4 palavras de destaque em itálico (a parte mais impactante)",
      "body": "frase de identificação com o leitor em 2-3 linhas",
      "emoji": ""
    },
    {
      "title": "Agora eu entendo:",
      "subtitle": "",
      "highlightWord": "",
      "body": "insight principal sobre o tema em 2 linhas",
      "emoji": "1-2 emojis relevantes"
    },
    {
      "title": "frase conclusiva impactante em 2 linhas",
      "subtitle": "",
      "highlightWord": "",
      "body": "reforço da mensagem principal em 2 linhas",
      "emoji": "1-2 emojis"
    }
  ]
}

Escreva em português brasileiro. Tom: reflexivo, autêntico, sem clichês.`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    return NextResponse.json(
      { error: "Falha ao gerar conteúdo" },
      { status: 500 }
    );
  }

  const content = JSON.parse(jsonMatch[0]);
  return NextResponse.json({ theme, ...content });
}
