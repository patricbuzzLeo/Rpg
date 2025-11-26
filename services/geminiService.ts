
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
  // AI functionality removed. Returning random fallback commentary.
  return FALLBACK_COMMENTARY[Math.floor(Math.random() * FALLBACK_COMMENTARY.length)];
};
