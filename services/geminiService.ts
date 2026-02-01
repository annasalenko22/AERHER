
import { GoogleGenAI, Type } from "@google/genai";
import { NarrativeResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateRawNarrative = async (prompt: string): Promise<NarrativeResponse> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a raw, gritty, noir or transgressive fiction piece based on this prompt: "${prompt}". Focus on visceral details, intense atmosphere, and unflinching dialogue. Do not shy away from the dark edges of humanity, but maintain literary quality.`,
    config: {
      temperature: 1,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          content: { type: Type.STRING },
          metadata: {
            type: Type.OBJECT,
            properties: {
              intensity: { type: Type.NUMBER },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
          }
        },
        required: ["content"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}");
  } catch (e) {
    return { content: response.text || "Error generating content." };
  }
};

export const analyzeSiteLayout = async (url: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As an expert web architect and UI forensic analyst, describe how one would replicate the exact aesthetic, layout, and user experience of a site like ${url}. Focus on font pairings, color hex codes (approximated), spacing hierarchies, and interaction patterns. This is for educational UI research.`,
  });
  return response.text || "Analysis unavailable.";
};
