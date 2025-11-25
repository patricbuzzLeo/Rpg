
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const FALLBACK_COMMENTARY = [
  "엄청난 전투가 벌어지고 있습니다! 🔥",
  "관중들이 환호합니다! 👏",
  "정말 믿을 수 없는 플레이군요! ⚡",
  "승부는 아직 알 수 없습니다! ⚔️",
  "강력한 한 방입니다! 💥",
  "숨막히는 접전입니다! 😰",
  "대단한 피지컬이네요! 💪",
  "아슬아슬한 순간이 계속됩니다! ⏱️",
  "전설적인 명경기가 탄생하나요? 🏆"
];

export const generateBattleCommentary = async (
  action: string,
  actor: string,
  target: string,
  result: string
): Promise<string> => {
  // If AI is not initialized (no key), return a random fallback immediately
  if (!ai) {
     return FALLBACK_COMMENTARY[Math.floor(Math.random() * FALLBACK_COMMENTARY.length)];
  }

  try {
    const prompt = `
      상황: 브롤스타즈 게임 중입니다.
      행동: ${actor}가 ${target}에게 ${action}을(를) 했습니다.
      결과: ${result}.
      
      이 상황에 대해 브롤스타즈 e스포츠 해설자처럼 아주 짧고, 흥분되며, 재미있는 한국어 멘트 한 문장을 만들어주세요. 
      이모지를 1개 이상 사용하세요.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error: any) {
    // Gracefully handle Quota Exceeded (429) or other API errors
    const isQuotaError = 
      error.status === 429 || 
      error.code === 429 || 
      (error.message && error.message.includes('429')) ||
      (error.message && error.message.includes('quota'));

    if (isQuotaError) {
       console.warn("Gemini API Quota Exceeded. Switching to fallback commentary.");
    } else {
       console.error("Gemini API Error (using fallback):", error);
    }
    
    // Return random fallback
    return FALLBACK_COMMENTARY[Math.floor(Math.random() * FALLBACK_COMMENTARY.length)];
  }
};
