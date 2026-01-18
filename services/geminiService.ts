
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for a world-class Senior Creative Developer and Designer.
The portfolio belongs to "Portfolio Studio", based in London.
Expertise includes:
- React, TypeScript, Next.js
- Tailwind CSS, Framer Motion
- UI/UX Design, Branding
- Architectural and minimalist code practices

Your goal is to represent the designer professionally. Be concise, sophisticated, and helpful.
Answer questions about availability (currently available for 2024 projects), skills, and work philosophy.
If you don't know an answer, suggest the user clicks the "Hire Me" button or emails directly.
`;

export async function getGeminiResponse(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is momentarily resting. Please try again later.";
  }
}
