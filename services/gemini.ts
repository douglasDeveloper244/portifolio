
import { GoogleGenAI, Type } from "@google/genai";
import { USER_DATA } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAIResponse = async (userMessage: string) => {
  const prompt = `
    Aja como o assistente virtual do portfolio de ${USER_DATA.name}.
    Seu objetivo é responder perguntas de recrutadores ou clientes.
    Informações sobre o dono do portfolio:
    - Cargo: ${USER_DATA.role}
    - Bio: ${USER_DATA.bio}
    - Habilidades: ${USER_DATA.skills.map(s => s.name).join(', ')}
    - Experiência: ${USER_DATA.experience.map(e => `${e.role} na ${e.company}`).join(', ')}
    - Email: ${USER_DATA.email}
    - Localização: ${USER_DATA.location}

    Responda de forma profissional, amigável e concisa em Português.
    Se a pergunta não for sobre o dono do portfolio ou trabalho, educadamente redirecione para o tema profissional.
    Mensagem do usuário: "${userMessage}"
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40
      }
    });

    return response.text || "Desculpe, tive um problema ao processar sua pergunta.";
  } catch (error) {
    console.error("Erro na API Gemini:", error);
    return "Ocorreu um erro ao conectar com minha inteligência. Tente novamente mais tarde!";
  }
};
